import { component, Component, watch, config } from "flagwind-web";
import "./index.scss";
import PCHeader from "../pc-header";
import MobileMenu from "./components/mobile-menu";
import { CommonService } from "@/services";
import { autowired } from "@/annotations";

@component({
  template: require("./index.html"),
  components: {
    "u-mobile-menu": MobileMenu
  }
})
export default class MobileHeader extends PCHeader {
  @autowired(CommonService)
  public commonService!: CommonService;
  // 父组件传来的路由数组
  @config()
  public menuList!: Array<any>;
  // 父组件传来的subMenuList
  @config()
  public subMenuList!: Array<any>;

  // 移动端子菜单弹窗
  public mobileMenuFlag: boolean = false;

  public toMobileMenuList() {
    this.mobileMenuFlag = !this.mobileMenuFlag;
  }

  public onVisibleChange(mobileMenuFlag: boolean) {
    this.mobileMenuFlag = mobileMenuFlag;
  }

  public toHomePage() {
    this.onVisibleChange(false);
    this.$router.push({
      path: "/welcome"
    });
  }

}
