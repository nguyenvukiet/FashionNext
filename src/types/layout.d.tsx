import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactNode } from 'react'

export type TNextPageWithLayout<T extends object = {}> = NextPage<T & { connection: HubConnection }> & {
  breadcrumb?: string
  Layout: ReactElement
  isBreadcrumb?: any
}

export type TNextPageWithSubLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode
}
export type TlayoutWithChild = {
  getLayout: (page: ReactElement) => ReactNode
}

export type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}
export type TNextPageWithDisplayName<T extends object = {}> = NextPage<T & { connection: HubConnection }> & {
  breadcrumb?: string
  isBreadcrumb?: any
}
