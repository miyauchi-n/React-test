import React from "react";

const MessageColor = (props) => {
  //  分割代入で引数の'props.'を省略
  const { color, message } = props;

  const contentStyle = {
    // color: color,    ←名前が同じなら下のように省略可
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{message}</p>;
};

//  default exportはファイルにつき一つ
export default MessageColor;
