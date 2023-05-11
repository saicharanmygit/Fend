import axios from "axios";
// const Add_URL={http://localhost:8081/header/addPortfolio};

class HeaderService{
    addPortfolio(portfolio){
        return axios.post(Add_URL,portfolio)
    }
}
export default new HeaderService();