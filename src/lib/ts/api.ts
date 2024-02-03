import {apiEndpoint} from "./config";
import {portfolio} from "./store";

export function loadData(){
    fetch(apiEndpoint + '/jsonconfig/config/portfolio.yaml')
        .then(result => {
            if (!result.ok) {
                throw new Error('Network response was not ok');
            }
            return result.json();
        })
        .then(data =>{
            let obj = JSON.parse(renderVariables(data)).items
            obj.sort(function(x,y) { return y.weight - x.weight});
            console.log(obj);
            portfolio.set(obj);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export async function loadBlogs(){
    let value = await fetch(apiEndpoint + '/blogs');
    return JSON.parse(await value.json());
}

export async function loadBlog(blogId : string){
    let value = await fetch(apiEndpoint + '/blog/' + blogId);
    let obj = JSON.parse(await value.json());
    obj.rendered = renderVariables(obj.rendered);
    return obj;
}

export function renderVariables(str : string){
    str = str.replaceAll(/(?<!\\)(\$root)/g, apiEndpoint + "/asset");
    str = str.replaceAll(/(?<!\\)(\$blog)/g, "/blog");

    // remove the escape slash from escaped characters
    // i.e \$ -> $
    // but \\$ -> \$
    str = str.replaceAll(/(?<!\\)(\\\$)/g, "$");
    str = str.replaceAll(/\\\\$/g, "\\$");
    return str;
}