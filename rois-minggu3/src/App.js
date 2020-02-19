import React from 'react';
import './App.css';
import foto from './jobs.jpg'

function App() {
  return (
    <div>
      <Navbar />
      <Body/>
      <Footer />
    </div>
  );
}

const Navbar = () => {
  return(
    <div className="App">
    <header>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Action 1</a>
                <a class="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
          <form inline>
              <input type="text" className="mr-sm-2" name="" id="" aria-describedby="helpId" placeholder=""/>
              <button type="button" class="btn btn-outline-primary">Search</button>
          </form>
        </div>
      </nav>
    </header>

    <div className="container"> 

    </div>

    </div>
  )
}

const Body = () => {
  return (
    <div class="container">
      <div class="txtTitle">
        <h1>BIODATA</h1>
      </div>
      <div class="card">
      <table class="table-noborder">
      <tbody>
        <tr>
          <td rowspan="10" width="180px">
            <img src={foto} width="160px" height="200px"></img>
          </td>
        </tr>
        <tr>
          <td>Nama</td>
          <td>:</td>
          <td>Rois Dwi Admaja</td>
        </tr>
        <tr>
          <td>TTL</td>
          <td>:</td>
          <td>17 Agustus 1998</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>:</td>
          <td>Laki-Laki</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>:</td>
          <td>Ds. Sumberagung, kec. Rejotangan, Kab. Tulungagung</td>
        </tr>
        <tr>
          <td>No. Hp</td>
          <td>:</td>
          <td>081139174677</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>:</td>
          <td>Mahasiswa</td>
        </tr>
        <tr>
          <td>Hobi</td>
          <td>:</td>
          <td>Jogging</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>:</td>
          <td>rois.admj@gmail.com</td>
        </tr>
        <tr>
          <td>Github</td>
          <td>:</td>
          <td>AdmajaRois</td>
        </tr>
      </tbody>
    </table>
      </div>
     
    </div>
  )
}

const Footer = () => {
  return(
    <footer class="page-footer font-small blue">
    <div class="footer-copyright text-left py-3">
      © 2020 Copyright:
      <a> rois.admj@gmail.com</a>
    </div>
  </footer>
  )
}


export default App;
