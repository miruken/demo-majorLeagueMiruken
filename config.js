System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.6.4",
    "angular-chosen-localytics": "npm:angular-chosen-localytics@1.6.0",
    "angular-messages": "github:angular/bower-angular-messages@1.6.4",
    "angular-strap": "github:mgcrea/angular-strap@2.3.12",
    "angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.3.2",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap-additions": "npm:bootstrap-additions@0.3.1",
    "bootstrap-chosen": "npm:bootstrap-chosen@1.4.2",
    "bootstrap-sass": "github:twbs/bootstrap-sass@3.3.7",
    "core-js": "npm:core-js@1.2.7",
    "jquery": "npm:jquery@3.2.1",
    "liabru/jquery-match-height": "github:liabru/jquery-match-height@0.7.2",
    "miruken-es5/bower-miruken-es5-angular": "github:miruken-es5/bower-miruken-es5-angular@2.0.3",
    "moment": "npm:moment@2.18.1",
    "github:angular-ui/angular-ui-router-bower@0.3.2": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:angular/bower-angular-messages@1.6.4": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:mgcrea/angular-strap@2.3.12": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "npm:angular-chosen-localytics@1.6.0": {
      "angular": "npm:angular@1.6.4",
      "chosen-js": "npm:chosen-js@1.7.0",
      "jquery": "npm:jquery@3.2.1"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bootstrap-additions@0.3.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.0",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
