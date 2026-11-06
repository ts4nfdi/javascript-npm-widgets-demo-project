import { createSearchBar } from '@ts4nfdi/terminology-service-suite-js';
import { EBI_API } from '../../config/apis';

export default {
    name: 'SearchBarWidget',
    description: 'A search bar that suggests matching terms for the typed query.',
    render: (container) => createSearchBar(
        {
            api: EBI_API,
            query: '*',
            parameter: '',
            selectionChangedEvent: (selectedOptions) => {
                console.log('SearchBarWidget selection changed:', selectedOptions);
            },
        },
        container
    ),
};
