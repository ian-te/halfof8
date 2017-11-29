import React from "react";
import ReactDOM from "react-dom";

export default class VideoBackground extends React.Component {
    isMobile(){
        if(!window) return false
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
    }
    render() {
        const { videoUrl } = this.props;
        return (
            <div
                ref="el"
                style={{
                    position: "absolute",
                    zIndex: "0",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden"
                }}
            >

                {!this.isMobile() && <video
                    autoPlay="true"
                    loop="true"
                    style={{
                        height: "100%",
                        position: "absolute",
                        width: 1600,
                        marginLeft: -800,
                        left: "50%"
                    }}
                    src={videoUrl}
                />}
            </div>
        );
    }
}
