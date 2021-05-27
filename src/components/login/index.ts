import { component, Component, mixins } from "flagwind-web";
import "./index.scss";
import { CommonService } from "@/services";
import { autowired } from "@/annotations";
import { UserMixin } from "@/mixins/user-mixin";
@component({
  template: require("./index.html")
})
export default class LoginModal extends mixins(UserMixin) {

  @autowired(CommonService)
  public commonService!: CommonService;

  public user: any = { username: "", password: "" };
  public rules = {
    username: [{ required: true, message: "账号不能为空", trigger: "blur" }],
    password: [{ required: true, message: "请输入新密码", trigger: "blur" }]
  };
  public enter: boolean = false;

  // public get loginFlag() {
  //   return this.$store.state.userInfo.loginBtnlShow;
  // }

  // public get loginModleFlag() {
  //   return this.$store.state.userInfo.loginModlelShow;
  // }

  public showLoginModel() {
    this.$openLoginModal();
    // let tempFlag = this.$store.state.userInfo.updateLoginModal;
    // this.$store.commit("updateLoginModal", !tempFlag);
  }

  public onVisibleChange(e: any) {
    if (!e) {
      this.$closeLoginModal();
      // this.cancleLogin();
    }
  }

  public onCancel() {
    this.$closeLoginModal();
    // this.$store.commit("updateLoginModal", false);
  }

  public async onLogin() {
    (<any>this.$refs.user).validate(async (valid: any) => {
      if (!valid) {
        this.$notice.warning({ title: "验证不通过" });
        return;
      }
      try {
        let result = await this.commonService.login(
          this.user.username,
          this.user.password
        );
        if (result.error) {
          if (result.error === "invalid_grant") {
            this.$notice.error({ title: "无效的用户名或者密码" });
          } else {
            this.$notice.error({ title: "非法的用户名" });
          }
          return;
        }
        // this.$store.commit("updateLoginBtn", false);
        // this.$store.commit("updateLoginModal", false);
        // this.$store.commit("saveUser", result); //  设置登陆用户信息
        this.$store.commit("user/save", result);
        this.$closeLoginModal();
        (window as any).location.reload();
        if (localStorage.getItem("destinationPath")) {
          let name = localStorage.getItem("destinationPath") || "";
          localStorage.removeItem("destinationPath");
          if (name.indexOf("usercenter") > -1) {
            this.$router.push({ name, params: { id: result.user.userName } });
            return;
          }
          this.$router.push({ name });
        }
      } catch (error) {
        if (error && error.response && error.response.status === 401) {
          this.$notice.error({ title: "用户名或密码错误" });
        } else {
          this.$notice.error({ title: "调用服务异常" });
        }
      }
    });
  }
}
