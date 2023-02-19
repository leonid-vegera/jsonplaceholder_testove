const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const request = (url, options) => {
  return (
      fetch(`${BASE_URL}${url}`, options)
          .then(response => response.json())
  )
}
