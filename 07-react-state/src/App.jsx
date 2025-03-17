import React from "react";
import CounterUseState from "./components/CounterUseState";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import UserProvider from "./components/UserProvider";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import CounterZustand from "./components/CounterZustand";

const App = () => {
  return (
    <div>
      <CounterUseState />
      <Profile />
      <TodoList />
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <CounterZustand />
    </div>
  );
};

export default App;
