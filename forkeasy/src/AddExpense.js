import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "./App.css";
import GroupsFriends from "./GroupsFriends";
import { useParams, useLocation } from "react-router-dom";
import Split from "./Split";
const AddExpense = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const token = sessionStorage.getItem("token");
  const filteredGroupsDict = {};
  const { name, phone } = useParams();
  const [filteredNamesDict, setfilteredNamesDict] = useState({});

  useEffect(() => {
    fetch("/groups_and_friends", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }).then((res) =>
      res.json().then((data) => {
        var final = data.phone_with_names;

        console.log("✅ Final dict:", final);

        const filtered = Object.fromEntries(
          Object.entries(final).filter(([key, value]) =>
            value.toLowerCase().includes(query.toLowerCase())
          )
        );

        setfilteredNamesDict(filtered);
      })
    );
    setShowAlert(true);
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {token === "" || token === undefined ? (
        <div>
          <Navigation></Navigation>
          <h1>Login to add expenses with your groups and friends</h1>
        </div>
      ) : (
        <div>
          <Navigation></Navigation>
          <br />
          {name === "fortesting" ? (
            <div className="d-flex align-items-center flex-column">
              <div className="ml-5">
                <h1> Add Expense</h1>
                <span>With you and </span>{" "}
                <input
                  placeholder="Type group/friend name"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                ></input>
              </div>
              <br></br>
              {phone === "1111" ? (
                <div>
                  {showAlert && <div>Expense added successfully!!</div>}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <Split name={name} phone={phone}></Split>
          )}
          <GroupsFriends
            filteredGroupsDict={filteredGroupsDict}
            filteredNamesDict={filteredNamesDict}
          ></GroupsFriends>
        </div>
      )}{" "}
    </>
  );
};

export default AddExpense;
