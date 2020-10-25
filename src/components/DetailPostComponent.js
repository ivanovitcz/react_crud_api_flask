import React from 'react'
import {connect} from 'react-redux';
import { Table } from 'reactstrap'

const mapStateToProps = (state) => {
  return {
    getPostDetail: state.posts.getPostDetail,
    errorPostDetail: state.posts.errorPostDetail
  }
}

const DetailPostComponent = (props) => {
  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <td>ID Content</td>
            <td>:</td>
            <td>{props.getPostDetail.id}</td>
          </tr>
          <tr>
            <td>Author</td>
            <td>:</td>
            <td>{props.getPostDetail.user_name}</td>
          </tr>
          <tr>
            <td>Content</td>
            <td>:</td>
            <td>{props.getPostDetail.post_content}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default connect(mapStateToProps, null)(DetailPostComponent)
