// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { AtInput, AtButton, AtList, AtListItem, AtToast } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Clipboard = () => {
  const [inputText, setInputText] = useState("");
  const [pastedText, setPastedText] = useState("");
  const [showToast, setShowToast] = useState(false);

  const templates = [
    { title: "收货地址", content: "广东省深圳市南山区科技园南区" },
    {
      title: "联系方式",
      content: "电话: 13800138000\n邮箱: example@email.com",
    },
    {
      title: "公司信息",
      content: "深圳科技有限公司\n统一社会信用代码: 91440300XXXXXXXXXX",
    },
  ];

  const handleSetClipboard = async (text) => {
    try {
      await Taro.setClipboardData({
        data: text,
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500);
    } catch (error) {
      console.error("复制失败:", error);
    }
  };

  const handleGetClipboard = async () => {
    try {
      const res = await Taro.getClipboardData();
      setPastedText(res.data);
    } catch (error) {
      console.error("获取剪贴板内容失败:", error);
    }
  };

  return (
    <View className="clipboard">
      <AtInput
        name="text"
        title="输入文本"
        type="text"
        placeholder="请输入要复制的文本"
        value={inputText}
        onChange={(value) => setInputText(value)}
      />
      <View className="button-group">
        <AtButton type="primary" onClick={() => handleSetClipboard(inputText)}>
          复制文本
        </AtButton>
        <AtButton onClick={handleGetClipboard}>粘贴</AtButton>
      </View>

      {pastedText && (
        <View className="pasted-content">
          <Text className="title">剪贴板内容：</Text>
          <Text className="content">{pastedText}</Text>
        </View>
      )}

      <View className="templates">
        <Text className="title">常用模板</Text>
        <AtList>
          {templates.map((template, index) => (
            <AtListItem
              key={index}
              title={template.title}
              note={template.content}
              arrow="right"
              onClick={() => handleSetClipboard(template.content)}
            />
          ))}
        </AtList>
      </View>

      <AtToast
        isOpened={showToast}
        text="内容已复制"
        status="success"
        duration={1500}
      />
    </View>
  );
};

export default Clipboard;
