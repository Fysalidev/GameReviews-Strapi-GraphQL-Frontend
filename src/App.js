import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// page & laoyout imports
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/reviews/:id" element={<ReviewDetails />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
