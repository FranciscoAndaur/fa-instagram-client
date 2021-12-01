import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Components/Home"
import UploadPosts from "./Components/UploadPosts";
import Posts from "./Containers/Posts";

function App() {
  return (
    <div>
      hi ur cute
      <Router>
        <Switch>
          <Route exact path="/" component={<Home/>} ></Route>
          <Route exact path="/UploadPosts" component={<UploadPosts/>} ></Route>
          <Route exact path="/Posts" component={<Posts/>} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
