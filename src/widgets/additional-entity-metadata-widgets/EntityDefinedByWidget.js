import { createEntityDefinedBy } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';
import { logNavigation } from '../../core/logNavigation';

export default {
    name: 'EntityDefinedByWidget',
    description: 'The ontologies an entity is originally defined in.',
    render: (container) => createEntityDefinedBy(
        {
            api: ZBMED_OLS4_API,
            iri: 'http://purl.obolibrary.org/obo/NCBITaxon_10090',
            ontologyId: 'foodon',
            entityType: 'term',
            useLegacy: false,
            parameter: '',
            onNavigateToOntology: logNavigation('EntityDefinedByWidget', 'ontology'),
        },
        container
    ),
};
