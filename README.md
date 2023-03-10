# [https://pianosabina.com/](https://pianosabina.com/)


## Prerequisites


Keep in mind that I am developing on WSL2, Ubuntu-20.04.


To do small multi-file edits you can use a [web-editor](https://github.dev/pianosabina/piano-lessons).

Entire workflow and setup is build with:

* [Docusaurus](https://docusaurus.io/) - An optimized site generator in React.
* [GitHub Actions](https://github.com/features/actions) - CI/CD automation
* [GitHub Pages](https://pages.github.com/) - Website Hosted directly from your GitHub repository. Just edit, push, and your changes are live.
* [Markdown](https://en.wikipedia.org/wiki/Markdown#:~:text=Markdown%20is%20a%20lightweight%20markup,using%20a%20plain%20text%20editor.) - book content.

Before you begin, you'll need the setup your local development environment with:

- [nodejs](https://nodejs.org/en/)
- [git](https://git-scm.com/)
- (Optional) [Visual Studio Code](https://code.visualstudio.com/) - awesome editor I love to use, but just a recommendation.


## Step 1 — Local Development Environment

In this step, I cloned the repo with the markdown content, switched a branch to documentation and installed npm packages.

First, clone the repo:

```sh
git clone https://github.com/pianosabina/piano-lessons.git
```

Next, switch a branch to `main`:

```sh
git checkout main
```


Finally, install Docusaurus which is essentially a set of npm packages that can be installed over npm.
Install npm dependencies. It will install all modules listed as dependencies in `package.json`

```sh
npm install
```

[More Information about docusaurus installation.](https://docusaurus.io/docs/installation)


## Step 2 — Development and Docusaurus Configuration

### Running the development server

To preview your changes as you edit the files, you can run a local development server that will serve your website and it will reflect the latest changes.

```sh
npm run start
```

and contents will be generated within the `/build` directory, which can be copied to any static file hosting service like GitHub pages, Vercel or Netlify. Check out the docs on [deployment for more details](https://docusaurus.io/docs/deployment).

By default, a browser window will open at `http://localhost:3000`


### Project Structure

- `/docs/` - Contains the Markdown files for the docs. More details can be found in the [docs guide](https://docusaurus.io/docs/markdown-features)

- `/src/` - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files in here but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing.
  - `/pages/` - Any files within this directory will be converted into a website page. More details can be found in the [pages guide](https://docusaurus.io/docs/creating-pages)

- `/static/` - Static directory. Any contents inside here will be copied into the root of the final `build` directory

- `/docusaurus.config.js` - A config file containing the site configuration.

- `/package.json` -  A Docusaurus website is a React app. You can install and use any npm packages you like in them.

- `CNAME` file - that is only relevant if you are going to have a custom subdomain, and not a default github pages. This file contains the url to the subdomain that was created, in our case via AWS, and it is important that the file is located under `static` folder since after the build it will be located under the `root` of the site on `gh-pages` branch, otherwise every time you build the site, the AWS configuration will be cleared up, and that is not good if you want to automate the entire workflow.


