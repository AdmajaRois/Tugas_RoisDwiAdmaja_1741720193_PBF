import React from 'react';
import Background from "./background.jpg"
import {MDBMask, MDBView, MDBContainer, MDBRow, MDBCol}  from 'mdbreact';


function Home(){
    return (
        <MDBView src={Background}>
         <MDBMask className="rgba-black-light" />
         <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{height: "100%", width:"100%", paddingTop:"10rem"}}>
            <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                    <h1 className="h1-responsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">
                        Selamat datang di LokalPride
                    </h1>
                    <hr className="hr-light my-4"/>
                    <h5 className="text-uppercase mb-4 white-text">
                        <strong>Produk lokal berkualitas dengan harga yang bersahabat</strong>
                    </h5>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBView>
    )
}

export default Home