import { View, Text, Image } from "@tarojs/components";
import "./index.scss";

export default function CardDisplay({ userInfo }) {
  return (
    <View className="card-container">
      <Image
        className="avatar"
        src={
          userInfo.avatar ||
          "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg"
        }
        mode="aspectFill"
      />
      <Text className="name">{userInfo.name}</Text>
      <Text className="position">{userInfo.position}</Text>
      <View className="company-info">
        <Text className="company">{userInfo.company}</Text>
      </View>
      <View className="contact-section">
        <Text className="contact">电话: {userInfo.contact}</Text>
        <Text className="email">邮箱: {userInfo.email}</Text>
      </View>
    </View>
  );
}
