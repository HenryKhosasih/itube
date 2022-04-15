import './App.css';
import { Grid } from "@material-ui/core";
import youtube from './api/youtube';

function App() {
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            {/* {SearchBar} */}
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
}

export default App;
