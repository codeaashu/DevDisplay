import UserRepository from '../repository/user-repository.js';

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async deleteUser(id) {
    try {
      const response = await this.userRepository.deleteUser(id);
      return response;
    } catch (error) {
      console.log('Something went wrong in user-service ', error);
      throw error;
    }
  }

  async updateUser(id, data) {
    try {
      const user = await this.userRepository.updateUser(id, data);
      return user;
    } catch (error) {
      console.log('Something went wrong in user-service ', error);
      throw error;
    }
  }

  async getUser(id) {
    try {
      const response = await this.userRepository.getUser(id);
      return response;
    } catch (error) {
      console.log('Something went wrong in user-service ', error);
      throw error;
    }
  }
}

export default UserService;
