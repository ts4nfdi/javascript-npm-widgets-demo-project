import { createBreadcrumb } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';
import { logNavigation } from '../../core/logNavigation';

export default {
    name: 'BreadcrumbWidget',
    description: 'The ontology and short form of an entity as two badges.',
    render: (container) => createBreadcrumb(
        {
            api: ZBMED_OLS4_API,
            iri: 'http://purl.obolibrary.org/obo/NCIT_C2985',
            ontologyId: 'ncit',
            entityType: 'term',
            useLegacy: true,
            parameter: '',
            onNavigateToOntology: logNavigation('BreadcrumbWidget', 'ontology'),
        },
        container
    ),
};
