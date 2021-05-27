import { component, watch, Component, mixins } from "flagwind-web";
import "./index.scss";
import moment from "moment";
import UserSettings from "../user-settings";

import { UserMixin } from "@/mixins/user-mixin";
import LoginModal from "@/components/login";
import { CommonService } from "@/services";
import { autowired } from "@/annotations";
import Cookies from "js-cookie";
@component({
  template: require("./index.html"),
  components: {
    "u-login-modal": LoginModal,
    "u-user-settings": UserSettings
  }
})
export default class Header extends mixins(UserMixin) {
  @autowired(CommonService)
  public commonService!: CommonService;
  public headerIndexFlag: boolean = false;

  public time: string = moment().format("YYYY-MM-DD");

  public enter: boolean = false;

  public activeName: string = "";

  public menuList = [
    {
      name: "article",
      path: "/know.html",
      title: "知识库"
    },
    {
      name: "applications",
      path: "/index.html#/applications",
      title: "应用实例"
    },
    {
      name: "share",
      path: "/index.html#/share",
      title: "关于我们"
    },
    {
      name: "usercenter",
      path: "/index.html#/usercenter",
      title: "个人中心"
    }
  ];

  @watch("$route", { immediate: true })
  public onRouteChange(ov: any, nv: any) {
    this.activeName = this.$route.path.split("/")[1] || "";
  }

  public goHome(path: string = "/index.html") {
    window.location.href = path;
  }

  public toPage(menu: any) {
    const username: string = Cookies.get("username") || "";
    if (menu.name === "usercenter") {
      if (username) {
        window.location.href = menu.path + "/" + username;
      } else {
        this.$openLoginModal();
        localStorage.setItem("destinationPath", "usercenter");
      }
      return;
    }
    window.location.href = menu.path;
  }

  public onDropdownClick(name: string): void {
    switch (name) {
      case "publish":
        this.$router.push({ path: "/publish" });
        break;
    }
  }

}
