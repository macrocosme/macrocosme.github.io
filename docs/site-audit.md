# Site audit: thinner and safer

Audit date: 2026-11-09. This covers the first two goals for macrocosme.github.io, making it thinner and safer. The findings below describe the site as it was on that date.

**Status.** On branch `macrocosme/site-audit`, 340 unlinked images (162.4 MB) and the `utm/` folder were moved to the local folder `../macrocosme.github.io-archive/`, which brings tracked files from 208.3 MB to about 46 MB. The images are listed in `docs/removal-candidates.md`. The live site and `master` stay unchanged until this branch is merged. These files remain in Git history. The contact form, the tutorials and the Interlude video stay for now, and Git history will not be rewritten for now.

## Summary

The site carries about 208 MB of tracked files, and about 169 MB of that is images that no page links to. The homepage itself is reasonably light, so the main thinning job is clearing out the repository rather than speeding up the page.

I found no leaked credentials and no location data in images. The real safety problems are smaller and easy to fix: a dead Google Analytics tag that still loads for every visitor, a contact form that appears to be broken and exposes a personal address, and old libraries in the tutorial pages.

I recommend cleaning up first, on the current Jekyll setup, and then rebuilding the site as a small Hugo site. Hugo suits the safety goal better than Astro because it is one program with no package tree to keep patched.

## Fix first

| Priority | Problem | Evidence | Fix |
|---|---|---|---|
| High | The contact form probably does not work. It posts to `formspree.io/danyvohl@gmail.com`, an address-in-the-URL format. It also publishes the personal address in the page source. | A plain GET of that URL returns 404. I did not submit the form, because that would send a real message, so please send one test message to confirm. It appears in `index.html` and `nac2024.html`. | Replace the form with a plain email link, preferably an institutional address. |
| High | Google Analytics still loads on every page but collects nothing useful. The site uses the old `UA-74679561-1` property, and Google stopped processing that product in July 2023. | The live homepage still contains the tag, and `analytics.js` still returns 200. See `_config.yml` and `_includes/analytics.html`. | Remove it. Visitor data currently goes to Google, with no consent notice and no benefit to you. |
| Medium | Template text is live at `/about/`: "Some information about you!" and `email@domain.com`. | The page returns 200 and contains that text. | Remove the page. |
| Medium | About 150 MB of figures copied from journal papers are publicly downloadable even though nothing links to them. | 306 of the 314 files in `images/publications/` are unlinked. One sampled unlinked figure returned 200 from the live site. | Remove them from the site. Whether each may be republished depends on the paper's licence, so linking to the paper is simpler. |
| Medium | The tutorial pages use jQuery 1.11.3, from 2015. | `db/assets/js/` and `git_tutorial/assets/js/`. Known advisories include CVE-2015-9251, CVE-2019-11358, CVE-2020-11022 and CVE-2020-11023. | Remove jQuery from those pages or update it (latest is 4.0.0). |
| Low | The repository has no secret scanning, no push protection and no branch protection. Any GitHub Action is allowed to run. | GitHub API. Dependabot alerts are on. | Turn on secret scanning and push protection (free for public repositories). Limit which Actions may run. |

The practical risk from the old libraries is low. Their advisories mostly need an attacker to feed untrusted content into the page, and this is a static site with no user content. Replacing them is still worthwhile because it also removes weight.

## Thinner

### Where the weight is

| Item | Size | Note |
|---|---:|---|
| Tracked files, total | 208.3 MB | |
| Git history (`.git` pack) | 192 MB | Affects clones only, not visitors. |
| All images | 189.2 MB (445 files) | Only 62 files, 19.8 MB, are linked. |
| `images/publications/` | 152.4 MB (314 files) | 8 files, 4.0 MB, are linked. |
| `db/`, `git_tutorial/`, `python-viz/` | 17.9 MB | Old tutorials. |
| `nac2024/` | 7.2 MB | The poster is linked. The 4 MB accepted paper is not. |

