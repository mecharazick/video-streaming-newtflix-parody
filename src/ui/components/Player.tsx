import React, { IframeHTMLAttributes } from "react";

interface PlayerInterface extends IframeHTMLAttributes<any> {}

type PlayerModes = "playing" | "paused" | "stopped";

class Player extends React.Component {
  constructor(props: PlayerInterface) {
    super(props);
  }
  state = { mode: "playing" as PlayerModes };
  play = () => {};
  pause = () => {};
  stop = () => {};
  render = () => {
    return <video src={""} />;
  };
}

export default Player;
