import React from "react";
import {CommonPattern} from "../../utils/CommonPatern/CommonPatern";
import {endpoints} from "../../api/endpoints";

export function Albums() {
  const {albums} = endpoints;
  return <CommonPattern title={albums}/>;
}
