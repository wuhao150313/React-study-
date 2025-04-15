import { useState } from "react";
import {
  View,
  ScrollView,
  Swiper,
  SwiperItem,
  CoverView,
  Image,
  Text,
  MovableArea,
  MovableView,
} from "@tarojs/components";
import "./index.scss";

const Container = () => {
  // 准备Swiper展示的图片数据
  const swiperImages = [
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/1.jpg",
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/2.jpg",
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/3.jpg",
  ];

  // 生成模拟数据的函数
  const generateMockData = (start, count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: start + i,
      title: `列表项 ${start + i + 1}`,
      desc: `这是第 ${start + i + 1} 个列表项的详细描述`,
      time: new Date().toLocaleString(),
    }));
  };

  // 状态管理
  const [listItems, setListItems] = useState(generateMockData(0, 15));
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [x, setX] = useState(110);
  const [y, setY] = useState(110);
  const [isScaled, setIsScaled] = useState(false);

  return (
    <View className="container">
      {/* ScrollView组件示例：可滚动视图容器 */}
      <View className="section">
        <View className="section-title">ScrollView示例</View>
        <ScrollView
          className="scroll-view"
          scrollY // 允许垂直滚动
          scrollWithAnimation // 使用动画效果
          refresherEnabled // 开启下拉刷新
          refresherTriggered={refreshing} // 控制下拉刷新状态
          onRefresherRefresh={() => {
            setRefreshing(true);
            // 模拟刷新数据
            setTimeout(() => {
              setListItems(generateMockData(0, 15));
              setRefreshing(false);
              setHasMore(true);
            }, 1000);
          }}
          onScrollToLower={() => {
            if (!hasMore || loading) return;
            setLoading(true);
            // 模拟加载更多数据
            setTimeout(() => {
              const newData = generateMockData(listItems.length, 15);
              setListItems([...listItems, ...newData]);
              setLoading(false);
              setHasMore(listItems.length + newData.length < 45);
            }, 1000);
          }}
        >
          {listItems.map((item) => (
            <View key={item.id} className="scroll-item">
              <Text className="item-title">{item.title}</Text>
              <Text className="item-desc">{item.desc}</Text>
              <Text className="item-time">{item.time}</Text>
            </View>
          ))}
          {loading && <View className="loading-tip">加载中...</View>}
          {!hasMore && <View className="no-more-tip">没有更多数据了</View>}
        </ScrollView>
      </View>

      {/* Swiper组件示例：轮播图容器 */}
      <View className="section">
        <View className="section-title">Swiper示例</View>
        <Swiper
          className="swiper"
          indicatorDots // 显示面板指示点
          autoplay // 自动播放
          interval={3000} // 自动播放间隔时间（毫秒）
          circular // 循环播放
        >
          {swiperImages.map((image, index) => (
            <SwiperItem key={index}>
              <Image className="swiper-image" src={image} mode="aspectFill" />
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      {/* CoverView组件示例：可覆盖在原生组件上的文本视图 */}
      <View className="section">
        <View className="section-title">CoverView示例</View>
        <View className="cover-container">
          <Image
            className="background-image"
            src="https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/1.jpg"
            mode="aspectFill"
          />
          <CoverView className="cover-view">
            <CoverView className="cover-text">这是一个CoverView示例</CoverView>
            <CoverView className="cover-description">
              CoverView可以覆盖在原生组件上
            </CoverView>
          </CoverView>
        </View>
      </View>
      {/* MovableArea和MovableView组件示例：全向移动滑块 */}
      <View className="section">
        <View className="section-title">MovableView示例</View>
        <View className="movable-container">
          <MovableArea className="movable-area">
            <MovableView
              className={`movable-view ${isScaled ? "scaled" : ""}`}
              direction="all"
              x={x}
              y={y}
              damping={50}
              friction={5}
              onChange={({ detail }) => {
                setX(detail.x);
                setY(detail.y);
              }}
            >
              <View className="slider-handle" />
            </MovableView>
          </MovableArea>
          <View className="control-buttons">
            <View
              className="control-button"
              onClick={() => {
                setX(110);
                setY(110);
              }}
            >
              重置位置
            </View>
            <View
              className="control-button"
              onClick={() => setIsScaled(!isScaled)}
            >
              {isScaled ? "恢复大小" : "缩小尺寸"}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Container;
