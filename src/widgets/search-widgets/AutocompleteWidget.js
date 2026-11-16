import { createAutocomplete } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';

export default {
    name: 'AutocompleteWidget',
    description: 'Search for terms and select one; suggestions appear while typing.',
    render: (container) => createAutocomplete(
        {
            api: ZBMED_OLS4_API,
            parameter: 'fieldList=description,label,iri,ontology_name,type,short_form,synonym',
            placeholder: 'Type to search...',
            singleSelection: true,
            hasShortSelectedLabel: true,
            showApiSource: true,
            useLegacy: true,
            selectionChangedEvent: (selectedOptions) => {
                console.log('AutocompleteWidget selection changed:', selectedOptions);
            },
        },
        container
    ),
};
