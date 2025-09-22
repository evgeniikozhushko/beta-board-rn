import { database } from './appwrite'

const databaseService = {
    // List Documents
    async ListDocuments(dbId: string, colId: string) {
        try {
            const response = await database.listDocuments(dbId, colId)
            return response.documents || []
        } catch (error) {
            console.error('Error fetching documents', (error as Error).message)
            return { error: (error as Error).message}
        }
    }
}

export default databaseService