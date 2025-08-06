import * as ts4nfdiWidgets from '@ts4nfdi/terminology-service-suite';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('autocomplete-widget-container');

    if (container) {
        ts4nfdiWidgets.createAutocomplete(
            {
                api: "https://semanticlookup.zbmed.de/api/",
                selectionChangedEvent:((props) => {
                    console.log("autocomplete")
                }),
            },
            container
        );
        console.log("TS4NFDI AutocompleteWidget rendered.");
    } else {
        console.error("Autocomplete widget container not found!");
    }
});