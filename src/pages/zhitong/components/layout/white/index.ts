import { component, View } from "flagwind-web";
import "./index.scss";
import { cachePageList } from "@/settings";

@component({
    template: require("./index.html")
})
export default class White extends View {
    /**
     * 这是页面，不是组件
     */

    /**
     * @author whf
     * @date 2019.05.06
     * @description 声明需要缓存的页面
     * @attention 注意：此处需要配置缓存页面组件 export 出来的名字，参考资源概况-资源概要页面
     */
    public cachePageList: Array<any> = cachePageList;

    public mounted() {
        // this.$watch("$route", (to, from) => {
        //     return;
        // }, { immediate: true, deep: true });
    }

}
