import { renderEmptyMessage, renderWidget } from './renderWidget';

// Builds the tab bar and one panel per tab. The open tab is kept in the URL
// hash (e.g. #search), so a reload or a shared link opens the same tab.
export function createTabs(tabs, { nav, panels }) {
    const renderedTabs = new Set();
    const defaultTabId = tabs[0].id;

    tabs.forEach((tab) => {
        const button = document.createElement('button');
        button.className = 'demo-tabs__tab';
        button.type = 'button';
        button.setAttribute('role', 'tab');
        button.dataset.tab = tab.id;
        button.textContent = tab.label;
        button.addEventListener('click', () => {
            window.location.hash = tab.id;
        });
        nav.append(button);

        const panel = document.createElement('section');
        panel.className = 'demo-panel';
        panel.setAttribute('role', 'tabpanel');
        panel.dataset.panel = tab.id;
        panel.hidden = true;
        panels.append(panel);
    });

    // Widgets are rendered the first time their tab is opened, so that they
    // measure their size while visible.
    function renderTab(tab, panel) {
        if (renderedTabs.has(tab.id)) {
            return;
        }
        renderedTabs.add(tab.id);

        if (tab.widgets.length === 0) {
            renderEmptyMessage(panel);
            return;
        }
        tab.widgets.forEach((widget) => renderWidget(widget, panel));
    }

    function showTab(tabId) {
        tabs.forEach((tab) => {
            const isActive = tab.id === tabId;
            const button = nav.querySelector(`[data-tab="${tab.id}"]`);
            const panel = panels.querySelector(`[data-panel="${tab.id}"]`);

            button.setAttribute('aria-selected', String(isActive));
            panel.hidden = !isActive;
            if (isActive) {
                renderTab(tab, panel);
            }
        });
    }

    function tabIdFromUrl() {
        const tabId = window.location.hash.slice(1);
        return tabs.some((tab) => tab.id === tabId) ? tabId : defaultTabId;
    }

    window.addEventListener('hashchange', () => showTab(tabIdFromUrl()));
    showTab(tabIdFromUrl());
}
