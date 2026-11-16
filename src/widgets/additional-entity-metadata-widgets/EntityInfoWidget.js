import { createEntityInfo } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';
import { logNavigation } from '../../core/logNavigation';

export default {
    name: 'EntityInfoWidget',
    description: 'Detailed information about an entity: synonyms, annotations, parents and more.',
    render: (container) => createEntityInfo(
        {
            api: ZBMED_OLS4_API,
            iri: 'http://purl.obolibrary.org/obo/NCIT_C2985',
            ontologyId: 'ncit',
            entityType: 'term',
            useLegacy: true,
            hasTitle: true,
            showBadges: true,
            parameter: '',
            onNavigateToEntity: logNavigation('EntityInfoWidget', 'entity'),
            onNavigateToOntology: logNavigation('EntityInfoWidget', 'ontology'),
            onNavigateToDisambiguate: logNavigation('EntityInfoWidget', 'disambiguate'),
        },
        container
    ),
};
