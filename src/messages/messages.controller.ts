import { Body, Controller, Get, Param, Post, Headers } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages(@Headers() header: { [key: string]: string }) {
    console.log({ header });
    return 'All messages';
  }

  /* DTO class with validation rules is applies to the body  */
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log({ body });
    return 'create a new message';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log({ id });
    return 'get by message id';
  }
}
