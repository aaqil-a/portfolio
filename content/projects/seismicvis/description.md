---
title: Seismic Data 3D Visualiser
subtitle: 3D Web Application Project
image: seismicvis.jpg
start_date: 2021-12-01
end_date: 2022-04-01
index: 3
---

As part of an internship, I developed a 3D data visualiser of seismic data for and under the guidance of a geoscience expert. It was one of my first projects done from scratch to completion.

**The App** Loading seismic data (which I understand very little of) stored as numpy arrays, the app visualises it according to user-set parameters. The user can zoom and move around the 3D environment to get a better view of data. The user can also select certain slices of data to view, and adjust the gain or colormap of the visualiser according to their needs.

**Tech Stack** The front-end of the tool was built in Python using the [panel](https://panel.holoviz.org/) library. The visualiser was written in JavaScript using the [vtk.js](https://kitware.github.io/vtk-js/index.html) library.