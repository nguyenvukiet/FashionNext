import { MainLayout } from '@/component/mainLayouts'
import CheckoutDonePage from '@/component/pages/checkoutDone'
import { PageName } from '@/config/displayNameConfig'
import { TNextPageWithLayout } from '@/types/layout.d'

const Index: TNextPageWithLayout = (props) => {
  return (
    <>
      <CheckoutDonePage/>
    </>
  )
}

Index.Layout = MainLayout
Index.displayName = PageName.blog

export default Index