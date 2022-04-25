'use strict'

const { test } = require('tap')
const line = require('../../services/LineNotiFyService')

test('linenotify', async (t) => {

    let result = await line.SendLineNotify('test');
    t.deepEqual(result, true)
})
