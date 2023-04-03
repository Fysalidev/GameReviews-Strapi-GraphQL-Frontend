import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query getCategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export default function SiteHeader() {
  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error fetching categories</p>;

  return (
    <div className="site-header">
      <Link to="/">
        <h1>Game Reviews</h1>
      </Link>
      <nav className="categories">
        <span>Filter reviews by category :</span>
        {data.categories.data.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id}>
            {category.attributes.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

<Link to="/">
  <h1>Game Rewiews</h1>
</Link>;
