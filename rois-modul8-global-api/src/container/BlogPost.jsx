import React, { Component } from "react";
import './BlogPost.css';
import Post from "../component/BlogPost/Post";
import API from "../services";

class BlogPost extends Component {
    state = {
        listArtikel: [],
        insertArtikel: {
            userId:1,
            id:1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () =>{
       API.getNewsBlog().then(result => {
           this.setState({
               listArtikel: result
           })
       })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3500/posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
        .then((Response)=>{
            this.ambilDataDariServerAPI();
        })
    }

    render() {
      return (
        <div>
          
        </div>
      )
    };
}