import { createEntityRelations } from '@ts4nfdi/terminology-service-suite-js';
import { EBI_API } from '../../config/apis';
import { logNavigation } from '../../core/logNavigation';

export default {
    name: 'EntityRelationsWidget',
    description: 'The relations of an entity to other entities (sub-class of, equivalent to, …).',
    render: (container) => createEntityRelations(
        {
            api: EBI_API,
            iri: 'http://purl.obolibrary.org/obo/AGRO_00000002',
            ontologyId: 'agro',
            entityType: 'term',
            hasTitle: true,
            showBadges: true,
            parameter: '',
            onNavigateToEntity: logNavigation('EntityRelationsWidget', 'entity'),
            onNavigateToOntology: logNavigation('EntityRelationsWidget', 'ontology'),
            onNavigateToDisambiguate: logNavigation('EntityRelationsWidget', 'disambiguate'),
        },
        container
    ),
};
