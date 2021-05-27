import { component, Component, config, watch } from "flagwind-web";
import "./index.scss";

@component({
    template: require("./index.html")
})
export default class Welfare extends Component {
   
    // 父元素传来的图片数据
    @config()
    public data!: Array<any>;

}