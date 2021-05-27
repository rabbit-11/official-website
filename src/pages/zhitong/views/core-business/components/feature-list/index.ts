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
}
