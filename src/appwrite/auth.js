import { Client, Account, ID} from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,name,password}){
        try {
           const userAccont = await this.account.create(ID.unique(),email,password,name);

           if (userAccont) {
            
           } else {
                return userAccont
           }
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }
    async login(){}
    async logout(){}
    async getCurrentUser(){}
}

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>'); 