# Phoenix Tabs

Phoenix "Web Tabs"-Komponente auf Mithril-Basis.

[Live Demo](https://jsfiddle.net/Fama/w40m6s7d/1/)

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Installation

```bash
npm install --save-dev @phoenixreisen/tabs
```

## Anwendung

[Mithril](https://mithril.js.org/) wird benötigt.

### Styles

```scss
/* via SCSS */
@import "@phoenixreisen/phoenix-design-system/src/index.scss";
@import "@phoenixreisen/tabs/src/phx.tabs.style.scss";
```

```html
<!-- via HTML -->
<link rel="stylesheet" href="https://unpkg.com/@phoenixreisen/tabs@latest/dist/phx.tabs.style.css" />
```

### Javascript

#### Einbindung

```js
// entweder CommonJS
const Tabs = require('@phoenixreisen/tabs');

// oder ES6
import Tabs from '@phoenixreisen/tabs';
```

```html
<!-- oder Browser -->
<script src="https://unpkg.com/@phoenixreisen/tabs@latest/dist/phx.tabs.view.js" />
```

#### Aufruf

```js
// Hyperscript bzw. Javascript
m(Tabs, 
    { tabs: ['Tab 1', 'Tab 2'] }, 
    [ m('div.tab1'), m('div.tab2') ]
);

// JSX
<Tabs tabs={['Tab 1', 'Tab 2']}>
    {[
        <div class="tab1">Tab 1</div>,
        <div class="tab2">Tab 2</div>,
    ]}
</Tabs>
```

## Test

```bash
npm install
npm run test
```

## Deployment

Nicht vergessen, falls nötig, die Live Demo zu aktualisieren 
und deren Link vor dem Deployment hier anzupassen.

```bash
# Version erhöhen x.x.x => major.minor.patch
npm version [major|minor|patch]

# Upload nach NPM
npm publish

# Git - neue Version einchecken
git commit package.json package-lock.json -m "(npm) version increased"
git push

# HG - neue Version einchecken
hg commit package.json package-lock.json -m "(npm) version increased"
hg push
```