import cron from "node-cron";
import * as cheerio from "cheerio";
import axios from "axios";
import buildUrl from "../utils/urlBuilder.utils.js";
import * as postModels from "../models/post.models.js";

const base_url = "https://dev.to";

const fetchTrendingPosts = async ({
    since = "day"
} = {}) => {
    const url = buildUrl(`${base_url}/top/${since}`);
    console.log(url)
    try {
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);
        // Extract posts (titles, URLs, etc.) from the HTML
        const $posts = $(".substories .crayons-story")
            .map((i, post) => {
                const $post = $(post);
                const title = $post.find("a[class=crayons-story__hidden-navigation-link]").text().trim();
                const url = $post.find("a[class=crayons-story__hidden-navigation-link]").attr("href");
                const $body = $post.find(".crayons-story__body");
                const avatar = $body.find(".crayons-avatar > img").attr("src");
                const author = $body.find(".crayons-story__secondary").text().trim();
                const linkToProf = $body.find(".crayons-story__secondary").attr("href");
                const dateOfPost = $body.find(".crayons-story__tertiary > time").attr("datetime");
                const tags = $body.find(".crayons-story__indention").find(".crayons-story__tags > a.crayons-tag").get().map((tag) => {
                    const $tag = $(tag);
                    return $tag.text().split("#")[1].trim();
                });
                let reactions = "0 reactions"
                const readTime = $body.find(".crayons-story__save > small").text().trim();
                // Fix the typo in the selector here:
                const hasReaction = $body.find(".crayons-story__bottom > .crayons-story__details > a").find("div.multiple_reactions_aggregate")
                hasReaction.length > 0 ? reactions = hasReaction.find(".aggregate_reactions_counter").text().trim() : "0 reactions"

                // Optionally, extract more post details (e.g., author, comments, etc.)
                return {
                    title,
                    url: url,
                    avatar: avatar,
                    author: author,
                    linkToProf: base_url + linkToProf,
                    dateOfPost: dateOfPost,
                    tags: tags,
                    reactions: reactions,
                    readTime: readTime
                };
            })
            .get();  // Convert Cheerio object to a regular array

        console.log(`Found ${$posts.length} posts`);

        // Return the scraped posts
        return $posts;
    } catch (error) {
        console.log(`Something went wrong while fetching data from Dev Community: ${error}`);
    }
}

const trendingDailyPosts = cron.schedule("0 0 * * *", async () => {
    try {
        const postObj = await fetchTrendingPosts();
        try {
            await postModels.Post_daily.deleteMany({});
        } catch (error) {
            throw new Error(error);
        }
        postObj.forEach(async (post) => {
            const newObj = new postModels.Post_daily({
                title: post.title,
                url: post.url,
                avatar: post.avatar,
                author: post.author,
                linkToProf: post.linkToProf,
                dateOfPost: new Date(post.dateOfPost),
                tags: post.tags,
                reactions: post.reactions,
                readTime: post.readTime
            })
    
            try {
                const res = await newObj.save();
                console.log(res)
            } catch (error) {
                console.log(`Something went wrong while updating daily trending posts: `,error)
            }
        })
        console.log(`\n`);
    } catch (error) {
        console.log(`Something went wrong in trendingDailyPosts function: \n${error}`)
    }
})

const trendingWeeklyPosts = cron.schedule("0 0 * * 0", async () => {
    try {
        const postObj = await fetchTrendingPosts({ since: "week" });
        try {
            await postModels.Post_weekly.deleteMany({});
        } catch (error) {
            throw new Error(error);
        }
        postObj.forEach(async (post) => {
            const newObj = new postModels.Post_weekly({
                title: post.title,
                url: post.url,
                avatar: post.avatar,
                author: post.author,
                linkToProf: post.linkToProf,
                dateOfPost: new Date(post.dateOfPost),
                tags: post.tags,
                reactions: post.reactions,
                readTime: post.readTime
            })
    
            try {
                const res = await newObj.save();
                console.log(res)
            } catch (error) {
                console.log(`Something went wrong while updating weekly trending posts: `,error)
            }
        })
        console.log(`\n`);
    } catch (error) {
        console.log(`Something went wrong in trendingWeeklyPosts function: \n${error}`)
    }
});

const trendingMonthlyPosts = cron.schedule("0 0 1 * *", async () => {
    try {
        const postObj = await fetchTrendingPosts({ since: "month" });
        try {
            await postModels.Post_monthly.deleteMany({});
        } catch (error) {
            throw new Error(error);
        }
        postObj.forEach(async (post) => {
            const newObj = new postModels.Post_monthly({
                title: post.title,
                url: post.url,
                avatar: post.avatar,
                author: post.author,
                linkToProf: post.linkToProf,
                dateOfPost: new Date(post.dateOfPost),
                tags: post.tags,
                reactions: post.reactions,
                readTime: post.readTime
            })
    
            try {
                const res = await newObj.save();
                console.log(res)
            } catch (error) {
                console.log(`Something went wrong while updating monthly trending posts: `,error)
            }
        })
        console.log(`\n`);
    } catch (error) {
        console.log(`Something went wrong in trendingMonthlyPosts function: \n${error}`)
    }
})

export {
    trendingDailyPosts,
    trendingWeeklyPosts,
    trendingMonthlyPosts
}

