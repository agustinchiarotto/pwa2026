import React from "react";
import { useNavigate } from "react-router";
import { Routes } from "../../const/routes";

export const Home = () => {
  const navigation = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigation(Routes.profile);
        }}
      >
        {" "}
        Profile{" "}
      </button>
    </>
  );
};
