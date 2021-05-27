import { component, View, config } from "flagwind-web";
import "./index.scss";

@component({
    template: require("./index.html")
})
export default class Welcome extends View {
    @config()
    public data!: any;
    
    public moreFlg: boolean = false;
    public get currentList() {
        return this.moreFlg ? this.data.list.slice(0, 4) : this.data.list;
    }
    public mounted() {
        this.moreFlg = this.data.list.length > 4 ? true : false;
    }
    public getmore(item: any) {
        this.$router.push({
            path: `core/${item.catelog}`,
            query: {
                type: item.type,
                id: item.id
            }
        });
    }
}
