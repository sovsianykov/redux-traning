import React from "react";
import Post from "./Post";
import Posts from "./Posts";

export default ({ posts }) => {
    if (!posts.length) {
        return <button className='btn-success btn'>Download posts</button>
    }
    return posts.map(el =><Post post = {el} key = {el}/>)
}

