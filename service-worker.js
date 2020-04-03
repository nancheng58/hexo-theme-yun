/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.50be7f47.css",
    "revision": "e61547f238d2617f769384effa195531"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.59f29d2e.js",
    "revision": "a583dde2f2c33b69482c51e0ab27b701"
  },
  {
    "url": "assets/js/11.b15dd8a6.js",
    "revision": "2cfe6031835c8020b5a770850d227819"
  },
  {
    "url": "assets/js/12.44888fd0.js",
    "revision": "2a0ccdd798fc188f9e1bf390b3829f08"
  },
  {
    "url": "assets/js/13.dcbdb5ca.js",
    "revision": "29e92513bb1aba1521eafacf9a5db3e9"
  },
  {
    "url": "assets/js/14.ca4b8d45.js",
    "revision": "53cf75d3f679b488ecba47e201a09468"
  },
  {
    "url": "assets/js/15.ce6c3d27.js",
    "revision": "3b62025b5b83fa3cb5d49072d1856618"
  },
  {
    "url": "assets/js/16.a004eec2.js",
    "revision": "3235f2fcc4e68f0b448fc89cfc084fbc"
  },
  {
    "url": "assets/js/17.c78d168d.js",
    "revision": "7f39d163016e00f75eb02b4caabedde9"
  },
  {
    "url": "assets/js/18.d69c7a54.js",
    "revision": "a8bfd6c41fb239d7317e614af0fcaf36"
  },
  {
    "url": "assets/js/2.9d87224e.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/3.aa97e589.js",
    "revision": "b4a2dd5ee008fd9ef0c9261cea06c73a"
  },
  {
    "url": "assets/js/4.68a542bf.js",
    "revision": "cd79d2067b3dbcf3ecabc34d2b243d91"
  },
  {
    "url": "assets/js/5.209351dc.js",
    "revision": "1a4bc2bdbcb9d08bf1ae4d7b1f9f0a1b"
  },
  {
    "url": "assets/js/6.2fec8c98.js",
    "revision": "d8653011fff51b6a0e67f5782c6233c5"
  },
  {
    "url": "assets/js/7.b3cf3ece.js",
    "revision": "daccce7f6840e5d5cfbd27ac5d9b5567"
  },
  {
    "url": "assets/js/8.755f0e1e.js",
    "revision": "34289b2af2ebb8babc2d1610e904008f"
  },
  {
    "url": "assets/js/9.dea933c4.js",
    "revision": "2157e7108cc02c9775de63a6d3520255"
  },
  {
    "url": "assets/js/app.e9d412a7.js",
    "revision": "61cc2b4114cc7e9d72acc25d6ecaf933"
  },
  {
    "url": "en/guide/index.html",
    "revision": "9bd4704dbaa14fed855151820e8148d3"
  },
  {
    "url": "en/index.html",
    "revision": "930fcd8029f4b1e65a50f61c246f7b62"
  },
  {
    "url": "guide/about.html",
    "revision": "2ba76aa62e794776e8fadffbbf16d91d"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "d20360457117b9ab0e7d3bec6e3358be"
  },
  {
    "url": "guide/config.html",
    "revision": "67a6f97f6958b92929166383f241824c"
  },
  {
    "url": "guide/faq.html",
    "revision": "e8ca136cecf4b828c54ccfb440fe38d9"
  },
  {
    "url": "guide/index.html",
    "revision": "16c3b5ba78bf1ae6e315a9d772def088"
  },
  {
    "url": "guide/page.html",
    "revision": "c8d8ad8688a8c8d4117abb16d6b7dbd6"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "86e967e3f46c3f617f468d88d5337ceb"
  },
  {
    "url": "guide/Todo.html",
    "revision": "45e607dc27d3450595f1d24aa820e2cd"
  },
  {
    "url": "index.html",
    "revision": "8785e4d5e22e53771e86145f9b6a196a"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "logo.png",
    "revision": "bb35d0cf00948250fd08e4663c133e12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
