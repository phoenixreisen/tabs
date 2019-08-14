"use strict";

var TabView = {

    oninit: function oninit(vnode) {
        vnode.state.activeTab = vnode.attrs.initTab || 0;
        TabView.checkParameters(vnode);
    },

    onupdate: function onupdate(vnode) {
        TabView.checkParameters(vnode);
    },

    checkParameters: function checkParameters(vnode) {
        var attrs = vnode.attrs,
            children = vnode.children;

        if (!attrs.tabs || !children || attrs.tabs.length !== children.length) {
            throw 'amount of tabs and amount of components have to be equal.';
        }
    },

    changeTab: function changeTab(vnode, tabnr) {
        vnode.state.activeTab = tabnr;
    },

    view: function view(vnode) {
        var state = vnode.state,
            attrs = vnode.attrs;

        var changeTab = attrs.changeTab || TabView.changeTab;
        var activeTab = !isNaN(attrs.activeTab) && attrs.activeTab < attrs.tabs.length ? attrs.activeTab : state.activeTab;

        return m(
            "article",
            { "class": "phx-tabs" },
            m(
                "div",
                { "class": "phx-tabs__tabs-bar" },
                attrs.tabs.map(function (tabname, tabnr) {
                    return m(
                        "span",
                        {
                            "class": "phx-tab phx-tab-" + tabnr + " " + (attrs.tabs.length > 1 ? 'phx-tab--link' : '') + " " + (tabnr === activeTab ? 'is-active-tab' : 'is-inactive-tab'),
                            onclick: function onclick() {
                                return changeTab(vnode, tabnr);
                            } },
                        tabname
                    );
                })
            ),
            m(
                "div",
                { "class": "phx-tabs__tabs-content" },
                vnode.children.map(function (content, tabnr) {
                    return m(
                        "div",
                        { "class": "phx-tab-content phx-tab-content-" + tabnr + " " + (tabnr === activeTab ? 'is-visible-tab' : 'is-hidden-tab') },
                        content
                    );
                })
            )
        );
    }
};

module.exports = TabView;