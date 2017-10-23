import React from 'react';
import Link from 'gatsby-link';
import { Item, Section } from '../components/Section';

const IndexPage = () => (
    <Section>
        <Item>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/project/dark-tower/">Dark Tower Project</Link>
        </Item>
        <Item>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/project/dark-tower/">Dark Tower Project</Link>
        </Item>
    </Section>
);

export default IndexPage;
