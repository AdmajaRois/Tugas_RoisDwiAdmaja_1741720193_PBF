import GetAPI from './Get';
import PostAPI from './Posts';
import DeleteAPI from './Delete'

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataygdirkirim) =>PostAPI('posts', dataygdirkirim)
const deleteNewsBlog = (dataygdihapus) =>DeleteAPI('posts', dataygdihapus)

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;