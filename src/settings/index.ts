let debug = process.env.NODE_ENV === "development";
export const global = <any>window;

/**
 * 后端地址
 * @type {string}
 */
export const commonSetting = {
    ...{
        // 后端地址
        baseUrl: "http://egova.top:1314"
        // baseUrl: debug ? "http://egova.top:4036" : "www.egova.top:1314"
        
    },
    ...global.commonSetting
};
export const cachePageList = ["SurveyOutline", "MineApply", "ShareApplicationReview", "ShareApplicationApply"];

// export const pumpUrl = global.pumpUrl || "www.egova.top:2135/#/";