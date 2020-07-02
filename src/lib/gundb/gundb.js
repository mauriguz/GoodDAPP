import Gun from 'gun'
import 'gun/sea'
import 'gun/lib/radix'
import 'gun/lib/radisk'
import 'gun/lib/store'
import 'gun/lib/rindexed'
import './gundb-extend'
import Config from '../../config/config'
import logger from '../logger/pino-logger'
// eslint-disable-next-line no-unused-vars

const initGunDB = () => {
  let gun

  if (!global.gun) {
    if (process.env.NODE_ENV === 'test') {
      gun = Gun()
    } else {
      gun = Gun({
        localStorage: (window && window.RindexedDB) === undefined,
        peers: [Config.gunPublicUrl],
      })
    }

    logger.child({ from: 'gundb' }).debug('Initialized gundb', Config.gunPublicUrl)
  }

  global.gun = gun

  return gun
}
export default initGunDB()
