const isTest = String(process.env.NODE_ENV) === 'test'

const incIstanbul = isTest
  ? ['@babel/plugin-transform-runtime']
  : ['@babel/plugin-transform-runtime', 'istanbul']

module.exports = {
  presets: [
    ['@babel/preset-env', {modules: isTest ? 'cjs' : false}],
    'babel-preset-gatsby',
    '@babel/preset-typescript',
  ],
  plugins: incIstanbul,
}
