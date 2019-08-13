const TabView = {

    oninit: (vnode) => {
        vnode.state.activeTab = vnode.attrs.initTab || 0;
        TabView.checkParameters(vnode);
    },

    onupdate: (vnode) => {
        TabView.checkParameters(vnode);
    },

    checkParameters: (vnode) => {
        const { attrs, children } = vnode;
        if (!attrs.tabs || !children || (attrs.tabs.length !== children.length)) {
            throw 'amount of tabs and amount of components have to be equal.';
        }
    },

    changeTab: (vnode, tabnr) => {
        vnode.state.activeTab = tabnr;
    },

    view: (vnode) => {  
        const { state, attrs } = vnode;
        const changeTab = attrs.changeTab || TabView.changeTab;
        const activeTab = !isNaN(attrs.activeTab) && (attrs.activeTab < attrs.tabs.length)
                        ? attrs.activeTab 
                        : state.activeTab;
        
        return (
            <article class="phx-tabs">
                <div class="phx-tabs__tabs-bar">
                    { attrs.tabs.map((tabname, tabnr) => {
                        return (
                            <span 
                                class={`phx-tab phx-tab-${tabnr} ${attrs.tabs.length > 1 ? 'phx-tab--link':''} ${tabnr === activeTab ? 'is-active-tab' : 'is-inactive-tab'}`} 
                                onclick={() => changeTab(vnode, tabnr)}>
                                { tabname }
                            </span>
                        );
                    })}
                </div>
                <div class="phx-tabs__tabs-content">
                    { vnode.children.map((content, tabnr) => {
                        return (
                            <div class={`phx-tab-content phx-tab-content-${tabnr} ${tabnr === activeTab ? 'is-visible-tab' : 'is-hidden-tab'}`}>
                                { content }
                            </div>
                        );
                    })}
                </div>
            </article>
        );
    },
};

module.exports = TabView;