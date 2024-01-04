import {apiEndpoint} from "./config";
import {portfolio} from "./store";

export function loadData(){
    fetch(apiEndpoint + '/jsonconfig/config/portfolio.yaml')
        .then(result => {
            if (!result.ok) {
                throw new Error('Network response was not ok');
            }
            return result.json()
        })
        .then(data =>{
            let obj = JSON.parse(data).items
            obj.sort(function(x,y) { return y.weight - x.weight})
            console.log(obj)
            portfolio.set(obj)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}