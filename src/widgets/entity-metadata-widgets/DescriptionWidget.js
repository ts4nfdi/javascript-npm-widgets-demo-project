import { createDescription } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';

export default {
    name: 'DescriptionWidget',
    description: 'The description (definition) of an entity.',
    render: (container) => createDescription(
        {
            api: ZBMED_OLS4_API,
            iri: 'http://purl.obolibrary.org/obo/NCIT_C2985',
            ontologyId: 'ncit',
            thingType: 'term',
            useLegacy: true,
        },
        container
    ),
};
