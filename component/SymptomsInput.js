import { useState } from "react";
import { TextInput, View, Modal, StyleSheet, Button } from "react-native";

function SymptomsInput(props) {
  const [symptom, setSymptom] = useState("");

  const handleChangeSymptom = (value) => {
    setSymptom(value);
  };

  const handleAddSymptom = () => {
    props.addSymptom(symptom);
    setSymptom("");
    props.closeModal();
  };

  const handleCloseModal = () => {
    props.closeModal();
  };

  return (
    <Modal visible={props.visible}>
      <View style={style.container}>
        <View style={style.symptomInputCotainer}>
          <TextInput
            style={style.symptomInput}
            placeholder="Enter symptom here.."
            value={symptom}
            onChangeText={handleChangeSymptom}
          />
        </View>
        <View style={style.buttonContainer}>
          <View style={style.addButton}>
            <Button title="Add" onPress={handleAddSymptom} />
          </View>
          <View style={style.cancelButton}>
            <Button title="Cancel" onPress={handleCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 25,
  },
  symptomInputCotainer: {
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 25,
  },
  symptomInput: {
    borderColor: "#d5d6d6",
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 10,
  },
  addButton: {},
  cancelButton: {},
});

export default SymptomsInput;
