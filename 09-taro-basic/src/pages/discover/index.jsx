// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { View, Input } from "@tarojs/components";
import { AtCard, AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import NameCard from "../../components/NameCard";

import "./index.scss";

const Discover = () => {
  const [cardInfo, setCardInfo] = useState({
    name: "",
    phone: "",
  });
  const [showCard, setShowCard] = useState(false);

  const handleNavigateToAccount = () => {
    Taro.navigateTo({
      url: "/pages/account/account",
    });
  };

  const handleInputChange = (field, value) => {
    setCardInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGenerateCard = () => {
    if (cardInfo.name && cardInfo.phone) {
      setShowCard(true);
    }
  };

  const handleClear = () => {
    setCardInfo({
      name: "",
      phone: "",
    });
    setShowCard(false);
  };

  return (
    <View className="discover">
      <AtCard title="记账本">
        <View className="card-content">
          <View>记录您的日常收支</View>
          <AtButton
            type="primary"
            size="small"
            onClick={handleNavigateToAccount}
          >
            开始记账
          </AtButton>
        </View>
      </AtCard>

      <AtCard title="音乐盒子">
        <View className="card-content">
          <View>发现好音乐</View>
          <AtButton
            type="secondary"
            size="small"
            onClick={() => Taro.navigateTo({ url: "/pages/music/index" })}
          >
            打开音乐
          </AtButton>
        </View>
      </AtCard>

      <AtCard title="个人名片生成器">
        <View className="card-content">
          <Input
            type="text"
            placeholder="请输入姓名"
            value={cardInfo.name}
            onInput={(e) => handleInputChange("name", e.detail.value)}
          />
          <Input
            type="number"
            placeholder="请输入电话"
            value={cardInfo.phone}
            onInput={(e) => handleInputChange("phone", e.detail.value)}
          />
          {showCard && (
            <View className="name-card-preview">
              <NameCard cardInfo={cardInfo} />
            </View>
          )}
          <View className="button-group">
            <AtButton type="primary" size="small" onClick={handleGenerateCard}>
              生成名片
            </AtButton>
            <AtButton type="secondary" size="small" onClick={handleClear}>
              清空
            </AtButton>
          </View>
        </View>
      </AtCard>
    </View>
  );
};

export default Discover;
