import { resolve } from "path";
import Cookies from "js-cookie";
export const welcome = {
  name: "welcome",
  path: "/welcome",
  title: "首 页",
  meta: { title: "数字智通" },
  component: (resolve: any) =>
    (<any>require)(["../views/welcome/index"], resolve)
};

// 核心业务
export const core = {
  name: "core",
  path: "/core",
  title: "核心业务",
  meta: { title: "数字智通" },
  // redirect: "/welcome",
  component: () => import("../components/layout/white/index"),
  children: [
    {
      name: "hardwork",
      path: "hardwork",
      title: "核心业务-硬件部分",
      component: () => import("../views/core-business/hardwork")

    },
    {
      name: "softwork",
      path: "softwork",
      title: "核心业务-软件部分",
      component: () => import("../views/core-business/softwork")
    }
  ]
};
// 业务案例
export const cases = {
  name: "cases",
  path: "/cases",
  title: "业务案例",
  meta: { title: "数字智通" },
  component: (resolve: any) =>
    (<any>require)(["../views/business-case/index"], resolve),
  children: [
    {
      name: "highway",
      path: "highway",
      title: "智慧高速案例"
    },
    {
      name: "security",
      path: "security",
      title: "智慧安防案例"
    }
  ]
};
// 关于智通
export const about = {
  name: "about",
  path: "/about",
  title: "关于智通",
  meta: { title: "数字智通" },
  component: (resolve: any) =>
    (<any>require)(["../views/about-us/index"], resolve),
  children: [
    {
      name: "introduction",
      path: "introduction",
      title: "智通介绍"
    },
    {
      name: "vision",
      path: "vision",
      title: "智通愿景"
    },
    {
      name: "development",
      path: "development",
      title: "发展之路"
    },
    {
      name: "contact",
      path: "contact",
      title: "联系我们"
    }
  ]

};
// 加入我们
export const join = {
  name: "join",
  path: "/join",
  title: "加入我们",
  meta: { title: "数字智通" },
  component: (resolve: any) =>
    (<any>require)(["../views/join-us/index"], resolve),
  children: [
    // {
    //   name: "recruitment",
    //   path: "recruitment",
    //   title: "招聘信息"
    // },
    {
      name: "environment",
      path: "environment",
      title: "工作环境"
    },
    {
      name: "activity",
      path: "activity",
      title: "团队建设"
    },
    {
      name: "welfare",
      path: "welfare",
      title: "温馨福利"
    },
    {
      name: "training",
      path: "training",
      title: "人才培养"
    }
  ]

};
export const appRouter = {
  name: "menu",
  path: "/",
  title: "首页",
  meta: { title: "数字智通", single: false },
  redirect: "/welcome",
  component: () => import("../components/layout/container/index"),
  children: [welcome, core, cases, about, join]
};

export const routes = [
  appRouter,
  {
    name: "500",
    path: "/500",
    component: () => import("@/views/errors/500")
  },
  {
    name: "403",
    path: "/403",
    component: () => import("@/views/errors/403")
  },
  {
    name: "401",
    path: "/401",
    component: () => import("@/views/errors/401")
  },
  {
    name: "404",
    path: "/*",
    component: () => import("@/views/errors/404")
  }
];
