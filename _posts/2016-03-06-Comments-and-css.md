---
title: Comments and css
date: 2016-03-06
permalink: /posts/2016/03/06/comments-and-css
tags:
  - Webdev
---

I have been fiddling around to add the comment section for this blog. By itself, it is a fairly straight forward thing to do.
For instance, while using Jekyll, all you need to do is to follow these
[Disqus instructions](https://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions).
It is a very basic recipe. In fact, using the [Jekyll now](https://github.com/barryclark/jekyll-now) template includes
all of it already. The problem was...

As I based the whole site on a template from html5up, a lot is predefined. For instance, The whole menu at the top
  is set up programmatically with a bit of javascript. I thought about a good design so that all would still feel
  smooth while incorporating the blog. To do so, I added the middle section for the blog with blurb about the post,
  which then links to the whole post. It makes it a bit more RESTful
  (you can directly reach the blog post if you have the direct link).

To add the comment section, I was not sure where to incorporate it. For instance, adding it directly to the white rectangle
(where this text is displayed) tended to cut the comments. CSS was not displaying the overflow, and I was loosing patience
looking for which section of the page was troublesome. Finally, I decided to simply display it on its own.
I then looked around in the css file to get the proper alignment and width.

 I ended up adding this css:

 ```css
#disqus_thread {
    margin: 0 auto;
    width: 50em;
    padding: 3.5em 2.5em 3.5em 2.5em;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
}
 ```

A nice feature of Safari that I found a few weeks ago is the "Adaptative Conception Mode". It allows to quickly get a glimpse
 of how your code will render on different devices. Also, the web inspector tools are a great plus when developing.
 Using both of these things, I finally got something relatively decent!

 ![alt text](https://macrocosme.github.io/images/adaptConceptionMode.png "Passer en mode conception adaptative")

 ![alt text](https://macrocosme.github.io/images/adaptConcept_css.png "Adaptative conception mode (top) et dynamic css (bottom)")

So, feel free to comment futur (and previous) posts! (I will obviously monitor it so that it stays civil.)