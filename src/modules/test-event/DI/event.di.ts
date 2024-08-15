import { TestEventEmitter } from '../test-event-emitter';

export const TEST_EVENT = 'TEST_EVENT';

export const TestEventDI = {
  provide: TEST_EVENT,
  useClass: TestEventEmitter,
};
