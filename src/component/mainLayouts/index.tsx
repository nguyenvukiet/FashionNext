import React, { ReactElement, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { TlayoutWithChild } from "@/types/layout.d";
import { useMutation, useQueryClient } from "react-query";
import { graphQLClient } from "@/api/graphql";
import { CREATE_EMPTY_CART } from "@/api/cart";


type TProps = {
  userPage?: boolean;
  children?: React.ReactNode | any;
};


export const MainLayout: TlayoutWithChild & React.FC<TProps> = ({children}) => {

  const { mutate: mutationCreateEmptyCart } = useMutation({
    mutationFn: async () => {
      return await graphQLClient.request(CREATE_EMPTY_CART)
    },
    onSuccess(data: any) {
     localStorage.setItem('cartID',data?.createEmptyCart as string);
    },
  })

  useEffect(() => {
     const cartID = localStorage.getItem('cartID');
    if(!cartID) {
      mutationCreateEmptyCart();
    }
  }, []);


  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

MainLayout.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
