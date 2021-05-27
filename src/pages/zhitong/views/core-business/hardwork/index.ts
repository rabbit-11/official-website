import { component, View, watch } from "flagwind-web";
import "./index.scss";
import { businessData } from "./business";
import SubHeader from "../../../components/sub-header";
import AnimateImage from "../../../components/animate-image";
import Breadcumb from "../../../components/breadcumb";
import Banner from "../../../components/banner";

@component({
    template: require("./index.html"),
    components: {
        "u-subheader": SubHeader,
        "u-breadcumb": Breadcumb,
        "u-animate-image": AnimateImage,
        "u-banner": Banner
    }
})
export default class Hardwork extends View {
    public businessList: Array<any> = businessData;
    public bannerData: any = {
        name: "智慧高速",
        discription: "让运营管理更智慧、更高效，让行车更畅通、更安全！",
        bg: require("@/assets/images/zhitong/softwork/banner.jpg")
    };
    public query: any = {};
    public animateFlag: boolean = true;

    public get currentBusiness() {
        let temData = [];
        if (this.query) {
            temData = this.businessList.filter((v: any) => v.type === this.query.type)
                .filter((i: any) => i.id === parseFloat(this.query.id));
        }
        return temData[0];
    }

    public imageAnimation(flag: any) {
        this.animateFlag = flag;
    }

    @watch("$route", { immediate: true, deep: true })
    public onRouteChangge(ov: any) {
        this.query = ov.query.type && ov.query.id ? ov.query : { id: 1, type: "highway" };
    }

}
