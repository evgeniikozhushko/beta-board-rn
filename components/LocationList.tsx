import LocationItem from "@/components/LocationItem";
import { FlatList, View } from "react-native";

const LocationList = ({ locations }: { locations: { id: number; text: string }[] }) => {
  return (
    <View>
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <LocationItem location={item}/>}
      />
    </View>
  );
};

export default LocationList