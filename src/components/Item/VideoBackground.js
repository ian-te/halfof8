import React from 'react';
import ReactDOM from 'react-dom';

export default class VideoBackground extends React.Component {
    constructor(props) {
        super(props);

        const { videoId } = this.props;
        this.iframe = (
            <iframe
                frameBorder="0"
                height="512"
                width="960"
                style={{
                    position: "absolute",
                    left: "50%",
                    marginLeft: -480
                }}
                src={`//coub.com/embed/${videoId}?muted=true&noControls=true&noHDControl=true&noSiteButtons=true&autostart=true&originalSize=false&startWithHD=true`}
            />
        );
    }
    componentDidMount() {   
        setTimeout(() => ReactDOM.render(this.iframe, this.refs.el), 400)
    }
    render() {
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
            />
        );
    }
}