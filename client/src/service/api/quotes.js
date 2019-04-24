export const getQuotes = () => {
  fetch("http://localhost:8080/quotes/")
    .then(response => response.json())
    .then(values => console.log(values));
};

export const postQuote = data => {
  fetch("http://localhost:8080/quotes/", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(values => console.log("Done: ", values));
};
