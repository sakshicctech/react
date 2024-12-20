const config = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    projectId: String(import.meta.env.VITE_PROJECT_ID),
    collectionId: string(import.meta.env.VITE_COLLECTION_ID),
    bucketId:string(import.meta.env.VITE_BUCKET_ID),
    databaseId: string(import.meta.env.VITE_DATABASE_ID),
}

export default config;