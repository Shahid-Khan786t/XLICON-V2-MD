import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['918360234087', 'WHITE', true], 
  ['233208179431', 'Abraham Dwamena', true],
  ['923259258115', '𝑺𝑯𝑨𝑯𝑰𝑫 𝑲𝑯𝑨𝑵 -(𝑴𝑫)', true], 
  ['94789481495', '𝙼𝚉𝙽 𝙺𝙸𝙽𝙶 ⚡', true],
  ['233533763772', 'Abraham Dwamena2', true],
  ['233531910067', 'Abraham Dwamena3', true],
  
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['923259258115', '94789481495', '923259258115','233531910067','233208179431'] 
global.prems = ['923259258115','233208179431','94789481495', '918360234087','233531910067']
global.allowed = ['923259258115', '233208179431', '94789481495', '918360234087','233531910067']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker MD
global.botname = '𝐒𝐇𝐀𝐇𝐈𝐃-𝐌𝐃.𝐕2'
global.premium = 'true'
global.packname = '𝐒𝐇𝐀𝐇𝐈𝐃 𝐈𝐍𝐅𝐎 𝐓𝐄𝐂𝐇' 
global.author = '@𝐒𝐇𝐀𝐇𝐈𝐃-𝐌𝐃.𝐕2' 
global.menuvid = 'https://telegra.ph/file/9bb79c87d32ee4f0cf3ec.jpg'
global.igfg = '▢✓ Follow My channelhttps://whatsapp.com/channel/0029Vaa3Nz9FSAt1bxpPwt3x' 
global.dygp = 'https://chat.whatsapp.com/BIhyo7byRNP4ZvUl5WH0dB'
global.fgsc = 'https://github.com/Admin786T/SHAHID-MD' 
global.fgyt = 'https://www.youtube.com/@MrRAJA7HACKER'
global.fgpyp = 'https://www.youtube.com/@MrRAJA7HACKER'
global.fglog = '𝐒𝐇𝐀𝐇𝐈𝐃-𝐌𝐃.jpg' 
global.thumb = fs.readFileSync('./𝐒𝐇𝐀𝐇𝐈𝐃-𝐌𝐃.jpg')


global.wait = '*🕣 _𝐒𝐇𝐀𝐇𝐈𝐃-𝐌𝐃 IS LOADIND..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
