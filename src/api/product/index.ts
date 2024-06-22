import { gql } from "graphql-request";
import { graphQLClient } from "../graphql";

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

export const productApi = {
  getProduct: async () => {
    return await graphQLClient.request(GET_PRODUCT,{
            search:"",
            filter:{category_uid:{"eq":""}}
    });
  }
};
