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


global.devs = "50937646003" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, ''50937646003";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,50937646003";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50937646003";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_23_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjksXG4gICAgICAgIDE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMyLFxuICAgICAgICA3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNixcbiAgICAgICAgNjksXG4gICAgICAgIDExNixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzksXG4gICAgICAgIDU4LFxuICAgICAgICA5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhVdXdsTE1ueWRpeFFaV2ZPbTlUSlFpVVBiZTJ4c3JsNjYxRFB1OW9hVnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5Mzc2NDYwMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhFQjVCNUVFRUZCMDM5OTY2Mzc4RDIwN0VDRjUzMzZFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTAxNzM5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTM3NjQ2MDAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMkNCNURFMkE2NzlBRTA2ODc5QTY4RUU2OTgyQjAyRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwMTczOTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZDVRc2JkbFNUM0NJX1FPV1VfbDFqd1wiLFxuICBcInBob25lSWRcIjogXCI5ZjVjNTcyYi04MWIyLTQ0NDEtODdkYS00NzUzY2ZiYjhiN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDI1NCxcbiAgICAgIDIzNSxcbiAgICAgIDE0LFxuICAgICAgMjM4LFxuICAgICAgNjgsXG4gICAgICA1NyxcbiAgICAgIDE3LFxuICAgICAgMTQzLFxuICAgICAgMTAxLFxuICAgICAgMTI3LFxuICAgICAgNDIsXG4gICAgICA0NyxcbiAgICAgIDM3LFxuICAgICAgMTMsXG4gICAgICAyNDcsXG4gICAgICAxMTgsXG4gICAgICA5LFxuICAgICAgNDMsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMTgsXG4gICAgICAzMSxcbiAgICAgIDYzLFxuICAgICAgMTcsXG4gICAgICAxODAsXG4gICAgICA1NyxcbiAgICAgIDI0LFxuICAgICAgMTI4LFxuICAgICAgMTgwLFxuICAgICAgODgsXG4gICAgICAyMDMsXG4gICAgICAxMTEsXG4gICAgICA3OSxcbiAgICAgIDIsXG4gICAgICAyNTMsXG4gICAgICAyMzIsXG4gICAgICA3LFxuICAgICAgNjAsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaTDMyNFhSVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5Mzc2NDYwMDM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMxMzc5MjI0Mzg3NzcxOjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTm9ja1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s2a3NyWURFS3pJMHJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieklvUGErMFRUODlxM3UyZGhLRnJvalBMNnlXM3RkV1FVeXhiZjJZb2hncz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxWHJFN29iYWZ2YUoyVHdqZjVuK0IxaHcrOVBlbVRYMkRpV1hXb3M0Z0hScTJaai8rOHBieEtCSTQrcVRlSWs2MHMydW1YYUJPTFdvQ0Q2WEJjWDVDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDWE9hckJ3c0VmSTRYUjF5VUdwa2prbTRnSHhsU2ttdGhGOEROZFFZZlhjOGRZc2xsMUd2VmxsRmVWYVdkUkgzME1xUU9LTm1jMktPS29jVzZGallqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzNzY0NjAwMzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwMTczOTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEcUlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURxSS5qc29uIjogIntcImtleURhdGFcIjpcImMyeWI5emRXTXRJc0NwdkI1TGc2TzZVNjhkdXVESmd4aW45MTZJRGt6NjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTE5Mzc2NDI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwOTIzOTI2NjIwXCJ9Igp9"  // PUT your SESSION_ID 


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
