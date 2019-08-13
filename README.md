# Phoenix Tabs

Phoenix "Web Tabs"-Komponente auf Mithril-Basis.

```js
const TabView = require('@phoenixreisen/tabs');
// oder
import TabView from '@phoenixreisen/tabs';

m(TabView, 
    { tabs: ['Tab 1', 'Tab 2'] }, 
    [ m('div.tab1'), m('div.tab2') ]
);
```

## Installation

```bash
npm install --save-dev @phoenixreisen/tabs
```

## Test

```bash
npm install

npm run test
```

## Deployment

```bash
npm run test

npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm

hg commit package.json package-lock.json -m "(npm) version increased"
hg push
```