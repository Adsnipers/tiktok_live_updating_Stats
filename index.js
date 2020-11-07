const tiktok = require('tiktok-app-api');
const chalk = require('chalk');
 
let tiktokApp;
 
function getUserInfo() {
    (async () => {
        tiktokApp = await tiktok();
       
        const user = await tiktokApp.getUserByName('Adsnipers'); // Put your username here
        const userInfo = await tiktokApp.getUserInfo(user);
        console.log(chalk.green(`Followers: ${userInfo.followerCount}`)) // Displays user follower count in green
        console.log(chalk.cyan(`Likes: ${userInfo.likeCount}`)) // Displays user follower count in cyan
        
      })().catch(error => console.log(`Check failed, probably being rate limited`)); // Show this if an error occurrs, this is most likely due to rate limiting by TikTok but always double check the username is correct
      setTimeout(getUserInfo, 300000) // Wait 5 minutes between requests, this is to help prevent rate limiting
}
getUserInfo()