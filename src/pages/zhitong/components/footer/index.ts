import { component, View, config } from "flagwind-web";
import "./index.scss";

@component({
    template: require("./index.html")
})
export default class Footer extends View {
    public contactList: Array<any> = [
        { name: "人才招聘:", value: "whyf@egova.com.cn" },
        { name: "商务合作:", value: "jtsyb@zhitongits.com.cn" },
        { name: "售前咨询:", value: "010-57951933(北京)" },
        { name: "", value: "027-51319700转680(武汉)" }
    ];
    public linkList: Array<any> = [
        { name: "数字政通", link: "http://www.egova.com.cn/" },
        { name: "通通停车", link: "http://www.tongtongtingche.com.cn/" }
    ];

}
