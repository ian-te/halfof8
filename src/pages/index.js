import React from "react";
import Link from "gatsby-link";
import { Section, Col } from "../components/Section";
import { Item } from "../components/Item";
import { Intro } from "../components/Intro";
const getLink = node => 
    (node.externalUrl ? node.externalUrl : (
        node.slug ? 'project/' + node.slug : ''
    ))
const IndexPage = ({ data }) => {
    const items = data.allContentfulPortfolioItem.edges;
    const getNodeImages = node => ({
        background: node.indexBackgroundImage,
        image: node.indexImage
    });
    return (
        <div>
            <Section>
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
                {items.map(({ node }, key) => (
                    <Item
                        cols={node.width}
                        tag={node.tag}
                        key={node.id || key}
                        link={getLink(node)}
                        // background={getBackgroundImage(node)}
                        images={getNodeImages(node)}
                        secondary={node.secondaryTag}
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
                        resolutions(width: 1700, height: 512) {
                            aspectRatio
                            width
                            height
                            src
                            srcSet
                        }
                        sizes(maxWidth: 1700) {
                            aspectRatio
                            src
                            srcSet
                            sizes
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
