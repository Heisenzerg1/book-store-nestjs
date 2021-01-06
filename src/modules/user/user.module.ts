import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { RoleRepository } from '../role/role.repository';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';


@Module({
    imports: [TypeOrmModule.forFeature([UserRepository, RoleRepository]), SharedModule],
    providers: [UserService],
    controllers: [UserController],
    
})
export class UserModule {}
