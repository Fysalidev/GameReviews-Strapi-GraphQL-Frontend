import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function ReviewDetails() {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/reviews/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errrrorrr</p>;

  return (
    <div className="review-card">
      <div className="rating">{data.data.attributes.rating}</div>
      <h2>{data.data.attributes.title}</h2>
      <small>console list</small>
      <p>{data.data.attributes.body}</p>
    </div>
  );
}
