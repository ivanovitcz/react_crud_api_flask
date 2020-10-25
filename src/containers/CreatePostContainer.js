import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import FormComponent from '../components/FormComponent'
import {connect} from 'react-redux';
import { postPostCreate } from '../actions/postAction';
import swal from 'sweetalert';
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    getResponDataPost: state.posts.getResponDataPost,
    errorResponDataPost: state.posts.errorResponDataPost
  }
}

class CreatePostContainer extends Component {
  state = {
    redirect: false,
  }

  setRedirect = () => {
    this.setState({
         redirect: true
     })
  }

  doRedirect = () => {
    console.log('====================================');
    console.log("YES");
    console.log('====================================');
    return <Redirect to="/" />
  }

  handleSubmit(data) {
    this.props.dispatch(postPostCreate(data))
  }
  
  render() {  

    if(this.props.getResponDataPost || this.props.errorResponDataPost) {
      if(this.props.errorResponDataPost) {
        swal("Post Created Failed!", this.props.errorResponDataPost, "error");
      } else {
        swal("Post Created Success!", this.props.getResponDataPost, "success");
      }
    }

    if(this.props.getResponDataPost || this.props.errorResponDataPost) { 
      return <Redirect to="/" />
    }

    
    return (
      <div>
        <Container>
          <BackComponent/>
          <h1>Create Post</h1>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
        </Container>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(CreatePostContainer)