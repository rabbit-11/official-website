import { component, View } from "flagwind-web";
import "./index.scss";
import ContainerHeader from "../header";

@component({
    template: require("./index.html"),
    components: {
        "p-header": ContainerHeader
    }
})
export default class Container extends View {

    public index: boolean = false;

    public theme: string = "";

    public getTheme(to: any = this.$route) {
        return to && to.meta && to.meta.theme || "";
    }

    public mounted() {
        this.theme = this.getTheme();
        this.$watch("$route", (to, from) => {
            this.theme = this.getTheme(to);
            if (from.name === "welcome") {
                this.index = !this.index;
            }
            if (to.name === "welcome") {
                this.index = false;
            }
        });
    }
}
