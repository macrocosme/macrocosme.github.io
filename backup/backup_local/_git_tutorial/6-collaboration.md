---
layout: post
title: Collaboration
---

# Online hosting and collaboration

As well as managing our own codes and documents, another important use of
version control is for collaboration...

## **Online hosting**

As already discussed in the Basics section, Git uses a "distributed" model that
allows everyone working on a project to have their own independent copy of the
entire repository.  To collaborate effectively though we need a central version
of the code base which is used to unify everyones' efforts.  Typically the best
place for such a central repository is online.

There are a number of excellent options for online hosting of git repositories
(for a list see [this](http://en.wikipedia.org/wiki/Git_(software)#Source_code_hosting) Wikipedia
entry). However, there are two options in particular which stand out in my
opinion:

* [Bitbucket](https://bitbucket.org/): This site overs unlimited free public
  repositories (where anyone can see and checkout your project).  If you have an
  email address from an academic institution though, then you can also get
  [unlimited free private repositories](http://blog.bitbucket.org/2012/08/20/bitbucket-academic/)!  These
  repositories only allow users who you specify to have access.  
  
* [Github](http://github.com): This is site also offers unlimited free
  public repositories.  With an academic institution email address you can also
  get 5 free private repositories.  Github is probably **the** place for new
  open source software and tools.  It's a fantastic service and well worth
  using, especially if you want to take your own code open source.  You can also
  use Github to serve web pages for free.  This tutorial is open sourced on
  Github.


## **Cloning a repository**

If you have the address (and correct permissions) for an online repository then
you can grab your own copy using the ``clone`` command.  Try cloning your own
copy of the source for this tutorial (make sure you are not in your ``a_paper``
repository when you do this):

```bash
    % git clone git://github.com/AstroinformaticsAU/VersionControlTutorial.git
    % cd VersionControlTutorial
```

You are now inside your own personal copy of the repository and can do
whatever you want with it.  Try:

```bash
    % git log
```

and you will see that you also have the full commit history.


## **Collaboration strategies**

Unfortunately, it is out-with the scope of this tutorial to cover all of the
different ways you can collaborate with Git.  There are a number of options for
how to get your changes incorporated into the central repository for everyone to
have access to.  These include, forking and pull requests, email patches, and
direct pushing.

The basic work-flow is almost always the same though:

> * Make your changes in your own personal copy of the repository, ideally in a
>  new branch.
> * "Pull" (using the command ``git pull``) the most recent version of the central
>  repository into your ``master`` branch.  This makes sure you are up-to-date
>  with any changes which were made by someone else subsequent to when you last
>  pulled (or made your original clone).
> * Merge your changes from your new branch into ``master``.
> * Once any conflicts are resolved you can update the central repository with your
>  new code (using for example ``git push``).

> ## **Further reading**
>
>    For a proper introduction to hosting and collaborating with Git, see the
>    excellent online book, `Pro Git <http://git-scm.com/book>`_.  The help pages
>    of `Github`_ are also an excellent resource.
>
> Github: [https://github.com/](https://github.com/)