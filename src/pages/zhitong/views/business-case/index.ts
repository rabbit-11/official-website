import { component, View, watch } from "flagwind-web";
import "./index.scss";
import { businessData } from "./business";
import Breadcumb from "../../components/breadcumb";
import Banner from "../../components/banner";

@component({
    template: require("./index.html"),
    components: {
        "u-breadcumb": Breadcumb,
        "u-banner": Banner
    }
})
export default class CaseBusiness extends View {
    public businessList: Array<any> = businessData;
    public query: any = {};
    public currentIndex: number = 0;
    public picshow: boolean = true;
    public carouselValue: number = 0;
    public bannerData: any = {
        name: "业务案例",
        discription: "两大业务市场遍及全国，二十年精诚服务铸就行业嘉誉！",
        bg: require("@/assets/images/zhitong/business/banner.png")
    };

    public get currentType() {
        let temData: any = [];
        temData = this.query ? this.businessList.filter((v: any) => v.type === this.query.type) : [];
        return temData[0];
    }

    public get currentBusiness() {
        return this.currentType.caseList[this.currentIndex];
    }

    public mounted() {
        this.removeAnimate();
    }

    public chooseCase(index: number) {
        this.currentIndex = index;
        this.picshow = true;
        this.removeAnimate();
    }

    public removeAnimate() {
        self.setTimeout(() => {
            this.picshow = false;
        }, 1000);
    }

    @watch("$route", { immediate: true, deep: true })
    public onRouteChangge(ov: any) {
        this.query = ov.query.type ? ov.query : { type: "highway" };
    }

}
