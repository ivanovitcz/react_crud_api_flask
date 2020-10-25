import {combineReducers} from 'redux';
import posts from './posts';
import titleNavbar from "./titleNavbar";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  posts,
  titleNavbar,
  form: formReducer
})