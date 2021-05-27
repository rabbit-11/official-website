export const businessData: any = [
  {
    type: "highway",
    id: 1,
    name: "TC系列高清视频车牌识别设备",
    introduction:
    {
      image: require("@/assets/images/zhitong/hardwork/tc/tc.png"),
      strength: [
        "300万像素、900万像素等多规格系列产品",
        "嵌入式一体化设计，兼具智能车牌识别与高清视频输出",
        "多类型、高精准、全天候的车头与车尾图像识别算法",
        "支持对车辆全景特征图片和号牌图片等多种信息的输出",
        "支持多种触发方式，单项触发与多项协调触发并存，抓拍准确率高",
        "智能外环境灯光自适应，以适应白天、黑夜、雨雪天气环境",
        "自带存储功能，支持断点自动续传，网络环境适应性强",
        "最高可实现10路、2K高清视频录像（1080P / 720P / D1可选）",
        "多种补光模式，具有自定义时间和自动切换功能"
      ]
    },
    coreFunction: [
      { name: "车头识别率", value: ">99%", pic: require("@/assets/images/zhitong/hardwork/tc/icon1.png") },
      { name: "车尾识别率", value: ">99%", pic: require("@/assets/images/zhitong/hardwork/tc/icon2.png") },
      { name: "综合识别率", value: ">99%", pic: require("@/assets/images/zhitong/hardwork/tc/icon3.png") },
      { name: "捕获率", value: ">99.5%", pic: require("@/assets/images/zhitong/hardwork/tc/icon4.png") }
    ],
    scene: {
      discription: "主要应用于：ETC门架、收费站ETC/MTC车道、入口治超、电子警察等场景",
      sceneList: [
        { name: "ETC门架", pic: require("@/assets/images/zhitong/hardwork/tc/show1.png") },
        { name: "收费站", pic: require("@/assets/images/zhitong/hardwork/tc/show2.png") }
      ]
    }
  },
  {
    type: "highway",
    id: 2,
    name: "车辆多特征识别终端",
    introduction:
    {
      image: require("@/assets/images/zhitong/hardwork/car/car.png"),
      strength: [
        "支持对车辆收费类型识别",
        "支持200多种车辆品牌、2500多种子品牌及超过5000款年款识别",
        "可以识别大货车、客车、越野车等十多款车型",
        "能对红、黑、白、黄、蓝等十多种车辆颜色进行识别",
        "支持对危化品车辆的专项识别",
        "支持对车辆年检标、遮阳板、纸巾盒、挂件等细微特征的提取",
        "车辆信息实时自动比对，高精准车辆身份确认"
      ]
    },
    coreFunction: [],
    scene: {
      discription: "主要应用于：入口治超、逃费稽查，危化品车、渣土车治理等",
      sceneList: [
        { name: "入口治超、逃费稽查", pic: require("@/assets/images/zhitong/hardwork/car/show1.png") },
        { name: "危化品车、渣土车治理", pic: require("@/assets/images/zhitong/hardwork/car/show2.png") }
      ]
    }
  }
];