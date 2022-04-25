'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('default root route', async (t) => {
    const app = build(t)

    const res = await app.inject({
        url: '/'
    })
    t.deepEqual(JSON.parse(res.payload), { Message: 'Line Notification Service version 1.0.0' })
})

test('sendNotifyServerRestart route', async (t) => {
    const app = build(t)

    const res = await app.inject({
        url: '/sendNotifyServerRestart'
    })
    t.deepEqual(JSON.parse(res.payload), { Message: 'Send Notify Message Complete' })
})

test('sendNotifyServerDown route', async (t) => {
    const app = build(t)

    const res = await app.inject({
        url: '/sendNotifyServerDown'
    })
    t.deepEqual(JSON.parse(res.payload), { Message: 'Send Notify Message Complete' })
})