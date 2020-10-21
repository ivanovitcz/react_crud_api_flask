import {combineReducers} from 'redux';
import posts from './posts';
import titleNavbar from "./titleNavbar";
export default combineReducers({
  posts,
  titleNavbar
})