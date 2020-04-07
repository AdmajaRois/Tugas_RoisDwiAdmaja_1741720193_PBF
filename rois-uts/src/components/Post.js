import React from 'react';
import { MDBCard, MDBCardBody, MDBRow,MDBMask, MDBCol, MDBView, MDBBtn, MDBContainer } from 'mdbreact';

const Post = (props) => {
    return (
        <MDBCard className="my-5px px-5 pb-5">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Post Terbaru
                </h2>
      
        <MDBRow>
            <MDBCol lg="5" xl="4">
                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img className="fluid" src="https://placeimg.com/781/521/tech" alt="thumnail post"/>
                    <a href="#!">
                        <MDBMask overlay="white-slight"/>
                    </a>
                </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
                <h3 className="font-weight-bold mb-3 p-0">
                    <strong>{props.title}</strong>
                </h3>
                <p className="dark-grey-text">
                    {props.body}
                </p>
                <MDBBtn color="danger" size="md" onClick={()=>props.deletePost(props.idPost)}>
                    Hapus
                </MDBBtn>
            </MDBCol>
        </MDBRow>
        </MDBCardBody>
        </MDBCard>
    )
}

export default Post;