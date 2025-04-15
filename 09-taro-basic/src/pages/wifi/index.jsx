// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const Wifi = () => {
  const [wifiList, setWifiList] = useState([]);
  const [connectedWifi, setConnectedWifi] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // 初始化WiFi模块
    initWifi();
    // 监听WiFi列表变化
    Taro.onGetWifiList((res) => {
      setWifiList(res.wifiList);
    });
    // 监听WiFi连接状态
    Taro.onWifiConnected((res) => {
      setConnectedWifi(res.wifi);
    });

    return () => {
      // 组件卸载时清理监听器
      Taro.offGetWifiList();
      Taro.offWifiConnected();
      Taro.stopWifi();
    };
  }, []);

  const initWifi = async () => {
    try {
      await Taro.startWifi();
      await getConnectedWifi();
      await getWifiList();
    } catch (err) {
      setError(err.errMsg);
    }
  };

  const getConnectedWifi = async () => {
    try {
      const res = await Taro.getConnectedWifi({
        partialInfo: true,
      });
      setConnectedWifi(res);
    } catch (err) {
      console.log("获取当前连接的WiFi信息失败：", err);
    }
  };

  const getWifiList = async () => {
    try {
      await Taro.getWifiList();
    } catch (err) {
      setError(err.errMsg);
    }
  };

  const connectToWifi = async (SSID) => {
    try {
      await Taro.connectWifi({
        SSID,
        partialInfo: true,
      });
    } catch (err) {
      setError(err.errMsg);
    }
  };

  return (
    <View className="wifi">
      <View className="wifi-section">
        <Text className="section-title">当前连接的WiFi</Text>
        {connectedWifi ? (
          <View className="wifi-info">
            <Text>SSID: {connectedWifi.SSID}</Text>
          </View>
        ) : (
          <Text>未连接WiFi</Text>
        )}
      </View>

      <View className="wifi-section">
        <Text className="section-title">可用的WiFi列表</Text>
        <Button onClick={getWifiList}>刷新WiFi列表</Button>
        {wifiList.map((wifi, index) => (
          <View
            key={index}
            className="wifi-item"
            onClick={() => connectToWifi(wifi.SSID)}
          >
            <Text>{wifi.SSID}</Text>
            <Text>信号强度: {wifi.signalStrength}</Text>
          </View>
        ))}
      </View>

      {error && (
        <View className="error-message">
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Wifi;
