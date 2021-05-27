import { component, View } from "flagwind-web";
import "./index.scss";
import { cachePageList } from "@/settings";

@component({
    template: require("./index.html")
})
export default class White extends View {

    public cachePageList: Array<any> = cachePageList;

}
