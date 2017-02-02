/**
 * Socket.io configuration
 */

'use strict';

var config = require('./environment');

// When the user disconnects.. perform this
function onDisconnect(socket) {
}

// When the user connects.. perform this
function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  socket.on('info', function (data) {
    console.info('[%s] %s', socket.address, JSON.stringify(data, null, 2));
  });

  // Insert sockets below
  require('../api/lecon_parts/lecon_parts.socket').register(socket);
  require('../api/lecon_prim/lecon_prim.socket').register(socket);
  require('../api/lecon/lecon.socket').register(socket);
  require('../api/z_math/z_math.socket').register(socket);
  require('../api/z_lo_error_connexion/z_lo_error_connexion.socket').register(socket);
  require('../api/z_connexions/z_connexions.socket').register(socket);
  require('../api/utilisateur/utilisateur.socket').register(socket);
  require('../api/serie/serie.socket').register(socket);
  require('../api/profil/profil.socket').register(socket);
  require('../api/semestre/semestre.socket').register(socket);
  require('../api/matiere_fils/matiere_fils.socket').register(socket);
  require('../api/matiere_parent/matiere_parent.socket').register(socket);
  require('../api/tab_situation/tab_situation.socket').register(socket);
  require('../api/niveau_s_domaine/niveau_s_domaine.socket').register(socket);
  require('../api/domaine_matiere/domaine_matiere.socket').register(socket);
  require('../api/domaine_cycles/domaine_cycles.socket').register(socket);
  require('../api/niveau/niveau.socket').register(socket);
  require('../api/cycle/cycle.socket').register(socket);
  require('../api/chapitre/chapitre.socket').register(socket);
  require('../api/plan_vscol1_prim_lecons/plan_vscol1_prim_lecons.socket').register(socket);
}

module.exports = function (socketio) {
  // socket.io (v1.x.x) is powered by debug.
  // In order to see all the debug output, set DEBUG (in server/config/local.env.js) to including the desired scope.
  //
  // ex: DEBUG: "http*,socket.io:socket"

  // We can authenticate socket.io users and access their token through socket.handshake.decoded_token
  //
  // 1. You will need to send the token in `client/components/socket/socket.service.js`
  //
  // 2. Require authentication here:
  // socketio.use(require('socketio-jwt').authorize({
  //   secret: config.secrets.session,
  //   handshake: true
  // }));

  socketio.on('connection', function (socket) {
    socket.address = socket.handshake.address !== null ?
            socket.handshake.address.address + ':' + socket.handshake.address.port :
            process.env.DOMAIN;

    socket.connectedAt = new Date();

    // Call onDisconnect.
    socket.on('disconnect', function () {
      onDisconnect(socket);
      console.info('[%s] DISCONNECTED', socket.address);
    });

    // Call onConnect.
    onConnect(socket);
    console.info('[%s] CONNECTED', socket.address);
  });
};
