import { addDecorator } from '@storybook/vue';

import Global from '../src/global/Global';

addDecorator(() => ({
    template: '<Global><story /></Global>',
    components: {
        Global
    }
}));
