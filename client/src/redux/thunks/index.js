import axios from 'axios'
import { setPosts } from '../slices'


export const getPosts = () => dispatch =>
  axios
    .get('http://localhost:8888/api/posts')
    .then(res => dispatch(setPosts(res.data)))
    .catch(err => console.log(err))