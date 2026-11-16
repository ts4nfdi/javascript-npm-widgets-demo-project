import { createDataContent } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';

export default {
    name: 'DataContentWidget',
    description: 'Statistics about the content (ontologies, classes, properties, …) of a terminology service.',
    render: (container) => createDataContent(
        {
            api: ZBMED_OLS4_API,
            parameter: '',
        },
        container
    ),
};
