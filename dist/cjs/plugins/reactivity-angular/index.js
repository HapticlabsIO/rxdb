"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReactivityFactory = createReactivityFactory;
var _core = require("@angular/core");
var _rxjsInterop = require("@angular/core/rxjs-interop");
function createReactivityFactory(injector) {
  return {
    fromObservable(observable$, initialValue) {
      return (0, _core.untracked)(() => (0, _rxjsInterop.toSignal)(observable$, {
        initialValue,
        injector
      }));
    }
  };
}
//# sourceMappingURL=index.js.map