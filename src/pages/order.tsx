import * as React from "react"
import useTextKey from "@hooks/useTextKey"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { AppTitle } from "@components/elements"
import { OrderForm } from "@components/order-page"
import { graphql, PageProps } from "gatsby"
import { css } from "styled-components"
import { above, below } from "@styled/media-query"
import { CartProvider } from "@context/index"

interface OrdersPageData {
  burgers: {
    edges: NodeType<Burger>[]
  }
  sides: {
    edges: NodeType<Side>[]
  }
}

const cx = css`
  #app-title-main-h2 {
    background: ${({ theme }) => theme.colors.illustrations.tertiary};
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
    padding: 0.2em;
    @media ${below.mobileS} {
      font-size: 20px;
    }
    @media ${above.mobileS} {
      font-size: 2em;
    }
    @media ${above.mobileL} {
      font-size: 2.5em;
    }
    @media ${above.tablet} {
      font-size: 3em;
    }
    @media ${above.tabletL} {
      font-size: 3.5em;
    }
  }
`

const OrdersPage: React.FC<PageProps<OrdersPageData>> = ({ data }) => {
  const { t } = useTextKey()
  return (
    <>
      <Seo title="order" />
      <Layout>
        <AppTitle
          className="order-page-app-title"
          title={t("orderPageTitle")}
          style={cx}
        />
        <CartProvider>
          <OrderForm burgers={data.burgers.edges} sides={data.sides.edges} />
        </CartProvider>
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
            fluid(maxWidth: 1000, maxHeight: 1000, quality: 90) {
              ...GatsbyContentfulFluid_tracedSVG
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
            fluid(maxWidth: 1000, maxHeight: 1000, quality: 90) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default OrdersPage
