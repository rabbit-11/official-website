import { component, Component, config, watch } from "flagwind-web";
import "./index.scss";

@component({
    template: require("./index.html")
})
export default class Carousel extends Component {
    @config()
    public data!: Array<any>;

    // public data: Array<any> = [
    //     {
    //         src: require("@/assets/images/zhitong/join/environment-1.jpg"),
    //         desc: "简洁大气、绿色清新"
    //     },
    //     {
    //         src: require("@/assets/images/zhitong/join/environment-2.jpg"),
    //         desc: "工作间隙俯瞰全城"
    //     },
    //     {
    //         src: require("@/assets/images/zhitong/join/environment-4.jpg"),
    //         desc: "扁平化交流空间"
    //     },
    //     {
    //         src: require("@/assets/images/zhitong/join/environment-3.jpg"),
    //         desc: "宽敞卡座、独立空间"
    //     }
    // ];
    
    public dataLength: number = 0;
    public interval: number = 0;
    public activeIndex: number = 1;
    public fadeFlag: boolean = true;
    public get aroundData() {
        if (this.activeIndex && this.data && this.dataLength) {
            let pre = this.activeIndex === 1 ? this.data[this.dataLength - 1].src : this.data[this.activeIndex - 2].src;
            let next = this.activeIndex === this.dataLength ? this.data[0].src : this.data[this.activeIndex].src;
            return [pre, next];
        }
    }

    public mounted() {
        this.dataLength = this.data.length;
        self.setTimeout(() => {
            this.fadeFlag = false;
        }, 1000);
        this.change();
    }

    public onChoose(index: any) {
        this.interval && clearInterval(this.interval);
        this.activeIndex = index + 1;
        this.change();
    }

    public change() {
        this.interval = self.setInterval(() => {
            this.activeIndex = this.activeIndex === this.dataLength ? 1 : this.activeIndex + 1;
        }, 5000);
    }

    @watch("activeIndex")
    public animateFlag(ov: any, nv: any) {
        this.fadeFlag = true;
        self.setTimeout(() => {
            this.fadeFlag = false;
        }, 1000);
    }

    public beforeDestroy() {
        this.interval && clearInterval(this.interval);
    }
}