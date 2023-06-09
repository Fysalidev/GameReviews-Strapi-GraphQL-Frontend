import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";

const REVIEW = gql`
  query getReview($id: ID!) {
    review(id: $id) {
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

export default function ReviewDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errrrorrr</p>;

  return (
    <div className="review-card">
      <div className="rating">{data.review.data.attributes.rating}</div>
      <h2>{data.review.data.attributes.title}</h2>
      {data.review.data.attributes.categories.data.map((category) => (
        <small key={category.id}>{category.attributes.name}</small>
      ))}
      <ReactMarkdown>{data.review.data.attributes.body}</ReactMarkdown>
    </div>
  );
}
