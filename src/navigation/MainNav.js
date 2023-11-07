import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNav from "./AuthNav";
import { useSelector } from "react-redux";
import AudioNav from "./AudioNav";

const MainNav = () => {
  const user = useSelector((state) => state.authSlice.user);

  return (
    <NavigationContainer>{user ? <AudioNav /> : <AuthNav />}</NavigationContainer>
  );
};

export default MainNav;