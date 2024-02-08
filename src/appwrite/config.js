import conf from "../conf/conf";
import {Databases, Client, Storage, Query} from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId,slug)
        } catch (error) {
            console.log("Appwrite error :: getPost() :: ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status','active')]){
        
    }
}