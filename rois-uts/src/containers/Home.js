import React,{Component} from 'react';
import Background from '../assets/background.jpg';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBView, 
        MDBMask,
        MDBRow,
        MDBCol,
        MDBLink,
        MDBIcon,
        MDBBtn,
        MDBContainer} from 'mdbreact';

export default function Home(){
    return(
    <MDBView src={Background}>
        <MDBMask className='gradient'>

        </MDBMask>{' '}
        <MDBContainer
            className='d-flex justify-content-center align-items-center px-md-3 px-sm-0'
            style={{height:'100vh', width:'100%'}}>
                <MDBRow>
                    <MDBCol md='12' className='mb-4 white-text text-center'>
                        <h3 className='display-3 font-weight-bold mb-0 pt-md-5'>
                            My World
                        </h3>
                        <hr className='hr-light my-4 w-75'/>
                        <h4 className='subtext-header mt-2 mb-4'>
                            Buat post dan todo harian kamu 
                        </h4>
                        <MDBLink to='/CreatePost'>
                            <MDBBtn outline rounded color='white'>
                                <MDBIcon icon='blog'/> Post Sekarang
                            </MDBBtn>
                        </MDBLink>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
    </MDBView>
    )
}