import React from 'react';
import './App.css';

import $ from 'jquery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
      </header>
    </div>
  );
}

$(document).ready(function () {
  $(window).on("load", function () {
    $("h1").fadeOut(0, function () {
      $(this).text("Hi")
    })
    $("h1").fadeToggle(1000, function () {
      $(this).delay(3000).fadeToggle(1000, function () {
        $(this).text("We're setting things up for you")
        $(this).fadeToggle(1000).delay(3000).fadeToggle(1000, function () {
          $(".App-header").addClass("cycle")
          $(this).text("This may take longer than usual")
          $(this).fadeToggle(1000)
        })
      })
    })
  })
});

export default App;
