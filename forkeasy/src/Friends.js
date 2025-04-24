import React from "react";
import Navigation from "./Navigation";
import IndividualExpense from "./IndividualExpense";
const Friends = () => {
  const token = sessionStorage.getItem("token");
  return (
    <>
      {token === "" || token === undefined ? (
        <div>
          <Navigation></Navigation>
          <h1>Login to view expenses shared between your friends</h1>
        </div>
      ) : (
        <div>
          <Navigation></Navigation>
          <IndividualExpense></IndividualExpense>
        </div>
      )}
    </>
  );
};

export default Friends;
