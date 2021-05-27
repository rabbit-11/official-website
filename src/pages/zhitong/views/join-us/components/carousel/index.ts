import { component, Component, config, watch } from "flagwind-web";
import "./index.scss";
import { CommonService } from "@/services";
import { autowired } from "@/annotations";

@component({
    template: require("./index.html")
})
export default class Carousel extends Component {
    @autowired(CommonService)
    public commonService!: CommonService;

    @config()
    public data!: Array<any>;

    public index: number = 0;
    public imageCount: number = 4;
    public width: number = 10;
    public dom: any = "";
    public interval: any = null;
    public mounted() {
        this.dom = <any>this.$refs.imgBox;
        this.move(this.width, this.dom);
    }

    public move(nowWidth: number, dom: any) {
        this.interval = self.setInterval(() => {
            this.index++;
            let newWidth = -this.index * nowWidth - 15.4;
            this.addTransition(dom);
            this.setTranslateX(dom, newWidth);
        }, 2500);
    }

    public setTranslateX(dom: any, translateX: number) {
        dom.style.webkitTransform = "translateX(" + translateX + "rem)";
        dom.style.transform = "translateX(" + translateX + "rem)";
    }

    public addTransition(dom: any) {
        dom.style.transition = "all 0.3s";
        dom.style.webkitTransition = "all 0.3s"; /*做兼容*/
    }

    public removeTransition(dom: any) {
        dom.style.transition = "none";
        dom.style.webkitTransition = "none";
    }

    @watch("index")
    public onIndexChange(nv: number, ov: number) {
        if (nv !== ov) {
            if (this.index > this.imageCount) {
                this.index = 0;
                this.removeTransition(this.dom);
            } else if (this.index < 0) {
                this.index = 3;
                this.removeTransition(this.dom);
            }
            this.setTranslateX(this.dom, -this.index * this.width - 15.4);
        }
    }

    public onArrowClick(direction: number) {
        direction === -1 ? this.index++ : this.index--;
        this.addTransition(this.dom);
        this.setTranslateX(this.dom, this.width);
    }
    public destroyed() {
        this.interval && self.clearInterval(this.interval);
    }
}