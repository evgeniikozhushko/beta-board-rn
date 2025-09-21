import AddLocationModal from '@/components/AddLocationModal';
import LocationList from '@/components/LocationList';
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const DashboardScreen = () => {
  const [locations, setLocations] = useState([
    { id: 1, text: "Location 1" },
    { id: 2, text: "Location 2" },
    { id: 3, text: "Location 3" },
    { id: 4, text: "Location 4" },
    { id: 5, text: "Location 5" },
    { id: 6, text: "Location 6" },
    { id: 7, text: "Location 7" },
    { id: 8, text: "Location 8" },
    { id: 9, text: "Location 9" },
    { id: 10, text: "Location 10" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newLocation, setNewLocation] = useState("");

  // Add location logic
  const addLocation = () => {
    if (newLocation.trim() === '') return

    setLocations((prevLocations) => [
      ...prevLocations,
      {id: Date.now(), text: newLocation}
    ])

    setNewLocation('')
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      {/* Location List  */}
      <LocationList locations={locations} />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Facility</Text>
      </TouchableOpacity>

      {/* Modal */}
      <AddLocationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newLocation={newLocation}
        setNewLocation={setNewLocation}
        addLocation={addLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  locationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#412A5B",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  locationText: {
    fontSize: 14,
    color: "#fff",
  },
  dashboardText: {
    fontSize: 14,
    color: "#f2f2f2",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DashboardScreen;
