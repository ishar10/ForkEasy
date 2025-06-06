import React from "react";
import Card from "./Card";

import Navigation from "./Navigation";
const Groups = () => {
  const token = sessionStorage.getItem("token");
  return (
    <>
      {token === "" || token === undefined ? (
        <div>
          <Navigation></Navigation>
          <h1>Login to view expenses shared between your Groups</h1>
        </div>
      ) : (
        <div>
          <Navigation></Navigation>
          <div className="d-flex justify-content-around flex-wrap">
            <Card
              title="Badminton"
              subtitle="Game"
              text="Badminton group between various friends to split the expense"
            ></Card>
            <Card
              title="Pottery"
              subtitle="activity"
              text="Pottery group between various friends to split the expense"
            ></Card>
            <Card
              title="Pune"
              subtitle="Travel"
              text="Pune group between various friends to split the expense"
            ></Card>
            <Card
              title="Seven Eleven"
              subtitle="Food"
              text="Seven Eleven group between various friends to split the expense"
            ></Card>
            <Card
              title="Party"
              subtitle="Dance"
              text="Party group between various friends to split the expense"
            ></Card>
            <Card
              title="Club"
              subtitle="Dance"
              text="Club group between various friends to split the expense"
            ></Card>
          </div>
        </div>
      )}
    </>
  );
};

export default Groups;
