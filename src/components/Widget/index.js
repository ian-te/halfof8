import React from "react";

import styled from "styled-components";
import { Col } from "../Section";

const Widget = ({ embedUrl, name, width }) => (
    <Col cols={width} style={{padding: '4px', height: 300}}>
        <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            src={embedUrl}
        />
    </Col>
);

export default Widget;
