import { component, View, watch } from "flagwind-web";
import "./index.scss";
import debounce from "lodash.debounce";
import { menuList } from "./menu";

@component({
    template: require("./index.html")
})
export default class Footer extends View {
    public temp: any = {};
    public breadcrumbFlag: boolean = false;
    public menuList: Array<any> = menuList;
    public menu: Array<any> = [];
    public pageFlag: any = "";

    public mounted() {
        this.temp = debounce(this.windowScroll, 20);
        document.addEventListener("scroll", this.temp);
    }

    public getMenu(routeData: any) {
        let firstNavValue, secondNavValue, lastNavValue;
        if (this.pageFlag === "cases") {
            this.menuList = [{
                id: 1, label: "业务案例", value: "cases", children: [
                    { id: 1, label: "智慧高速案例", value: "highway" },
                    { id: 2, label: "智慧安防案例", value: "security" }
                ]
            }];
            firstNavValue = routeData.name;
            secondNavValue = routeData.query.type || "highway";
            this.menu = [firstNavValue, secondNavValue];
        } else {
            firstNavValue = routeData.query.type || "highway";
            secondNavValue = routeData.name || "softwork";
            lastNavValue = routeData.query.id || "1";
            this.menu = [firstNavValue, secondNavValue, lastNavValue + ""];
        }
    }

    public onChoose(e: any) {
        if (this.pageFlag === "cases") {
            this.$router.push({
                path: "/cases",
                query: { type: e[1] }
            });
        } else {
            this.$router.push({
                path: `/core/${e[1]}`,
                query: { type: e[0], id: e[2] }
            });
        }
    }

    public windowScroll() {
        let scrollTop: any = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.breadcrumbFlag = scrollTop >= 700 ? true : false;
    }

    public beforeDestroy() {
        document.removeEventListener("scroll", this.temp);
    }

    @watch("$route", { immediate: true, deep: true })
    public onRouteChange() {
        if (this.$route && this.$route.name) {
            this.pageFlag = this.$route.name;
            this.getMenu(this.$route);
        }
    }
}
