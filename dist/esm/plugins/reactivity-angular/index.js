import { untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
export function createReactivityFactory(injector) {
  return {
    fromObservable(observable$, initialValue) {
      return untracked(() => toSignal(observable$, {
        initialValue,
        injector
      }));
    }
  };
}
//# sourceMappingURL=index.js.map