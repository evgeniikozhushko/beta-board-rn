import { StyleSheet, Text, View } from "react-native";

const LocationItem = ({
  location,
}: {
  location: { id: number; text: string };
}) => {
  return (
    <View style={styles.locationItem}>
      <Text style={styles.locationText}>{location.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default LocationItem;
