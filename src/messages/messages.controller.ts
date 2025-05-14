import { MessagesService } from './messages.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Headers,
  NotFoundException,
} from '@nestjs/common';
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
  async getMessage(@Param('id') id: string) {
    console.log({ id });
    const message = await this.messageService.findOne(id);

    if (!message) {
      /* NestJs has several HttpException available out-of-the-box, refer to docs*/
      throw new NotFoundException('Message with id not found');
    }

    return message;
  }
}
