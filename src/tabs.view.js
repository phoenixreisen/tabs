const Tabs = {

    oninit: (vnode) => {
        vnode.state.activeTab = vnode.attrs.initTab || 0;
        Tabs.checkParameters(vnode);
    },

    onupdate: (vnode) => {
        Tabs.checkParameters(vnode);
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
        const changeTab = attrs.changeTab || Tabs.changeTab;
        const activeTab = !isNaN(attrs.activeTab) && (attrs.activeTab < attrs.tabs.length)
                        ? attrs.activeTab 
                        : state.activeTab;
        
        return (
            <article class="tabs">
                <div class="tabs__tabs-bar">
                    { attrs.tabs.map((tabname, tabnr) => {
                        return (
                            <a 
                                class={`tab tab-${tabnr} ${attrs.tabs.length > 1 ? 'tab--link':''} ${tabnr === activeTab ? 'is-active-tab' : 'is-inactive-tab'}`} 
                                onclick={() => changeTab(vnode, tabnr)}>
                                { tabname }
                            </a>
                        );
                    })}
                </div>
                <div class="tabs__tabs-content">
                    { vnode.children.map((content, tabnr) => {
                        return (
                            <div class={`tab-content tab-content-${tabnr} ${tabnr === activeTab ? 'is-visible-tab' : 'is-hidden-tab'}`}>
                                { content }
                            </div>
                        );
                    })}
                </div>
            </article>
        );
    },
};

if(typeof module !== 'undefined') {
    module.exports = Tabs;
}