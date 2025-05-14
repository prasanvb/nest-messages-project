import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './messages.service';
import { MessageRepositories } from './messages.repositories';

@Module({
  controllers: [MessagesController],
  providers: [MessageService, MessageRepositories]
})
export class MessagesModule {}
