import { component, View, config } from "flagwind-web";
import "./index.scss";
import debounce from "lodash.debounce";

@component({
    template: require("./index.html")
})
export default class Footer extends View {
    @config()
    public data!: any;
}
