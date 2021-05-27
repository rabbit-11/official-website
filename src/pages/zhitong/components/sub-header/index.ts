import { component, View,config } from "flagwind-web";
import "./index.scss";

@component({
    template: require("./index.html")
})
export default class Welcome extends View {
    @config()
    public data!: any;
}
