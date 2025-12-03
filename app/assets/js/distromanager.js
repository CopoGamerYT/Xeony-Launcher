const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

//
// 
exports.REMOTE_DISTRO_URL = 'http://va1.holy.gg:26403/launcherfiles/lista-de-versiones/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api