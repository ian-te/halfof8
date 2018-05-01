import React from "react";
import styled, { keyframes } from "styled-components";
import { Col } from "../Section";
import Link from "gatsby-link";
import Image from "gatsby-image";
import VideoBackground from "./VideoBackground";
import icon_outer from "./icon_outer.svg";
import icon_inner from "./icon_inner.svg";
import VisibilitySensor from "react-visibility-sensor";
const Description = styled.div`
    max-width: 250px;
    margin-top: 56px;
    box-sizing: border-box;
    h2 {
        line-height: 1.4;
    }
    p:last-child {
        margin-bottom: 0;
    }
`;
const Tag = styled.div`
    padding: 3px 9px;
    line-height: 1.3em;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    height: 28px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 12px;
    opacity: 0;
    font-weight: 500;
    text-align: left;
    background-color: ${props =>
        props.theme == "dark"
            ? `rgba(255, 255, 255, 0)`
            : `rgba(0, 29, 96, 0)`};
`;

const InnerItem = styled.div`
    padding: 26px 26px 56px;
    position: relative;
    z-index: 1;
    min-height: 512px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const lightGradient = `linear-gradient(
    to right,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.4) 180px,
    rgba(255, 255, 255, 0) 290px
)`;

const darkGradient = `linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.4) 180px,
    rgba(0, 0, 0, 0) 290px
)`;

const Overlay = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: ${props =>
        props.theme == "dark" ? darkGradient : lightGradient};
`;
const TagContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-width: 590px) {
        max-width: 230px;
    }
`;

const WrapWithLink = ({ children, link }) =>
    link && link.indexOf("http") !== 0 ? (
        <Link
            to={link}
            style={{ display: "block", height: "100%", textDecoration: "none" }}
        >
            {children}
        </Link>
    ) : link ? (
        <a
            href={link}
            target="_blank"
            style={{ display: "block", height: "100%", textDecoration: "none" }}
        >
            {children}
        </a>
    ) : (
        <div>{children}</div>
    );

const getDevicePixelRatio = function() {
    var ratio = 1;
    if (typeof window === "undefined") return ratio;
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    if (
        window.screen.systemXDPI !== undefined &&
        window.screen.logicalXDPI !== undefined &&
        window.screen.systemXDPI > window.screen.logicalXDPI
    ) {
        // Only allow for values > 1
        ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
    } else if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    }
    if (ratio < 1) ratio = 1;
    return ratio;
};

const linkType = link =>
    link ? (link.indexOf("http") === 0 ? "external" : "internal") : false;

const getBackgroundImage = image => {
    return image
        ? `url("${image.file.url}?h=${512 * getDevicePixelRatio() || 1}&q=50")`
        : false;
};

const HoverOverlay = styled.div`
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4s;
    &:before {
        position: absolute;
        opacity: 1;
        content: "";
        width: 90px;
        height: 90px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 90px;
        left: 50%;
        top: 50%;
        background-image: url(${props =>
            props.type === "external" ? icon_outer : icon_inner});
        background-repeat: no-repeat;
        background-position: center center;
        margin-left: -45px;
        margin-top: -45px;
        transform: translate(0, 10px);
        transition: transform 0.4s;
    }
    @media (min-width: 590px) {
        &:hover {
            background-color: rgba(0, 0, 0, 0);
            opacity: 1;
        }
        &:hover:before {
            transform: translate(0, 0);
        }
    }
`;
const HoverOverlayLink = styled.div`
    position: relative;
    top: 80%;
    display: inline-block;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 27px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
`;

const fadeIn = keyframes`
    from {
        transform: scale(0.95);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(0.95);
        opacity: 0;
    }
`;

const Fade = styled.div`
    visibility: ${props => (props.out ? "hidden" : "visible")};
    animation: ${props => (props.out ? fadeOut : fadeIn)} 0.3s linear;
    transition: visibility 0.3s linear;
`;

class ItemBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            isMounted: false
        };
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
    }
    onVisibilityChange(isVisible) {
        // this.setState({ isVisible: true });
    }
    render() {
        const {
            link,
            cols,
            children,
            tag,
            secondary,
            className,
            theme,
            images,
            videoBackground,
            disableOverlay
        } = this.props;
        return (
            <VisibilitySensor
                partialVisibility={true}
                onChange={this.onVisibilityChange}
            >
                <Col cols={cols} style={{ padding: "4px" }}>
                    <WrapWithLink link={link}>
                        <div
                            className={className}
                            style={{
                                backgroundImage:
                                    getBackgroundImage(images.background) ||
                                    "https://placehold.it/1800x512",
                                position: "relative"
                            }}
                        >
                            {videoBackground && (
                                <VideoBackground
                                    videoUrl={videoBackground.file.url}
                                />
                            )}
                            {!disableOverlay && <Overlay theme={theme} />}
                            {link && (
                                <HoverOverlay type={linkType(link)}>
                                    {linkType(link) === "external" && (
                                        <HoverOverlayLink>
                                            go to<br />
                                            {link.split("//")[1].split("/")[0]}
                                        </HoverOverlayLink>
                                    )}
                                </HoverOverlay>
                            )}
                            <InnerItem>
                                <div>
                                    <TagContainer>
                                        {/* Uncomment this to enable tags */}
                                        {/* {tag ? (
                                            <Tag theme={theme}>{tag}</Tag>
                                        ) : null} */}
                                        {secondary ? (
                                            <div style={{ fontSize: 13 }}>
                                                {secondary}
                                            </div>
                                        ) : null}
                                    </TagContainer>
                                    <Description>{children}</Description>
                                </div>
                                <div>
                                    {images.image && images.image.sizes ? (
                                        <Image
                                            sizes={images.image.sizes}
                                            style={{
                                                margin: "0 auto",
                                                maxWidth: "200px",
                                                width: "100%"
                                            }}
                                            // resolutions={images.image.resolutions}
                                        />
                                    ) : null}
                                </div>
                            </InnerItem>
                        </div>
                    </WrapWithLink>
                </Col>
            </VisibilitySensor>
        );
    }
}

export const Item = styled(ItemBase)`
    background-position: center center;
    background-size: cover;
    height: 100%;
    min-height: 512px;
    text-decoration: none;
    color: ${props => (props.theme == "dark" ? "#FFF" : "#000")};
    box-sizing: border-box;
    background-color: ${props =>
        props.theme == "dark" ? "#030303" : "#EBEBEB"};
    position: relative;
    transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s;
    .hidden {
        display: none;
    }
    a {
        color: inherit;
    }
    &:hover {
        ${props =>
            props.link
                ? `
        z-index: 1;
    `
                : null};
    }
    @media (max-width: 580px) {
        min-height: 0;
        filter: saturate(1);
    }
`;
