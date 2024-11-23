

const config = {
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appwritePostsCollectionId: String(import.meta.env.VITE_APP_APPWRITE_POSTS_COLLECTION_ID),
    appwriteUsersCollectionId: String(import.meta.env.VITE_APP_APPWRITE_USERS_COLLECTION_ID),
    appwriteThumbnailBucketId: String(import.meta.env.VITE_APP_APPWRITE_THUMBNAIL_BUCKET_ID),
    tinymceApiKey : String(import.meta.env.VITE_TINYMCE_APIKEY)
}


export default config