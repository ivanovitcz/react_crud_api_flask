import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import {connect} from 'react-redux';
import { getPostDetail } from '../actions/postAction';
import DetailPostComponent from '../components/DetailPostComponent';

class DetailPostContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPostDetail(this.props.match.params.id));
  }
  render() {
    return (
      <div>
        <Container>
          <BackComponent/>
          <h1>Detail Post</h1>
          <DetailPostComponent/>
        </Container>
      </div>
    )
  }
}

export default connect()(DetailPostContainer)