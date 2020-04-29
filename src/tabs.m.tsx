import {Vnode, VnodeDom, ITabsAttrs, ITabsState} from './tabs.types';
import m from 'mithril';

const _checkParameters = (vnode: Vnode) => {
    const attrs = vnode.attrs as ITabsAttrs;
    const children = vnode.children as m.ChildArray;
    if (!attrs.tabs || !children || (attrs.tabs.length !== children.length)) {
        throw 'amount of tabs and amount of components have to be equal.';
    }
};

const _changeTab = (vnode: Vnode, tabnr: number) => {
    vnode.state.activeTab = tabnr;
};

export const Tabs: m.Component<ITabsAttrs, ITabsState> = {

    oninit: (vnode: Vnode) => {
        vnode.state.activeTab = vnode.attrs.initTab || 0;
        _checkParameters(vnode);
    },

    onupdate(vnode: VnodeDom) {
        _checkParameters(vnode);
    },

    view: (vnode: Vnode) => {
        const {state, attrs} = vnode;
        const children = vnode.children as m.ChildArray;
        const changeTab = attrs.changeTab || _changeTab;
        const activeTab = attrs.activeTab && (attrs.activeTab < attrs.tabs.length)
                        ? attrs.activeTab
                        : state.activeTab;

        return (
            <article class="tabs">
                <div class="tabs__tabs-bar">
                    {attrs.tabs.map((tabname: string, tabnr: number) => {
                        return (
                            <a
                                class={`tab tab-${tabnr} ${attrs.tabs.length > 1 ? 'tab--link':''} ${tabnr === activeTab ? 'is-active-tab' : 'is-inactive-tab'}`}
                                onclick={() => changeTab(vnode, tabnr)}>
                                {tabname}
                            </a>
                        );
                    })}
                </div>
                <div class="tabs__tabs-content">
                    {children.map((content: any, tabnr: number) => {
                        return (
                            <div class={`tab-content tab-content-${tabnr} ${tabnr === activeTab ? 'is-visible-tab' : 'is-hidden-tab'}`}>
                                {content}
                            </div>
                        );
                    })}
                </div>
            </article>
        );
    },
};

export default Tabs;