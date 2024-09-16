<div align="center">                                                                        
  
  ![GitHub Repo size](https://img.shields.io/github/repo-size/codeaashu/DevDisplay)
  ![GitHub Repo stars](https://img.shields.io/github/stars/codeaashu/DevDisplay?style=social) 
  ![GitHub forks](https://img.shields.io/github/forks/codeaashu/DevDisplay?style=social)
  ![GitHub contributors](https://img.shields.io/github/contributors/codeaashu/DevDisplay)
  ![GitHub pulls](https://img.shields.io/github/issues-pr/codeaashu/DevDisplay?style=social)
  ![GitHub issues](https://img.shields.io/github/issues/codeaashu/DevDisplay?style=social)
  ![GitHub LICENSE](https://img.shields.io/github/license/codeaashu/DevDisplay?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/warrior_aashuu?style=social)](https://twitter.com/intent/follow?screen_name=warrior_aashuu)

<hr>
  <h1 align="center">👨🏻‍💻 Introducing to DevDisplay 👨🏻‍💻</h1>
  <img src="./public/devDisplayLOGO.png" width="100px" />
  <br><a href="https://DevDisplay.vercel.app/"><strong>Dev Display</strong></a>
  <h4 align="center">✦ Discover - Connect - Collab - Build - Promote ✦</h4></br>
  
  ` DevDisplay is an Open Source Community where you can discover and Connect with Skilled Developers, share your ideas, and build projects with collaborative support also you can promote your project through this community. `
</div>

<div align="center">
<h1>👩‍💻 DevDisplay - Discover - Connect - Collab - Build - Promote</h1>
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About 🚀](#about-)
- [Features 💪](#features-)
- [How to add your profile Data 🤔](#how-to-add-your-profile-data-)
  - [Prerequisites](#prerequisites)
  - [How to Install Git](#how-to-install-git)
  - [How to Install Node.js and npm](#how-to-install-nodejs-and-npm)
  - [Steps to Add Your Profile Data](#steps-to-add-your-profile-data)
- [Contributing 👨‍💻](#contributing-)
- [Contributors 🤝](#contributors-)
- [License](#license)
- [Support 🙏](#support-)

<a id="about"></a>

## About 🚀

- DevDisplay - [Website](https://DevDisplay.vercel.app/)
- **`DevDisplay`** is an Open Source Community where you can discover and Connect with Skilled Developers, share your ideas, and build projects with collaborative support also you can promote your project through this community.
- With **`DevDisplay`**, developers can create their profiles in JSON format, which are then displayed on the web for others to discover.

<a id="features"></a>

## Feature 💪

- One of the key features of **`DevDisplay`** is its powerful search functionality.
- Users can search for developers based on specific skills, locations or name, making it easy to Display developers with expertise in a particular technology or programming language.
- This makes **`DevDisplay`** a valuable resource for project managers, recruiters, and anyone looking to connect with skilled developers for collaboration or employment opportunities.

<a id="how-to-add-your-profile-data"></a>

## How to add your profile Data 🤔

> Thank you for your interest in contributing to our open-source project! <br>

### Steps to Add Your Profile Data

1. **Fork the repository:** To create a copy of the repository in your GitHub account, click on the "Fork" button in the top right corner of the project repository page.
2. **Clone the forked repository:** To clone the repository to your local development environment, open the terminal or command prompt and run the following command:

   ```bash
   git clone https://github.com/<your-github-username>/DevDisplay.git
   ```

3. **Install dependencies:** To install the necessary dependencies for the project, navigate to the project directory and run the following command:

   ```bash
   npm install
   ```

4. **Navigate** to the **`public/data`** folder in your project directory.
5. **Create a new JSON file** named **`your_github_username.json`** (replace your_github_username with your actual GitHub username). Open the file you just created.
6. **Add** the following JSON object, replacing the placeholder values with your own details:
   ```json
   {
     "name": "Your Name",
     "location": "Your Location",
     "bio": "Your Bio should be 20-30 words not more then that",
     "avatar": "https://github.com/<your-github-username>.png",
     "portfolio": "Your Portfolio URL or Github URL",
     "skills": ["Your Skill 1", "Your Skill 2", "..."],
     "social": {
       "GitHub": "https://github.com/<github-username>",
       "Twitter": "https://twitter.com/<twitter-username>",
       "LinkedIn": "https://www.linkedin.com/in/<linkedin-username>"
     }
   }
   ```
7. **Save** the **`your_github_username.json`** file.
8. **Navigate** to the **`src`** folder in your project directory. Open the **`ProfilesList.json`** file.
9. **Add your JSON filename** (your_github_username.json) to the array of filenames in the ProfileList.json file, like this:
   ```json
   ["filename1.json", "filename2.json", "your_github_username.json"]
   ```
10. **Save** the **`ProfileLists.json`** file.
11. **Create a new branch:** To create a new branch for your profile, run the following command:
    ```bash
    git checkout -b add-profile
    ```
12. **Add your changed files:** Add changed files to the stage by running the following command:
    ```bash
    git add .
    ```
13. **Commit your changes:** To save your changes to the branch,, run the following command:
    ```bash
    git commit -m "add: <your-name>"
    ```
14. **Push to the branch:** To push the changes to the remote repository, run the following command:
    ```bash
    git push origin add-profile
    ```
15. **Create a pull request:** To submit your changes to the main repository, create a pull request by clicking on the "Compare & pull request" button on your forked repository page.
16. **Wait for review and merge:** Wait for the project maintainers to review and merge your changes.

Once your changes are merged, your profile data will be added to the project's **`Profile.json`** file and your profile will be displayed on the project's website.

<a id="contributing"></a>

## Contributing 👨‍💻

Contributions make the open source community such an amazing place to learn, inspire, and create. <br>
**Any contributions you make are truly appreciated!**

<a id="contributors"></a>

## Contributors 🤝

<a href="https://github.com/codeaashu/DevDisplay/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=codeaashu/DevDisplay" />
</a>

<a id="license"></a>

## License

<table>
  <tr>
     <td>
       <p align="center"> <img src="https://github.com/malivinayak/malivinayak/blob/main/LICENSE-Logo/MIT.png?raw=true" width="80%"></img>
    </td>
    <td> 
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg"/> <br> 
This project is licensed under <a href="./LICENSE">MIT</a>. <img width=2300/>
    </td>
  </tr>
</table>

<a id="support"></a>

## Support 🙏

Thank you for contributing to our open-source project! We appreciate your support 🚀 <br>
Don't forget to leave a star ⭐
