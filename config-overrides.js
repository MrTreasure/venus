const postcss = require('react-app-rewire-postcss')

module.exports = function override(config, env) {
  postcss(config, true)
  return config
}
