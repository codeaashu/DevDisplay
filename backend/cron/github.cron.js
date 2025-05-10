import cron from 'node-cron';
import buildUrl from '../utils/urlBuilder.utils.js';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as devModels from '../models/developers.models.js';
import * as repoModels from '../models/repositories.models.js';

const base_url = 'https://github.com';

const fetchTrendingRepos = async ({ language = '', since = 'daily' } = {}) => {
  const url = buildUrl(`${base_url}/trending`, {
    language,
    since,
  });

  try {
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);
    return $('.Box article.Box-row')
      .get()
      .map((repo) => {
        const $repo = $(repo);
        const title = $repo.find('.h3').text().trim();
        const [username, repoName] = title.split('/').map((item) => item.trim());
        const description = $repo.find('p').text().trim();
        const linkToRepo = $repo.find('.h3 > a').attr('href');
        const language = $repo.find('span[itemprop="programmingLanguage"]').text().trim();
        const stars = $repo.find('.mr-3 svg[aria-label="star"]').first().parent().text().trim();
        const forks = $repo.find('svg[aria-label="fork"]').first().parent().text().trim();
        const currentPeriodStars = $repo.find('span.d-inline-block.float-sm-right').text().trim();
        const builtBy = $repo
          .find('span:contains("Built by")')
          .find('[data-hovercard-type="user"]')
          .map((i, user) => {
            const altString = $(user).children('img').attr('alt');
            const avatarUrl = $(user).children('img').attr('src');
            return {
              username: altString ? altString.slice(1) : /* istanbul ignore next */ null,
              href: `${base_url}${user.attribs.href}`,
              avatar: avatarUrl.split('?')[0],
            };
          })
          .get();
        // const builtBy = builtByAnchors.map((contributor) => {
        //     return contributor.split("?")[1];
        // })
        return {
          author: username,
          title: repoName,
          description: description,
          linkToRepo: `${base_url}/${linkToRepo}`,
          language: language,
          stars: stars,
          forks: forks,
          currentPeriodStars: currentPeriodStars,
          builtBy: builtBy,
        };
      });
  } catch (error) {
    console.log(`Something went wrong while fetching the HTML data for repos: `, error);
  }
};

const fetchTrendingDevs = async ({ language = '', since = 'daily' } = {}) => {
  const url = buildUrl(`${base_url}/trending/developers`, {
    language,
    since,
  });

  try {
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);
    return $('.Box article.Box-row')
      .get()
      .map((dev) => {
        const $dev = $(dev);
        const avatar = $dev.find('img').attr('src');
        const name = $dev.find('.h3 a').text().trim();
        const linkToDev = $dev.find('.h3 a').attr('href');
        const username = linkToDev.split('/')[1];
        return {
          name: name,
          avatar: avatar.split('?')[0],
          linkToDev: `${base_url}/${linkToDev}`,
          username: username,
        };
      });
  } catch (error) {
    console.log(`Something went wrong while fetching the HTML data for devs: `, error);
  }
};

const trendingDailyRepos = cron.schedule('0 0 * * *', async () => {
  try {
    const repoObjects = await fetchTrendingRepos();
    try {
      await repoModels.Repo_daily.deleteMany({});
    } catch (error) {
      throw new Error(error);
    }
    repoObjects.forEach(async (repo) => {
      const newObj = new repoModels.Repo_daily({
        author: repo.author,
        title: repo.title,
        description: repo.description,
        link: repo.linkToRepo,
        language: repo.language,
        stars: repo.stars,
        forks: repo.forks,
        current_period_stars: repo.currentPeriodStars,
        builtBy: repo.builtBy,
      });
      try {
        const res = await newObj.save();
        console.log(res);
      } catch (error) {
        console.log(`Something went wrong while updating daily trending repositories: `, error);
      }
      console.log(`\n`);
    });
    console.log(`Github's trending repositories fetched and pushed to db!`);
  } catch (error) {
    console.log(`Something went wrong in trendingDailyRepos function: \n${error}`);
  }
});

const trendingDailyDevs = cron.schedule('0 0 * * *', async () => {
  try {
    const devObjects = await fetchTrendingDevs();
    try {
      await devModels.Dev_daily.deleteMany({});
    } catch (error) {
      throw new Error(error);
    }
    devObjects.forEach(async (dev) => {
      const newObj = new devModels.Dev_daily({
        name: dev.name,
        avatar: dev.avatar,
        username: dev.username,
        link: dev.linkToDev,
      });

      try {
        const res = await newObj.save();
        console.log(res);
      } catch (error) {
        console.log(`Something went wrong while updating daily trending developers: `, error);
      }
      console.log(`\n`);
    });
    console.log(`Github's trending developers fetched and pushed to db!`);
  } catch (error) {
    console.log(`Something went wrong in trendingDailyDevs function: \n${error}`);
  }
});

