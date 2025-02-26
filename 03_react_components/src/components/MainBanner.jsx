import { Carousel } from "antd";

const MainBanner = () => (
  <Carousel autoplay autoplaySpeed={1000}>
    <div>
      <img
        src="https://1840165925wu.oss-cn-nanjing.aliyuncs.com/3cbc0865e045629b3b9c574e81c7da22.jpeg" // 这里是图片的链接
        alt="Image 1"
        style={{ width: "100%", height: "500px", objectFit: "cover" }} // 设置图片宽高
      />
    </div>
    <div>
      <img
        src="https://1840165925wu.oss-cn-nanjing.aliyuncs.com/a2e61b0ed3d026ce851558ac67dee215.jpeg"
        alt="Image 2"
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
      />
    </div>
    <div>
      <img
        src="https://1840165925wu.oss-cn-nanjing.aliyuncs.com/ba7037cfcd3f982e85be7ac722901abe.jpeg"
        alt="Image 3"
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
      />
    </div>
    <div>
      <img
        src="https://1840165925wu.oss-cn-nanjing.aliyuncs.com/dcc7eb4a6e023016aede68ede93ac7bd.jpeg"
        alt="Image 4"
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
      />
    </div>
  </Carousel>
);
export default MainBanner;
