import { MessagesRepositories } from './messages.repositories';

export class MessagesService {
  messagesRepo: MessagesRepositories;

  constructor() {
    this.messagesRepo = new MessagesRepositories();
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
}
