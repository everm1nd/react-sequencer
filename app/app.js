import React from "react";
import CommentBox from "./commentBox";

let data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Dick Johnson", text: "This is *another* comment"}
];

React.render(
  <CommentBox data={data} />,
  document.body
);
