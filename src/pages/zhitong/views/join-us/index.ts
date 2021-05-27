import { component, View, watch } from "flagwind-web";
import Carousel from "./components/carousel";
import Carousels from "./components/carousels";
import Activity from "./components/activity";
import Welfare from "./components/welfare";
import Training from "./components/training";
import SubHeader from "../../components/sub-header";
import "./index.scss";
import Banner from "../../components/banner";

@component({
    template: require("./index.html"),
    components: {
        "u-subheader": SubHeader,
        "u-carousel": Carousel,
        "u-carousels": Carousels,
        "u-activity": Activity,
        "u-welfare": Welfare,
        "u-training": Training,
        "u-banner": Banner

    }
})
export default class Welcome extends View {
    public bannerData: any = {
        bg: require("@/assets/images/zhitong/join/banner.jpg"),
        name: ""
    };
    public data: any = {
        environment: {
            name: "environment",
            title: "工作环境",
            desc: [
                {
                    src: require("@/assets/images/zhitong/join/environment-1.png"),
                    desc: "简洁大气、绿色清新"
                },
                {
                    src: require("@/assets/images/zhitong/join/environment-2.jpg"),
                    desc: "工作间隙俯瞰全城"
                },
                {
                    src: require("@/assets/images/zhitong/join/environment-3.jpg"),
                    desc: "扁平化交流空间"
                },
                {
                    src: require("@/assets/images/zhitong/join/environment-4.jpg"),
                    desc: "宽敞卡座、独立空间"
                }
            ]
        },
        activity: {
            name: "activity",
            title: "团队建设",
            desc: [
                require("@/assets/images/zhitong/join/activity-1.jpg"),
                require("@/assets/images/zhitong/join/activity-2.jpg"),
                require("@/assets/images/zhitong/join/activity-3.jpg"),
                require("@/assets/images/zhitong/join/activity-4.jpg")
            ]
        },
        welfare: {
            name: "welfare",
            title: "温馨福利",
            desc: [
                {
                    text: "部门应季零食，工作之余尽享食之乐",
                    img: require("@/assets/images/zhitong/join/welfare-snack.jpg")
                },
                {
                    text: "集体生日会，欢声笑语中共同成长",
                    img: require("@/assets/images/zhitong/join/welfare-birthday.jpg")
                },
                {
                    text: "年度集体旅行，嗨起来",
                    img: require("@/assets/images/zhitong/join/welfare-travel.jpg")
                },
                {
                    text: "不定期交友联谊，不做单身汪",
                    img: require("@/assets/images/zhitong/join/welfare-friendship.jpg")
                },
                {
                    text: "重大节日，Party走起",
                    img: require("@/assets/images/zhitong/join/welfare-party.jpg")
                },
                {
                    text: "每周体育活动，滋养革命本钱",
                    img: require("@/assets/images/zhitong/join/welfare-sports.jpg")
                }
            ]
        },
        training: {
            name: "training",
            title: "人才培养",
            desc: [
                {
                    text: "一对一导师责任制",
                    backImg: require("@/assets/images/zhitong/join/training-tutor-back.jpg")
                },
                {
                    text: "技术大牛定期分享",
                    backImg: require("@/assets/images/zhitong/join/training-share.jpg")
                },
                {
                    text: "入职系统培训",
                    backImg: require("@/assets/images/zhitong/join/training-train-back.jpg")
                },
                {
                    text: "公司领导亲自授课",
                    backImg: require("@/assets/images/zhitong/join/training-teaching-back.jpg")
                }
            ]
        }
    };
    public hash: string = "";
    public mounted() {
        let hash = this.$route.query.hash;
        hash && this.updateScroll(hash);
    }

    public updateScroll(hash: any) {
        let scroolHigh = 0;
        scroolHigh = (<any>this.$refs[hash]) ? (<any>this.$refs[hash]).offsetTop - 200 : 0;
        window.scrollTo(0, scroolHigh);
    }

    @watch("$route", { immediate: true, deep: true })
    public onRouteChange(ov: any, nv: any) {
        this.hash = ov.query.hash;
        this.hash && this.updateScroll(this.hash);
    }
}
