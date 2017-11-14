import React from "react";
import Link from "gatsby-link";
import { Section, Col } from "../components/Section";
import { Item } from "../components/Item";
import { Intro } from "../components/Intro";

const IndexPage = ({ data }) => {
    console.log(data);
    const items = data.allContentfulPortfolioItem.edges;
    const getBackgroundImage = node =>
        node.indexBackgroundImage ? node.indexBackgroundImage.resolutions.src : 
            (node.theme === 'dark' ? 'https://placehold.it/1024x512/333/EEE' : `https://placehold.it/1024x512/EEE/333`)
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
                        {node.id}
                        <div
                            dangerouslySetInnerHTML={{
                                __html: node.shortText.childMarkdownRemark.html
                            }}
                        />
                    </Item>
                ))}
                <Item
                    cols={2}
                    tag="Digital"
                    secondary="#halfof8"
                    theme="dark"
                    background="https://placehold.it/1024x512/222/333"
                >
                    <h2>
                        Eveeh<br />Car Rental
                    </h2>
                    <p>
                        Eveeh is a very first Australian electric car sharing
                        and renting digital service.
                    </p>
                    <p>
                        As a Product designer I designed user flows, component
                        based visual language, oversaw the development and
                        implementation.
                    </p>
                </Item>
                <Item
                    cols={4}
                    tag="Digital"
                    secondary="#halfof8"
                    theme="dark"
                    background="https://placehold.it/1024x512/222/333"
                >
                    <h2>
                        Eveeh<br />Car Rental
                    </h2>
                    <p>
                        Eveeh is a very first Australian electric car sharing
                        and renting digital service.
                    </p>
                    <p>
                        As a Product designer I designed user flows, component
                        based visual language, oversaw the development and
                        implementation.
                    </p>
                </Item>
            </Section>
        </div>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query PortfolioItemsList {
        allContentfulPortfolioItem {
            edges {
                node {
                    id
                    name
                    tag
                    secondaryTag
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
