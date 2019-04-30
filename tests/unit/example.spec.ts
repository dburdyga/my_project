import { shallowMount } from '@vue/test-utils';
import {} from 'jest'
import App from '../../src/App.vue';

describe('App.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'Requirements';
        const wrapper = shallowMount(App, {
            propsData: { msg }
        });
        expect(wrapper.text()).toMatch(msg);
    });
});

