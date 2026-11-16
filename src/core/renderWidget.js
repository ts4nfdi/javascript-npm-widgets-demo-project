// Adds a section with the widget's name and description to the panel and
// renders the widget below them.
export function renderWidget(widget, panel) {
    const section = document.createElement('article');
    section.className = 'demo-widget';

    const title = document.createElement('h2');
    title.className = 'demo-widget__title';
    title.textContent = `${widget.name}:`;

    const description = document.createElement('p');
    description.className = 'demo-widget__description';
    description.textContent = widget.description;

    const container = document.createElement('div');
    container.className = 'demo-widget__container';

    section.append(title, description, container);
    panel.append(section);

    try {
        widget.render(container);
    } catch (error) {
        console.error(`${widget.name} could not be rendered:`, error);
    }
}

export function renderEmptyMessage(panel) {
    const empty = document.createElement('p');
    empty.className = 'demo-panel__empty';
    empty.textContent = 'No widgets added to this tab yet.';
    panel.append(empty);
}
