import { component, View, config } from "flagwind-web";
import "./index.scss";
import Subheader from "../../../../components/sub-header";

@component({
    template: require("./index.html"),
    components: {
        "u-subheader": Subheader
    }
})
export default class Welcome extends View {
    @config()
    public list!: any;

    // public interval: number = 0;
    public activeIndex: number = -1;
    // public mounted() {
    //     this.iconAnimationOrder();
    // }

    public iconAnimationOrder() {
        this.activeIndex = -1;
        // this.interval = self.setInterval(() => {
        //     this.activeIndex = this.activeIndex === this.list.length - 1 ?
        //         0 : this.activeIndex + 1;
        // }, 4000);
    }

    public iconAnimation(index: any) {
        // this.interval && self.clearInterval(this.interval);
        // this.activeIndex = index;
    }

    // public beforeDestroy() {
    //     self.clearInterval(this.interval);
    // }
}
