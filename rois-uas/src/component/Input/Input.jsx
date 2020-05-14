import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from  'react-bootstrap/Button';
import {myFirebase} from '../../firebase/firebase';
import './Input.css';



class InputPage extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            listMovie:[]
        }
 
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
    // handleBack=(e)=>{
    //     history.push("/");
    // }
    render() {
      return (
        <div>
        <div className="card">
        <div className="card-header">
            <h2>Input data film</h2>
        </div>
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
        </div>
        </div>
      )
    };
    
}

export default InputPage;