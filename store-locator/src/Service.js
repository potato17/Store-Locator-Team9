import axios from "axios";
// import { post } from "../server/routes/StoreRouter";

const url = "http://localhost:5000/store/category/";
// const urlSearch = ""

class Service {
    static getCategory(category_name) { //Pass the collection name in the parameter to fetch all the store in the category
        return axios.get(`${url}${category_name}`);

    }
    static searchStore(category_name, text_search) { //pass category name and pass the text_search #recommend Watcher
        return axios.get(`${url}/${category_name}/search/${text_search}`)
    }
    static findDetail(id) {
            return axios.get(`${url}/detail/${id}`)
        }
        // createAcc(){
        //     return axios.post({
        //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //       data: formUrlEncoded({
        //         username: "***",
        //         password: "***",
        //         email: "authorization_code",
        //         redirect_uri: "http://localhost:8080/",
        //         code: "***",
        //       }),
        //     });
        // }
}
export default Service;