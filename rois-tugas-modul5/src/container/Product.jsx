import React from 'react';
import {Link,
        Route,
        useHistory,
        Redirect,
        useLocation} from 'react-router-dom';
import Footware from './footware/compass.jpg';
import { MDBContainer, MDBNav,MDBCol, MDBNavItem, MDBNavLink, MDBTabContent, MDBTabPane, MDBRow, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn } from 'mdbreact';

const products = [
    {
        name:'Footware',
        id: 'footware',
        resources:[
            {
                name:'Sepatu Compass',
                id:'sepatu-compass',
                description: "ini adalah sepatu bagus",
                harga: 20000,
                gambar: Footware
            },
            {
                name:'Sandal Batik',
                id:'sandal-batik',
                description: "ini adalah sandal batik",
                harga: 10000,
                gambar: Footware
            },
            {
                name: 'Sepatu Ventela',
                id: 'sepatu-ventela',
                description: 'ini adalah merk bagus',
                harga: 50000,
                gambar: Footware
            }
        ]
    },
    {
        name: 'Shirt',
        id: 'shirt',
        resources: [
            {
                name:'Batik bagus',
                id:'batik-bagus',
                description: "ini adalah batik bagus",
                harga:30000,
                gambar: require('./footware/compass.jpg')
            },
            {
                name:'Kebaya Batik',
                id:'kebaya-batik',
                description: "ini adalah batik bagus",
                harga:35000,
                gambar: require('./footware/compass.jpg')
            }
        ]
        
    }
]


function Resources({match}) {
    const product = products.find(({id})=>id===match.params.productId)
        .resources.find(({id})=>id===match.params.subId)

    return(
        <div>
            <img src={product.gambar}/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Rp.{product.harga}</p>
            <button type="submit" className="btn-primary">Beli</button>
        </div>
    )
}
export default function Products({match}) {    
    return (        
        <MDBContainer className="classic-tabs" style={{paddingTop:"10rem"}}>
            <MDBNav classicTabs color="orange" className="mt-5">
                {products.map(({name, id})=>(
                    <MDBNavItem key={id}>
                        <MDBNavLink to={`/products/${id}`}>
                            {name}
                        </MDBNavLink>  
                    </MDBNavItem>
                ))}
            </MDBNav>
            <MDBTabContent className="card mb-5">
                <MDBTabPane>
                    <Route exact path={'/products'}><h2>Pilih Kategori</h2></Route> 
                    <Route path={`/products/:productId`} component={Product}/>
                </MDBTabPane>
            </MDBTabContent>
        </MDBContainer>
    );
}

function Product({match}) {
    const product = products.find(({id})=> id === match.params.productId)
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                {product.name}
            </h2>
            <MDBRow>
            {product.resources.map((sub)=>(
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                    <MDBCard cascade narrow ecommerce>
                        <MDBCardImage
                            cascade
                            src={Footware}
                            top
                            alt="gambar"
                            overlay="white-slight"/>
                        <MDBCardBody cascade className="text-center">
                            <Link to={`/products/${match.params.productId}/${sub.id}`} className="grey-text">
                                <h5>{sub.name}</h5>
                            </Link>
                            <MDBCardTitle>
                                <Link to={`/products/${match.params.productId}/${sub.id}`}>
                                    <strong>{sub.name}</strong>
                                </Link>
                            </MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}
            </MDBRow>
            <Route exact path={`/products/:productId`}></Route>
            <Route path={`/products/:productId/:subId`} component={Resources}/> 
        </section>
     )
}
