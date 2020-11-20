import * as React from "react"
import useTextKey from "@hooks/useTextKey"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { AppTitle } from "@components/elements"
import { OrderForm } from "@components/order-page"
import { graphql, PageProps } from "gatsby"

interface OrdersPageData {
  burgers: {
    edges: NodeType<Burger>[]
  }
  sides: {
    edges: NodeType<Side>[]
  }
}

const OrdersPage: React.FC<PageProps<OrdersPageData>> = ({ data }) => {
  const { t } = useTextKey()
  return (
    <>
      <Seo title="order" />
      <Layout>
        <AppTitle
          className="order-page-app-title"
          title={t("orderPageTitle")}
        />
        <OrderForm
          className="order-form"
          burgers={data.burgers.edges}
          sides={data.sides.edges}
        />
      </Layout>
    </>
  )
}

export const ORDER_PAGE_QUERY = graphql`
  {
    burgers: allContentfulBurgers {
      edges {
        node {
          id
          name
          price
          vegetarian
          image {
            fixed(width: 150, height: 150, quality: 90) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    sides: allContentfulSides {
      edges {
        node {
          id
          title
          price
          vegetarian
          image {
            fixed(width: 150, height: 150, quality: 90) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default OrdersPage
