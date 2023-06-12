import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@zustand": path.resolve(__dirname, "./src/zustand"),
            "@interface": path.resolve(__dirname, "./src/interface"),
            "@modules": path.resolve(__dirname, "./src/modules"),
            "@layout": path.resolve(__dirname, "./src/layout"),
            "@hooks": path.resolve(__dirname, "./src/hooks")
        }
    }
})
