import React from "react";
import './Posts.scss'
import {CommonPattern} from "../../utils/CommonPatern/CommonPatern";
import {endpoints} from "../../api/endpoints";

export function Posts() {
  const {posts} = endpoints;
  return <CommonPattern title={posts}/>;
}
