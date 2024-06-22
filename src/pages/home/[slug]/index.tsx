import { MainLayout } from '@/component/mainLayouts'
import PdpPage from '@/component/pages/home/productDetail'
import { PageName } from '@/config/displayNameConfig'
import { TNextPageWithLayout } from '@/types/layout.d'

const Index: TNextPageWithLayout = (props) => {
  return (
    <>
      <PdpPage/>
    </>
  )
}

Index.Layout = MainLayout
Index.displayName = PageName.about

export default Index