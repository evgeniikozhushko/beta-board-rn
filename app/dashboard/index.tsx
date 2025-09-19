import { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from "react-native"

const DashboardScreen = () => {

    const [locations, setLocations] = useState([
        { id: 1, text: 'Location 1' },
        { id: 2, text: 'Location 2' },
        { id: 3, text: 'Location 3' },
        { id: 4, text: 'Location 4' },
        { id: 5, text: 'Location 5' },
        { id: 6, text: 'Location 6' },
        { id: 7, text: 'Location 7' },
        { id: 8, text: 'Location 8' },
        { id: 9, text: 'Location 9' },
        { id: 10, text: 'Location 10' },
    ])
    return (
        <View style={styles.container}>
            <FlatList
                data={locations}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.locationItem}>
                        <Text style={styles.dashboardText}>{item.text}</Text>
                    </View>
                )}  
            />
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    locationItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#412A5B',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    dashboardText: {
        fontSize: 14,
        color: '#f2f2f2',
    }
})

export default DashboardScreen;