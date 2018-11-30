import axios from 'axios';

const KEY = 'AIzaSyBah9dG1Eai1ERjyAVqIJzvii7LVa52nX0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})