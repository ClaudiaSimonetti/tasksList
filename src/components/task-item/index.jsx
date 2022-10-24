import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

const TaskItem = ({ id, title }) => {
  return (
    <TouchableOpacity style={styles.container} >
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
