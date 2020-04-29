import m from 'mithril';

export interface ITabsAttrs {
    initTab: number,
    activeTab?: number,
    tabs: Array<any>,
    changeTab(vnode: Vnode, tabnr: number): void,
}

export interface ITabsState {
    activeTab: number,
}

export type Vnode = m.Vnode<ITabsAttrs, ITabsState>;
export type VnodeDom = m.VnodeDOM<ITabsAttrs, ITabsState>;