import cron from "node-cron";
import { Test } from "../models/test.models.js";

const testFunction = async () => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    try {
        const newObj = new Test({
            message: "Pinging MongoDB for tests...",
            date: date,
            time: time
        })
    
        await newObj.save()
        console.log(`Successfully pinged MongoDB!`)
    } catch (error) {
        console.log(`Something went wrong while pinging MongoDB: ${error}`)
    }
}

const pingDB = cron.schedule("* * * * *", testFunction)
export default pingDB;