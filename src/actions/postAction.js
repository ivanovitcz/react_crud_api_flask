import axios from "axios";

export const GET_POST_LIST = "GET_POST_LIST";
export const GET_POST_DETAIL = "GET_POST_DETAIL";
export const POST_POST_CREATE = "GET_POST_CREATE";

export const getPostList = () => {
  return dispatch => {
    axios
      .get("http://localhost:5000/post")
      .then(function (response) {
        dispatch({
          type: GET_POST_LIST,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
        // handle success
        //console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: GET_POST_LIST,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
        // handle error
        //console.log(error);
      })
  }
}

export const getPostDetail = (id) => {
  return dispatch => {
    axios
      .get("http://localhost:5000/post/"+id)
      .then(function (response) {
        dispatch({
          type: GET_POST_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: GET_POST_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
        // handle error
        // console.log(error);
      })
  }
}

export const deletePostDetail = () => {
  return dispatch => {
    dispatch({
      type: GET_POST_DETAIL,
      payload: {
        data: false,
        errorMessage: false
      }
    })
  }
}

export const postPostCreate = (data) => {
  return dispatch => {
    axios
      .post("http://localhost:5000/post/add",
      data)
      .then(function (response) {
        dispatch({
          type: POST_POST_CREATE,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
        // handle success
        //console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: POST_POST_CREATE,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
        // handle error
        //console.log(error);
      })
  }
}

export const deleteDataPost = () => {
  return dispatch => {
    dispatch({
      type: POST_POST_CREATE,
      payload: {
        data: false,
        errorMessage: false
      }
    })

    dispatch({
      type: POST_POST_CREATE,
      payload: {
        data: false,
        errorMessage: false
      }
    })
  }

  
}

export const deletePost = (id) => {
  return dispatch => {
    axios
      .delete("http://localhost:5000/post/"+id)
      .then(function (response) {
        console.log(response);
        
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        
        // handle error
        // console.log(error);
      })
  }
}