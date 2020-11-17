import * as React from "react"
import useTextKey from "@hooks/useTextKey"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { AppTitle } from "@components/elements"
import { OrderForm } from "@components/order-page"

const OrdersPage = () => {
  const { t } = useTextKey()
  return (
    <>
      <Seo title="order" />
      <Layout>
        <AppTitle
          className="order-page-app-title"
          title={t("orderPageTitle")}
        />
        <OrderForm className="order-form" />
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
}

export default OrdersPage
