import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'

export default class CreatePostContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <BackComponent/>
          <h1>Create Post</h1>
        </Container>
      </div>
    )
  }
}
