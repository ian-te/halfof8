import React from "react";
import { Section, Col } from "../../../components/Section";
import img1 from "./woodbar_render_01.jpg";
import img2 from "./woodbar_render_02.jpg";
import img3 from "./woodbar_render_03.jpg";
import img4 from "./wood_case_001.jpg";

const Page = () => (
    <Section>
        <Col cols={1}>
            <h2>WoodBar Identity</h2>
            <p>
                <small>_ Art Direction, Graphic Design</small>
            </p>
        </Col>
        <Col cols={1}>
            <p>
                <small>Project</small>
            </p>
            <p>
                A small cafe-bar with a quality kitchen and a relaxed home
                atmosphere in the center of St. Petersburg.
            </p>
        </Col>
        <Col cols={1}>
            <p>
                <small>Responsibilities:</small>
            </p>
            <p>Development of a logo, a complete identity, interior tips.</p>
        </Col>
        <Col cols={4}>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
        </Col>
    </Section>
);

export default Page;
