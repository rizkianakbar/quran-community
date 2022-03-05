export const fetcher = (url: any, data?: any) => {
  return fetch(window.location.origin + url, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
