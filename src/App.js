import './App.css';
import { Grid } from "@material-ui/core";
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import { useEffect, useState } from "react";

function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo ] = useState({id: {}, snippet: {}});

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit= {handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4}>
            {/* {VideoList} */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyA3aCUHCnmkbVso4f0kInWr5dVDSKpA_1k",
        q: searchItem,
      }
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
