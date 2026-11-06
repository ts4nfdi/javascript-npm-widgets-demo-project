import { createAlternativeNameTab } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';

export default {
    name: 'AlternativeNameTabWidget',
    description: 'The synonyms (alternative names) of an entity.',
    render: (container) => createAlternativeNameTab(
        {
            api: ZBMED_OLS4_API,
            iri: 'http://purl.obolibrary.org/obo/NCIT_C2985',
            ontologyId: 'ncit',
            entityType: 'term',
            useLegacy: true,
        },
        container
    ),
};
