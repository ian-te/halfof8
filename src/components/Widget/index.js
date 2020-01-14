import React from "react";

import styled from "styled-components";
import { Col } from "../Section";

const Inner = styled.div`
    padding: 0px;
    height: 100%;
    iframe {
        display: block;
    }
`;

const Widget = ({ embedUrl, name, width }) => (
    <Col cols={width}>
        <Inner>
            {/* <iframe
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="no"
                style={{marginBottom: 0}}
                src={embedUrl}
            /> */}
        </Inner>
    </Col>
);

export default Widget;
