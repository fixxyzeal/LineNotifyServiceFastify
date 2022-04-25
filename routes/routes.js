'use strict'

const line = require('../services/LineNotiFyService')

module.exports = async function (fastify, opts) {

    //Get Home Message
    fastify.get('/', async function (request, reply) {
        fastify.log.info('Server send home message')
        return { Message: 'Line Notification Service version 1.0.0' }
    })

    fastify.get('/sendNotifyServerRestart', async function (request, reply) {
        fastify.log.info('Request was received to notify restart message')
        await line.SendLineNotify('InterGold BackOffice server was restarted. ✅');
        return { Message: 'Send Notify Message Complete' }
    })

    fastify.get('/sendNotifyServerDown', async function (request, reply) {
        fastify.log.info('Request was received to notify server down message')
        await line.SendLineNotify('InterGold BackOffice server status was down. ❌');
        return { Message: 'Send Notify Message Complete' }
    })


}