import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/Seo"

const IndexPage = () => (
  <>
    <Seo title="home" />
    <Layout>
      <h1>Hi people</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem
        consequatur nostrum accusamus temporibus voluptate sapiente,
        exercitationem, itaque, quibusdam blanditiis veritatis quidem
        reprehenderit atque necessitatibus autem quae possimus earum neque?
        lorem500
      </p>
    </Layout>
  </>
)

export default IndexPage
