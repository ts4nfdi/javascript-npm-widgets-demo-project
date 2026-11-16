import { createEntityList } from '@ts4nfdi/terminology-service-suite-js';
import { EBI_API } from '../../config/apis';

export default {
    name: 'EntityListWidget',
    description: 'A searchable list of all entities of one type in an ontology.',
    render: (container) => createEntityList(
        {
            api: EBI_API,
            ontologyId: 'uberon',
            entityType: 'class',
            parameter: '',
        },
        container
    ),
};
