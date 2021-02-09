import PostForm from "./components/PostForm";
import './App.css';
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";
import Post from "./components/Post"
function App() {
  return (
    <div className="container pt-3">
      <div className="row">
      <div className="col">
       <PostForm/>
      </div>
    </div>
      <div className="row">
        <div className="col">
            <h2>sync posts</h2>
          <Posts posts = {[1, 2, 3]}/>
        </div>

          <div className="col">
              <h2>async posts</h2>

              <FetchedPosts/>
          </div>
      </div>


    </div>
  );
}

export default App;
