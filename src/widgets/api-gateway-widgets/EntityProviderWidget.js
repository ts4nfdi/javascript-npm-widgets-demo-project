import { createEntityProvider } from '@ts4nfdi/terminology-service-suite-js';
import { GATEWAY_API } from '../../config/apis';

// Settings of the "entityProvider" story; the default story has no entity, so it shows nothing.
export default {
    name: 'EntityProviderWidget',
    description: 'The terminology services (providers) that serve an entity through the TS4NFDI API Gateway.',
    render: (container) => createEntityProvider(
        {
            api: GATEWAY_API,
            ontologyId: 'agrovoc',
            iri: 'http://aims.fao.org/aos/agrovoc/c_12332',
            parameter: 'collectionId=ff5491d1-d0a9-481e-ac90-0fad065fa097',
            enabled: true,
            showRaw: true,
        },
        container
    ),
};
