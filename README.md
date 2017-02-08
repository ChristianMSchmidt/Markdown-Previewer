# Changes for gh-pages branch:
- Don't ignore public-directory in .gitignore
- followed steps from [spa-github-pages](https://github.com/rafrex/spa-github-pages)
  - Add 404.html
  - Add index.html
  - Updated Routes (added repo-name)
  - Switched the IndexRedirect to an IndexRoute (in routes.js)

# Markdown-Previewer
 A Markdown-Previewer for [freeCodeCamps React Projects](https://www.freecodecamp.com/challenges/build-a-markdown-previewer)  

## User-Stories:
- I can type GitHub-flavored Markdown into a text area.
- I can see a preview of the output of my markdown that is updated as I type.

## Uses:
- [marked](https://github.com/chjj/marked) as markdown parser and compiler
- [babel](https://babeljs.io/) to compile Javascript
- [webpack](https://webpack.js.org/) with the [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin#api) to bundle all the `.js`-files and compile/extract `.scss`-files
- [react](https://facebook.github.io/react/) to build the site

## Helpful tutorials:  
React on the Server for Beginners: Build a Universal React and Node App ([Scotch.io](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app))  
Youtube-Playlist from [remarkablemark](https://www.youtube.com/playlist?list=PLVgOtoUBG2md5HxaABCcnfstF88CPzUeD)  
[Optimizing Webpack](http://survivejs.com/webpack/optimizing-build/minifying/)  
[The Fine Art of the Webpack 2 Config](https://blog.flennik.com/the-fine-art-of-the-webpack-2-config-dc4d19d7f172#.fubeswh5v) by Alexander Flenniken  
[Backend Apps with Webpack (Part I)](http://jlongster.com/Backend-Apps-with-Webpack--Part-I) by James Long 

## File Structure:
```
.
├ .gitignore
├ package.json
├ README.md
├ webpack.config.js
└ src
  ├ server.js
  ├ routes.js
  ├ client.js
  ├ Components
  | ├ 404.js
  | ├ AppRoutes.js
  | ├ Layout.js
  | ├ MarkdownInput.js
  | ├ MarkdownOutput.js
  | └ Previewer.js
  |
  ├ Data
  | └ defaultString.js
  |
  └ scss
    ├ style.scss
    ├ Layout.scss
    ├ In_and_Output.scss
    └ 404.scss
```