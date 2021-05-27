import { component, Component, config, watch } from "flagwind-web";
import "./index.scss";

@component({
    template: require("./index.html")
})
export default class Activity extends Component {
    // 父元素传来的图片数据
    @config()
    public data!: Array<any>;
    // 索引
    public currentIndex: number = 0;
    public moveFlag: boolean = false;
    public fade: string = "fade-in";
    public moveToRight: string = "moveToRight";
    public moveToLeft: string = "moveToLeft";
 
    // 箭头点击函数
    public onArrowClick() {
        this.moveFlag = true;
        setTimeout(() => {
            this.currentIndex++;
        }, 1000);

    }
    @watch("currentIndex")
    public onIndexChange() {
        this.moveFlag = false;
        if (this.currentIndex > 3) {
            this.currentIndex = 0;
        }
    }

}