import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            config.env = {
                BASE_URL: 'http://localhost:3000',
                API_PREFIX: '/api/v1',
            }
            return config
        },
    },
})
