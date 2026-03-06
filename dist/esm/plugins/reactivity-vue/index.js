import { shallowRef, triggerRef, onScopeDispose } from 'vue';
export var VueRxReactivityFactory = {
  fromObservable(obs, initialValue) {
    var ref = shallowRef(initialValue);
    var sub = obs.subscribe(value => {
      ref.value = value;
      triggerRef(ref);
    });
    onScopeDispose(() => {
      sub.unsubscribe();
    });
    return ref;
  }
};
//# sourceMappingURL=index.js.map