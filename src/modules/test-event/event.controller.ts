import { Controller } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Event } from './event.interface';

@Controller()
export class EventController {
  @OnEvent('test.emit')
  public async emit(payload: Event) {
    console.log('PAYLOAD', payload)
  }
}
