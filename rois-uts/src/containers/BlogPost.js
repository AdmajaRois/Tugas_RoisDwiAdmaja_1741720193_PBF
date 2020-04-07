import React, {Component} from 'react';
import Post from '../components/Post'
import { MDBInput, MDBContainer, MDBInputGroup } from 'mdbreact';




class BlogPost extends Component {
    
    state = {
        MyWorld: [],
        insertPost: {
            userId: 1,
            id:1,
            title: "",
            body:""
        }
    }

    GetServerAPI = () =>{
        fetch('http://localhost:4000/posts?_sort=id&_order=desc')
        .then(response => response.json())
        .then(jsonFromAPI =>{
            this.setState({
                MyWorld: jsonFromAPI
            })
        })
    }

    componentDidMount(){
        this.GetServerAPI()
    }

    handleInsertPost = (event) => {
        let fromInsertPost = {...this.state.insertPost};
        let timestamp = new Date().getTime();
        fromInsertPost['id'] = timestamp;
        fromInsertPost[event.target.name] = event.target.value;
        this.setState ({
            insertPost: fromInsertPost
        })
    }

    handleSavePost = () =>{
        fetch('http://localhost:4000/posts', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state.insertPost)
        })
        .then((Response)=>{
            this.GetServerAPI();
        })
    }

    handleDeletePost= (id) => {
        fetch(`http://localhost:4000/posts/${id}`, {method: 'DELETE'})
        .then(res => {
            console.log(this.GetServerAPI());
        })
    }

    render() {
      return (
        <div className="container" style={{marginTop: "5em"}}>
        <div className="post-artikel">
            <div className="form pb-2 border-bottom">
                <div className="form-group row">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleInsertPost} placeholder="Masukkan Judul.."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleInsertPost} placeholder="Apa yang anda pikirkan ?"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSavePost}>Simpan</button>
                </div>
                <br/>
                {
                    this.state.MyWorld.map(post => {
                        return <Post key={post.id} 
                                title={post.title} 
                                body={post.body}
                                idPost = {post.id}
                                deletePost={this.handleDeletePost}/>
                    })
                }
        </div>
        </div>
      )
    };
}


export default BlogPost;