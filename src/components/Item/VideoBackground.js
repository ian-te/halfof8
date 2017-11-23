import React from "react";
import ReactDOM from "react-dom";

export default class VideoBackground extends React.Component {
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
                <video
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
                />
            </div>
        );
    }
}
