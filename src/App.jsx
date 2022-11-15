/* eslint react-hooks/exhaustive-deps: off */
//  default exportではない場合、｛｝でインポート
import React, { useEffect, useState } from "react";
import MessageColor from "./components/MessageColor";

const App = () => {
  const [num, setNum] = useState(0); //State,0は初期値
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  //  count upボタンで数字をカウント
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  //  on/offボタンで’！’を表示/非表示
  const onClickSwitchShowFlag = () => {
    //  faceShowFlagのtrue/falseを入れ替える
    setFaceShowFlag(!faceShowFlag);
  };

  //  関心分離
  useEffect(() => {
    //  count upが3の倍数の時のみ’！’を表示
    if (num % 3 === 0) {
      //  falseの時に右側の処理をする
      faceShowFlag || setFaceShowFlag(true);
    } else {
      //  trueの時に右側の処理をする
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    //  ｛｝はJavaScript
    //  styleの内側｛｝はオブジェクト型の｛｝
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <MessageColor color="pink" message="お元気ですか" />
      <MessageColor color="blue" message="元気です" />
      <button onClick={onClickCountUp}>count up</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>!</p>}
    </>
  );
};

//  Appを他のファイルでも使えるようにする
export default App;
