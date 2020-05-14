import React , {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import firebase from "firebase";
import 'firebase/storage';
import "./InputData.css";
import firebaseConfig from "../../firebase/config.js";


class InputData extends Component {

    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig);
        
        this.state = {
            image: null,
            url: ' ',
            listMovie: []
        }
        this.handleChange = this
        .handleChange
        .bind(this);
        this.handleSimpan = this.handleSimpan.bind(this);
        
    }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot =>{
            const state = snapshot.val();
            this.setState(state);
        })
      }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()  // ambil data dari server API lokal
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState({image});
        }
    }

    simpanDataKeServer = () =>{
        firebase.database()
        .ref("/")
        .set(this.state);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState !== this.state) {
    //         this.simpanDataKeServer();
    //     }
    // }

    handleSimpan = (event) =>{
        let title = this.refs.judulFilm.value;
        let category = this.refs.kategoriFilm.value;
        let trailer = this.refs.trailerFilm.value;
        let description = this.refs.deskripsiFilm.value;
        let uid = this.refs.uid.value;
        const {image} = this.state;
        const storage = firebase.storage();
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot)=>{
            //progress function//
        },(error)=>{
            //error function//
            console.log(error);
            
        },()=>{
            //complete function//
            storage.ref('images').child(image.name).getDownloadURL().then(url =>{
                console.log(url);
                this.setState({url});
                
            })
        } );
        if (uid && title && category && trailer && description) {
            const {listMovie} = this.state;
            const indeksMovie = listMovie.findIndex(data=>{
                return data.uid === uid;
            });
            listMovie[indeksMovie].title = title;
            listMovie[indeksMovie].category = category;
            listMovie[indeksMovie].trailer = trailer;
            listMovie[indeksMovie].description=description;
            this.setState({listMovie});
        }else if (title, category, trailer, description) {
            const uid = new Date().getTime().toString();
            const {listMovie} = this.state;
            listMovie.push({uid, title, category, trailer, description});
            this.setState(listMovie);
        }
        this.refs.judulFilm.value ="";
        this.refs.kategoriFilm.value ="";
        this.refs.trailerFilm.value ="";
        this.refs.deskripsiFilm.value ="";
        this.refs.uid.value="";


    }


    render() {
      return (
        <div className="card">
            <h1>Input data film</h1>
          <Form>
            <Form.Group>
                <Form.Label>Judul Film</Form.Label>
                <Form.Control type="text" id="title" name="title" ref="judulFilm" placeholder="Judul Film.."/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Kategori Film</Form.Label>
                <Form.Control as="select" name="category" id="category" ref="kategoriFilm" selected="Pilih Kategori..">
                    <option value="Aksi">Aksi</option>
                    <option value="Animasi">Animasi</option>
                    <option value="Horor">Horor</option>
                    <option value="Komedi">Komedi</option>
                    <option value="Petualangan">Petualangan</option>
                    <option value="Romantis">Romantis</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Trailer</Form.Label>
                <Form.Control type="text" id="trailer" name="trailer" ref="trailerFilm" placeholder="Trailer Film.."/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control as="textarea" row="5" name="description" ref="deskripsiFilm" id="description" placeholder="Deskripsi Film.."/>
            </Form.Group>
            <Form.Group>
                <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Masukkan Gambar</Form.File.Label>
                    <Form.File.Input id="image" name="image" onChange={this.handleChange}/>
                </Form.File>
            </Form.Group>
            <input type="hidden" name="uid" ref="uid"/>
          </Form>
          <Button variant="primary" onClick={this.handleSimpan}>Simpan</Button>
        </div>
      )
    };
}

export default InputData;