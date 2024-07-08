import '../styles/style.scss'
import { TAppPropsWithLayout } from "@/types/layout.d";
import BlankLayout from "@/component/mainLayouts/blankLayouts";
import "swiper/css";
import "swiper/css/effect-creative";
import { QueryClientProvider, QueryClient } from 'react-query';
import { CartProvider } from '@/api/cart/useCart';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
}
export const queryClient = new QueryClient(queryClientConfig)

export default function App({ Component, pageProps }: TAppPropsWithLayout) {
  // const Layout = Component.Layout
  const Layout = Component.Layout || BlankLayout
  return(
    <>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </QueryClientProvider>
    </>
  );
}
