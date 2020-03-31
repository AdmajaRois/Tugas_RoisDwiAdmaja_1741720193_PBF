import React from "react";
import {MDBInput} from "mdbreact";

class CreatePost extends React.Component {
    state = {
       title: '',
       body: ''
    }

    handleInput = (event) => {
        event.persist()
        this.setState({
            title: event.target.value,
            body: event.target.value
        })
    }
}