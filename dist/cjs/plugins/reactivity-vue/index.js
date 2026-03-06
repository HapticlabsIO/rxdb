"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VueRxReactivityFactory = void 0;
var _vue = require("vue");
var VueRxReactivityFactory = exports.VueRxReactivityFactory = {
  fromObservable(obs, initialValue) {
    var ref = (0, _vue.shallowRef)(initialValue);
    var sub = obs.subscribe(value => {
      ref.value = value;
      (0, _vue.triggerRef)(ref);
    });
    (0, _vue.onScopeDispose)(() => {
      sub.unsubscribe();
    });
    return ref;
  }
};
//# sourceMappingURL=index.js.map