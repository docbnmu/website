import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"
const MyBirthMyEarth = () => (
  <Layout pageInfo={{ pageName: "My Birth - My Earth" }}>
    <SEO title="My Birth - My Earth" />
    <Helmet>
      <body class="mybirth-myearth" />
    </Helmet>
    <div>
      <Container fluid="md">
        <Row md="auto" className="justify-content-md-center">
          <Col xs lg="4">
            <StaticImage
              src="../../static/images/logo@black.svg"
              align="left"
              placeholder="blurred"
              width={150}
              formats={["auto", "webp", "avif"]}
            />{" "}
          </Col>{" "}
          <Col xs>
            <h2>My Birth - My Earth</h2>
          </Col>
          <Col xs lg="4">
            <StaticImage
              src="../../static/images/mybirthmyearth.svg"
              align="right"
              placeholder="blurred"
              width={120}
              formats={["auto", "webp", "avif"]}
            />
          </Col>
        </Row>
      </Container>

      <br />
      <p>
        <strong>My Birth-My Earth</strong> play an important role in creating
        environmental awareness amongst the student, research scholars and
        teachers for present &amp; future generation.{" "}
        <strong>My Birth-My Earth</strong> is popular eco club of B. N. Mandal
        University &amp; University Service Teacher's Association proposed by
        Prof. (Dr.) Naresh Kumar, General Secretary, BNMUSTA and accepted by B.
        N. Mandal University administration is registered under Trade Mark Act,
        1999 by Ministry of Commerce &amp; Industries, Govt. of India. Purpose
        of this mission is save our earth &amp; cleans our environment by
        plantation of tree on the birthday of all teachers, students &amp; by
        other programmes. It was firstly planted by BNMUSTA on 13<sup>th</sup>{" "}
        Nov. 2017, Birthday of our Teacher, Prof. (Dr.) B. N. Jha, University
        Department of History under the Chairmanship of Dr. B. N. Sah, HOD,
        History. Chief Guest of this Programme was Prof. Y. P. Roy, Head, Dean
        S. K. University, Dumka, Jharkhand &amp; guest of Honour Prof. K. P.
        Yadav, President, BNMUSTA
      </p>
      <p>
        It was one small step by accepting simple lifestyle in saving earth
        today to give our future generation for healthy life sparking mind &amp;
        to make pollution free zone.
      </p>
      <p>
        <strong>AIMS:</strong>
      </p>
      <p>
        Since increasing environmental challenges the world is experiencing,
        such as: climate change, deforestation, droughts, floods, global
        warming, water scarcity, pollution. Being aware of the environment is
        important &amp; to understanding these issues following are the main
        aims of the mission
      </p>
      <ul>
        <li>
          <p>To conserve the natural resources &amp; natural environment.</p>
        </li>
        <li>
          <p>To create ecofriendly environment.</p>
        </li>
        <li>
          <p>To create awareness/structures for biodiversity parks.</p>
        </li>
        <li>
          <p>
            To create clean &amp; green consciousness among students through
            innovative idea &amp; activities.
          </p>
        </li>
        <li>
          <p>To make pollution free zone.</p>
        </li>
        <li>
          <p>To organize Eco-meet by the department.</p>
        </li>
      </ul>
      <p>
        <strong>OUR VISION:</strong>
      </p>
      <ul>
        <li>
          <p>
            To Protect &amp; create clean &amp; green environment awareness by
            educating the students offering different programmes.
          </p>
        </li>
      </ul>
      <p>
        <strong>OBJECTIVE:</strong>
      </p>
      <ul>
        <li>
          <p>
            To motivate the students to keep their surroundings green &amp;
            clean by undertaking plantation of trees, gardening etc.
          </p>
        </li>
        <li>
          <p>
            To active participation of all teachers &amp; students in the Swachh
            Bharat Abhiyan &amp; cleanness in the campus at the departmental
            level.
          </p>
        </li>
        <li>
          <p>
            To promote practices for quality of drinkable water, better soil
            &amp; pollution free air.
          </p>
        </li>
        <li>
          <p>
            To increase our good health, sparking mind &amp; good economic level
            by plantation &amp; other activities.
          </p>
        </li>
        <li>
          <p>
            To educate students &amp; research scholars to awareness among local
            public of the area.
          </p>
        </li>
      </ul>
    </div>
    <br></br>
  </Layout>
)

export default MyBirthMyEarth
