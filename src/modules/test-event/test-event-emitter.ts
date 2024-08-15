import { EventEmitter2 } from '@nestjs/event-emitter';
import { Event } from './event.interface';
import { TestEvent } from './model/test-event';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestEventEmitter implements Event {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  public async send(data: TestEvent): Promise<void> {
    this.eventEmitter.emit('test.emit', data);
  }
}
