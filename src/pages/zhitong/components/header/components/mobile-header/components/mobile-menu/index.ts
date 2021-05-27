import { component, Component, config, watch } from "flagwind-web";
import "./index.scss";
import { CommonService } from "@/services";
import { autowired } from "@/annotations";

@component({
    template: require("./index.html")
})
export default class MobileMenu extends Component {
    @autowired(CommonService)
    public commonService!: CommonService;
    // 接受父组件传来路由菜单 和 子菜单
    @config()
    public menuList!: any;
    @config()
    public subMenuList!: any;

    public menuActive: string = "menuActive";
    public currentIndex: number = 0;

    public menuListFlag: boolean = false;

    public onMenuActive(index: number) {
        if (index + "" === "0") {
            this.$router.push({
                path: "/welcome"
            });
            this.onMenuJump();
        } else {
            this.currentIndex = index;
            this.menuListFlag = !this.menuListFlag;
        }
    }

    public toMenuBack() {
        this.menuListFlag = !this.menuListFlag;
    }

    public onMenuJump() {
        this.$emit("on-visible-change", false);
    }

    public onSubMenuActive(path: string, type?: string, name?: string, id?: string) {
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
                query: {
                    type: type
                }
            });
        }
        this.onMenuJump();
    }
}