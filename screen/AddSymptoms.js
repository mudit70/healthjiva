import { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import SymptomsInput from "../component/SymptomsInput";
import SymptomsList from "../component/SymptomsList";

function AddSymptoms() {
  const [showModal, setShowModal] = useState(false);
  const [symptomsList, setSymptomsList] = useState([]);

  const handleAddSymptomsModalOpen = () => {
    setShowModal(true);
  };

  const handleAddSymptomsModalClose = () => {
    setShowModal(false);
  };

  // Change unique identification logic later
  const handleAddSymptom = (value) => {
    setSymptomsList((prevValue) => [
      ...prevValue,
      { id: Math.random().toString(), text: value },
    ]);
  };

  return (
    <View style={style.appContainer}>
      <View style={style.addSymptomCotainer}>
        <Button title="Add Symptom" onPress={handleAddSymptomsModalOpen} />
        <SymptomsInput
          visible={showModal}
          closeModal={handleAddSymptomsModalClose}
          addSymptom={handleAddSymptom}
        />
        <SymptomsList data={symptomsList} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignSelf: "stretch",
    padding: 20,
  },
  addSymptomCotainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    paddingTop: 100,
  },
});

export default AddSymptoms;
