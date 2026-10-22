import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({base:'/Colour-Ball/',plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],manifest:{name:'Colour-Ball',short_name:'Colour-Ball',description:'Digital kortlek för Färg-Ball',theme_color:'#151d2c',background_color:'#151d2c',display:'standalone',start_url:'/Colour-Ball/',scope:'/Colour-Ball/',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]}})]});