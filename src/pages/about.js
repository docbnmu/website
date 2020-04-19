import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from 'react-bootstrap/Card'
import FlagImg from "../images/gallery/Chem.BNMU23.jpg";
import BannerImg from "../../static/banner.jpg"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "About" }}>
    <SEO title="About" />
  <div>
    <Card>
    <Card.Img variant="top" src={FlagImg} />
    <Card.Body>
      <Card.Text>
      <h6>
      <blockquote>
        <p class="has-line-data" data-line-start="0" data-line-end="1">
          <strong>Bhupendra Narayan Mandal University</strong> also called B. N.
          Mandal University and in short BNMU is situated at the district
          headquarter, Madhepura a district in Bihar. It is known for adding
          glory to the educational atmosphere of this district and it’s
          surrounding. It is a regional university famous for its quality
          teaching.
        </p>
      </blockquote>
      </h6>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  <br />
  <div>
    <Card>
    <Card.Img variant="top" src={BannerImg} />
    <Card.Body>
      <Card.Text>
    <h6>
      <blockquote>
        <p>
          <strong>The Department of Chemistry</strong> is one of those in few
          Departments, which were established soon after the inception of the
          B.N.M University in 1992. <br />
          </p>
          <p>
          Over the period, the Department has been
          nurtured under the able guidance of the eminent educationist/chemists
          like Prof. Ram Badan Yadav (former VC, BNMU), Prof. R. K. Choudhary (former
          VC, BNMU), Prof. Q Ashan (former VC, BNMU), Prof. B. N. Prasad, to name
          a few. <br />
          </p>
          <p>
          The present faculty members are actively engaged, besides their
          teaching program, in pursuing research in frontier areas of chemistry.
          As a result, during the last decade, nearly 75 students were awarded
          Ph.D. degree and around 250 research papers were published from this
          Department in reputed National and International Journals. To keep
          pace with the advancement in frontier areas of Chemistry, our faculty
          members have been visiting laboratories of renowned chemists of the
          foreign country Nigeria and have collaborative projects with them.
          This has brought the Department to a level where we can venture to
          pursue research in frontier areas of chemistry. Research areas being
          pursued in the Department are mainly focused on the development of
          Coordination Chemistry, Environmental Chemistry, Organometallic
          Compounds, and Medicinal Chemistry.
        </p>
      </blockquote>
    </h6>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  <br />

    <br></br>
  </Layout>
)

export default SecondPage
