import React from "react";
import Post from "./Post";
import Posts from "./Posts";
import {useDispatch,useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";

export default ( ) => {
    const dispatch = useDispatch()
   const posts = useSelector(state =>
       state.posts.fetchedPosts
   )
    if (!posts.length) {
        return <button  onClick={() => dispatch(fetchPosts())} className='btn-success btn'>Download posts</button>
    }
    return posts.map(el =><Post post = {el} key = {el.id}/>)
}

