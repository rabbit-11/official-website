import { component, View, watch } from "flagwind-web";
import Introduction from "./components/introduction";
import Vision from "./components/vision";
import Development from "./components/development";
import Contact from "./components/contact";
import SubHeader from "../../components/sub-header";
import "./index.scss";
import Banner from "../../components/banner";

@component({
    template: require("./index.html"),
    components: {
        "u-subheader": SubHeader,
        "u-introduction": Introduction,
        "u-vision": Vision,
        "u-development": Development,
        "u-contact": Contact,
        "u-banner": Banner
    }
})

export default class About extends View {
    public bannerData: any = {
        bg: require("@/assets/images/zhitong/about/about.jpg")
    };
    public data: any = {
        introduction: {
            name: "introduction",
            title: "公司介绍",
            desc: [
                "北京数字智通科技有限公司，前身为汉王科技股份有限公司智能交通事业部， 2010年正式独立，成为汉王科技的全资子公司（汉王智通），2013年被北京数字政通科技股份有限公司收购（股票代码：300075）， 成为其控股子公司，随后正式更名为北京数字智通科技有限公司，从此，数字智通翻开了快速发展的新篇章。",
                "二十年来，公司始终秉持诚信、务实、严谨的企业文化和科学规范的管理理念， 并凝聚了一大批优秀的人才，由职业经理人组成的管理团队和资深专家组成的技术团队， 为公司的整体运营、产品研发和市场服务等方面提供了强大支撑。目前，数字智通在人工智能、大数据和云计算等前沿领域拥有深厚的技术实力， 主营业务涵盖了安防和交通两大板块，在安防领域主要涉及车辆大数据、视频结构化、智慧社区和交通指挥等方面，在交通领域主要涉及高清视频车牌识别设备、 车辆通行全过程管控、机电设备运维与管理、隧道安全管控、高速公路视频事件分析等方面，相关业务市场遍及全国各地。",
                "数字智通作为中国领先的安防与交通整体解决方案提供商， 将通过持续的创新为客户提供更加卓越的一体化服务，为我国智慧城市和智慧交通的建设做出应有的贡献。"
            ]
        },
        vision: {
            name: "vision",
            title: "智通愿景",
            desc: {
                img: require("@/assets/images/zhitong/about/vision.png"),
                strength: [
                    "用技术助力高速公路智慧化",
                    "让科技服务美好城市新生活"
                ]
            }
        },
        development: {
            name: "development",
            title: "发展之路",
            desc: [
                {
                    time: 1999,
                    text: "汉王科技智能交通事业部成立（公司前身）"
                },
                {
                    time: 2001,
                    text: "推出国内首款嵌入式车牌识别产品-汉王眼，并应用于高速公路领域"
                },
                {
                    time: 2003,
                    text: "汉王眼创新应用于停车场领域，推动停车场行业变革"
                },
                {
                    time: 2007,
                    text: "推出国内首款200万像素的嵌入式高清车牌识别一体机"
                },
                {
                    time: 2008,
                    text: "在国内高速公路ETC车道车牌识别领域市场占有率超过50%"
                },
                {
                    time: 2010,
                    text: "正式独立为北京汉王智通科技有限公司"
                },
                {
                    time: 2011,
                    text: "开启智慧交通和智慧安防两大业务共同发展的新时代"
                },
                {
                    time: 2013,
                    text: "被北京数字政通科技股份有限公司正式收购"
                },
                {
                    time: 2015,
                    text: "推出智通云隼系列解决方案，用AI技术赋能安防事业"
                },
                {
                    time: 2016,
                    text: "北京汉王智通科技有限公司正式更名为“北京数字智通科技有限公司。推出智通云鹭产品，实现对高速公路车辆通行的全过程管控"
                },
                {
                    time: 2019,
                    text: "高速公路自由流软硬件整体解决方案，助力撤销省界收费站工作"
                }
            ]
        },
        contact: {
            name: "contact",
            title: "联系我们",
            desc: [
                {
                    location: "北京",
                    company: "北京数字智通科技有限公司",
                    tel: "010-57951933",
                    addr: "北京市海淀区东北旺西路8号中关村软件园9号楼国际软件大厦"
                },
                {
                    location: "武汉",
                    company: "北京数字智通科技有限公司",
                    tel: "027-51317700转680",
                    addr: "武汉市东湖高新区光谷金融港B4栋"
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
        scroolHigh = (<any>this.$refs[hash]) ? (<any>this.$refs[hash]).offsetTop : 0;
        window.scrollTo(0, scroolHigh);
    }

    @watch("$route", { immediate: true, deep: true })
    public onRouteChange(ov: any, nv: any) {
        this.hash = ov.query.hash;
        this.hash && this.updateScroll(this.hash);
    }
}
