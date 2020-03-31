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

    handleDeletePost= (data) => {
        fetch(`http://localhost:4000/posts/${data}`, {method: 'DELETE'})
        .then(res => {
            console.log(this.GetServerAPI());
        })
    }

    render() {
      return (
        <MDBContainer className="px-md-3 px-sm-0"
            style={{marginTop:"5em"}}>
            <MDBInputGroup type="text" containerClassName="mb-3" prepend="judul" id="title" name="title" onChange={this.handleInsertPost}/>
            <MDBInputGroup prepend="Isi" type="textarea"  id="body" name="body" onChange={this.handleInsertPost}/>
            <button type="submit" className="btn btn-primary" onClick={this.handleSavePost}>Simpan</button>
                
                <h2>Daftar Artikel</h2>
                {
                    this.state.MyWorld.map(post => {
                        return <Post key={post.id} 
                                title={post.title} 
                                body={post.body}
                                idPost = {post.id}
                                deletePost={this.handleDeletePost}/>
                    })
                }
    
        </MDBContainer>
      )
    };
}


export default BlogPost;