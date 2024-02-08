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
                return this.login({email,password})
           } else {
                return userAccont
           }
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite server error :: getCurrentUser()", error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite server error :: getCurrentUser()", error);
        }
        return null;
    }
}

const authService = new AuthService();

export default authService;

 