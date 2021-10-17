import React from "react";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <form>
        <input
          type="text"
          placeholder="search"
          className={styles.input}
          color="red"
        />
      </form>
    </header>
  );
}

export default Header;
