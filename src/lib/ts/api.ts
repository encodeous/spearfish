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
            let obj = JSON.parse(renderVariables(data)).items
            obj.sort(function(x,y) { return y.weight - x.weight})
            console.log(obj)
            portfolio.set(obj)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export function renderVariables(str : string){
    str = str.replaceAll('$root', apiEndpoint + "/asset")
    str = str.replaceAll('$blog', "/blog")
    return str;
}