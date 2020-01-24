# Live Voting App
[![Build Status](https://travis-ci.com/bitwhys/live-voting-app.svg?branch=master)](https://travis-ci.com/bitwhys/live-voting-app)

A fullstack WebSockets powered application for organizing entity selection at events through live voting built with React, Redux and Immutable.js

## The App

This application aims to help organize live votes for parties, conferences, meetings, and other gatherings of people.

Given a collection of _entries_ (i.e., things to vote on), such as
movies, songs, sporting events, programming languages, tabs or spaces
(kidding, the only option is spaces :sunglasses:) or anything else. The
app will pit them against each other in rotating pairs, and each round
the event goers will have the opportunity to make a choice. The winner
will the last remaining entry.

## Design

### Mobile/Web View

### Large Screen Results View


## The Architecture
The application is divided into two separate systems:
1. A client facing browser app that provides both the mobile and large
   screen interfaces.
2. A Node server that manages the voting logic

Communication between the (2) systems will be orchestrated through
WebSockets.

### The Tech Stack
- **React** : Provides the _view_ layer framework for user interaction.
  The **unidirectional flow of data** and **component model** are the
  main features React was chosen.

- **Redux**: This handles the organizing and synchronization of both our
  client and server code. Redux is chosen for its emphasis on
  **functional programming** practices, **immutable state** and its
  simple and focused API.

- **Node.js**: Used to create a backend application server. I like
  JavaScript, Node is JavaScript, those are my reasons.

- **Immutable.js**: Used to manage our application state. I wanted to
  play with a new technology.