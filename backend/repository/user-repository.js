import userModel from '../model/user-model.js';

class UserRepository {
  constructor() {
    this.userModel = userModel;
  }

  async deleteUser(id) {
    try {
      const response = await this.userModel.deleteOne({ _id: id }); // Use _id for MongoDB default
      return response;
    } catch (error) {
      console.log('Something went wrong in user repo', error);
      throw error;
    }
  }

  async updateUser(id, data) {
    try {
      const response = await this.userModel.findOneAndUpdate({ _id: id }, data, { new: true }); // Use _id
      return response;
    } catch (error) {
      console.log('Something went wrong in user repo', error);
      throw error;
    }
  }

  async getUser(id) {
    try {
      const user = await this.userModel.findOne({ _id: id }); // Use _id
      return user;
    } catch (error) {
      console.log('Something went wrong in user repo', error);
      throw error;
    }
  }
  // async get
}

export default UserRepository;
