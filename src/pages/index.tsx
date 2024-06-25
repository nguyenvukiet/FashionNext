import { MainLayout } from "@/component/mainLayouts";
import HomePage from "@/component/pages/home";
import { PageName } from "@/config/displayNameConfig";
import { TNextPageWithLayout } from "@/types/layout.d";

const Index: TNextPageWithLayout = (props) => {

  return (
    <>
    <HomePage />
  </>
  );
}
Index.Layout = MainLayout;
Index.displayName = PageName.about;

export default Index;