"Linked" means the file name appears in the HTML of the seven live pages I fetched, outside HTML comments, or in the tracked non-minified CSS or the Git tutorial Markdown. An outside site could still link directly to an image, and I cannot rule that out. Removing the unlinked images would bring tracked files down to about 39 MB.

### Homepage

The homepage loads 181 KB of JavaScript and 63 KB of CSS, including Font Awesome. Its nine inline images total 3.8 MB. In a test, converting them to WebP at 1200 pixels wide and quality 80 gave 0.8 MB. None of them use `loading="lazy"`.

Three scripts can go from the homepage:

- Prism (41 KB) highlights code, and the homepage has no code blocks.
- Skel (a layout library for old browsers) has had no repository activity since June 2018.
- jQuery (87 KB, version 3.6.4) is needed only for the popups and Skel. The native `<dialog>` element can replace the popups.

### Should not be on the site

| Item | Reason |
|---|---|
| `assets/js/jquery.history.js.html` (70 KB) | A saved copy of a GitHub web page. Nothing uses it. |
| `*.bk`, `*.htc`, `ie8.css`, `html5shiv`, `respond.min.js` | Backups and Internet Explorer support. |
| Three copies of the theme (`assets/`, `db/assets/`, `git_tutorial/assets/`) | Duplicated code, including the old jQuery. |
| 47 HTML comments in `index.html` | They ship to every visitor, including old adviser sections, the blog template and the music section. |
| Jekyll template leftovers: `style.scss`, `_sass/`, `_layouts/post.html`, `_includes/disqus.html`, `images/jekyll-*`, `images/first-post.png`, `README.txt` | Not used by the current design. `style.scss` should be checked before removal. |
| `CNAME` | Contains only a line break. The site has no custom domain. |
| `images/github-git-cheat-sheet2.pdf`, `nac2024/paper-accepted-version.pdf` | Unlinked. The paper is better linked through ADS or the journal. |
| `utm/` | Field transect coordinates from south-western Victoria, Australia, with a conversion notebook. Nothing on the site links to it, and it may be a collaborator's data. Please check. |
| `sdss_query/`, `morphology_galaxy.html`, `dotastro` (a teaching SQLite database) | Not linked from any page I checked, or supporting files for old tutorials. |
| Old Swinburne address on three tutorial pages | Presumably no longer monitored. |
| Simon Mutch's email address in `_git_tutorial/3-view.md` | A real person's address in an example. Replace it with a made-up one. |

### Tutorials

The tutorials are worth keeping if people still use them, but they do not belong in the same site as the research page. I suggest moving them to a separate `macrocosme/teaching` repository, which GitHub would serve at `macrocosme.github.io/teaching/`. The old URLs (`db_sql.html`, `dotastronomy_seven.html`, `GitTutorial*`) can keep working as small redirect pages.

### Git history

Removing files from the current version does not shrink the 192 MB history, and the removed figures would stay reachable in it. Shrinking it means rewriting history and force-pushing, or starting a fresh repository. That is hard to undo and matters only for clone size or the copyright question, so it should come last and only if you want it.

## Safety checks that came back clean

- No AWS keys, GitHub tokens or private keys in the working tree or history. The history search skipped notebooks. The notebooks' current versions contain no passwords, tokens or home-directory paths.
- No GPS data in any of the 435 JPEG and PNG files. Two have a camera make and model only (`images/dv-encube.jpg` and `assets/css/images/cardboard_texture.jpg`).
- No page loads a script, frame or form over plain `http://`, and HTTPS is enforced.
- No custom domain, so there is no domain to be taken over.

GitHub Pages cannot set security headers such as Content-Security-Policy. A `<meta>` tag provides most of the same protection, and it becomes easy to write once the third-party scripts are gone. The remaining third-party content would be the Vimeo player and YouTube popups. YouTube can use `youtube-nocookie.com`, and the Vimeo embed could become a plain link.

## Libraries and configuration

