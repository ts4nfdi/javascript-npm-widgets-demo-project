import { createSearchResultsList } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';

export default {
    name: 'SearchResultsListWidget',
    description: 'A paginated list of search results with filters by type and ontology.',
    render: (container) => createSearchResultsList(
        {
            api: ZBMED_OLS4_API,
            query: '*',
            // No fieldList here: the widget also sends it to the entity
            // details request, which then returns no data.
            parameter: '',
            initialItemsPerPage: 10,
            itemsPerPageOptions: [10, 25, 50, 100],
            targetLink: '',
            useLegacy: false,
        },
        container
    ),
};
