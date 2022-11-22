import { IUserEntity } from '../entities/user.entity';
import { UserDto } from '../dto/userinput.dto';
import { randomUUID } from 'node:crypto';
import { PartialUserDto } from '../dto/partialUserInput.dto';

export class UserService {
  private users: IUserEntity[] = [];

  async createUser(user: IUserEntity): Promise<IUserEntity> {
    const userEntity = { ...user, id: randomUUID() };
    this.user.push(userEntity);
    return userEntity;
  }

  async updateUser(user: PartialUserDto): Promise<IUserEntity> {
    this.users.map(user, (index) => {
      if (user.id === userData.id) {
        const UpdateUser = user;
        this.users.splice(index, 1, UpdateUser);
        this.users.splice();
      }
    });
    const updateUser = this.users.find((user) => user.id === userData.id);
    return updateUser;
  }
}
