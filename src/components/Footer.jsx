import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © 2023-{currentYear}, lawyerWho.</p>
    </footer>
  );
}

export default Footer;
