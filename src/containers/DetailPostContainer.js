import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'

export default class DetailPostContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <BackComponent/>
          <h1>Detail Post</h1>
        </Container>
      </div>
    )
  }
}
