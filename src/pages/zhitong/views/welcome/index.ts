import { component, View, watch } from "flagwind-web";
import "./index.scss";
import SubHeader from "../../components/sub-header";
import Business from "./components/business";
import debounce from "lodash.debounce";
import { welcomeData } from "./welcomeData";

@component({
    template: require("./index.html"),
    components: {
        "u-business": Business,
        "u-subheader": SubHeader
    }
})
export default class Welcome extends View {
    public welcomeData = welcomeData;
    public animationFlag: number = 1;
    public partberNum: number = 100;
    public temp: any = {};

    public mounted() {
        this.temp = debounce(this.onWindowScroll, 20);
        document.addEventListener("scroll", this.temp);
        let hash = this.$route.query.hash;
        hash && this.updateScroll(hash);
    }

    public updateScroll(hash: any) {
        let scroolHigh = 0;
        scroolHigh = (<any>this.$refs[hash]).offsetTop;
        window.scrollTo(0, scroolHigh + 200);
    }

    public onWindowScroll() {
        let scrollTop: any = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let oldTop: any = parseFloat(localStorage.getItem("oldTop") || "0");
        localStorage.setItem("oldTop", scrollTop);
        if (oldTop > scrollTop) { return; } // 如果向上滑动则不出现切换动画
        let height = (<any>this.$refs.welcome).clientHeight;
        let scroolRate: number = (scrollTop / height) * 100;
        this.partberNum = 100;
        if (10 < scroolRate && scroolRate < 20) {
            this.animationFlag = 3;
        } else if (21 < scroolRate && scroolRate < 32) {
            this.animationFlag = 4;
        } else if (60 < scroolRate && scroolRate < 90) {
            this.animationFlag = 6;
        } else {
            this.animationFlag = -1;
            this.partberNum = 120;
        }
    }

    public getmore(item: any) {
        this.$router.push({
            path: "/cases",
            query: { type: item.type }
        });
    }

    public beforeDestroy() {
        document.removeEventListener("scroll", this.temp);
    }

}
