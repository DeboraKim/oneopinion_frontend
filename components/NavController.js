import React from "react";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

const NavController = () => {
  const isLoggedIn = useIsLoggedIn();
  return !isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};

export default NavController;
