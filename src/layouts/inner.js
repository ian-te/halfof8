import React from "react";
import Helmet from "react-helmet";

// // import '../css/blog-post.css';

export default function Template({data}) {

	console.log(data)
    return (
		<div>
			<h1>Post</h1>
			{/* <div dangerouslySetInnerHTML={{ __html: pathContext.html}} /> */}
		</div>
    );
}

export const pageQuery = graphql`
  query PortfolioItemQuery($id: String!) {
	allContentfulPortfolioItem(filter: {id: { eq: $id }}) {
	  edges {
	    node {
		  id
		  name
		  tag
		  secondaryTag
	    }
	  }
	}
}
`