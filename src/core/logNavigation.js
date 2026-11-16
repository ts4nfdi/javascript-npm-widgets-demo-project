// Returns a navigation callback (onNavigateToEntity, onNavigateToOntology, …)
// that only logs, so clicking a link in a widget does not leave the demo page.
export function logNavigation(widgetName, target) {
    return (...args) => console.log(`${widgetName} navigate to ${target}:`, ...args);
}
