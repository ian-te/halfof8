import React from "react";
import Link from "gatsby-link";
import { Section, Col } from "../components/Section";
import { Item } from "../components/Item";
import { Intro } from "../components/Intro";
const getLink = node =>
    node.externalUrl
        ? node.externalUrl
        : node.slug ? "project/" + node.slug : "";
const IndexPage = ({ data, transition }) => {
    const items = data.allContentfulPortfolioItem.edges;
    console.log('transition should load', transition)
    const getNodeImages = node => ({
        background: node.indexBackgroundImage,
        image: node.indexImage
    });
    return (
        <div style={transition && transition.style}>
            <Section
                bg="#030303"
                style={{ alignItems: "top", border: "4px solid #FFF" }}
            >
                <Col cols={2}>
                    <Intro
                        phrases={[
                            "Art_Direction, Software_UX, Layouts",
                            "Interaction, Empathy, Engagement",
                            "Digital, Geometry, Environment",
                            "Visuals, Emotion, Language"
                        ]}
                    />
                </Col>
                <Item
                    cols={2}
                    tag={items[0].node.tag}
                    link={getLink(items[0].node)}
                    images={getNodeImages(items[0].node)}
                    backgroundVideoId={items[0].node.backgroundVideoId}
                    theme="dark"
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                                items[0].node.shortText.childMarkdownRemark.html
                        }}
                    />
                </Item>
            </Section>
            <Section>
                {items.filter((edge, key) => key !== 0).map(({ node }, key) => (
                    <Item
                        cols={node.width}
                        tag={node.tag}
                        key={node.id || key}
                        link={getLink(node)}
                        // background={getBackgroundImage(node)}
                        images={getNodeImages(node)}
                        videoBackground={node.videoBackground}
                        secondary={node.secondaryTag}
                        disableOverlay={node.disableOverlayMask}
                        theme={node.theme ? node.theme : "light"}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: node.shortText.childMarkdownRemark.html
                            }}
                        />
                    </Item>
                ))}
            </Section>
        </div>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query PortfolioItemsList {
        allContentfulPortfolioItem(
            limit: 1000
            sort: { order: ASC, fields: [order] }
        ) {
            edges {
                node {
                    id
                    name
                    tag
                    secondaryTag
                    disableOverlayMask
                    videoBackground {
                        file {
                            url
                            fileName
                            contentType
                            details {
                                size
                            }
                        }
                    }
                    order
                    slug
                    externalUrl
                    indexImage {
                        responsiveResolution(width: 200) {
                            aspectRatio
                            width
                            height
                            src
                            srcSet
                        }
                        sizes(maxWidth: 200) {
                            aspectRatio
                            src
                            srcSet
                            sizes
                        }
                    }
                    indexBackgroundImage {
                        file {
                            url
                            fileName
                            contentType
                        }
                    }
                    theme
                    width
                    shortText {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    }
`;
