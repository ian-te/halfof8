import React from 'react'
import Link from 'gatsby-link'
import { Section, Col } from '../components/Section'
import { Item } from '../components/Item'
import { Intro } from '../components/Intro'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Section>
        <Col cols={2}>
          <Intro
            phrases={[
              'Art_Direction, Software_UX, Layouts',
              'Interaction, Empathy, Engagement',
              'Digital, Geometry, Environment',
              'Visuals, Emotion, Language',
            ]}
          />
        </Col>
        <Item
          cols={2}
          tag="Digital"
          secondary="#halfof8"
          theme="dark"
          background="https://placehold.it/1024x512/222/333"
        >
          <h2>
            Eveeh<br />Car Rental
          </h2>
          <p>
            Eveeh is a very first Australian electric car sharing and renting
            digital service.
          </p>
          <p>
            As a Product designer I designed user flows, component based visual
            language, oversaw the development and implementation.
          </p>
        </Item>
      </Section>
      <Section>
        <Item
          cols={4}
          tag="Digital"
          secondary="#halfof8"
          theme="dark"
          background="https://placehold.it/1024x512/222/333"
        >
          <h2>
            Eveeh<br />Car Rental
          </h2>
          <p>
            Eveeh is a very first Australian electric car sharing and renting
            digital service.
          </p>
          <p>
            As a Product designer I designed user flows, component based visual
            language, oversaw the development and implementation.
          </p>
        </Item>
      </Section>
      <Section>
        <Item
          cols={4}
          tag="Digital"
          secondary="#halfof8"
          theme="dark"
          background="https://placehold.it/1024x512/222/333"
        >
          <h2>
            Eveeh<br />Car Rental
          </h2>
          <p>
            Eveeh is a very first Australian electric car sharing and renting
            digital service.
          </p>
          <p>
            As a Product designer I designed user flows, component based visual
            language, oversaw the development and implementation.
          </p>
        </Item>
      </Section>
      <Section>
        <Item
          cols={2}
          tag="Digital"
          secondary="#halfof8"
          theme="dark"
          background="https://placehold.it/1024x512/222/333"
        >
          <h2>
            Eveeh<br />Car Rental
          </h2>
          <p>
            Eveeh is a very first Australian electric car sharing and renting
            digital service.
          </p>
          <p>
            As a Product designer I designed user flows, component based visual
            language, oversaw the development and implementation.
          </p>
        </Item>
        <Item
          cols={2}
          tag="Digital"
          secondary="#halfof8"
          theme="light"
          background="https://placehold.it/1024x512/F7F7FF/E1E1F7;"
        >
          <h2>
            Eveeh<br />Car Rental
          </h2>
          <p>
            Eveeh is a very first Australian electric car sharing and renting
            digital service.
          </p>
          <p>
            As a Product designer I designed user flows, component based visual
            language, oversaw the development and implementation.
          </p>
        </Item>
      </Section>
      <Section>
        <Item
          cols={1}
          tag="Digital"
          secondary="#halfof8"
          theme="light"
          background="https://placehold.it/1024x512/F7F7FF/E1E1F7"
        >
          <h2>
            Eveeh<br />Car Rental
          </h2>
          <p>
            Eveeh is a very first Australian electric car sharing and renting
            digital service.
          </p>
          <p>
            As a Product designer I designed user flows, component based visual
            language, oversaw the development and implementation.
          </p>
        </Item>
        <Item
          cols={1}
          tag="Digital"
          secondary="#halfof8"
          theme="light"
          background="https://placehold.it/1024x512/F7F7FF/E1E1F7;"
        >
          <h2>
            Eveeh<br />Car Rental
          </h2>
          <p>
            Eveeh is a very first Australian electric car sharing and renting
            digital service.
          </p>
          <p>
            As a Product designer I designed user flows, component based visual
            language, oversaw the development and implementation.
          </p>
        </Item>
        <Item
          cols={1}
          tag="Digital"
          secondary="#halfof8"
          theme="light"
          background="https://placehold.it/1024x512/F7F7FF/E1E1F7"
        >
          <h2>
            Eveeh<br />Car Rental
          </h2>
          <p>
            Eveeh is a very first Australian electric car sharing and renting
            digital service.
          </p>
          <p>
            As a Product designer I designed user flows, component based visual
            language, oversaw the development and implementation.
          </p>
        </Item>
        <Item
          cols={1}
          tag="Digital"
          secondary="#halfof8"
          theme="light"
          background="https://placehold.it/1024x512/F7F7FF/E1E1F7;"
        >
          <h2>
            Eveeh<br />Car Rental
          </h2>
          <p>
            Eveeh is a very first Australian electric car sharing and renting
            digital service.
          </p>
          <p>
            As a Product designer I designed user flows, component based visual
            language, oversaw the development and implementation.
          </p>
        </Item>
      </Section>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query MainPageQuery {
    allDataYaml {
      edges {
        node {
          main {
            title
            description
          }
        }
      }
    }
  }
`
