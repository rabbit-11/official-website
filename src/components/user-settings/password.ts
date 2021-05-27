import { component, mixins } from "flagwind-web";
import "./password.scss";
import { CommonService } from "@/services";
import { autowired } from "@/annotations";
import { UserMixin } from "@/mixins/user-mixin";
import { PropSync } from "vue-property-decorator";

@component({
  template: require("./password.html"),
  components: {}
})
export default class PasswordModal extends mixins(UserMixin) {

  @autowired(CommonService)
  public commonService!: CommonService;

  @PropSync("visible", { type: Boolean, default: false })
  public show!: boolean;

  public rules: any = {
    oldPassword: [
      { required: true, message: "原密码不能为空", trigger: "blur" }
    ],
    password: [{ required: true, message: "请输入新密码", trigger: "blur" }],
    checkword: [
      { required: true, validator: this.passwordCheck, trigger: "blur" }
    ]
  };

  public user: any = { oldPassword: "", password: "", checkword: "" };

  public passwordCheck(value: any, callback: any) {
    if (value === "") {
      callback(new Error("请再次输入新密码"));
    } else if (value !== this.user.password) {
      callback(new Error("两次输入的密码不一致"));
    } else {
      callback();
    }
  }

  public onCancle() {
    this.show = false;
  }

  public onSubmit() {
    (<any>this.$refs.user).validate(async (valid: any) => {
      if (!valid) {
        this.$notice.warning({ title: "验证不通过" });
        return;
      }
      try {
        let result = await this.commonService.modifyPassword(
          this.user.oldPassword,
          this.user.password,
          this.$store.state.user.user.id
        );
        if (result.hasError) {
          this.$notice.error({ title: "修改密码失败，请重新尝试" });
          return;
        }
        this.$notice.success({ title: "修改密码成功" });
        this.show = false;
      } catch (error) {
        this.$notice.error({ title: "修改密码失败，请重新尝试" });
      }
    });
  }
}
