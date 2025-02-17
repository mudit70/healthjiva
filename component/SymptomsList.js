import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const _renderItem = ({ item }) => (
  <TouchableOpacity
    style={style.listItem}
    onPress={() => console.log("Pressed")}
  >
    <Text style={style.listItemText}>{item.text}</Text>
  </TouchableOpacity>
);

function SymptomsList(props) {
  return (
    <View style={style.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={props.data}
        renderItem={_renderItem}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  listItem: {
    flex: 1,
    borderColor: "#198da9",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#0d677c",
    marginTop: 5,
  },
  listItemText: {
    color: "white",
  },
});

export default SymptomsList;
