export default function seatchParams(queryString: string, key: string) {
  const params = new URLSearchParams(queryString);
  return params.get(key);
}
