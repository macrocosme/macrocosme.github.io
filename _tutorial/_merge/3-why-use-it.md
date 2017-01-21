---
layout: post
title: What is version control?
---



Why you should use it (for everything)
--------------------------------------

> *In practice, everything that has been created manually should be put in
> version control, including programs, original field observations, and the
> source files for papers.*
>
>  -- Best Practices for Scientific Computing; Wilson et al. 2012
>   [arXiv:1210.0530](http://arxiv.org/abs/1210.0530)

In important aspect of any scientific endeavour is **reproducibility**.  We
should be able to replicate every figure we have ever published, even if we have
significantly developed our codes and tools since. 

As astronomers, we spend much of our time writing code, whether it be a
simulation code or an observational reduction pipeline.  As such, our codes are
often constantly evolving.  By putting all of our code under version control we
can:

- tag code versions for later reference *(via tags)*.
- record a unique identifier for the exact code version used to produce a
  particular plot or result *(via commit identifiers)*.
- roll back our code to previous states *(via checkout)*.
- identify when/how bugs were introduced *(via diff/blame)*.
- keep multiple versions of the same code in sync with each other *(via
  branches/merging)*.
- efficiently share and collaborate on our codes with others *(via
  remotes/online hosting)*.

It's important to also realise that many of the advantages of version control
are not limited to just managing code.  For example, it can also be useful when
writing papers.  Here we can use version control to:

- bring back that paragraph we accidentally deleted last week.
- try out a different structure and simply disregard it if we don't like it.
- concurrently work on a paper with a collaborator and then automatically merge
  all of our changes together.

The upshot is **you should use version control for almost everything**.  The
benefits are well worth it...
