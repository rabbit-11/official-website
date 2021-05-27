import { component, View, config } from "flagwind-web";
import "./index.scss";

@component({
    template: require("./index.html")
})
export default class Welcome extends View {
    @config()
    public imageurl!: any;
    public flag: boolean = false;

    public imageAnimate(flag: any) {
        // this.flag = flag;
    }
}
