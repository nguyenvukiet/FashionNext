import { queryClient } from "@/pages/_app";
import { GraphQLClient, gql } from "graphql-request";
import { graphQLClientGet } from "../graphql";
import { graphQLClient } from "../graphql";

// Initialize GraphQL client
//const graphQLClient = new GraphQLClient('https://retail-api.mona.website/graphql');



const GET_PRODUCT = gql`
  query getProducts(
    $search: String
    $filter: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
  ) {
    products(
      search: $search
      filter: $filter
      pageSize: $pageSize
      currentPage: $currentPage
    ) {
      sort_fields {
        default
        options {
          label
          value
        }
      }
      items {
        ...ProductInterfaceField
      }

      total_count
      page_info {
        current_page
        page_size
        total_pages
      }
    }
  }
  fragment ProductInterfaceField on ProductInterface {
    __typename
    sku
    uid
    name
    url_key
    url_suffix
    canonical_url
    stock_status
    meta_description
    meta_keyword
    meta_title
    new_from_date
    new_to_date
    description {
      html
    }
    rating_summary
    review_count
    short_description {
      html
    }
    thumbnail {
      url
      position
    }
    image {
      url
    }
    price_range {
      ...PriceRangeField
    }
    ...CustomField
  }
  fragment CustomField on ProductInterface {
    color
    size
    rating_summary_start {
      star_1
      star_2
      star_3
      star_4
      star_5
    }
    attributes {
      attribute_code
      label
      value
    }
  }
  fragment PriceRangeField on PriceRange {
    __typename
    maximum_price {
      ...ProductPriceField
    }
  }
  fragment ProductPriceField on ProductPrice {
    discount {
      amount_off
      percent_off
    }
    final_price {
      currency
      value
    }
    regular_price {
      currency
      value
    }
  }
`;

// Định nghĩa API call
export const productApi = {
  getProduct: async () => {
    try {
      const response = await graphQLClient.request(GET_PRODUCT, {
        search: "Sport Watch",
        filter: { category_uid: { eq: "OA==" } },
      });
      return response;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
};



export const GET_CART = gql`
  query getCart($cart_id: String!) {
    cart(cart_id: $cart_id) {
      id
      is_virtual
      total_quantity
      prices {
        discounts {
          amount {
            ...MoneyFields
          }
          ...DiscountFields
        }
        grand_total {
          ...MoneyFields
        }
        subtotal_excluding_tax {
          ...MoneyFields
        }
      }
      items {
        errors {
          code
          message
        }
        quantity
        uid
        product {
          ...ProductInterfaceField
        }
        prices {
          discounts {
            amount {
              ...MoneyFields
            }
            ...DiscountFields
          }
          price {
            ...MoneyFields
          }
          row_total {
            ...MoneyFields
          }
          total_item_discount {
            ...MoneyFields
          }
        }
      }
    }
  }

  fragment ProductInterfaceField on ProductInterface {
    __typename
    sku
    uid
    name
    url_key
    url_suffix
    canonical_url
    stock_status
    meta_description
    meta_keyword
    meta_title
    new_from_date
    new_to_date
    rating_summary
    review_count
    thumbnail {
      position
      ...ProductImageFields
    }
    image {
      ...ProductImageFields
    }
    ...CustomField
  }

  fragment CustomField on ProductInterface {
    color
    size
    rating_summary_start {
      star_1
      star_2
      star_3
      star_4
      star_5
    }
    attributes {
      attribute_code
      label
      value
    }
  }
  fragment DiscountFields on Discount {
    label
  }

  fragment MoneyFields on Money {
    currency
    value
  }

  fragment ProductImageFields on ProductImage {
    url
  }
`;

export const ADD_TO_CART = gql`
  mutation addProductToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
    addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
      cart {
        email
        id
        is_virtual
        total_quantity
      }
      user_errors {
        code
        message
      }
    }
  } 
`;


export const REMOVE_ITEM = gql`
  mutation removeItemFromCart(
    $removeItemFromCartInput: RemoveItemFromCartInput
  ) {
    removeItemFromCart(input: $removeItemFromCartInput) {
      cart {
        id
        items {
          uid
          errors {
            code
            message
          }
        }
      }
    }
  }
`;
export const UPDATE_CART = gql`
  mutation updateCartItem($input: UpdateCartItemsInput) {
  updateCartItems(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
`;

export const cart = {
  generateCart: async () => {
    try {
      return await graphQLClient.request(CREATE_EMPTY_CART)
    } catch (error) {
      console.error('Error generate cartId:', error)
    }
  },
  addProductToCart: async (data: any) => {
    try {
      return await graphQLClient.request(ADD_TO_CART, {
        cartId: data.cartId,
        cartItems: data.cartItems,
      })
    } catch (error) {
      console.error('Error generate cartId:', error)
      try {
        return await graphQLClient
          .request(CREATE_EMPTY_CART)
          .then(async (res: any) => {
            localStorage.setItem('cartID', res?.createEmptyCart)
            await queryClient.refetchQueries(['GET_CART'])
            // thêm lại vào giỏ hàng
            await graphQLClient.request(ADD_TO_CART, {
              cartId: res?.createEmptyCart,
              cartItems: data.cartItems,
            })
          })
      } catch (error) {
        console.error('Error generate cartId:', error)
      }
    }
  },
  getCart: async (data: any) => {
    try {
      return await graphQLClientGet.request(GET_CART, {
        cart_id: data.cartId
      });
    } catch (error) {
      console.error('Error generate cartId:', error)
    }
  },
  removeItemCart: async (data: any) => {
      return await graphQLClient.request(REMOVE_ITEM, {
        removeItemFromCartInput: {
          cart_id: data.cart_id,
          cart_item_uid: data.cart_item_uid,
        },
      });
  },
  updateCart: async (data: any) => {
    return await graphQLClient.request(UPDATE_CART, {
      input: {
        cart_id: data.cartId,
        cart_items: data.cartItems,
      }
    });
  },
};

//API Update Cart Item