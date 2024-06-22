import React, { ReactElement, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { TlayoutWithChild } from "@/types/layout.d";

type TProps = {
  userPage?: boolean;
  children?: React.ReactNode | any;
};

export const MainLayout: TlayoutWithChild & React.FC<TProps> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

MainLayout.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
