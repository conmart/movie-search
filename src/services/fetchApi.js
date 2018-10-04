const fetchApi = (url) =>
  fetch(url)
    .then((results) => {
      return results.json()
    })

export default fetchApi;
