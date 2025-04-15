// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { View, Image } from "@tarojs/components";
import { AtButton, AtMessage } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

const Screenshot = () => {
  const [screenshotPath, setScreenshotPath] = useState("");

  useEffect(() => {
    // 设置截屏/录屏时屏幕表现（仅Android）
    Taro.setVisualEffectOnCapture({
      visualEffect: "hidden",
      success: () => {
        console.log("设置截屏效果成功");
      },
      fail: (err) => {
        console.error("设置截屏效果失败：", err);
      },
    });

    // 监听用户主动截屏事件
    const handleUserCaptureScreen = () => {
      Taro.showToast({
        title: "检测到用户截屏",
        icon: "success",
        duration: 2000,
      });
    };

    Taro.onUserCaptureScreen(handleUserCaptureScreen);

    return () => {
      // 取消事件监听
      Taro.offUserCaptureScreen(handleUserCaptureScreen);
    };
  }, []);

  // 截屏功能
  const handleScreenshot = async () => {
    try {
      // 检查截屏权限
      const { authSetting } = await Taro.getSetting();
      if (!authSetting["scope.writePhotosAlbum"]) {
        const { confirm } = await Taro.showModal({
          title: "提示",
          content: "需要您授权保存图片到相册",
        });
        if (confirm) {
          await Taro.authorize({ scope: "scope.writePhotosAlbum" });
        } else {
          return;
        }
      }

      // 截取当前页面
      const res = await Taro.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        destWidth: 100,
        destHeight: 100,
      });

      setScreenshotPath(res.tempFilePath);
      Taro.showToast({
        title: "截屏成功",
        icon: "success",
      });
    } catch (error) {
      console.error("截屏失败：", error);
      Taro.showToast({
        title: "截屏失败",
        icon: "error",
      });
    }
  };

  // 保存截屏到相册
  const handleSaveScreenshot = async () => {
    if (!screenshotPath) {
      Taro.showToast({
        title: "请先截屏",
        icon: "none",
      });
      return;
    }

    try {
      await Taro.saveImageToPhotosAlbum({
        filePath: screenshotPath,
      });
      Taro.showToast({
        title: "保存成功",
        icon: "success",
      });
    } catch (error) {
      console.error("保存失败：", error);
      Taro.showToast({
        title: "保存失败",
        icon: "error",
      });
    }
  };

  return (
    <View className="screenshot">
      <AtMessage />
      <View className="screenshot-container">
        {screenshotPath && (
          <Image
            className="screenshot-preview"
            src={screenshotPath}
            mode="aspectFit"
          />
        )}
      </View>
      <View className="button-group">
        <AtButton type="primary" onClick={handleScreenshot}>
          截屏
        </AtButton>
        <AtButton
          type="secondary"
          onClick={handleSaveScreenshot}
          disabled={!screenshotPath}
        >
          保存到相册
        </AtButton>
      </View>
    </View>
  );
};

export default Screenshot;
