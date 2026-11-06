import { createMappingList } from '@ts4nfdi/terminology-service-suite-js';
import { COLI_CONC_API } from '../../config/apis';

export default {
    name: 'MappingListWidget',
    description: 'A list of the mappings of a concept to concepts in other vocabularies.',
    render: (container) => createMappingList(
        {
            api: COLI_CONC_API,
            source: 'https://openenergyplatform.org/ontology/oeo/OEO_00000150',
            rowColor: '#fff5fa',
            MappingDetailBackgroundColor: '#efebee',
        },
        container
    ),
};
