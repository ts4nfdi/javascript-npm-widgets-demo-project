import { createResources } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';
import { logNavigation } from '../../core/logNavigation';

export default {
    name: 'ResourcesWidget',
    description: 'A sortable, paginated table of all ontologies available in a terminology service.',
    render: (container) => createResources(
        {
            api: ZBMED_OLS4_API,
            useLegacy: true,
            initialEntriesPerPage: 100,
            pageSizeOptions: [10, 25, 50, 100],
            initialSortField: 'config.preferredPrefix',
            initialSortDir: 'asc',
            parameter: '',
            onNavigate: logNavigation('ResourcesWidget', 'resource'),
        },
        container
    ),
};
