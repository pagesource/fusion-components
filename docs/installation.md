### Getting started with Fusion ###

If you'd like to give it a quick spin

Clone the repo and do the usual

`git clone git@github.com:pagesource/fusion.git`

`npm install`

 `npm start`

### Running Dev Server ###

```bash
npm run dev
```

The Demo Kitchen Sink page is built using next.js

In the browser go to `http://localhost:3000/kitchen-sink`

Fusion components are located in the fusion folder

All pages related kitchen-sink are located in the pages folder

### To add Fusion into your project as a Git-sub tree ###



`git subtree add --prefix fusion https://github.com/pagesource/fusion.git master`

The `--prefix=fusion` will create a folder called fusion and import the components into that folder. In case you want to copy the fusion components into a folder simply change the prefix to your folder name `==prefix=<your-folder-name>`
