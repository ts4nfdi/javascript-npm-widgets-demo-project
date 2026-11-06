import { createOntologyInfo } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';
import { logNavigation } from '../../core/logNavigation';

export default {
    name: 'OntologyInfoWidget',
    description: 'Information about an ontology: title, description, version, license and more.',
    render: (container) => createOntologyInfo(
        {
            api: ZBMED_OLS4_API,
            ontologyId: 'atc',
            useLegacy: true,
            hasTitle: true,
            showBadges: true,
            parameter: '',
            onNavigateToEntity: logNavigation('OntologyInfoWidget', 'entity'),
            onNavigateToOntology: logNavigation('OntologyInfoWidget', 'ontology'),
            onNavigateToDisambiguate: logNavigation('OntologyInfoWidget', 'disambiguate'),
        },
        container
    ),
};
