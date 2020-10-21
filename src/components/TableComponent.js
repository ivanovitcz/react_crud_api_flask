import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Button, Row, Col } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  headerStyle: () => {
    return { width: "5%" };
  }
}, {
  dataField: 'author',
  text: 'Author',
  sort: true,
}, {
  dataField: 'content',
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
  
          
          <Button color="danger" className="mr-2" >
            <FontAwesomeIcon icon={faTrash}/> Delete
          </Button>
      </div>
    );
  }
}];

const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];

const { SearchBar } = Search;

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  }
}

const TableComponent = (props) => {
  return (
    <Container className="mt-5">
      <ToolkitProvider 
        keyField="id"
        defaultSorted={defaultSorted}
        data={props.posts}
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
      </ToolkitProvider>
    </Container>
  );
}

export default connect(mapStateToProps,null)(TableComponent)
