import { mount } from '@vue/test-utils'
import Login from '../components/authorization/Login'

describe('Home', () => {

    test('renders', () => {
        const wrapper = mount(Login,{

        })

        expect(wrapper.find('button').text()).toBe('Войти')
        expect(wrapper.findAll('label')[1].text()).toBe('Пароль')
    })
});