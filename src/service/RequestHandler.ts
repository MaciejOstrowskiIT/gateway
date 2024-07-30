import axios from "axios";
import { IRequestHandlerInterface } from "../interfaces/IRequestHandlerInterface";

export class RequestHandler implements IRequestHandlerInterface{
	public api: string;

    constructor(api: string){
        this.api = api;
    }


    async post<T>(endpoint: string, data: T) {
       return await axios.post(`${this.api}${endpoint}`, data)
        .then((res) => res.data)
        .catch(err => {throw new Error(err)});
    }

    // get()
}