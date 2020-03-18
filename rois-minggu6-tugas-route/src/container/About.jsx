import React from "react";
import Background from "./background.jpg"
import './About.css';
import {  MDBCard, MDBCardBody, MDBView, MDBMask, MDBContainer } from "mdbreact";

const TeamPage = () => {
    var cardStyle = {marginTop: "4rem"};
  return (
<MDBView src={Background}>
    <MDBMask className="rgba-black-light"/>
        <MDBContainer className="d-flex justify-content-center align-items-center"
            style={{height:"100%", width:"100%", paddingTop:"7rem"}}>
            <MDBCard className="my-5 px-5 pb-5 text-center">
                <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold my-5">Tentang Kami</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula turpis augue, id finibus lectus pretium sed. 
                        Cras cursus arcu ante, ut viverra justo tristique non. Nullam sodales justo lorem, quis feugiat ligula sollicitudin vitae. 
                        Pellentesque rutrum ipsum non orci vehicula luctus. Quisque ut enim sodales, scelerisque mi sed, pharetra tellus. 
                        Duis ut faucibus felis, nec bibendum metus. Praesent venenatis mi massa, at fringilla dui sodales at. 
                        Integer quis nisl quis nibh laoreet cursus ut vitae risus. Curabitur dolor quam, pulvinar id sapien id, porttitor pretium odio.
                    </p>
                    <p>
                        Vestibulum id odio sit amet justo posuere convallis ut et quam. Fusce in sapien ut enim dictum vulputate. 
                        Duis blandit mauris et rutrum elementum. Aliquam consequat, nisi id tempus scelerisque, nisl arcu laoreet metus, ac interdum ex orci quis nisl.
                        Morbi euismod consectetur ligula vel posuere. Maecenas eros nibh, pellentesque sed risus eleifend, lacinia tempor libero. 
                        Nunc et tempor nunc. Maecenas tincidunt ligula semper, viverra nisi at, euismod quam. Mauris volutpat nulla ut nunc interdum faucibus. 
                        Integer dignissim nibh in suscipit ultricies. Curabitur magna justo, auctor id ante a, fringilla vehicula mi. 
                        Cras vel diam sit amet orci sodales efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Vivamus ut purus ac dolor rutrum vulputate.
                    </p>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    </MDBView>
  );
}

export default TeamPage;
