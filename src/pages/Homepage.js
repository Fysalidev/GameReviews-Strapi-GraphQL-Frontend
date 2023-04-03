import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const REVIEWS = gql`
  query getReviews {
    reviews {
      data {
        id
        attributes {
          title
          rating
          body
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default function Homepage() {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errrrorrr</p>;

  return (
    <div>
      {data.reviews.data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          {review.attributes.categories.data.map((category) => (
            <small key={category.id}>{category.attributes.name}</small>
          ))}
          <ReactMarkdown>{review.attributes.body.substring(0, 200) + ". . ."}</ReactMarkdown>
          <Link to={`/reviews/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
