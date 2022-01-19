import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import components from '@/components/ui'
import directives from "@/components/directives";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App)

app.config.globalProperties.$http = axios;
const token = localStorage.getItem('token')
if (token) {
    app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token
}

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
    })

installElementPlus(app)
app.use(store).use(router).mount('#app')