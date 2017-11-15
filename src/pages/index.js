import React from "react";
import Link from "gatsby-link";
import { Section, Col } from "../components/Section";
import { Item } from "../components/Item";
import { Intro } from "../components/Intro";

const IndexPage = ({ data }) => {
    console.log(data);
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
                        link={"project/" + (node.slug ? node.slug : node.id)}
                        // background={getBackgroundImage(node)}
                        images={getNodeImages(node)}
                        secondary={node.secodaryTag}
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
                    indexImage {
                        resolutions {
                            aspectRatio
                            width
                            height
                            src
                            srcSet
                        }
                        sizes {
                            aspectRatio
                            src
                            srcSet
                            sizes
                        }
                    }
                    indexBackgroundImage {
                        resolutions {
                            aspectRatio
                            width
                            height
                            src
                            srcSet
                        }
                        sizes {
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
