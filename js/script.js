// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Mar 2022
// This file contains xxx

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-02-JS/sw.js", {
    scope: "/ICS2O-Unit-5-02-JS/",
  });
}

/**
 * This function determines if an integer is negative or positive.
 */
function myButtonClicked() {
  const userInteger = parseInt(document.getElementById("integer").value);
  if (userInteger > -1) {
    document.getElementById("answer").innerHTML =
      "The integer you input is positive.";
  } else {
    document.getElementById("answer").innerHTML =
      "The integer you input is a negative.";
  }
}
