import React from "react";
import Post from "./Post";

export default ({posts}) => {
    if (!posts.length) {
            return <p>We have not posts yet</p>
    }
    return posts.map(el =><Post post = {el} key = {el}/>)
}
