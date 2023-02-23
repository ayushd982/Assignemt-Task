import React from "react";
import ContactList from "./ContactList";

const InfiniteScroll = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of Contact</h1>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <ContactList key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;