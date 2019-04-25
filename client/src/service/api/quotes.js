export const getQuotes = () => {
  return fetch("http://localhost:8080/quotes/").then(response =>
    response.json()
  );
};

export const postQuote = data => {
  return fetch("http://localhost:8080/quotes/", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.status !== 200) throw Error("Something went wrong.");
      return response;
    })
    .then(response => response.json());
};
