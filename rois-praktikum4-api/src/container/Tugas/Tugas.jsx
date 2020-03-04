import React, {Component} from 'react';
import './Tugas.css';
import IsiMahasiswa from '../../component/Tugas/IsiMahasiswa';

class Tugas extends Component {
    state = {
        listArtikel: [],
        insertArtikel: {
            id:1,
            NIM:"",
            nama:"",
            alamat:"",
            hp:"",
            angkatan:"",
            status: ""
        }
    }

    ambilDataDariAPI = () => {
        fetch('http://localhost:4000/mahasiswa?_sort=id$_order=desc')
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
                            <select className="form-control">
                                <option>AKTIF</option>
                                <option>LULUS</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handelSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listArtikel.map(mahasiswa =>{
                        return <IsiMahasiswa key={mahasiswa.id}
                                    nim = {mahasiswa.nim}
                                    nama = {mahasiswa.nama}
                                    alamat = {mahasiswa.alamat}
                                    hp = {mahasiswa.hp}
                                    angkatan = {mahasiswa.angkatan}
                                    status = {mahasiswa.status} />
                    })
                }
            </div>
        )
    }
}

export default Tugas;