// eslint-disable-next-line no-unused-vars
import React from "react";
import { WebView } from "@tarojs/components";

import "./index.scss";

const Open = () => {
  return (
    <WebView src="https://docs.taro.zone/docs/" className="open-webview" />
  );
};

export default Open;
