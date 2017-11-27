import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";

const Content = styled.div`
    padding-top: 37px;
    font-size: 14px;
    line-height: 1.86;
    section,
    header {
        display:  flex;
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
    header > div{
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

export default function Template({ data }) {
    const node = data.allContentfulPortfolioItem.edges[0].node;
    if (!node.body) return null;
    return (
        <div>
            <style>{`body {background-color: ${theme[
                node.theme || "white"
            ]}}`}</style>
            <Helmet>
                <title>{node.name} : Half of Eight</title>
            </Helmet>
            <BackToHome to="/">&lt; Back to homepage</BackToHome>
            <Content
                dangerouslySetInnerHTML={{
                    __html: node.body.childMarkdownRemark.html
                }}
            />
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
