// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

const musicList = [
  {
    id: 1,
    name: "夜的第七章",
    artist: "熊二",
    cover:
      "https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/images/%E7%86%8A%E4%BA%8C.png",
    url: "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/KUNZITE%20-%20LEMON%20SWAYZE.mp3",
  },
  {
    id: 2,
    name: "搁浅",
    artist: "熊二",
    cover:
      "https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/images/%E7%86%8A%E4%BA%8C.png",
    url: "https://1840165925wu.oss-cn-nanjing.aliyuncs.com/Xxx%20-%20Episode%2033(0.8X).mp3",
  },
  {
    id: 3,
    name: "红尘客栈",
    artist: "熊二",
    cover:
      "https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/images/%E7%86%8A%E4%BA%8C.png",
    url: "https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/music/%E7%BA%A2%E5%B0%98%E5%AE%A2%E6%A0%88.mp3",
  },
];

const Music = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    const audio = Taro.createInnerAudioContext();
    audio.src = musicList[currentTrack].url;
    audio.onError((res) => {
      console.log("音频播放错误：", res);
    });
    setAudioContext(audio);

    return () => {
      audio.destroy();
    };
  }, [currentTrack]);

  useEffect(() => {
    if (audioContext) {
      if (isPlaying) {
        audioContext.play();
      } else {
        audioContext.pause();
      }
    }
  }, [isPlaying, audioContext]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevTrack = () => {
    const newTrack = (currentTrack - 1 + musicList.length) % musicList.length;
    setCurrentTrack(newTrack);
  };

  const handleNextTrack = () => {
    const newTrack = (currentTrack + 1) % musicList.length;
    setCurrentTrack(newTrack);
  };

  return (
    <View className="music">
      <View className="music-player">
        <View className="cover-container">
          <Image
            className={`cover-image ${isPlaying ? "rotating" : ""}`}
            src={musicList[currentTrack].cover}
            mode="aspectFill"
          />
        </View>
        <View className="music-info">
          <Text className="song-name">{musicList[currentTrack].name}</Text>
          <Text className="artist">{musicList[currentTrack].artist}</Text>
        </View>
        <View className="controls">
          <View className="control-btn" onClick={handlePrevTrack}>
            <AtIcon value="chevron-left" size="24" />
          </View>
          <View className="control-btn play-btn" onClick={handlePlayPause}>
            <AtIcon value={isPlaying ? "pause" : "play"} size="30" />
          </View>
          <View className="control-btn" onClick={handleNextTrack}>
            <AtIcon value="chevron-right" size="24" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Music;
