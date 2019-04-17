import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Indeed from "indeed-api-client";
let publisherId = "7778623931867371";

Indeed("http://api.indeed.com/ads", publisherId)
  .jobSearch()
  .query("java")
  .location("Austin, TX")
  .sort("date")
  .radius(25)
  .userIp("1.2.3.4")
  .userAgent(
    "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"
  )
  .done()
  .then(response => response.json())
  .then(response => {
    console.log(response);
  });
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
