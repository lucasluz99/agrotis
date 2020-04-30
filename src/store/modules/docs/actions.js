export function addDoc(payload) {
  return {
    type: '@docs/ADD',
    ...payload,
  };
}
export function filterDocs(payload) {
  return {
    type: '@docs/FILTER',
    payload,
  };
}
