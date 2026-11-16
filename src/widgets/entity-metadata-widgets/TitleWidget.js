import { createTitle } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';

export default {
    name: 'TitleWidget',
    description: 'The label of an entity, shown as a title.',
    render: (container) => createTitle(
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
