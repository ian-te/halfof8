import React from "react";
import Link from "gatsby-link";
import { Section, Col } from "../components/Section";
import { Item } from "../components/Item";
import { Intro } from "../components/Intro";

const IndexPage = ({ data }) => {
    console.log(data);
    const items = data.allContentfulPortfolioItem.edges;
    const getBackgroundImage = node =>
        node.indexBackgroundImage ? node.indexBackgroundImage.resolutions.src : (
            node.theme === 'dark' ? 'https://placehold.it/1024x512/333/aaa' : 'https://placehold.it/1024x512/aaa/333'
        )
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
                {items.map(({ node }) => (
                    <Item
                        cols={node.width}
                        tag={node.tag}
                        link={"project/" + (node.slug ? node.slug : node.id)}
                        background={getBackgroundImage(node)}
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
        allContentfulPortfolioItem(limit: 1000, sort: {order: ASC, fields: [order]}) {
            edges {
                node {
                    id
                    name
                    tag
                    secondaryTag
                    order
                    slug
                    indexBackgroundImage {
                        resolutions {
                            aspectRatio
                            width
                            height
                            src
                            srcSet
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
