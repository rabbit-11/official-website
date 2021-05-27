import { Component, component, config } from "flagwind-web";

import "./index.scss";

@component({
    template: require("./index.html")
})
export default class Development extends Component {
    @config()
    public data!: Array<any>;
    public currentIndex: number = 5;
    public get currentInfo() {
        return this.data[this.currentIndex];
    }
}
