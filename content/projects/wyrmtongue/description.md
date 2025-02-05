---
title: AI Tool for Role-Playing Games
subtitle: Full Stack Web Application Personal Project
image : wyrmtongue
index: 1
---

[Wyrmtongue](https://wyrmtongue.aaqil.sh) is a personal project I worked on initially just to learn how to integrate LLMs with web applications. Now, it's publicly available and currently in a serviceable state. Its primary function is to generate storytelling ideas for [Tabletop Role-Playing Games](https://en.wikipedia.org/wiki/Tabletop_role-playing_game).

**The App** Users can upload their text documents containing any writing and information related to their game's setting. The app uses these documents to generate new and unique ideas to give inspiration for the user's game, all of which tries to fit within the user's setting. 

**Tech Stack**
It was developed in TypeScript using Angular for the front-end, Express and MongoDB for the back-end, and Firebase for authentication. It's currently hosted on an AWS EC2 instance, with CI/CD using GitHub actions. The source code with instructions on self-hosting is available [here](https://github.com/aaqil-a/Wyrmtongue-Public).