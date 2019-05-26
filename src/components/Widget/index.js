import React from "react";

import styled from "styled-components";
import { Col } from "../Section";

const Widget = ({ embedUrl, name, width }) => (
    <Col cols={width} style={{ padding: '4px', height: '512px' }}>
        <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            style={{marginBottom: 0}}
            src={embedUrl}
        />
    </Col>
);

export default Widget;
