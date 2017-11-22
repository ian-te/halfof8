import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';
import Link from 'gatsby-link';

const Content = styled.div`
    padding-top: 37px;
    section {
        display: flex;
        flex-wrap: wrap;
    }
    section > div {
        flex-grow: 0;
        flex: 1 0 0;
        min-width: 250px;
        margin-bottom: 92px;
        & + div {
            margin-left: 11px;
        }
        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
        }
    }
`

const BackToHome = styled(Link)`
    display: block;
    margin-top: 37px;
    font-size: 13px;
    color: #5261ff;

`

export default function Template({ data }) {
    const node = data.allContentfulPortfolioItem.edges[0].node;
    if(!node.body) return null
    return (
        <div>
            <BackToHome to="/">&lt; Back to homepage</BackToHome>
            <Content dangerouslySetInnerHTML={{ __html: node.body.childMarkdownRemark.html }} />
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
