import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import TasksNavigator from "./tasks";

export default () => (
  <NavigationContainer>
    <TasksNavigator />
  </NavigationContainer>
);
