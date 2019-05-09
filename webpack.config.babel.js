import merge from 'webpack-merge'

import { common, dev } from './webpack'

switch (process.env.npm_lifecycle_event) {
  case 'start':
    module.exports = merge(common, dev)
    break
  default:
    module.exports = merge(common, dev)
    break
}
