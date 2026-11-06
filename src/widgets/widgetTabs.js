import searchWidgets from './search-widgets/searchWidgets';
import terminologyServiceWidgets from './terminology-service-widgets/terminologyServiceWidgets';
import apiWidgets from './api-widgets/apiWidgets';
import additionalEntityMetadataWidgets from './additional-entity-metadata-widgets/additionalEntityMetadataWidgets';
import hierarchyAndGraphWidgets from './hierarchy-and-graph-widgets/hierarchyAndGraphWidgets';
import entityMetadataWidgets from './entity-metadata-widgets/entityMetadataWidgets';
import ontologyMetadataWidgets from './ontology-metadata-widgets/ontologyMetadataWidgets';
import mappingWidgets from './mapping-widgets/mappingWidgets';

// One tab per widget category, in the order they appear on the page.
export default [
    { id: 'search', label: 'search', widgets: searchWidgets },
    { id: 'terminology-service', label: 'terminology service', widgets: terminologyServiceWidgets },
    { id: 'api', label: 'api', widgets: apiWidgets },
    { id: 'additional-entity-metadata', label: 'additional entity metadata', widgets: additionalEntityMetadataWidgets },
    { id: 'hierarchy-and-graph', label: 'hierarchy and graph', widgets: hierarchyAndGraphWidgets },
    { id: 'entity-metadata', label: 'entity metadata', widgets: entityMetadataWidgets },
    { id: 'ontology-metadata', label: 'ontology metadata', widgets: ontologyMetadataWidgets },
    { id: 'mapping', label: 'mapping', widgets: mappingWidgets },
];
