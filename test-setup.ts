const test = require('ospec');
const jsdom = require('jsdom');

const dom = new jsdom.JSDOM('', {
    // für `requestAnimationFrame`
    pretendToBeVisual: true,
});

Object.assign(global, {
    window: dom.window,
    document: dom.window.document,
    requestAnimationFrame: dom.window.requestAnimationFrame,
});
require('mithril');

test.after(function() {
    dom.window.close();
});