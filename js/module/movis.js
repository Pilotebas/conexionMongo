import { connect } from "../../helpers/db/connect.js";


export class movis extends connect {
    static instance; 
    constructor() {
        if(typeof movis.instance === "object") {
            return movis.instance;
        }
        super();
        this.collection = this.db.collection("movis");
        movis.instance = this;
        return this;
    }

    async getAllActionMovies() {
        let res = await this.collection.aggregate([
            { $match: { genre: "Accion" } }, 
            { $project: { _id: 0, name: 1 } } 
        ]).toArray();
        return res;
    }

}