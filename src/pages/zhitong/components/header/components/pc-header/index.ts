import { component, Component, watch, config } from "flagwind-web";
import "./index.scss";
import debounce from "lodash.debounce";
import { CommonService } from "@/services";
import { autowired } from "@/annotations";

@component({
  template: require("./index.html")
})
export default class PCHeader extends Component {
  @autowired(CommonService)
  public commonService!: CommonService;
  // 父组件传来的路由数组
  @config()
  public menuList!: Array<any>;
  // 父组件传来的subMenuList
  @config()
  public subMenuList!: Array<any>;
  // tabs标签默认索引值
  public subTitleIndex: number = 0;

  public titleIndex: number = 0;

  // 滚动状态
  public isScroll: boolean = false;
  // 跳转状态jump
  public isJump: boolean = false;

  // 终端类型
  public versions: string = "";

  public dropdownActive: boolean = false;

  public flag: boolean = false;
  // 
  public currentPath: string = "";
  public mounted() {
    // 监听窗口滚动
    window.addEventListener("scroll", debounce(this.windowScroll, 20), true);
  }

  @watch("$route.path", { immediate: true })
  public onPathNameChange(nv: string) {
    this.currentPath = nv;
    if (nv !== "/welcome") {
      this.isJump = true;
    }
  }
  // 窗口滚动函数，获取scrollTop
  public windowScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      this.isScroll = true;
    } else if (scrollTop === 0) {
      this.isScroll = false;
    }
  }

  // 组件销毁时移除监听事件
  public destroyed() {
    window.removeEventListener("scroll", debounce(this.windowScroll, 20), true);
  }

  public toHomePage() {
    this.$router.push({ path: "/welcome" });
    this.isJump = false;
  }

  public onTitleEnter(index: number) {
    this.titleIndex = index;
    this.flag = false;
    this.dropdownActive = !this.dropdownActive;
  }
  public onTitleLeave() {
    // this.flag = !this.flag;
    this.dropdownActive = !this.dropdownActive;
  }

  public onSubTitleEnter(index: number) {
    this.subTitleIndex = index;
  }

  public onClickTitle(item: any) {
    if (item.name === "cases") {
      this.$router.push({
        path: item.path,
        query: {
          type: "highway"
        }
      });
    } else if (item.name === "core") {
      this.$router.push({
        path: "/core/softwork",
        query: {
          type: "highway",
          id: "1"
        }
      });
    } else {
      this.$router.push({
        path: item.path
      });
    }
  }
  public onSubMenuActive(path: string, type?: string, name?: string, id?: string) {
    this.flag = true;
    if (path === "/core") {
      const routepath = `${path}/${name}`;
      this.$router.push({
        path: routepath,
        query: {
          type: type,
          id: id
        }
      });
    } else if (path === "/cases") {
      this.$router.push({
        path: path,
        query: {
          type: type
        }
      });
    } else {
      this.$router.push({
        path: path,
        query: { hash: type }
      });
    }
  }

}
