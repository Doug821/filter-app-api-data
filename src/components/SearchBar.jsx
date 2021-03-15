import React, { Component } from "react";
import styles from '../styles/components/searchBar.module.css';

class Searchbar extends Component {
  handleSubmit = e => e.preventDefault();

  render() {
    return (
      <form
        className={styles.search}
        action="submit"
        onSubmit={this.handleSubmit}>
        <div className={styles.searchBar}>
          <input
            id="searchName"
            className={styles.searchBarInput}
            type="text"
            placeholder="Search by name"
            value={this.props.searchName}
            onChange={this.props.handleSearchChange}
          />
          <label
            htmlFor="searchName"
            className={styles.searchBarLabel}
          >Search by name</label>
        </div>
        <div className={styles.searchBar}>
          <input
            id="searchTag"
            className={styles.searchBarInput}
            type="text"
            placeholder="Search by Tag"
            value={this.props.searchTag}
            onChange={this.props.handleSearchChange}
          />
          <label
            htmlFor="searchTag"
            className={styles.searchBarLabel}
          >Search by Tag</label>
        </div>
      </form>
    )
  };
}

export default Searchbar;
