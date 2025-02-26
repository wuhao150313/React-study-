const WelcomeFunc = ({ name, age, image }) => {
  return (
    <>
      <h2>姓名：{name}</h2>
      <h2>年龄：{age}</h2>
      <h2>
        头像: <img src={image}></img>
      </h2>
    </>
  );
};

export default WelcomeFunc;
