const { override, addPostcssPlugins, addWebpackAlias, fixBabelImports } = require("customize-cra")
const path = require('path')

module.exports = override(
  addPostcssPlugins([
    require('postcss-nested'),
    require('postcss-flexbugs-fixes'),
    require("postcss-aspect-ratio-mini"),
    require("postcss-write-svg")({ utf8: false }),
    require("postcss-cssnext"),
    require("postcss-px-to-viewport")({
        viewportWidth: 750,
        viewportHeight: 1334,
        unitPrecision: 3,
        viewportUnit: 'vw',
        selectorBlackList: ['.ignore', '.hairlines'],
        minPixelValue: 1,
        mediaQuery: false
    }),
    require("postcss-viewport-units")({
      filterRule: rule => rule.nodes.findIndex(i => i.prop === 'content') === -1
    }),
    require("cssnano")({
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
    })
  ]),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src')
  })
)
