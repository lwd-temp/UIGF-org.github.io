import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "合作项目", icon: "discover", link: "/zh/partnership.md" },
  "/zh/API.md",
  {
    text: "规范标准",
    icon: "proposal",
    prefix: "/zh/standards/",
    children: ["UIGF.md", "UIAF.md"]
  },
  {
    text: "实用工具",
    icon: "config",
    children: [
      {
        text: "米哈游 API 合集",
        link: "/zh/MiHoYo-API-Collection-project.html",
        icon: "api"
      },
    ]
  },
]);
