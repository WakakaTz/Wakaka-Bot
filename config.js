const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_12_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDI5LFxuICAgICAgICAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV0NyYUYrOEN6eGpIelQzK3RaQ0hJdXFPWTRmYjAxTHpyY0tFQTExSzBFTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjY3NTM4MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFDRUU4MjdGNDlFRTIzM0RENENBOTk2RUE4NEI4MTEzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTkxNTEyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTYyNjc1MzgxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDA1MDAwN0QxN0U3NDg5OEZGMDc4ODk3QkZDQTBBRTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTE1MTI3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBGMHFrWk9jUWpHQUY3VVNoZXdxOUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmZhNGMwMTktNTFjYS00ZjAyLWI4ZTAtMzg4OTlhODllOTkzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgOTEsXG4gICAgICAyNTQsXG4gICAgICAxMzQsXG4gICAgICAxMTgsXG4gICAgICAxODEsXG4gICAgICAyMTIsXG4gICAgICAxNjgsXG4gICAgICA2MCxcbiAgICAgIDI0MCxcbiAgICAgIDY3LFxuICAgICAgMTAxLFxuICAgICAgMTY3LFxuICAgICAgMTEzLFxuICAgICAgNTIsXG4gICAgICAxODIsXG4gICAgICAxMDcsXG4gICAgICAxODgsXG4gICAgICA1MyxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDgsXG4gICAgICA5OCxcbiAgICAgIDQsXG4gICAgICAxNSxcbiAgICAgIDI0MixcbiAgICAgIDMzLFxuICAgICAgMjM4LFxuICAgICAgMjMsXG4gICAgICAyNDQsXG4gICAgICAxOTEsXG4gICAgICAyMDAsXG4gICAgICAxNTksXG4gICAgICAyMDUsXG4gICAgICAyMTQsXG4gICAgICAxMCxcbiAgICAgIDExLFxuICAgICAgMTg1LFxuICAgICAgMTY4LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ2Mkw4TDROXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MjY3NTM4MTg6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLYWx1bHUgU3VuZGF5XCIsXG4gICAgXCJsaWRcIjogXCIyMzAxNTAyMzUwMDUwMzQ6NTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUNOaU1nREVPMmtqN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPVUs5OFVSd0lSZkxSYTFLVitmL1V6M24vcEQvdmpOTUNPdi9laEtMVjFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRYWDZGU0ZUdGNOT3JKWHZzalBDZlRXanh3RjZvWUtZK2svL2RuRWlLMHQyYW9wSDNoUmpjSktsVE42WUZNTEpIMk1lWWxwaHErRytPVHNYTjRCQUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhqMldHQVo4Rlh6d3JmelZxbWpNbE9IZXNlbnRlcTJnRksvRDFDU01UQkRjemVEbms1SVlaVkJmT2VpRkI1L2Q3emdKZWNTR1hjTUxtV3JUekJVdkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyNjc1MzgxODo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5MTUxMjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBa3ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFrdi5qc29uIjogIntcImtleURhdGFcIjpcIi9kMXFFVlNSd245K3IrTFIvSU5vNHl5Zk1oVDBvbmZkMEIrTFBiZVZsWnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTU2NDM0MDQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5MTUxMjQzNTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
