import { Body, Controller, Get, Param, Post, Headers } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages(@Headers() header) {
    console.log(header);
    return 'All messages';
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
    return 'create a new message';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log({ id });
    return 'get by message id';
  }
}
