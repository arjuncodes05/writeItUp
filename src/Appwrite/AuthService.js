

import {Account, Client, ID} from 'appwrite'
import config from '../Config/config';

class AuthService{
    client = new Client;
    account;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount(email, password, name){
        try {
            return await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
        }catch (err) {
            console.log("Appwrite service :: createAccount() :: ", err);
            return false 
        }
    }

    async getUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: login() :: ", err);
            return false 
        }
    }


    async login(email, password){
        try {
           return await this.account.createEmailPasswordSession(
            email,
            password
           ) 
        }catch (err) {
            console.log("Appwrite service :: login() :: ", err);
            return false 
        }
    }

    async signout(){
        try {
            return await this.account.deleteSessions()
        }catch (err) {
            console.log("Appwrite service :: signout() :: ", err);
            return false 
        }
    }
}

const authService = new AuthService();
export default authService;
