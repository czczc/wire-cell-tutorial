# Contribute to this tutorial

This tutorial is created using the [VuePress](https://vuepress.vuejs.org/) static site generator. To contribute to the tutorial please let the site manager add you as a collaborator. Then, you can directly edit using the **"Edit this page"** link on each page.

Alternatively, you can build the tutorial on your own computer. You need to first install `node.js` and `npm` (e.g. [on ubuntu](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)). I recommend using [nvm](https://github.com/nvm-sh/nvm) for better version control.

## Install dependencies

```bash{2-4}
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash # or newer versions
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# add the above three lines to your ~/.bashrc file
nvm install node
npm install vuepress
```

## Start writing

```bash
git clone https://github.com/czczc/wire-cell-tutorial
cd wire-cell-tutorial
vuepress dev
```

Now start editing the markdown files, and you should see changes at `http://localhost:8080/` . Once everything looks fine, you should commit the changes to github repository and inform the site manager to rebuild the site.
::: tip
With permission you can build and deploy the pages yourself using the [deploy.sh](https://github.com/czczc/wire-cell-tutorial/blob/master/deploy.sh) script.
:::
