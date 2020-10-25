const PostValidation = (values) => {
  const error = {};

  if(!values.user || values.user === "") {
    error.nama = "User Harus Diiisi"
  }

  if(!values.post || values.post === "") {
    error.alamat = "Post Harus Diiisi"
  }


  return error
}

export default PostValidation
