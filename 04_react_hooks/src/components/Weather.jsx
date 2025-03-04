import { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("Zhangjiagang");
  const [data, setData] = useState(null);

  const fetchWeather = (queryCity) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=cce523fef8853d7ce34a485da49f216f`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("请求错误");
        }
        return response.json();
      })
      .then((json) => {
        if (json.cod === 200) {
          setData(json);
        }
      })
      .catch((error) => {
        console.error("请求失败:", error);
      });
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🌤️ 天气查询</h2>
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="输入城市"
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          搜索
        </button>
      </div>

      {data ? (
        <div style={styles.weatherCard}>
          <h3>{data.name} 天气</h3>
          <p>天气：{data.weather[0].main}</p>
          <p>描述：{data.weather[0].description}</p>
          <p>温度：{(data.main.temp - 273.15).toFixed(2)}°C</p>
          <p>湿度：{data.main.humidity}%</p>
          <p>风速：{data.wind.speed} m/s</p>
        </div>
      ) : (
        <p style={styles.loading}>加载中...</p>
      )}
    </div>
  );
};

// 🎨 样式对象
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  searchContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "8px 12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
  },
  weatherCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "300px",
  },
  loading: {
    fontSize: "18px",
    color: "#555",
  },
};

export default Weather;
