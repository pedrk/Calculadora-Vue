import Vue from 'vue'
import App from './App'

new Vue ({
    render: template => template(App) // Cria um elemento
}).$mount("#app") // Coloca o elemento dentro da div '#app'do ../public/index.html