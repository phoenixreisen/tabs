const test = require('ospec');
const jsdom = require('jsdom');

const dom = new jsdom.JSDOM('', {
    // für `requestAnimationFrame`
    pretendToBeVisual: true,
});

global.window = dom.window;
global.document = dom.window.document;
global.requestAnimationFrame = dom.window.requestAnimationFrame;

require('mithril');

test.after(function() {
    dom.window.close();
});