import { createCrossRefTab } from '@ts4nfdi/terminology-service-suite-js';
import { EBI_API } from '../../config/apis';

export default {
    name: 'CrossRefTabWidget',
    description: 'Cross references of an entity to entries in other databases.',
    render: (container) => createCrossRefTab(
        {
            api: EBI_API,
            iri: 'http://purl.obolibrary.org/obo/RXNO_0000138',
            ontologyId: 'rxno',
            entityType: 'term',
            useLegacy: true,
            parameter: '',
        },
        container
    ),
};
