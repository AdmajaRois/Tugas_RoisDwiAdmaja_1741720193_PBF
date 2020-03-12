import React from 'react';
import {MDBMask, MDBView, MDBContainer, MDBRow, MDBCol}  from 'mdbreact';


function Home(){
    return (
        <MDBView src="home_wall.jpg">
            <MDBMask overlay="indigo-slight" className="rgba-black-light">
               <MDBContainer className="d-flex justify-content align-items-center"
                   style={{height: '100%', width:'100%', paddingTop:'17em'}}>
                    <MDBRow>
                        <MDBCol md='12' className="mb-4 white-text text-center">
                            <h1 className="h1-responsive white-text text-center">
                                Selamat datang di MarketLokal
                            </h1>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBMask>
        </MDBView>
    )
}

export default Home