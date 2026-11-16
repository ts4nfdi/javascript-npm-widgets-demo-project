import { createDepiction } from '@ts4nfdi/terminology-service-suite-js';
import { EBI_API } from '../../config/apis';

export default {
    name: 'TermDepictionWidget',
    description: 'Images and 3D models that depict an entity.',
    render: (container) => createDepiction(
        {
            api: EBI_API,
            iri: 'http://purl.obolibrary.org/obo/UBERON_0001443',
            ontologyId: 'uberon',
            useLegacy: false,
        },
        container
    ),
};
