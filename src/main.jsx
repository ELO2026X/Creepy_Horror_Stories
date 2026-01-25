import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from './App.jsx'
import './style.css'

// PWA Service Worker Registration
const updateSW = registerSW({
    onNeedRefresh() {
        if (confirm('A new version of The Void Archive is available. Reload to update?')) {
            updateSW(true)
        }
    },
    onOfflineReady() {
        console.log('Archive downloaded. Offline access granted.');
    },
})

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
