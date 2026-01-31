module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['src/steps/**/*.js'],
    requireModule: [],
    format: ['progress', 'html:cucumber-report.html'],
    parallel: 0,
    publishQuiet: true
  }
}
