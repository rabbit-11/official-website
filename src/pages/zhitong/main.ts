import flagwind from "flagwind-core";
import ApplicationContext from "@/application/context";
import { routes } from "./routes/index";
import modules from "@/store";
// 获取应用上下文
let context = new ApplicationContext(routes, modules);
// 启动应用程序
flagwind.Application.start(context);