import React from 'react';
import Link from 'gatsby-link';
import { Item, Section } from '../components/Section';
import Intro from '../components/Intro';


const IndexPage = ({data}) => {
    console.log(data)
    return (
    <div>
        <Section>
            <Item cols={2}>
                <Intro
                    phrases={[
                        'test',
                        'test 123 234'
                    ]}
                 />
                <Link to="/project/dark-tower/">Dark Tower Project</Link>
            </Item>
            <Item cols={2}>
                {data.allDataYaml.edges.map(({node}) => <div>{node.main.title}</div>)}
                <img src="" />
            </Item>
        </Section>
        <Section>
            <Item>
                <h1>Hi people!</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <Link to="/project/dark-tower/">Dark Tower Project</Link>
            </Item>
            <Item cols={3}>
                <img src="" />
            </Item>
        </Section>
    </div>
)};

export default IndexPage;

export const query = graphql`
query MainPageQuery {
    allDataYaml {
      edges {
        node {
          main {
            title,
            description
          }
        }
      }
    }
  }
`