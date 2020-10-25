import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Button, Spinner } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import {deletePost} from '../actions/postAction';



const handleClick = (dispatch, id) => {
  swal({
    title: "Apa Anda Yakin?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deletePost(id))
      swal("Poof! Your imaginary data has been deleted!", {
        icon: "success",
      }).then(() => { window.location.reload(true) });
    } else {
      swal("Your imaginary data is safe!");
    }
  });
}

const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];

const { SearchBar } = Search;

const mapStateToProps = (state) => {
  return {
    getPostList: state.posts.getPostList,
    errorPostList: state.posts.errorPostList,
  }
}

const TableComponent = (props) => {
  const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    }
  }, {
    dataField: 'user_name',
    text: 'Author',
    sort: true,
  }, {
    dataField: 'post_content',
    text: 'Content',
    sort: true
  }, {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"post/detail/"+row.id}>
              <Button color="info" className="mr-2">
                <FontAwesomeIcon icon={faInfo}/> Detail
              </Button>
            </Link>
            
            <Link to={"post/edit/"+row.id}>
              <Button color="warning" className="mr-2">
                <FontAwesomeIcon icon={faEdit}/> Edit
              </Button>
            </Link>
    
            
            <Button color="danger" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash}/> Delete
            </Button>
        </div>
      );
    }
  }];
  return (
    <Container className="mt-5">
      { ( props.getPostList ) ? 
      <ToolkitProvider 
        keyField="id"
        defaultSorted={defaultSorted}
        data={props.getPostList}
        columns={columns}
        search>
        {(props) => (
          <div>
            <div className="row">
              <div className="col-4">
                <Link to={"post/create"}>
                  <Button color="info">
                    <FontAwesomeIcon icon={faUserPlus} /> Create
                  </Button>
                </Link>
              </div>
              <div className="col-4"></div>
              <div className="col-4">
                <SearchBar {...props.searchProps} placeholder="Search Data" />
              </div>
            </div>
            <hr />
            <BootstrapTable {...props.baseProps} pagination={paginationFactory()}/>
          </div>
        )}
      </ToolkitProvider> :
      <div className="text-center">
      { props.errorPostList ? <h1> {props.errorPostList} </h1> :  <Spinner color="dark" /> }
        </div> 
      }
    </Container>
  );
}

export default connect(mapStateToProps,null)(TableComponent)
