import { MainLayout } from '@/component/mainLayouts'
import BlogDePage from '@/component/pages/blog/blog-detail'
import { PageName } from '@/config/displayNameConfig'
import { TNextPageWithLayout } from '@/types/layout.d'

const Index: TNextPageWithLayout = (props) => {
  return (
    <>
      <BlogDePage/>
    </>
  )
}

Index.Layout = MainLayout
Index.displayName = PageName.about

export default Index