// const MainProduceList = () => {
//   const products = ["01", "02", "03"];

//   return (
//     <>
//       <h2>这是商品</h2>
//       <ul style={{ display: "flex" }}>
//         {products.map((item, index) => (
//           <li key={index} style={{ marginRight: "50px" }}>
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default MainProduceList;

import { Card } from "antd";

const MainProduceList = () => {
  const products = [
    {
      title: "西瓜",
      subtitle: "甜蜜",
      cover:
        "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/e0d2d619e5c33d2d23a980d424ef468b.jpeg",
      avatar:
        "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/205f3019a98b109b5991aa5ed2633da4.jpeg",
    },
    {
      title: "南瓜",
      subtitle: "营养",
      cover:
        "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/e0d2d619e5c33d2d23a980d424ef468b.jpeg",
      avatar:
        "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/7a4f118091daf36dd0f99a6fb41c0526.jpeg",
    },
    {
      title: "冬瓜",
      subtitle: "煲汤",
      cover:
        "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/e0d2d619e5c33d2d23a980d424ef468b.jpeg",
      avatar:
        "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/74e61baba5d246380f3700b827c14101.jpeg",
    },
    {
      title: "北瓜",
      subtitle: "没吃过",
      cover:
        "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/e0d2d619e5c33d2d23a980d424ef468b.jpeg",
      avatar:
        "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/e1483d20e94a9c5d9e6f06d644ee4d4d.jpeg",
    },
    {
      title: "苦瓜",
      subtitle: "不好吃",
      cover:
        "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/e0d2d619e5c33d2d23a980d424ef468b.jpeg",
      avatar:
        "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/13ab637a2f4189ecd0aa43ba47c46841.jpeg",
    },
  ];

  return (
    <>
      <div style={{ display: "flex" }}>
        {products.map((item, index) => (
          <Card
            key={index}
            style={{
              width: 300,
              marginRight: "50px", // 控制每个Card的宽度和间距
              position: "relative",
              paddingBottom: "30px", // 保证底部不被压缩
              borderRadius: "10px", // 给卡片增加圆角
              overflow: "hidden", // 防止内容溢出
              backgroundColor: "#d9f7be", // 设置橙色背景
            }}
            cover={
              <img
                alt={item.title}
                src={item.cover}
                style={{
                  height: "200px", // 背景图高度
                  objectFit: "cover", // 保证背景图片不会拉伸
                  borderRadius: "10px", // 圆角效果
                }}
              />
            }
          >
            {/* 标题和副标题 */}
            <div
              style={{
                position: "absolute",
                bottom: "20px", // 标题和副标题靠下
                left: "50%",
                transform: "translateX(-50%)", // 水平居中
                zIndex: 1, // 确保标题显示在图片上方
                color: "white", // 白色文字以确保标题可见
                backgroundColor: "rgba(0, 0, 0, 0.5)", // 半透明背景块
                padding: "5px 10px",
                borderRadius: "5px", // 背景块圆角
                textAlign: "center", // 文本居中
              }}
            >
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <p style={{ margin: 0 }}>{item.subtitle}</p>
            </div>

            {/* 头像 */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // 居中头像
                borderRadius: "50%",
                overflow: "hidden",
                width: "60px", // 头像的宽度
                height: "60px", // 头像的高度
                boxShadow: "0 0 10px rgba(0,0,0,0.5)", // 给头像加阴影效果
                zIndex: 2, // 头像放置在标题上面
              }}
            >
              <img
                src={item.avatar}
                alt="avatar"
                style={{
                  width: "100%", // 保证头像大小
                  height: "100%", // 保证头像大小
                  objectFit: "cover", // 保证头像的完整显示
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default MainProduceList;
