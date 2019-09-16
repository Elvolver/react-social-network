import React from "react";
import classes from './Music.module.css';
import Track from "./Track/Track";



const Music = (props) => {
    console.log('PROPS')
    console.log(props)
    let playList = props.bll.playListData.map(track => <Track author={track.author} track={track.track} duration={track.duration} id={track.id} key={track.id}/>)

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
}

export default Music;