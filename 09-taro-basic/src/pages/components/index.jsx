// eslint-disable-next-line no-unused-vars
import React from "react";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

const Components = () => {
  const handleClick = (path) => {
    Taro.navigateTo({
      url: `/pages/${path}/index`,
    });
  };

  return (
    <View className="components">
      <AtList>
        <AtListItem
          title="容器"
          arrow="right"
          onClick={() => handleClick("container")}
        />
        <AtListItem
          title="基础内容"
          arrow="right"
          onClick={() => handleClick("basic")}
        />
        <AtListItem
          title="表单组件"
          arrow="right"
          onClick={() => handleClick("form")}
        />
        <AtListItem
          title="Skyline"
          arrow="right"
          onClick={() => handleClick("skyline")}
        />
        <AtListItem
          title="媒体组件"
          arrow="right"
          onClick={() => handleClick("media")}
        />
        <AtListItem
          title="地图"
          arrow="right"
          onClick={() => handleClick("map")}
        />
        <AtListItem
          title="定位"
          arrow="right"
          onClick={() => handleClick("location")}
        />
        <AtListItem
          title="文档"
          arrow="right"
          onClick={() => handleClick("open")}
        />
      </AtList>
    </View>
  );
};

export default Components;
