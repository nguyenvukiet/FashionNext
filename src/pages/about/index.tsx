import { MainLayout } from '@/component/mainLayouts'
import BlogPage from '@/component/pages/blog'
import { PageName } from '@/config/displayNameConfig'
import { TNextPageWithLayout } from '@/types/layout.d'

const Index: TNextPageWithLayout = (props) => {
  return (
    <>
      <BlogPage/>
    </>
  )
}

Index.Layout = MainLayout
Index.displayName = PageName.about

export default Index
