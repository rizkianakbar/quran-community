export const fetcher = (url: any, data: any) => {
  fetch(window.location.origin + url, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  }).then((res) => {
    return res.json();
  });
};
