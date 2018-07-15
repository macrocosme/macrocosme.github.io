---
layout: post
title: Merging and dealing with conflicts
---

# Merging and conflicts

At this stage we have two branches, ``master`` and ``risky_idea``.  Let's
imagine that we have continued to work away on the ``risky_idea`` branch,
committing our changes as we go...

--------

# Merging

At some stage we will want fold our changes in the ``risky_idea`` branch back
into the ``master`` branch.  We do this by "merging" the ``risky_idea`` branch
into ``master``.

First we checkout the ``master`` branch:

```bash
    % git checkout master
```

If you run ``git log`` you should see that none of your commits to the
``risky_idea`` branch are present.  You can further confirm this by looking at
the contents of ``paper.tex``; The section "The Empire Strikes Back" shouldn't
be present.

Now merge ``risky_idea`` into our current branch using the following command:

```bash
    % git merge risky_idea
```

If everything runs smoothly, running ``git log`` should show your commits from
the ``risky_idea`` branch.

At this stage you could either checkout the ``risky_idea`` branch again and
continue working, or if you are finished with it you can delete it.  

We no longer need the ``risky_idea`` branch, so delete it using:

```bash
    % git branch -d risky_idea
```

--------

# Dealing with conflicts

Typically, as above, a ``git merge`` will progress smoothly with Git
automatically working out how to merge the two branches.  Occasionally however,
this is not the case.  In particular if we have made changes to two different
branches which directly conflict with each other, then a merge will require us
to tell Git which change is the correct one.  We will now engineer such a
situation...

First create a new branch called ``episode5`` and check it out:

```bash
    % git branch episode5
    % git checkout episode5
```

> ## **tip:**
>
>    In situations where you want to create a new branch and immediately check it
>    out (as above) you can use the following shortcut:
>   
>   ```bash
>     % git checkout -b <branch_name>
>   ```

Then add another section to ``paper.tex`` with the following:

```latex
    \section{Revenge of the Jedi}
    That blast came from the Death Star! That thing's operational!
```

Commit your changes:

```bash
    % git add paper.tex
    % git commit
```

Now we have a new branch with a new commit that adds a section to our paper.
However, imagine the situation where we decide we want to leave this section for
the moment and go back to working on our second section.  To do this, we return
to our ``master`` branch.  During the course of our edits we come up with
another name for our newest section though, and pen this in so that we don't
forget.  This will lead to a conflict when we later merge our ``episode5``
branch back into ``master``.  Let's replicate this conflict now to see what
happens...

First checkout ``master``:

```bash
    % git checkout master
```

Then edit ``paper.tex``, this time with the text:

```latex
    \section{Return of the Jedi}
    That blast came from the Death Star! That thing's operational!
```

Again, stage and commit your changes:

```bash
    % git commit -a
```


> ## **note:**
>
>    Note that we used ``git commit -a`` here to stage and commit our changes in
>    one go.  This is a very useful shortcut.  However, it will only stage
>    changes in files which are already being tracked by the repository.  i.e. if
>    you add a new file to your project, you will still need to run ``git add``
>    for Git to start tracking it.  Additionally, it will stage **all** changes,
>    so you have less control over what changes go into each commit.


Now our two branches ``master`` and ``episode5`` have commits in them which
directly conflict.  Running the merge command from the ``master`` branch will
flag this conflict and Git will ask us for help.  Try it now:

```bash
    % git merge episode5
```

and you should be presented with the following message:

```git
    Auto-merging paper.tex
    CONFLICT (content): Merge conflict in paper.tex
    Automatic merge failed; fix conflicts and then commit the result.
```

This tells us that a conflict has occurred in ``paper.tex``.  

To resolve the conflict open up ``paper.tex`` in your favorite editor.  The
offending section will look something like this:

```git
    <<<<<<< HEAD
    \section{Return of the Jedi}
    =======
    \section{Revenge of the Jedi}
    >>>>>>> episode5
```

Everything between the lines ``<<<<<<< HEAD`` and ``=======`` are what exists in
the ``HEAD`` commit (the tip of the ``master`` branch in this case).  Between
the lines ``=======`` and ``>>>>>>> episode5`` is what exists in our
``episode5`` branch.

In order to resolve the conflict, pick which of the section headings we want to
use and remove the other lines (including the ``=======`` line and those lines
starting with ``>`` or ``<`` symbols.  In our case we want to keep the section
title from the ``master`` branch, and so we need to leave only that line:

```latex
    \section{Return of the Jedi}
```

After you have edited and saved ``paper.tex``, finish the merge by staging and
committing your results:

```bash
    % git commit -a 
```

The commit message will be auto-populated for you, and so there is no need to
edit it.

--------

# Command summary

``git merge``: Merge branches and commits.

``git branch -d``: Delete a branch.

``git commit -a``: Stage **all** changes in **tracked** files and commit them.