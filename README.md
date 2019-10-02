# Phoenix Tabs

Phoenix "Web Tabs"-Komponente auf Mithril-Basis.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Installation

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/tabs
```

## Anwendung

```js
// entweder CommonJS
const Tabs = require('@phoenixreisen/tabs');

// oder ES6+
import Tabs from '@phoenixreisen/tabs';
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

```bash
npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm
git push
```