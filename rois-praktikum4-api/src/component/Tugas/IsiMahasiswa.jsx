import React, {Component} from 'react';

const IsiMahasiswa=(props) => {
    return (
        <div className="list-mahasiswa">
            <div className="gambar-profil">
                <img src="http://placeimg.com/160/160/animals" alt="Thumnail gambar"/>
            </div>
            <div className="konten-mahasiswa">
                <div className="nama-mahasiswa">{props.nama}</div>
                <p className="nim-mahasiswa">NIM            :{props.nim}</p>
                <p className="alamat-mahasiswa">Alamat      :{props.alamat}</p>
                <p className="hp-mahasiswa">Hp              :{props.hp}</p>
                <p className="angkatan-mahasiswa">Angkatan  :{props.angkatan}</p>
                <p className="status-mahasiswa">Status      :{props.status}</p>
                <button className="btn btn-sm btn-warning">Hapus</button>
            </div>
        </div>
    )
}

export default IsiMahasiswa;
