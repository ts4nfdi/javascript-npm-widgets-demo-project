import tabs from './widgets/widgetTabs';
import { createTabs } from './core/tabs';

document.addEventListener('DOMContentLoaded', () => {
    createTabs(tabs, {
        nav: document.getElementById('demo-tabs'),
        panels: document.getElementById('demo-panels'),
    });
});
