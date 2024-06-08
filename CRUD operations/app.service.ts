import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, userDocument } from './user.models';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<userDocument>,
  ) {}

  async createUser(user: User) {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
  async readUser() {
    return this.userModel.find({}).then((User) => {
      return User;
    });
    try {
    } catch (err) {
      console.log(err);
    }
  }
  async updateUser(id, data): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }
  async deleteUser(id) {
    return this.userModel.findByIdAndDelete(id);
  }
}
