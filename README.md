# Ring Of Fire for Alexa

An Alexa Skill for the Ring Of Fire drinking game, written in TypeScript.

[![Build Status](https://travis-ci.org/danjohnson95/ring-of-fire-alexa.svg?branch=master)](https://travis-ci.org/danjohnson95/ring-of-fire-alexa)

## Rules of the Game

## Voice Interface

The skill is launched by using one of the utterances.

> **USER**: Alexa, open Ring of Fire

You will then be guided through the game set up process.

### Game Set Up

First, you'll need to specify the number of people playing the game. You'll then be asked for each player's name.

> **ALEXA**: How many people are playing?

> **USER**: There's 3 of us

> **ALEXA**: Okay. Player one, what's your name?

Once all the player names have been defined, the names will be stored into a persistent database against your device ID. The session will then end.

### Playing the game

Once you're ready, use one of the 'next card' utterances to pick a card.

> **USER**: Alexa, ask Ring Of Fire for a card

You'll be told who's turn it is, what the card is, and brief instructions on what you need to do with this card.
