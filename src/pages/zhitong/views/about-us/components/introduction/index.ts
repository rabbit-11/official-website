import { Component, component, config } from "flagwind-web";

import "./index.scss";

@component({
    template: require("./index.html")
})
export default class Introduction extends Component {
    @config()
    public data!: Array<any>;

}
