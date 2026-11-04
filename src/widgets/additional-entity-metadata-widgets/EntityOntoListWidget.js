import { createEntityOntoList } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';
import { logNavigation } from '../../core/logNavigation';

export default {
    name: 'EntityOntoListWidget',
    description: 'The ontologies an entity also appears in.',
    render: (container) => createEntityOntoList(
        {
            api: ZBMED_OLS4_API,
            iri: 'http://purl.obolibrary.org/obo/NCBITaxon_10090',
            ontologyId: 'ncbitaxon',
            entityType: 'term',
            useLegacy: false,
            parameter: '',
            onNavigateToOntology: logNavigation('EntityOntoListWidget', 'ontology'),
        },
        container
    ),
};
