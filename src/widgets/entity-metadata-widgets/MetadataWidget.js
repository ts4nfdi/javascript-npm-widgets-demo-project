import { createMetadata } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';

export default {
    name: 'MetadataWidget',
    description: 'All metadata of an entity in one widget: title, IRI, description and tabs for synonyms, hierarchy, cross references, graph and more.',
    render: (container) => createMetadata(
        {
            api: ZBMED_OLS4_API,
            iri: 'http://purl.obolibrary.org/obo/UBERON_0001443',
            ontologyId: 'uberon',
            entityType: 'term',
            useLegacy: true,
            altNamesTab: true,
            hierarchyTab: true,
            crossRefTab: true,
            terminologyInfoTab: true,
            graphViewTab: true,
            termDepictionTab: true,
            hierarchyWrap: true,
            copyButton: 'right',
            showHeader: true,
            className: 'ts4nfdi-metadata-style',
            onNavigateToEntity: (...args) => console.log('MetadataWidget navigate to entity:', ...args),
            onNavigateToOntology: (...args) => console.log('MetadataWidget navigate to ontology:', ...args),
            onNavigateToDisambiguate: (...args) => console.log('MetadataWidget navigate to disambiguate:', ...args),
        },
        container
    ),
};
