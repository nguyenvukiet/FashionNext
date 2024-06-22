import {
  GraphQLClient,
  RequestMiddleware,
  ResponseMiddleware,
} from "graphql-request";

const requestMiddleware: RequestMiddleware = async (request) => {
  return {
    ...request,
    headers: {
      ...request.headers,
      // authorization: !!localStorage?.getItem("token")
      //   ? `Bearer ${localStorage?.getItem("token")}`
      //   : "",
    },
  };
};

const responseMiddleware: ResponseMiddleware = (response: any) => {
  if (!(response instanceof Error) && response.errors) {
    if (response.errors[0]?.extensions?.category === "graphql-authorization") {
      localStorage.removeItem("token");
      // window.location.replace(`${window.location.origin}/account`)
    }

    const errorMessage = response?.errors[0]?.message;
    const errorPath = response?.errors[0]?.path?.[0];
    if (
      errorMessage &&
      (errorPath === "subscribeEmailToNewsletter" ||
        errorPath === "changeCustomerPassword" ||
        errorPath === "updateCartItems" ||
        errorPath === "addProductsToCart" ||
        errorPath === "createCustomerV2")
    ) {
    }
  }
  return {
    ...response,
  };
};

const graphQLClient = new GraphQLClient(`${process.env.NEXT_PUBLIC_API_URL}`, {
  requestMiddleware,
  responseMiddleware,
  errorPolicy: "all",
  method: "GET",
});

const graphQLClientGet = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_API_URL}`,
  {
    requestMiddleware,
    responseMiddleware,
    errorPolicy: "all",
    method: "GET",
  }
);

if (typeof window !== "undefined") {
  graphQLClient.setHeaders({
    Authorization:
      localStorage && localStorage.getItem("token")
        ? "Bearer " + localStorage.getItem("token")
        : "",
    "Content-Type": "application/json",
    accept: "application/json",
    // store:
    //   localStorage && localStorage.getItem('language')
    //     ? localStorage.getItem('language') || 'vi'
    //     : '',
  });
}
// ----------------------------------------------------------------------

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("token", accessToken);
    graphQLClient.setHeaders({
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      accept: "application/json",
    });
    // This function below will handle when token is expired
    // const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    // tokenExpired(exp);
  } else {
    localStorage.removeItem("token");
    graphQLClient.setHeaders({
      Authorization: "",
      "Content-Type": "application/json",
      accept: "application/json",
    });
  }
};

export const setTokenGraphQL = (token: string) => {
  graphQLClient.setHeaders({
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    accept: "application/json",
  });
};

export { graphQLClient, graphQLClientGet };
