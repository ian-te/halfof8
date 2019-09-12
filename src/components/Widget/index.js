import React from "react";

import styled from "styled-components";
import { Col } from "../Section";

const Inner = styled.div`
    min-height: 512px;
    padding: 0px;
    iframe {
        display: block;
    }
`;

const Widget = ({ embedUrl, name, width }) => (
    <Col cols={width}>
        <Inner>
            <iframe
                width="100%"
                height="512"
                scrolling="no"
                frameBorder="no"
                style={{marginBottom: 0}}
                src={embedUrl}
            />
        </Inner>
    </Col>
);

export default Widget;
