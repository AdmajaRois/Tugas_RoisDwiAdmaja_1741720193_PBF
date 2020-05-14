import React from "react";
import "./Post.css";


const Post = (props) => {
    return (
        <div className="card" style={{width:"400px"}}>
            <iframe wdith="560" height="300" title={props.judul} src={props.trailer} allowFullScreen></iframe>
            <div className="card-body">
                <h4 className="card-title">{props.judul}</h4>
                <p className="card-text">{props.deskripsi}</p>
                <button className="btn btn-danger" onClick={()=>{
                    if(window.confirm('apakah anda yakin ?'))props.hapusFilm(props.idMovie)}}>
                Hapus</button>
            </div>
            <div className="card-footer">Kategori: {props.kategori}</div>
        </div>
    )
}

export default Post;