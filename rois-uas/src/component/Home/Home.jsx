import React, { Component } from "react";
import Header from '../Headers/header';
import Post from '../../container/Post';
import {myFirebase} from "../../firebase/firebase";
import {CardDeck, Form, Button, Card, CardColumns} from 'react-bootstrap';
import "./Home.css";

class Home extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            listMovie:[]
        }

    }

    ambilDataDariServer = () => {
        let ref = myFirebase.database().ref("/");
        ref.on("value", snapshot =>{
            const state = snapshot.val();
            this.setState(state);
        })
    }
    
    componentDidMount() {
        this.ambilDataDariServer();
    }
    
    simpanDataKeServer=()=>{
        myFirebase.database()
        .ref("/")
        .set(this.state);
    }

    componentDidUpdate=(prevProps,prevState)=>{
        if (prevState !== this.state) {
            this.simpanDataKeServer();
        }
    }

    handleHapus=(idMovie)=>{
        const {listMovie} = this.state;
        const newState = listMovie.filter(data=>{
            return data.uid !== idMovie;
        });
        this.setState({listMovie: newState});
    }

    handleSimpan=(event)=>{
        let title = this.refs.judulFilm.value;
        let category = this.refs.kategoriFilm.value;
        let trailer = this.refs.trailerFilm.value;
        let description = this.refs.deskripsiFilm.value;
        let uid = this.refs.uid.value;

        if (uid && title && category && trailer && description) {
            const {listMovie} =this.state;
            const indexMovie = listMovie.findIndex(data=>{
                return data.uid === uid;
            });
            listMovie[indexMovie].title = title;
            listMovie[indexMovie].category = category;
            listMovie[indexMovie].trailer = trailer;
            listMovie[indexMovie].description = description;
            this.setState({listMovie});
        }else if (title && category && trailer && description) {
            const uid = new Date().getTime().toString();
            const {listMovie} = this.state;
            listMovie.push({uid, title, category, trailer, description});
            this.setState({listMovie});
        }
        this.refs.judulFilm.value = "";
        this.refs.kategoriFilm.value = "";
        this.refs.trailerFilm.value = "";
        this.refs.deskripsiFilm.value = "";
        this.refs.uid.value = "";
    }


    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                <Card>
                <Card.Header>
                    <h2>Input data film</h2>
                </Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group >
                        <Form.Label>Judul</Form.Label>
                        <Form.Control type="text" id="title" name="title" ref="judulFilm" placeholder="Masukkan judul film" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Kategori</Form.Label>
                        <Form.Control as="select" id="category" name="category" ref="kategoriFilm" placeholder="Kategori..">
                            <option value="aksi">Aksi</option>
                            <option value="animasi">Animasi</option>
                            <option value="horor">Horor</option>
                            <option value="komedi">Komedi</option>
                            <option value="petualangan">Petualangan</option>
                            <option value="romantis">Romantis</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Link Trailer</Form.Label>
                        <Form.Control type="text" id="trailer" name="trailer" ref="trailerFilm" placeholder="Masukkan link trailer"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control as="textarea" rows="3" id="description"  ref="deskripsiFilm" name="description" />
                    </Form.Group>
                    <Form.Control type="hidden" name="uid" id="uid" ref="uid"/>
                </Form>
                <Button variant="primary" onClick={this.handleSimpan}>Simpan</Button>
                </Card.Body>
                </Card>
                </div>
                <h2 style={{textAlign:"center"}}>Daftar Film</h2>
                <CardDeck style={{padding: "20px"}}>
                    <CardColumns>
                {
                    this.state.listMovie.map(film =>{
                        return <Post key={film.uid} judul={film.title}
                        kategori={film.category} trailer={film.trailer} idMovie={film.uid}
                        deskripsi={film.description} hapusFilm={this.handleHapus}/>
                    })
                }
                </CardColumns>
                </CardDeck>
            </div>
        );
    }
}

export default Home;