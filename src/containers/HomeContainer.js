import React, { Component } from 'react'
import TableComponent from "../components/TableComponent";
import {connect} from 'react-redux';
import { getPostList }  from "../actions/postAction";
import { deletePostDetail }  from "../actions/postAction";
import { deleteDataPost}  from "../actions/postAction";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPostList());
    this.props.dispatch(deletePostDetail())
    this.props.dispatch(deleteDataPost())
  }
  render() {
    return (
      <TableComponent />
    )
  }
}

export default connect()(HomeContainer)