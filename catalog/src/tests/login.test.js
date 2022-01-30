import { mount } from '@vue/test-utils'
import Login from '../components/authorization/Login'

describe('Home', () => {

    test('renders', () => {
        const wrapper = mount(Login,{
            data() {
                return {
                    email : "bbg@gmail.com",
                    password : "1234"
                }
            }
        })
        wrapper.wm.login()

        expect(wrapper.find('button').text()).toBe('Войти')
        expect(wrapper.findAll('label')[1].text()).toBe('Пароль')
        expect()
    })
});