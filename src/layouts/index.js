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
                    props.data ? props.data.site.siteMetadata.title : "halfof8"
                }
                meta={[
                    { name: "description", content: "Half of Eight" },
                    { name: "keywords", content: "" }
                ]}
            >
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Helmet>
            <div>
                <Sidebar />
            </div>
            <div style={{ flexGrow: 1 }}>
                {props.children()}
                <ButtonContainer>
                    <Button
                        width="50%"
                        icon="home"
                    >
                        contact me
                    </Button>
                    <Button
                        icon="up"
                    >
                        go to top 
                    </Button>
                </ButtonContainer>
                <Footer />
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
    }
`;
