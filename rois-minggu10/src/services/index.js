import GetAPI from './Get';
import PostAPI from './Posts';
import DeleteAPI from './Delete';


const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim); 

const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const API ={
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;