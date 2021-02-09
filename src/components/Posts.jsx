import React from "react";
import Post from "./Post";

export default ({posts}) => {
    return posts.map(el =><Post post = {el} id = {el}/>)
}
