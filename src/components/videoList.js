import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = props => {
    const videoItems = props.videos.map(video => (
        <VideoListItem
            video={video}
            key={video.etag}
            onVideoSelect={props.onVideoSelect}/>)
    );

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )

};

export default VideoList;