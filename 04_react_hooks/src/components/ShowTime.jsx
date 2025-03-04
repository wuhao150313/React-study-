import { useEffect, useState } from "react";

const ShowTime = () => {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      //英制是24进制
      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour12: false,
        //保持两位数显示
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formattedTime);
    };

    updateTime();
    //每五秒执行一次
    const interval = setInterval(updateTime, 5000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default ShowTime;
