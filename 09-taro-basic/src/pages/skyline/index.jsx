// eslint-disable-next-line import/no-duplicates
import { View, Text, GridView, ListView } from "@tarojs/components";
import { useState } from "react";
import {
  DoubleTapGestureHandler,
  LongPressGestureHandler,
  // eslint-disable-next-line import/no-duplicates
} from "@tarojs/components";
import "./index.scss";

const SkylinePage = () => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  // GridView 数据
  const gridData = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `项目 ${i + 1}`,
    color: `hsl(${(i * 20) % 360}, 70%, 70%)`,
  }));

  // ListView 数据
  const listData = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    title: `列表项 ${i + 1}`,
    desc: `这是第 ${i + 1} 个列表项的描述信息`,
  }));

  return (
    <View className="skyline-page">
      {/* GridView 示例 */}
      <View className="section">
        <Text className="section-title">GridView 组件</Text>
        <GridView
          className="grid-view"
          crossAxisCount={4}
          crossAxisGap={20}
          mainAxisGap={20}
        >
          {gridData.map((item) => (
            <View
              key={item.id}
              className="grid-item"
              style={{ backgroundColor: item.color }}
            >
              <Text className="grid-item-text">{item.title}</Text>
            </View>
          ))}
        </GridView>
      </View>

      {/* ListView 示例 */}
      <View className="section">
        <Text className="section-title">ListView 组件</Text>
        <ListView className="list-view" scrollY height={300}>
          {listData.map((item) => (
            <View key={item.id} className="list-item">
              <Text className="list-item-title">{item.title}</Text>
              <Text className="list-item-desc">{item.desc}</Text>
            </View>
          ))}
        </ListView>
      </View>
      {/* 手势区域示例 */}
      <View className="section">
        <Text className="section-title">手势区域</Text>
        <View className="gesture-container">
          <LongPressGestureHandler
            onHandlerStateChange={({ nativeEvent }) => {
              if (nativeEvent.state === 4) {
                setCurrentColor(colors[0]);
              }
            }}
          >
            <DoubleTapGestureHandler
              onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === 4) {
                  const currentIndex = colors.indexOf(currentColor);
                  const nextIndex = (currentIndex + 1) % colors.length;
                  setCurrentColor(colors[nextIndex]);
                }
              }}
            >
              <View
                className="gesture-box"
                style={{ backgroundColor: currentColor }}
              />
            </DoubleTapGestureHandler>
          </LongPressGestureHandler>
          <View className="gesture-tips">
            <Text>双击切换颜色 / 长按恢复默认</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// 预设颜色数组
const colors = ["#4CAF50", "#2196F3", "#9C27B0", "#F44336", "#FF9800"];

export default SkylinePage;
