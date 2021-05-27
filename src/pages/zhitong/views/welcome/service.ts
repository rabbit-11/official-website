import flagwind from "flagwind-core";
import injectable = flagwind.injectable;
import CommonService from "@/services/common-service";
import { serviceHandler } from "@/annotations";

@injectable()
export default class WelcomeService extends CommonService {
    // @serviceHandler("query", {title: "查询统计概览数据"})
    // public overviewStatistic() {
    //     return this._get<any>("/unity/overview/index/statistic");
    // }
   
}