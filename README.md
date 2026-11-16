### This is a demo project for the NPM JavaScript package

```
npm install
npm run build
```

Open `src/index.html` in an editor, click the browser icon, if supported.
Or serve the project folder and open http://localhost:8080/src/index.html:

```
python3 -m http.server 8080
```

Opening `src/index.html` directly from the file system (`file://`) does not work.

The widgets are grouped into tabs by their Storybook category. Each widget has its own file in `src/widgets/<category>-widgets/`;
to add one, create a file there and add it to the list file of that folder (e.g. `searchWidgets.js`).