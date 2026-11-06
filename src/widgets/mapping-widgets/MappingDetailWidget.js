import { createMappingDetail } from '@ts4nfdi/terminology-service-suite-js';
import { COLI_CONC_API } from '../../config/apis';

export default {
    name: 'MappingDetailWidget',
    description: 'The details of one mapping between a source and a target concept.',
    render: (container) => createMappingDetail(
        {
            api: COLI_CONC_API,
            source: 'http://uri.gbv.de/terminology/nsk/Rec%20B%202000',
            target: 'http://uri.gbv.de/terminology/bk/86.26',
            MappingDetailBackgroundColor: '#ebedef',
        },
        container
    ),
};
