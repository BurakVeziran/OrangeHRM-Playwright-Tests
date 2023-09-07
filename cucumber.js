const common = `
  --require ./dist/config/config.js 
  --require ./dist/setup/assertions.js 
  --require ./dist/setup/hooks.js 
  --require ./dist/stepDefinitions/**/*.steps.js
  `;

module.exports = {
  default: `${common} features/**/*.feature`
};