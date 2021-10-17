import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import components from '@/components/ui'
import directives from "@/components/directives";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
    })

installElementPlus(app)
app.use(store).use(router).mount('#app')