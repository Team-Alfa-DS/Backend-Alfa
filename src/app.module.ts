import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { VideoModule } from './video/video.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    CategoryModule,
    VideoModule,
    AuthModule,
    BlogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
