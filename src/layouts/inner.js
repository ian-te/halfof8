import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import { MobileShow } from "../components/MobileHide";
import Layout from "./layout";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import ButtonContainer from "../components/ButtonContainer";

const Content = styled.div`
    padding-top: 37px;
    font-size: 14px;
    line-height: 1.86;
    min-height: 1200px;
    section,
    header {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 92px;
    }
    section,
    header {
        & > div {
            flex: 1 0 0;
            min-width: 250px;
            margin-right: 11px;
            &:first-child {
                padding-left: 0;
            }
            &:last-child {
                padding-right: 0;
            }
        }
    }
    header > div {
        width: 25%;
        flex: 0 0 auto;
    }
`;

const BackToHome = styled(Link)`
    display: block;
    margin-top: 37px;
    font-size: 13px;
    color: #5261ff;
`;

const theme = {
    black: {
        body: "#000",
        color: "#FFF"
    },
    white: {
        body: "#FFF",
        color: "#000"
    }
};

export default function Template({ data, transition, pathContext }) {
    const node = data.allContentfulPortfolioItem.edges[0].node;
    if (!node.body) return null;
    return (
        <div style={transition && transition.style}>
            <Layout>
                <div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `body{background-color: ${node.backgroundColor}}`
                        }}
                    />
                    <Sidebar
                        color={node.textColor}
                        bgColor={node.backgroundColor}
                    />
                </div>
                <div style={{ flexGrow: 1 }}>
                    <Helmet>
                        <title>{node.name} : Half of Eight</title>
                    </Helmet>
                    <BackToHome to="/">&lt; Back to homepage</BackToHome>
                    <Content
                        style={{ color: node.textColor || "#000" }}
                        dangerouslySetInnerHTML={{
                            __html: node.body.childMarkdownRemark.html
                        }}
                    />
                    {pathContext.prev && <ButtonContainer>
                        <Button
                            color={node.textColor}
                            to={`project/${pathContext.prev.node.slug}`} 
                            icon="prev"
                            >
                            prev project
                        </Button>
                        <Button
                            color={node.textColor}
                            width="50%"
                            icon="home"
                            to="/" >
                            to home page
                        </Button>
                        <Button
                            color={node.textColor}
                            icon="next"
                            to={`project/${pathContext.next.node.slug}`} >
                            next project
                        </Button>
                    </ButtonContainer>}
                    <Footer color={node.textColor} />
                </div>
            </Layout>
        </div>
    );
}

export const pageQuery = graphql`
    query PortfolioItemQuery($id: String!) {
        allContentfulPortfolioItem(filter: { id: { eq: $id } }) {
            edges {
                node {
                    id
                    name
                    theme
                    tag
                    secondaryTag
                    backgroundColor
                    textColor
                    body {
                        id
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    }
`;
