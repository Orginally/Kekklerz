/**
 * Created by Will on 11/24/2016.
 */

const storage = require('../operators/storage');

function leave(msg, args)   {
    const mc = storage.monstercat[msg.guild.id];
    if(!mc || !(mc instanceof require('../operators/monstercat'))) return;
    mc.stop();
    delete storage.monstercat[msg.guild.id];
}

module.exports = leave;