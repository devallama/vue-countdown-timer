import { addDecorator, addParameters } from '@storybook/vue';

import Global from '../src/global/Global';

addParameters({
    options: {
        brand: {
            title: 'Count Timular'
        },
        showRoots: true,
        addonPanelInRight: false,
        sortStoriesByKind: true,
    }
});

addDecorator(() => ({
    template: '<Global><story /></Global>',
    components: {
        Global
    }
}));
