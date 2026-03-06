import type { Func } from 'mocha';
import type { RxCollection } from '../../types';
import type { RxReplicationState } from '../replication/index.ts';
export declare function testMultipleTimes(times: number, title: string, test: Func): void;
export declare function ensureCollectionsHaveEqualState<RxDocType>(c1: RxCollection<RxDocType>, c2: RxCollection<RxDocType>, logContext?: string): Promise<void>;
/**
 * Waits until the collections have the equal state.
 */
export declare function awaitCollectionsHaveEqualState<RxDocType>(c1: RxCollection<RxDocType>, c2: RxCollection<RxDocType>, logContext?: string, timeout?: number): Promise<void>;
export declare function ensureReplicationHasNoErrors(replicationState: RxReplicationState<any, any>): void;
