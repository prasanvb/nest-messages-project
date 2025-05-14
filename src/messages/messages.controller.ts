import { MessagesService } from './messages.service';
import { Body, Controller, Get, Param, Post, Headers } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  messageService: MessagesService;

  constructor() {
    this.messageService = new MessagesService();
  }

  @Get()
  listMessages(@Headers() header: { [key: string]: string }) {
    console.log({ header });
    return this.messageService.findAll();
  }

  /* DTO class with validation rules is applies to the body  */
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log({ body });
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log({ id });
    return this.messageService.findOne(id);
  }
}
