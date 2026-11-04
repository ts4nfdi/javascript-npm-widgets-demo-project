import { createTab } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';
import { logNavigation } from '../../core/logNavigation';

export default {
    name: 'TabWidget',
    description: 'Tabs with synonyms, hierarchy, cross references and ontology information of an entity.',
    render: (container) => createTab(
        {
            api: ZBMED_OLS4_API,
            iri: 'http://purl.obolibrary.org/obo/HP_0000819',
            ontologyId: 'hp',
            entityType: 'term',
            useLegacy: true,
            parameter: '',
            altNamesTab: true,
            hierarchyTab: true,
            crossRefTab: true,
            terminologyInfoTab: true,
            onNavigateToEntity: logNavigation('TabWidget', 'entity'),
            onNavigateToOntology: logNavigation('TabWidget', 'ontology'),
            onNavigateToDisambiguate: logNavigation('TabWidget', 'disambiguate'),
        },
        container
    ),
};
