import React from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

export default function DisplayUser() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        console.log(response.data);
        setTickets(response.data.tickets);
        setUsers(response.data.users);
        // console.log(tickets);
        // console.log(users);
      });
  }, [tickets, users]);

  return (
    <div className="userContainer">       
        {users.map((element) => {
          return (
            <div className="user" key={element.id}>
              <div className="head">
                <h4 style={{ paddingLeft: "15px" }}>{element.name}</h4>
                <button className="btn" style={{ marginTop: "20px" }}>
                  <strong>+</strong>
                </button>
              </div>
              {tickets.map((article) => {                
                return element.id === article.userId ? (                  
                    <Cards title={article.title} id={article.id} tag={article.tag} />                  
                ) :  null;
              })}
            </div>
          );
        })}      
    </div>
  );
}
