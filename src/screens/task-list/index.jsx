import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { TaskItem } from "../../components";
import { loadTasks } from "../../store/task.slice";
import { styles } from "./styles";

const TaskList = ({ navigation }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const renderItem = ({ item }) => (<TaskItem {...item}/>);

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Aun no hay tareas</Text>
    </View>
  );
  return (
    <FlatList
      style={styles.container}
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default TaskList;