| Component | In use | Current | Comment |
|---|---|---|---|
| Jekyll, through the GitHub Pages legacy build | 3.10.0 | 4.4.1 | The legacy build stays on the 3.x line. `github-pages` gem 233 was released on 2026-11-03, so it is still maintained. |
| jQuery, homepage | 3.6.4 | 4.0.0 | Best removed. |
| jQuery, tutorials | 1.11.3 | 4.0.0 | See "Fix first". |
| Prism | Old custom build, version not stated | 1.30.0 | Versions before 1.30.0 have CVE-2024-53382. Keep only for tutorials, and update it. |
| Font Awesome | 4.3 to 4.6 | | Replace with a few inline SVG icons. `fa-sharp` and `fa-light` are used in the HTML but do not exist in version 4. |
| Magnific Popup | 1.1.0 | | Replace with `<dialog>`. |
| Skel | Bundled | Inactive since 2018 | Replace with plain CSS grid. |

Problems in `_config.yml`:

- `gems:` was renamed `plugins:` in Jekyll 3.5.
- `Jekyll-Scholar` is listed, but there is no `_bibliography/` folder and GitHub Pages does not allow that plugin.
- `avatar: images/Action.jpg` points to a file that does not exist.
- `url` has no `https://`.
- `description` still says ASTRON postdoc.

The layouts also hard-code `https://macrocosme.github.io/...` for every asset, so a local build or preview would load the production files instead of your edits.

## Framework options

Most comparisons I found are blog opinions, so this ranking rests mainly on what this particular site needs: one page, a few long lists that change now and then, no JavaScript features, and as little to patch as possible. Version numbers came from the package registries on the audit date.

| Option | For | Against | Verdict |
|---|---|---|---|
| **Hugo** (v0.169.0) | One program with no package tree. Fast. Talks and software lists can live in simple data files. | Needs a short GitHub Actions workflow. Its template language is awkward at first. | **Recommended** |
| Plain HTML and CSS | Nothing to build or patch. | Long lists are edited by hand as HTML. | Good if you rarely update it. |
| Jekyll, kept and stripped down | Least change and no build setup. | Stuck on 3.x with the legacy build, and Ruby dependencies if built elsewhere. | Good for the first phase. |
| Astro (7.4.7) | Popular modern default that ships no JavaScript by default. | Brings a large npm package tree, which works against "safer", and its strengths go unused here. | Not for this site. |
| Eleventy (3.1.8) | Simple and flexible. | Also npm-based, for little gain over Hugo here. | Not needed. |

Academic themes such as al-folio bring many features and dependencies, which is the opposite of the goal. The site already sends readers to ADS and Google Scholar for its paper list, so it does not need BibTeX tooling.

Moving to Hugo means switching Pages from "deploy from a branch" to "GitHub Actions", which is a repository setting. Pin the Hugo version and pin the Actions to exact commits.

## Suggested order

- [ ] Remove Google Analytics, replace the contact form, and remove `/about/`.
- [ ] Remove unlinked images and leftovers, and move the tutorials out, with redirects.
- [ ] Turn on secret scanning and push protection, and limit Actions.
- [ ] Rebuild as a single Hugo page with WebP images, no jQuery, and a `<meta>` content policy.
- [ ] Decide whether to rewrite Git history.

## Noticed for the career-stage pass

These are outside the first two goals:

- The homepage does not state a current position, because the affiliation is commented out.
- It has no 2025 or 2026 items.
- `nac2024.html` still gives older affiliations.
- The talks list has typos: "2023. , 2023.", a raw `$\cdot$`, and a 2017 talk still marked "To be presented".
- The footer says "All right reserved".
- The "Interlude" video and the commented-out music section are a judgement call.

## Decisions

- Removed files go to a local archive outside the repository, and stay in Git history.
- The contact form is left as it is for now.
- The tutorials stay on this site for now.
- `utm/` was archived locally and taken off the site.
- Git history will not be rewritten for now.
- The Interlude video stays.
