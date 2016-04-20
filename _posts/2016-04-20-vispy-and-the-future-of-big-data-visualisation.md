---
layout: post
title: Vispy and the future of Big Data visualisation
---


A few weeks ago I discovered PyOpenGL to run OpenGL code from Python. I thought there was some potential there.

Today, in my search for documentation on OpenGL and its shading language (GLSL), I stepped upon a really interesting project
held together by a few individuals called [Vispy](http://vispy.org). Based on OpenGL (specifically PyOpenGL) and NumPy,
it allows to run shader code on the GPU with near-optimal run-time. I did a prelimirary test today to render a
few data cubes from the [THINGS survey](http://www.mpia.de/THINGS/Data.html) with a little help from the
[Astropy](http://astropy.org/) package, and managed to get something going in a very small amount of time.

Here I show the galaxy NGC 3621. There is still some work to do to get the data shown with a bit more luxury, but for the
time I spent on it, I think it's nice. It's 3D-rendered, and in real-time at about 40-50frames per seconds on my macbook.
 ![alt text](https://macrocosme.github.io/images/ngc-3621.png "NGC 3621 from THINGS")

I'm not gonna lie, I **really** like it.

I read a few things over the day by Cyrille Rossant. A few blog [posts](http://cyrille.rossant.net/compiler-data-visualization/),
and one of his [paper](http://journal.frontiersin.org/Journal/10.3389/fninf.2013.00036/full) (with KD Harris) that explains how it's done.

For those interested, here is a presentation about Vispy at SciPy2015 by Luke Campagnola.
I particularly like the plot of all plots.
<iframe width="560" height="315" src="https://www.youtube.com/embed/_3YoaeoiIFI" frameborder="0" allowfullscreen></iframe>

I'll stop here for now. More to come from this exciting project and what I build with it soon I hope!