import IdeaRepository from '../repository/idea-repository.js';

class IdeaService {
  constructor() {
    this.ideaRepository = new IdeaRepository();
  }
  async createIdea(data) {
    try {
      const idea = await this.ideaRepository.createIdea(data);
      return idea;
    } catch (error) {
      console.log('Something went wrong in idea-service ', error);
      throw error;
    }
  }
  async deleteIdea(id) {
    try {
      const response = await this.ideaRepository.deleteIdea(id);
      return response;
    } catch (error) {
      console.log('Something went wrong in idea-service ', error);
      throw error;
    }
  }
  async updateIdea(id, data) {
    try {
      const idea = await this.ideaRepository.updateIdea(id, data);
      return idea;
    } catch (error) {
      console.log('Something went wrong in idea-service ', error);
      throw error;
    }
  }
  async getIdea(id) {
    try {
      const response = await this.ideaRepository.getIdea(id);
      return response;
    } catch (error) {
      console.log('Something went wrong in idea-service ', error);
      throw error;
    }
  }
  async find(condition) {
    try {
      const idea = await this.ideaRepository.find(condition);
      return idea;
    } catch (error) {
      throw error;
    }
  }
  async voteOnIdea(ideaId, userId) {
    const idea = await this.ideaRepository.getIdea(ideaId);
    if (!idea) {
      throw new Error('Idea not found');
    }

    const userVoted = idea.voters.includes(userId);

    if (userVoted) {
      // Remove the user's vote and decrement the vote count
      await this.ideaRepository.updateIdea(ideaId, {
        $pull: { voters: userId }, // Use $pull to remove userId from voters array
        $inc: { votes: -1 }, // Use $inc to decrement the vote count
      });
    } else {
      // Add the user's vote and increment the vote count
      await this.ideaRepository.updateIdea(ideaId, {
        $push: { voters: userId }, // Use $push to add userId to voters array
        $inc: { votes: 1 }, // Use $inc to increment the vote count
      });
    }

    // Retrieve the updated idea after modification
    const updatedIdea = await this.ideaRepository.getIdea(ideaId);
    return updatedIdea;
  }
}

export default IdeaService;
