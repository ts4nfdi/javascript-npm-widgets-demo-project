import { createHierarchy } from '@ts4nfdi/terminology-service-suite-js';
import { EBI_API } from '../../config/apis';
import { logNavigation } from '../../core/logNavigation';

export default {
    name: 'HierarchyWidget',
    description: 'The position of an entity in its ontology as an expandable tree.',
    render: (container) => createHierarchy(
        {
            apiUrl: EBI_API,
            backendType: 'ols',
            iri: 'http://purl.obolibrary.org/obo/MONDO_0005015',
            ontologyId: 'efo',
            entityType: 'class',
            onNavigateToEntity: logNavigation('HierarchyWidget', 'entity'),
            onNavigateToOntology: logNavigation('HierarchyWidget', 'ontology'),
        },
        container
    ),
};
