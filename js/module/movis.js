import { connect } from "../../helper/db/connect.js";


export class movis extends connect {
    static instance; 
    constructor() {
        if(typeof movis.instance === "object") {
            return movis.instance;
        }
        super();
        this.collection = this.db.collection("movie");
        movis.instance = this;
        return this;
    }

    async getAllMovis(){
        let res = await this.collection.find({},{}).toArray();
        await this.conexion.closer()
        return res;
    }
}