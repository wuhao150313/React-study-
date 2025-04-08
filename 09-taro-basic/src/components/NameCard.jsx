import { View, Image } from "@tarojs/components";

const NameCard = ({ cardInfo }) => {
  return (
    <View className="card">
      {/* 头像 */}
      <Image
        src="https://1840165925wu.oss-cn-nanjing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250217155756.png"
        style={{ width: "100px", height: "100px", borderRadius: "100px" }}
      />

      {/* 姓名 */}
      <View>{cardInfo.name}</View>

      {/* 电话号码 */}
      <View>{cardInfo.phone}</View>
    </View>
  );
};

export default NameCard;
