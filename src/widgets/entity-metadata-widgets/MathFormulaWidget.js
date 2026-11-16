import { createMathFormula } from '@ts4nfdi/terminology-service-suite-js';
import { TIB_API } from '../../config/apis';

export default {
    name: 'MathFormulaWidget',
    description: 'A mathematical formula stored on an entity, rendered from MathML.',
    render: (container) => createMathFormula(
        {
            api: TIB_API,
            ontologyId: 'mathmoddb',
            iri: 'https://portal.mardi4nfdi.de/entity/Q6674137',
            mathProperty: 'https://portal.mardi4nfdi.de/entity/P989',
        },
        container
    ),
};
