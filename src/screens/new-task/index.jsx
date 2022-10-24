import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { saveTask } from "../../store/task.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewTask = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const onHandleChange = (text) => {
    setTitle(text);
  };

  const onHandleSubmit = () => {
    if(title == ''){
      Alert.alert(
        'Error',
        'Debe colocar una tarea',
      )
      return false;
    }
    dispatch(saveTask(title));
    navigation.navigate("Tasks");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Tarea</Text>
        <TextInput
          style={styles.input}
          placeholder="Nuevo tarea"
          onChangeText={onHandleChange}
          value={title}
        />
        <Button title="Grabar tarea" color={colors.primary} onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewTask;
