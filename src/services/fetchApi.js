export default (url) =>
  fetch(url)
    .then((results) => {
      return results.json()
    })
