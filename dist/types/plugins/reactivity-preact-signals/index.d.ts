import { Signal } from "@preact/signals-core";
import type { Subscription } from 'rxjs';
import type { RxReactivityFactory } from '../../types/index.d.ts';
export type PreactSignal<T = any> = Signal<T>;
/**
 * Exported to debug and test
 * the behavior
 */
export declare const PREACT_SIGNAL_STATE: {
    subscribeCount: number;
    signalBySubscription: WeakMap<Subscription, PreactSignal<any>>;
    aliveSubscription: Set<Subscription>;
};
export declare const PreactSignalsRxReactivityFactory: RxReactivityFactory<PreactSignal>;
