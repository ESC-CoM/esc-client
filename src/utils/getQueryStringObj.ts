function getQueryStringObj(urlStr: string) {
  // TODO: Proxy로 리팩토링
  return Object.fromEntries(new URLSearchParams(urlStr).entries());
}

export default getQueryStringObj;
