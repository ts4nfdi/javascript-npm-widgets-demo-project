import { createIri } from '@ts4nfdi/terminology-service-suite-js';

export default {
    name: 'IriWidget',
    description: 'The IRI of an entity as a link.',
    render: (container) => createIri(
        {
            iri: 'http://purl.obolibrary.org/obo/NCIT_C2985',
            color: 'text',
            externalIcon: true,
        },
        container
    ),
};
