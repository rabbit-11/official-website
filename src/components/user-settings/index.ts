import { component, mixins } from "flagwind-web";
import "./index.scss";
import { CommonService } from "@/services";
import { autowired } from "@/annotations";
import { UserMixin } from "@/mixins/user-mixin";
import PasswordModal from "./password";
@component({
  template: require("./index.html"),
  components: {
    "u-password-modal": PasswordModal
  }
})
export default class UserSettings extends mixins(UserMixin) {
  @autowired(CommonService)
  public commonService!: CommonService;

  public showPasswordModal: boolean = false;

  public mounted() {
    if (this.$username) {
      this.getUserInfo(this.$username);
    }
  }

  public async getUserInfo(name: any) {
    let tempInfo = await this.commonService.getUserInfo(name);
    this.$store.commit("user/save", tempInfo.result);
  }

  public onDropdownClick(name: string): void {
    switch (name) {
      case "password":
        (this.showPasswordModal = true), (this.$refs["user"] as any).resetFields();
        break;
      case "loginout":
        this.$store.commit("user/logout");
        this.$router.push({ name: "article" });
        break;
      // 将当前用户名作为id
      case "usercenter":
        // 如果已经登陆，则从cookies中获取username
        if (this.$username) {
          this.$router.push({ name, params: { id: this.$username } });
        } else {
          this.$openLoginModal();
          localStorage.setItem("destinationPath", "usercenter");
        }
        break;
    }
  }
}
