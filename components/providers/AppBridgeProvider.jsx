const AppBridgeProvider = ({ children }) => {
  if (typeof window !== "undefined") {
    const shop = window?.shopify?.config?.shop;

    console.log(window.shopify);

    if (!shop) {
      return <p>No Shop Provided</p>;
    }
  }

  return <>{children}</>;
};

export default AppBridgeProvider;
