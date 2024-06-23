// src/app.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller('email')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send')
  async sendEmail(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('company') company: string,
    @Body('position') position: string,
  ) {
    const user: Partial<User> = { firstName, lastName, email, company, position };
    const createdUser = await this.appService.createUser(user);
    await this.appService.sendEmail(createdUser.email, createdUser.firstName);
    return { message: 'Email sent and user saved successfully' };
  }
}
