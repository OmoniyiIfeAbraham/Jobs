import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Template(props) {
  return (
    <div>
      <Header page={props.page} />
      {/* children */}
      {props.children}
      <Footer />
    </div>
  );
}

export default Template;
