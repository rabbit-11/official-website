export const menuList: Array<any> = [
    {
        id: 1, label: "智慧高速", value: "highway", children: [
            {
                id: 1, label: "硬件部分", value: "hardwork", children: [
                    { id: 1, value: "1", label: "TC系列高清视频车牌识别设备" },
                    { id: 2, value: "2", label: "车辆多特征识别终端" }
                ]
            },
            {
                id: 2, label: "软件部分", value: "softwork", children: [
                    { id: 1, value: "1", label: "高速公路大数据系统" },
                    { id: 2, value: "2", label: "ETC门架车牌识别设备监管平台" },
                    { id: 3, value: "3", label: "车辆逃费稽查与管控系统" },
                    { id: 4, value: "4", label: "智慧高速机电设备运维管理平台" },
                    { id: 5, value: "5", label: "隧道安全管控平台" },
                    { id: 6, value: "6", label: "高速公路视频事件分析平台" }
                ]
            }
        ]
    },
    {
        id: 2, label: "智慧安防", value: "security", children: [
            {
                id: 1, label: "软件部分", value: "softwork", children: [
                    { id: 1, value: "1", label: "云隼车辆大数据系统" },
                    { id: 2, value: "2", label: "云隼人脸大数据系统" },
                    { id: 3, value: "3", label: "云隼视频结构化系统" },
                    { id: 4, value: "4", label: "交通管控与指挥调度平台" },
                    { id: 5, value: "5", label: "特殊车辆入城管控系统" },
                    { id: 6, value: "6", label: "涉案车辆管理系统" },
                    { id: 7, value: "7", label: "智慧社区" },
                    { id: 8, value: "8", label: "雪亮工程" }
                ]
            }
        ]
    }
];