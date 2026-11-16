import { createJsonApi } from '@ts4nfdi/terminology-service-suite-js';
import { ZBMED_OLS4_API } from '../../config/apis';

export default {
    name: 'JsonApiWidget',
    description: 'A button that opens the raw JSON response of an API request.',
    render: (container) => createJsonApi(
        {
            apiQuery: `${ZBMED_OLS4_API}ontologies/atc`,
            buttonText: 'show JSON',
            buttonSize: 'm',
        },
        container
    ),
};
