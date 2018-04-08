import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Sidebar from "../components/Sidebar";
import Layout from "./layout";
import ButtonContainer from "../components/ButtonContainer";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "./index.css";

const TemplateWrapper = props => (
    <div>
        <Layout>
            <Helmet
                title={
                    props.data ? props.data.allContentfulMeta.edges[0].node.title : "halfof8"
                }
            >
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content={props.data.allContentfulMeta.edges[0].node.description.childMarkdownRemark.excerpt} />
                <meta name="keywords" content={props.data.allContentfulMeta.edges[0].node.description.childMarkdownRemark.excerpt} />
                <meta property="og:title" content={props.data.allContentfulMeta.edges[0].node.title} />
                <meta
                    property="og:description"
                    content={props.data.allContentfulMeta.edges[0].node.description.childMarkdownRemark.excerpt}
                />
                <meta property="og:image"
                    content={'https://' + props.data.allContentfulMeta.edges[0].node.image.file.url}
                />
            </Helmet>
            <div>
                <Sidebar />
            </div>
            <div style={{ flexGrow: 1 }}>
                {props.children()}
                
                <Footer>
                    <p>
                        &copy; 2012 – {new Date().getFullYear()}, 
                        👋 Car does not move till we are all buckled up, so keep in touch via {' '}<a href="mailto:info@halfof8.com">info@halfof8.com</a><br/>
                        Design by <a href="https://instagram.com/halfof8">Anton Sokolov</a>, 
                        Developed by <a href="https://github.com/yante" target="_blank" >Yan Te</a>. 
                        Typefaces used: Space Mono by <a href="http://www.colophon-foundry.org/" target="_blank" >Colophon</a>, 
                        Work Sans by <a href="https://github.com/weiweihuanghuang/Work-Sans" target="_blank" >Wei Huang</a>
                    </p>
                </Footer>
            </div>
        </Layout>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
        allContentfulMeta {
            edges {
                node {
                    title
                    image {
                        file {
                            url
                            fileName
                            contentType
                        }
                    }
                    description {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                }
            }
        }
    }
`;
