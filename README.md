emojidex Chrome Extension
=========================
An extension for Chrome/Chromium and derivative browsers that adds emojidex emojification 
to pages and an emoji pallete to the tool bar.

Installing
==========
You can find a stable version of emojidex on the Chrome Web Store 
[here](https://chrome.google.com/webstore/detail/emojidex/dmjimhgmfmldekckbojggjdijpollpeg?hl=ja)
.  
  
To install a development version you'll need to enable developer mode in Chrome/Chromium and load 
a build of the extension. Build instructions can be found below in the "Development" section, 
but assuming you have sucessfully run the build scripts you can load the extension locally by 
following [this](https://developer.chrome.com/extensions/getstarted#unpacked) section of the 
Chrome Extension development guide.

Development
===========
To modify or work on the emojidex Chrome Extension you'll need a few tools:  
  1. Either Chrome or Chromium
  2. A usable node.js and NPM
  3. Yarn

Initial Setup
-------------
Clone this repository, then in the repository do the following to setup the required tools:
  1. ```yarn install```
  2. ```yarn bower install```
  3. ```yarn grunt```

Building
--------
To run a development build, simply run:
```yarn grunt dev```

Loading
-------
To load the extension you just built, follow 
[this](https://developer.chrome.com/extensions/getstarted#unpacked)
guide and load the "extension" folder.

Rebuilding
----------
Each time you rebuild the extension you'll need to re-load it in the ```chrome://extensions``` 
page. If you don't reload you'll be testing a cached version of the extension.

License
=======
emojidex and emojidex tools are licensed under the 
[emojidex Open License](https://www.emojidex.com/emojidex/emojidex_open_license).

©2013 the emojidex project / K.K. GenSouSha [Phantom Creation Inc.]
