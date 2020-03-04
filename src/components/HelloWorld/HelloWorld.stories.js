import HelloWorld from './HelloWorld';

export default { title: 'HelloWorld' };

export const asAComponent = () => ({
    components: { HelloWorld },
    template: '<HelloWorld msg="Welcome to Your Vue.js App" />'
});
