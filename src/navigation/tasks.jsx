import IonicIcons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { NewTaskScreen, TaskListScreen } from "../screens/index";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const TasksNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Task"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name="Tasks"
        component={TaskListScreen}
        options={({ navigation }) => ({
          title: "Lista de tareas",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewTask")}>
              <IonicIcons name="add-circle-outline" size={25} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="NewTask"
        component={NewTaskScreen}
        options={{ title: "Nueva tarea" }}
      />
    </Stack.Navigator>
  );
};

export default TasksNavigator;
