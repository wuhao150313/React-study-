// eslint-disable-next-line no-unused-vars
import React from "react";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

const Apis = () => {
  const handleClick = (path) => {
    Taro.navigateTo({
      url: `/pages/${path}/index`,
    });
  };

  return (
    <View className="apis">
      <AtList>
        <AtListItem
          title="通讯录"
          arrow="right"
          onClick={() => handleClick("contact")}
        />
        <AtListItem
          title="设备信息"
          arrow="right"
          onClick={() => handleClick("device")}
        />
        <AtListItem
          title="截屏功能"
          arrow="right"
          onClick={() => handleClick("screenshot")}
        />
        <AtListItem
          title="剪贴板"
          arrow="right"
          onClick={() => handleClick("clipboard")}
        />
        <AtListItem
          title="WiFi检测"
          arrow="right"
          onClick={() => handleClick("wifi")}
        />
      </AtList>
    </View>
  );
};

export default Apis;
