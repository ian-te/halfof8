import React from "react";
import Helmet from "react-helmet";

// // import '../css/blog-post.css';

export default function Template({ data }) {
	const node = data.allContentfulPortfolioItem.edges[0].node;
	console.log(node)
    return (
        <div>
            <h1>Post</h1>
            <div dangerouslySetInnerHTML={{ __html: node.body.childMarkdownRemark.html }} />
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
                            excerpt
                            frontmatter {
                                title
                                _PARENT
                                coolstuff
                                parent
                            }
                        }
                    }
                }
            }
        }
    }
`;
