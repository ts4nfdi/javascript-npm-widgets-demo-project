import { createGraphView } from '@ts4nfdi/terminology-service-suite-js';
import { TIB_API } from '../../config/apis';

export default {
    name: 'GraphViewWidget',
    description: 'An entity and its relations to other entities as an interactive graph.',
    render: (container) => createGraphView(
        {
            api: TIB_API,
            iri: 'http://purl.obolibrary.org/obo/CHEBI_24870',
            ontologyId: 'chebi',
            rootWalk: false,
            hierarchy: false,
        },
        container
    ),
};
