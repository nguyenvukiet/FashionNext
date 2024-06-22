import { MainLayout } from '@/component/mainLayouts'
import CheckoutPage from '@/component/pages/checkout'
import { PageName } from '@/config/displayNameConfig'
import { TNextPageWithLayout } from '@/types/layout.d'

const Index: TNextPageWithLayout = (props) => {
  return (
    <>
      <CheckoutPage/>
    </>
  )
}

Index.Layout = MainLayout
Index.displayName = PageName.blog

export default Index