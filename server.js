'use strict'

// CommonJs
const fastify = require('fastify')({
    logger: true
})

// Register plugin.
fastify.register(require('./app.js'))

const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()