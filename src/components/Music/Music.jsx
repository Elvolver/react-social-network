import React from "react";
import Track from "./Track/Track";

const Music = (props) => {
    let playList = props.state.playListData.map(track => <Track author={track.author} track={track.track} duration={track.duration} id={track.id} key={track.id}/>);

    return (
        <div>
            <div>
                Music
            </div>
            <div>
                {playList}
            </div>
        </div>
    )
};

export default Music;