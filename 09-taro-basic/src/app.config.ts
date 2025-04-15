// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Config } from "@tarojs/taro";

export default defineAppConfig({
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示",
    },
  },
  pages: [
    "pages/index/index",
    "pages/discover/index",
    "pages/profile/index",
    "pages/product/index",
    "pages/login/index",
    "pages/account/account",
    "pages/music/index",
    "pages/apis/index",
    "pages/components/index",
    "pages/basic/index",
    "pages/contact/index",
    "pages/container/index",
    "pages/device/index",
    "pages/form/index",
    "pages/location/index",
    "pages/map/index",
    "pages/media/index",
    "pages/skyline/index",
    "pages/open/index",
    "pages/screenshot/index",
    "pages/clipboard/index",
    "pages/wifi/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "我的应用",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#4594D5",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tabs/home.png",
        selectedIconPath: "./assets/tabs/home-active.png",
      },
      {
        pagePath: "pages/discover/index",
        text: "发现",
        iconPath: "./assets/tabs/discover.png",
        selectedIconPath: "./assets/tabs/discover-active.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./assets/tabs/profile.png",
        selectedIconPath: "./assets/tabs/profile-active.png",
      },
      {
        pagePath: "pages/apis/index",
        text: "API",
        iconPath: "./assets/tabs/api.png",
        selectedIconPath: "./assets/tabs/api-active.png",
      },
      {
        pagePath: "pages/components/index",
        text: "组件",
        iconPath: "./assets/tabs/component.png",
        selectedIconPath: "./assets/tabs/component-active.png",
      },
    ],
  },
});
