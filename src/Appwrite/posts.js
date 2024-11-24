import { Client, Databases, ID, Storage } from 'appwrite';
import config from "../Config/config"

class Post{
    client = new Client()
    databases;
    storage

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId, 
                config.appwritePostsCollectionId,
            ) 
         }catch(error){
             console.log("Appwrite service :: getPosts() :: ", error);
             return false
         }
    }

    async createPost(title, category, content, imageId, authorId, authorName){
        try {
           return await this.databases.createDocument(
            config.appwriteDatabaseId,
            config.appwritePostsCollectionId,
            ID.unique(),
            {
                title, category, content, imageId, authorId, authorName
            }
           ) 
        }catch(error){
            console.log("Appwrite service :: createPost() :: ", error);
            return false
        }
    }

    async deletePost(docId){
        try {
            return await this.databases.deleteDocument(
             config.appwriteDatabaseId,
             config.appwritePostsCollectionId,
             docId
            ) 
         }catch(error){
             console.log("Appwrite service :: deletePost() :: ", error);
             return false
         }
    }

    async updatePost(docId, {title, content, category, imageId}){
        try {
            const updatedParts = {}
            if(title) updatedParts.title = title
            if(content) updatedParts.content = content
            if(category) updatedParts.category = category
            if(imageId) updatedParts.imageId = imageId

            return await this.databases.updateDocument(
             config.appwriteDatabaseId,
             config.appwritePostsCollectionId,
             docId,
             updatedParts
            ) 
         }catch(error){
             console.log("Appwrite service :: updatePost() :: ", error);
             return false
         }
    }

    async uploadImage(file){
        try {
            return await this.storage.createFile(
             config.appwriteThumbnailBucketId,
             ID.unique(),
             file
            )
        }catch(error){
            console.log("Appwrite service :: uploadImage() :: ", error);
            return false
        }
    }

    getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(
                config.appwriteThumbnailBucketId,
                fileId
            )
        }catch(error){
            console.log("Appwrite service :: getFilePreview() :: ", error);
            return false
        }
    }
}

const PostInDB = new Post();
export default PostInDB;