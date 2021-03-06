import React, {Component} from 'react';
import './Tugas.css';
import IsiMahasiswa from '../../component/Tugas/IsiMahasiswa';

class Tugas extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id:1,
            NIM:1,
            nama:"",
            alamat:"",
            hp:"",
            angkatan:2000,
            status: ""
        }
    }

    ambilDataDariAPI = () => {
        fetch('http://localhost:4000/mahasiswa?_sort=id&_order=desc')
        .then(response => response.json())
        .then(jsonAmbilApi => {
            this.setState({
                listMahasiswa: jsonAmbilApi
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariAPI()
    }

    handelTambahMhs = (event) => {
        let formInsertMhs = {...this.state.insertMahasiswa};
        let timeStamp = new Date().getTime();
        formInsertMhs['id'] = timeStamp;
        formInsertMhs[event.target.name] = event.target.value;
        formInsertMhs['status'] = event.target.value;

        this.setState ({
            insertMahasiswa: formInsertMhs
        })
    }

    handelSimpan =()=>{
        fetch('http://localhost:4000/mahasiswa', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(this.state.insertMahasiswa)
        })
        .then((Response)=>{
            this.ambilDataDariAPI();
        })
    }

    handleHapusMhs = (id) => {
        fetch(`http://localhost:4000/mahasiswa/${id}`, {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariAPI();
        })
    } 

    render() {
        return(
            <div className="body">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="NIM" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handelTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">NAMA</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handelTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">ALAMAT</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handelTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">HP</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handelTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">ANGKATAN</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handelTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">STATUS</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handelTambahMhs}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handelSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa =>{
                        return <IsiMahasiswa key={mahasiswa.id}
                                    NIM = {mahasiswa.NIM}
                                    nama = {mahasiswa.nama}
                                    alamat = {mahasiswa.alamat}
                                    hp = {mahasiswa.hp}
                                    angkatan = {mahasiswa.angkatan}
                                    status = {mahasiswa.status}
                                    idMahasiswa = {mahasiswa.id}
                                    hapusMhs={this.handleHapusMhs} />
                    })
                }
            </div>
        )
    }
}

export default Tugas;