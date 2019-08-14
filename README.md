# Phoenix Tabs

Phoenix "Web Tabs"-Komponente auf Mithril-Basis.

```js
// CommonJS
const Tabs = require('@phoenixreisen/tabs');

// ES6
import Tabs from '@phoenixreisen/tabs';

// Hyperscript
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