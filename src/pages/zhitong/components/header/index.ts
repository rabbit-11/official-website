import { component, Component, watch } from "flagwind-web";
import "./index.scss";
import MobileHeader from "./components/mobile-header";
import PCHeader from "./components/pc-header";
import { CommonService } from "@/services";
import { autowired } from "@/annotations";
import { appRouter } from "../../routes";

@component({
  template: require("./index.html"),
  components: {
    "u-pc-header": PCHeader,
    "u-mobile-header": MobileHeader
  }
})
export default class Header extends Component {
  @autowired(CommonService)
  public commonService!: CommonService;
  // 路由数组
  public menuList: Array<any> = appRouter.children;
  // 后端传的subMenuList
  public subMenuList: Array<any> = [
    {
      name: "highway",
      title: "智慧高速",
      children: [
        {
          name: "hardwork",
          path: "hardwork",
          title: "硬件部分",
          children: [
            {
              id: 1,
              title: "TC系列高清视频车牌识别设备"
            },
            {
              id: 2,
              title: "车辆多特征识别终端"
            }
          ]
        },
        {
          name: "softwork",
          path: "softwork",
          title: "软件部分",
          children: [
            {
              id: 1,
              title: "高速公路大数据系统"
            },
            {
              id: 2,
              title: "ETC门架车牌识别设备监管平台"
            },
            {
              id: 3,
              title: "车辆逃费稽查与管控系统"
            },
            {
              id: 4,
              title: "智慧高速机电设备运维管理平台"
            },
            {
              id: 5,
              title: "隧道安全管控平台"
            },
            {
              id: 6,
              title: "高速公路视频事件分析平台"
            }
          ]
        }
      ]
    },
    {
      name: "security",
      title: "智慧安防",
      children: [
        {
          name: "softwork",
          path: "softwork",
          title: "软件部分",
          children: [
            {
              id: 1,
              title: "云隼车辆大数据系统"
            },
            {
              id: 2,
              title: "云隼人脸大数据系统"
            },
            {
              id: 3,
              title: "云隼视频结构化系统"
            },
            {
              id: 4,
              title: "交通管控与指挥调度平台"
            },
            {
              id: 5,
              title: "特殊车辆入城管控系统"
            },
            {
              id: 6,
              title: "涉案车辆管理系统"
            },
            {
              id: 7,
              title: "智慧社区"
            },
            {
              id: 8,
              title: "雪亮工程"
            }
          ]
        }
      ]
    }
  ];

  // 终端类型
  public versions: string = "";

  public mounted() {
    this.computedScreen();
    window.onresize = this.computedScreen;
  }

  public computedScreen() {
    let srceenWidth = document.body.clientWidth;
    this.versions = srceenWidth <= 576 ? "mobile" : "pc";
  }

  // public browser() {
  //   // 判断iPhone|iPad|iPod|iOS
  //   if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
  //     this.versions = "mobile";
  //     // 判断Android
  //   } else if (/(Android)/i.test(navigator.userAgent)) {
  //     this.versions = "mobile";
  //   } else {
  //     this.versions = "pc";
  //   }
  // }

}
