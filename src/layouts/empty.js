import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Sidebar from "../components/Sidebar";
import Layout from "./layout";
import Footer from "../components/Footer";
import "./index.css";


const TemplateWrapper = (props) => (
    <div>
        {props.children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;