const trendingWeeklyRepos = cron.schedule('0 0 * * 0', async () => {
  try {
    const repoObjects = await fetchTrendingRepos({ since: 'weekly' });
    try {
      await repoModels.Repo_weekly.deleteMany({});
    } catch (error) {
      throw new Error(error);
    }
    repoObjects.forEach(async (repo) => {
      const newObj = new repoModels.Repo_weekly({
        author: repo.author,
        title: repo.title,
        description: repo.description,
        link: repo.linkToRepo,
        language: repo.language,
        stars: repo.stars,
        forks: repo.forks,
        current_period_stars: repo.currentPeriodStars,
        builtBy: repo.builtBy,
      });
      try {
        const res = await newObj.save();
        console.log(res);
      } catch (error) {
        console.log(`Something went wrong while updating weekly trending repositories: `, error);
      }
      console.log(`\n`);
    });
    console.log(`Github's trending repositories fetched and pushed to db!`);
  } catch (error) {
    console.log(`Something went wrong in trendingWeeklyRepos function: \n${error}`);
  }
});

const trendingWeeklyDevs = cron.schedule('0 0 * * 0', async () => {
  try {
    const devObjects = await fetchTrendingDevs({ since: 'weekly' });
    try {
      await devModels.Dev_weekly.deleteMany({});
    } catch (error) {
      throw new Error(error);
    }
    devObjects.forEach(async (dev) => {
      const newObj = new devModels.Dev_weekly({
        name: dev.name,
        avatar: dev.avatar,
        username: dev.username,
        link: dev.linkToDev,
      });

      try {
        const res = await newObj.save();
        console.log(res);
      } catch (error) {
        console.log(`Something went wrong while updating weekly trending developers: `, error);
      }
      console.log(`\n`);
    });
    console.log(`Github's trending developers fetched and pushed to db!`);
  } catch (error) {
    console.log(`Something went wrong in trendingWeeklyDevs function: \n${error}`);
  }
});

const trendingMonthlyRepos = cron.schedule('0 0 1 * *', async () => {
  try {
    const repoObjects = await fetchTrendingRepos({ since: 'monthly' });
    try {
      await repoModels.Repo_monthly.deleteMany({});
    } catch (error) {
      throw new Error(error);
    }
    repoObjects.forEach(async (repo) => {
      const newObj = new repoModels.Repo_monthly({
        author: repo.author,
        title: repo.title,
        description: repo.description,
        link: repo.linkToRepo,
        language: repo.language,
        stars: repo.stars,
        forks: repo.forks,
        current_period_stars: repo.currentPeriodStars,
        builtBy: repo.builtBy,
      });
      try {
        const res = await newObj.save();
        console.log(res);
      } catch (error) {
        console.log(`Something went wrong while updating monthly trending repositories: `, error);
      }
      console.log(`\n`);
    });
    console.log(`Github's trending repositories fetched and pushed to db!`);
  } catch (error) {
    console.log(`Something went wrong in trendingMonthlyRepos function: \n${error}`);
  }
});

const trendingMonthlyDevs = cron.schedule('0 0 1 * *', async () => {
  try {
    const devObjects = await fetchTrendingDevs({ since: 'monthly' });
    try {
      await devModels.Dev_monthly.deleteMany({});
    } catch (error) {
      throw new Error(error);
    }
    devObjects.forEach(async (dev) => {
      const newObj = new devModels.Dev_monthly({
        name: dev.name,
        avatar: dev.avatar,
        username: dev.username,
        link: dev.linkToDev,
      });

      try {
        const res = await newObj.save();
        console.log(res);
      } catch (error) {
        console.log(`Something went wrong while updating monthly trending developers: `, error);
      }
      console.log(`\n`);
    });
    console.log(`Github's trending developers fetched and pushed to db!`);
  } catch (error) {
    console.log(`Something went wrong in trendingMonthlyDevs function: \n${error}`);
  }
});

export {
  trendingDailyDevs,
  trendingDailyRepos,
  trendingMonthlyDevs,
  trendingMonthlyRepos,
  trendingWeeklyDevs,
  trendingWeeklyRepos,
};
