//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                     LIGHT-WEIGHT WHATSAPP BOT                                        //
//                                                                                                      //
//                                             𝚅.1.2.7                                                  // 
//                                                                                                      //
//                          ██╗ ██████╗ ██╗███████╗    ███╗   ███╗ ██████╗                               //
//                          ██║ ██╔══██╗██║██╔════╝    ████╗ ████║ ██╔══██╗                             //
//                          ██║ ██████╔╝██║███████╗    ██╔████╔██║ ██║  ██║                             //
//                          ██║ ██╔══██╗██║╚════██║    ██║╚██╔╝██║ ██║  ██║                             //
//                          ██║ ██║  ██║██║███████║    ██║ ╚═╝ ██║ ██████╔╝                             //
//                          ╚═╝ ╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝                              //
//                                                                                                      //
//                                          BY: VENOX-SENPAI                                            //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

/**

* @project_name : IRIS-MD
* @Developer : Venox-Senpai
* @Version : v.1.2.7
* @license : APACHE-2.0

THIS PROJECT IS MADE UNDER THE CIRCUMSTANCES OF "APACHE-2.0"
MEANS ANY KIND OF (MISLEADING, RE-UPLOADING, RENG) WILL LEAD YOU
TO A DMCA REPORT FROM THE OFFICIAL GITHUB, WHICH RESULT IN 
REMOVING UR COPIED/RE-UPLOADED PROJECT FROM THERE, IN SOME
CONDITIONS IT CAN LEADS TO TERMINATE UR ACCOUNT FROM THAT PLATFORM

│• @C_holder : Venox-Senpai

**/

const fs = require('fs');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const toBool = (x) => x === 'true';
const DATABASE_URL = process.env.DATABASE_URL || './lib/database.db';
if (fs.existsSync('config.env')) {
  dotenv.config({
    path: './config.env'
  });
}


module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05LK2tYeHRxcFZnWUtabmdZZkw0RWl6dU5PTXUyR2szRDBjUmxOdXhVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1Q2eVdtcTAxdlpHb1FzNDRNSzdvWlA5dWxjNWwrdzF4SEwrOG5TVG15TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUHFvMFgxQ2NNbHFXUGNOY0dqQ1U4ZkEzWU8vRE1RK05YemU4Mm82RkdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSWFKWnEvVlZtYksyNzV4TjZpbmdiUFhLaWhzQU9ISzFEcmk2VFlaeDBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhEdWs1K3htRFZFYi9taE5Kdjd5eUxhdU8vNFI0aUdhMlpwTXNQbDBta2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFnL3AwQnZyQjBHallYUXRuN2JuUUhiQjk3d2w3M2lmTmc3SnpaNEZ5REk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURYL2ovTVQxRnlPN2xOOGVuS3FReERiS3dSMlZ4aXlIME9qVFRqZENrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnNsZGQ2d1phaW9MOUFqZ0xYNnd2N3o5SThySzJrOUFYbEZSMU5GVDNDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJSRnRvSk0vbWRaRHdkZDgyQjlFTjQ3UTVuUnRWTkFOWGpYcWhlbmNVaXV6bWt5QmJib3FqUlpkV2hRSU53WUMxQmp0MmY1aU5saDZrTVBOcGNvMmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6InR3Qjh3Q0w5R3kvL1ZkZThaQ3RPRnpkRGw4ZWNiWnk3aFFmRHNQNld0VU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTc2NzNGRUQxRDdCQ0YyRUU0RTA5RjIxMjA1N0JCRDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTA5OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjIwQzM0RjQ3RTAzNjYzOTU3Njc5MERBNzc1MEM0ODUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTA5OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTAwQTIxOTQ1N0FDMzRBODI2RDM5OUI0RUIzREQ2QjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTEwMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjFFMzVEQUQxQTg0NkQ4Njc1REVFQ0UzREIzQzBBMkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTEwMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWTJUSDlFMFpUemFURHhWdnNzdzNoUSIsInBob25lSWQiOiI1NzJmZGRlMi1kMjA0LTQxNGItOWZkMS1lNmU4NWQ5MWQ0YTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielpwUC8rZTFqSTAwRVNjTjMwVk1EVEVVTnA4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPREJMT0UyeFMvYU1VNnRJQUxmU0l1S0J3UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJROVE1U0QyQSIsIm1lIjp7ImlkIjoiNDg0NTkwNjg4NzQ6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtYXJpYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTExxbnRzQkVKemkxck1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWDZ1NEl3Nk9BdXF3Ymk1TURCaHpYKzcyRTRTWlpzRjR6bjA5Rm10blpROD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR1BvUVllWnVqWmVxQlNqU1YzekdQazNxRnhTYXJPdllITnVZbUtUTWEzMWwyM3huNzNUK0dSODNwdTdZWDVvZzQ4eTRBcmhJQjVFZm9MSTRVRng1QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjdFRFdnWFJmTVBuV21jdVMyTjRxRkR3b0QzcWowYnJGalQzbENiY3FpUHI0alg3OEkwOFRrc1p5M0tCcUlhZTM2ZnVRUXE3SUx4WmdDSFF3bWp2TmpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDg0NTkwNjg4NzQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWK3J1Q01PamdMcXNHNHVUQXdZYzEvdTloT0VtV2JCZU01OVBSWnJaMlVQIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4OTg5MDk3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUh3USJ9',
    HANDLERS: process.env.HANDLERS || '.',
    IG: process.env.IG || 'https://instagram.com/offx.cxarlie',
    INFO: process.env.INFO || 'ɪʀɪꜱ-ᴍᴅ;VᴇɴᴏxSᴇʀ;https://ibb.co/hV5DnJx',
    URL: process.env.URL || 'https://youtube.com/c/CHARLIE999,
    SUDO: process.env.SUDO || '919556416715'
    AUTO_STATUS_VIEW: process.env.AUTO_STATUS_VIEW || 'true',
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || 'true',
    MODE: process.env.MODE || 'public',
    STICKER_DATA: process.env.STICKER_DATA || '️ᴍᴀᴅᴇ ʙʏ; ɪʀɪꜱ-ᴍᴅ',
    HAPP: process.env.HAPP || '', // ɪꜰ ɴᴏᴛ ʜᴇʀᴏᴋᴜ, ᴛʜᴇɴ ᴋᴇᴇᴘ ɪᴛ ʙʟᴀɴᴋᴇᴅ
    HKEY: process.env.HKEY || '', // ɪꜰ ɴᴏᴛ ʜᴇʀᴏᴋᴜ, ᴛʜᴇɴ ᴋᴇᴇᴘ ɪᴛ ʙʟᴀɴᴋᴇᴅ
    DATABASE_URL: DATABASE_URL
};

const DATABASE = DATABASE_URL === "./lib/database.db" ?
    new Sequelize({
        dialect: "sqlite",
        storage: DATABASE_URL,
        logging: false
    }) :
    new Sequelize(DATABASE_URL, {
        dialect: "postgres",
        ssl: true,
        protocol: "postgres",
        dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false
    });

module.exports.DATABASE = DATABASE;
