module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    browsers: ['Chrome'],
    // Adicione outros arquivos de origem e teste conforme necessário
    files: [
      'src/**/*.spec.ts',
    ],
    preprocessors: {
      '**/*.ts': ['@angular-devkit/build-angular'],
    },
    reporters: ['progress', 'kjhtml'],
    singleRun: false,
    restartOnFileChange: true,
  });
};
