import { component, View, watch } from "flagwind-web";
import "./index.scss";
import { businessData } from "./business";
import SubHeader from "../../../components/sub-header";
import AnimateImage from "../../../components/animate-image";
import Breadcumb from "../../../components/breadcumb";
import Banner from "../../../components/banner";
import FeatureList from "../components/feature-list";

@component({
    template: require("./index.html"),
    components: {
        "u-subheader": SubHeader,
        "u-animate-image": AnimateImage,
        "u-breadcumb": Breadcumb,
        "u-banner": Banner,
        "u-feature-list": FeatureList
    }
})
export default class Hardwork extends View {
    public businessList: Array<any> = businessData;
    public bannerData: any = {
        name: "",
        discription: "",
        bg: require("@/assets/images/zhitong/softwork/banner.jpg")
    };
    public query: any = {};
    public get currentBusiness() {
        let temData = [];
        if (this.query) {
            temData = this.businessList.filter((v: any) => v.type === this.query.type)
                .filter((i: any) => i.id === parseFloat(this.query.id));
        }
        return temData[0];
    }

    @watch("$route", { immediate: true, deep: true })
    public onRouteChangge(ov: any, nv: any) {
        this.query = ov.query.type && ov.query.id ? ov.query : { id: 1, type: "highway" };
        if (this.query.type === "security") {
            this.bannerData = {
                name: "智慧安防",
                discription: "提升城市治理水平，打造平安、和谐、美好新生活！",
                bg: require("@/assets/images/zhitong/softwork/banner.png")
            };
        } else {
            this.bannerData = {
                name: "智慧高速",
                discription: "让运营管理更智慧、更高效，让行车更畅通、更安全！",
                bg: require("@/assets/images/zhitong/softwork/banner.jpg")
            };
        }
    }
}
