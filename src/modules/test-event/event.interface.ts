import { TestEvent } from './model/test-event';

export interface Event {
  send(data: TestEvent): Promise<void>;
}
