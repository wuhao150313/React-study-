import axios from "axios";

// 创建axios实例
const movieRequest = axios.create({
  baseURL: "https://apis.tianapi.com",
  timeout: 5000,
});

// 请求拦截器
movieRequest.interceptors.request.use(
  (config) => {
    // 添加公共参数key
    config.params = {
      ...config.params,
      key: "1311ac61d1be92e89b745c1c749792c3",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
movieRequest.interceptors.response.use(
  (response) => {
    // 统一处理响应数据
    const { code, msg, result } = response.data;
    if (code === 200) {
      return result;
    }
    return Promise.reject(new Error(msg || "请求失败"));
  },
  (error) => {
    // 统一错误处理
    let message = "";
    if (error.response) {
      switch (error.response.status) {
        case 400:
          message = "请求错误";
          break;
        case 401:
          message = "未授权";
          break;
        case 403:
          message = "拒绝访问";
          break;
        case 404:
          message = "请求地址不存在";
          break;
        case 500:
          message = "服务器内部错误";
          break;
        default:
          message = "网络错误";
      }
    } else {
      message = error.message;
    }
    console.error("请求错误:", message);
    return Promise.reject(error);
  }
);

// 获取电影信息
export const getMovies = (num = 10) => {
  return movieRequest({
    method: "get",
    url: "/film/index",
    params: {
      num,
    },
  });
};

// 导出movieRequest实例
export default movieRequest;
