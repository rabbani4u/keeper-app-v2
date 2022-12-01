import React from "react";

function Footer() {
  let date = new Date();
  let fullYear = date.getFullYear();
  return (
    <div>
      <footer>
        <p>copyright ⓒ {fullYear} I Developed by ❤️ Rabbani khan</p>
      </footer>
    </div>
  );
}

export default Footer;
