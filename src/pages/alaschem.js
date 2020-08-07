import React from "react"
import { Button, Badge } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LiteYouTubeEmbed } from "react-lite-youtube-embed"

const ALASCHEM = () => (
  <React.Fragment>
    <Layout pageInfo={{ pageName: "Alumni Association of Chemistry" }}>
      <SEO title="Alumni Association of Chemistry" />
      <center>
      <div>
      <LiteYouTubeEmbed 
        id="mLZf7dwBZOs"
        title="Alumni Meet-2020, Department of Chemistry, B. N. Mandal University, Madhepura (Bihar)"
        noCookie={true}

    />
      </div>
      </center>
      <br />
      <hr />
      <h4>
        <strong>About of ALASCHEM</strong>
      </h4>

      <h5>
        <blockquote>
          Alumni Association of Chemistry namely ALASCHEM, B. N. Mandal
          University is the reflection of its past, representation of its
          present and a link to its future.
        </blockquote>
        <blockquote>
          Educational institutions are changing the way they see and interact
          with their alumni community. Earlier, alumni and their alma-mater were
          treated as separate entities wherein one’s existence was independent
          of the other. Local alumni chapters were formed as a means to interact
          with other fellow alumni. However, these associations seldom had any
          interaction with the institution they post graduated or Ph.D holder
          from this University Department of Chemistry With the advent of Social
          Media, alumni relationship has taken a different flavour altogether.
          Universities have started to harness the power of alumni through
          various networking platforms like Linkedin, Facebook, Twitter etc. by
          creating their alumni groups and profiles on them.
        </blockquote>
        Here are 4 ways in which alumni association are creating a powerful
        positive impact:
        <blockquote>
          <strong>1. Support system</strong>
        </blockquote>
        <blockquote>
          An engaged alumni network allows the University to benefit from the
          skills and experience of our graduates, by offering their support to
          our students, to the institution and to each other. If we keep them
          well informed and engaged, alumni are our most loyal supporters and
          our best ambassadors, offering invaluable marketing and promotion
          across their personal and professional networks.
        </blockquote>
        <blockquote>
          <strong>2. Offering expertise</strong>
        </blockquote>
        <blockquote>
          Talented alumni will likely have a wealth of experience and skills to
          share with current students via talks and meets. In certain cases,
          this could go even further with alumni offering to practically support
          students in work placements and help them launch their careers.
          Suryadatta’s alumni create an engaged alumni network which is
          beneficial because engaged graduates are much more likely to want to
          “give back” to the University.
        </blockquote>
        <blockquote>
          <strong>3. Assistance in Employability</strong>
        </blockquote>
        <blockquote>
          Alumni network has a real life benefit for current students. Alumni
          also donate their valuable time to offer career support to current
          students. This enhances the students’ experience and give them that
          competitive edge in today’s tough job market. The alumni network of a
          college is one of the biggest sources of placement opportunities to
          the students. Alumni can help students get placed at their respective
          organizations.
        </blockquote>
        <blockquote>
          <strong>4. Mentorship and Scholarships</strong>
        </blockquote>
        <blockquote>
          Alumni can play an active role in voluntary programs like mentoring
          students in their areas of expertise. They also play a significant
          role in contributing scholarships to deserving students. Alumni get in
          touch with students and share their expertise and best practices in a
          given field.
        </blockquote>
        <blockquote>
          Leveraging the alumni community can be a win-win for both the
          institution and the alumni. Many of them are willing to ‘Give-Back’ to
          their alma-mater as a sign of their gratitude and affinity towards the
          institution.
        </blockquote>
        <blockquote>
          <strong>Reconnect.</strong> Find and reminisce with fellow graduates;
          see what everyone’s been up to!
        </blockquote>
        <blockquote>
          <strong>Give back.</strong> Make meaningful connections, recruit
          future Wildcats, speak to students and advise fellow alumni.
        </blockquote>
        <blockquote>
          <strong>Expand.</strong> Leverage your professional network to get
          introduced to people you should know
        </blockquote>
        <blockquote>
          This alumni connect by allows you to reconnect with classmates and
          expand your professional network through this alumni-only environment
        </blockquote>
      </h5>

      <br />

      <h4>
        <strong>Downloads</strong>
      </h4>
      <h6>
        <Button
          variant="outline-dark"
          size="lg"
          block
          href="../documents/alaschem/Alumni.Association.of.Chemistry.Receipt.Voucher.pdf"
        >
          Alumni Association of Chemistry Receipt Voucher{" "}
          <Badge variant="secondary">PDF</Badge>
        </Button>
      </h6>
      <hr></hr>
      <br></br>
    </Layout>
  </React.Fragment>
)
export default ALASCHEM
