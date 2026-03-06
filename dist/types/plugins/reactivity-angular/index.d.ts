import { Signal, Injector } from '@angular/core';
import type { RxReactivityFactory } from '../../types';
export declare function createReactivityFactory(injector: Injector): RxReactivityFactory<Signal<any>>;
