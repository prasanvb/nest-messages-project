import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'All messages';
  }

  @Post()
  createMessage() {
    return 'create a new message';
  }

  @Get('/:id')
  getMessage() {}
}
