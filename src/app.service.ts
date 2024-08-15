import { Inject, Injectable } from '@nestjs/common';
import { TEST_EVENT } from './modules/test-event/DI/event.di';
import { Event } from './modules/test-event/event.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class AppService {
  constructor(
    @Inject(TEST_EVENT)
    private readonly testEvent: Event,
  ) {}

  getHello(): string {
    this.testEvent.send({
      id: randomUUID(),
      name: 'VINICIUS PEREIRA DE OLIVEIRA',
    });

    return 'Hello World!';
  }
}
