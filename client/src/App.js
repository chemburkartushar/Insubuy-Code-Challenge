import React from "react";
import QuoteForm from "./views/quoteForm";
import Result from "./views/results";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={QuoteForm} exact />
        <Route path="/quotes" component={Result} />
      </div>
    </BrowserRouter>
    // <QuoteForm />
  );
}
export default App;
