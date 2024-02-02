import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //       "@": path.resolve(__dirname, "./src/"),
  //       // routes: `${path.resolve(__dirname, "./src/routes/")}`,
  //       // services: `${path.resolve(__dirname, "./src/services/")}`,
  //   }
  // }
})
