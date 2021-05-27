import { component, watch, View } from "flagwind-web";
import "./index.scss";
import ContainerHeader from "../../header";
import ContainerFooter from "../../footer";

@component({
    template: require("./index.html"),
    components: {
        "u-header": ContainerHeader,
        "u-footer": ContainerFooter
    }
})
export default class Container extends View {

}
