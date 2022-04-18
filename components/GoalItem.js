import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  const { itemData, onDeleteItem } = props;

  return (
    <View style={styles.goalItemWrapper}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItemWrapper: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItem: {
    color: "white",
    padding: 12,
  },
});
