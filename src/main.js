import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { useEffect } from 'react'

createApp(App).mount('#app')

function App(){
    useEffect(()=>{
        anxios.get('http://localhost:8081/ping')
        .then(response=>response.text())
        .then(result=>console.log(result))
    },[]);
}
