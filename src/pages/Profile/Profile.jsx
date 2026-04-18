import React from "react";
import { useParams, useSearchParams } from "react-router";

export const Profile = () => {
  const [queryParams, setQueryParams] = useSearchParams();

  console.log(queryParams.get("weapon"));
  console.log(queryParams.get("gender"));

  return <h1>Profile</h1>;
};
