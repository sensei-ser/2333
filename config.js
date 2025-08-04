import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//owner
global.owner = [
['77072763560'],
['77072763560'],
['77072763560'],
['77072763560'],
['77072763560'],
['77072763560']
]

//Información 
globalThis.info = {
wm: "𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿",
vs: "2.0.0 (beta)",
packname: "𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦❤️‍🔥 - Ванилька\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
author: "Owner: @elrebelde21\n• Dueña: @itschinita_official",
apis: "https://delirius-apiofc.vercel.app",
apikey: "GataDios",
fgmods: { url: 'https://api.fgmods.xyz/api', key: 'elrebelde21' },
neoxr: { url: 'https://api.neoxr.eu/api', key: 'GataDios' },
img2: "https://telegra.ph/file/39fb047cdf23c790e0146.jpg",
img4: fs.readFileSync('./media/Menu2.jpg'),
yt: "https://www.youtube.com",
tiktok: "https://www.tiktok.com",
md: "https://github.com",
fb: "https://www.facebook.com",
nn: "77072763560", //Grupo ofc1
nn2: "77072763560", //Grupo ofc2
nn3: "77072763560", //Colab Loli & Gata
nn4: "77072763560", //Enlace Ванилька
nn5: "77072763560", //A.T.M.M
nn6: "77072763560", //Dev support 
nna: "77072763560",
nna2: "77072763560"
}

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
