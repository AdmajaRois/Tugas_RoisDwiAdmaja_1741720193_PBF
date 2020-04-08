const domainPatch = 'http://localhost:3500';
const GetAPI = (path) =>{
    const promise = new Promise((resolve, reject)=>{
        fetch(`${domainPath}/${path}`, {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
    })
    return promise;
}

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = () => PostAPI('posts', dataYDikirim);

const API = {
    getNewsBlog,
    postNewsBlog
}

export default API;