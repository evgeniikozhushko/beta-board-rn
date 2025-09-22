import databaseService from "@/services/databaseService";
import { ID } from "react-native-appwrite"

// Appwrite database and collection ID

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID!
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_LOCATIONS_ID!

const locationServise = {
    // Get Locations

    async getLocations() {
        const response = await databaseService.ListDocuments(dbId, colId)
        if ('error' in response) {
            return { error: response.error }
        }
        return { data: response }
    } 
}

export default locationServise