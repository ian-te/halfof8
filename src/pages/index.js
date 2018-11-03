import React from "react";
import Link from "gatsby-link";
import { Section, Col } from "../components/Section";
import { Item } from "../components/Item";
import Widget from "../components/Widget";
import Footer from "../components/Footer";
import { TypingText } from "../components/Intro";
const getLink = node =>
    node.externalUrl
        ? node.externalUrl
        : node.slug ? "project/" + node.slug : "";
const getNodeImages = node => ({
    background: node.indexBackgroundImage,
    image: node.indexImage
});
const getTileComponent = (edge, key) => {
    const { node } = edge;
    if (edge.type == "item")
        return (
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
        );
    if (edge.type == "widget") return <Widget {...edge.node} />;
};
const IndexPage = ({ data, transition }) => {
    const items = data.allContentfulPortfolioItem.edges.map(edge => ({
        ...edge,
        type: "item"
    }));
    const widgets = data.allContentfulWidget.edges.map(edge => ({
        ...edge,
        type: "widget"
    }));
    const tiles = items
        .filter((edge, key) => edge.node.order != 1)
        .concat(widgets)
        .sort((prev, next) => prev.node.order - next.node.order);

    return (
        <div>
    
            <Section>
                {tiles.map((edge, key) => getTileComponent(edge, key))}
            </Section>
        </div>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexRequest {
        allContentfulWidget {
            edges {
                node {
                    id
                    name
                    embedUrl
                    width
                    order
                }
            }
        }
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
