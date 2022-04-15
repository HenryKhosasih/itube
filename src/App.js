import './App.css';
import { Grid } from "@material-ui/core";
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit= {handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            {/* {VideoDetail} */}
          </Grid>
          <Grid item xs={4}>
            {/* {VideoList} */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyA3aCUHCnmkbVso4f0kInWr5dVDSKpA_1k",
        q: searchItem,
      }
    });
    console.log(response);
  }
}

export default App;
