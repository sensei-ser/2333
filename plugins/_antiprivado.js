import { db } from '../lib/postgres.js'
import { getSubbotConfig } from '../lib/postgres.js'
import chalk from 'chalk'

const comandosPermitidos = ['code', 'serbot', 'jadibot', 'bots', 'piedra', 'tijera', 'papel']
export async function before(m, { conn, isOwner }) {
const botId = conn.user?.id || globalThis.conn.user.id 
const config = await getSubbotConfig(botId)
const chatId = m.chat || m.key?.remoteJid || ''
const sender = m.sender
const texto = m.originalText?.toLowerCase().trim() || m.text?.toLowerCase().trim() || ''

if (m.isGroup || m.fromMe || isOwner) {
return
}

if (!config.anti_private) return
const prefixes = Array.isArray(config.prefix) ? config.prefix : [config.prefix || '/']

let usedPrefix = ''
for (const prefix of prefixes) {
if (texto.startsWith(prefix)) {
usedPrefix = prefix
break
}}

const withoutPrefix = texto.slice(usedPrefix.length).trim()
const [commandName, ...args] = withoutPrefix.split(/\s+/)
const command = commandName ? commandName.toLowerCase() : ''

if (comandosPermitidos.includes(command)) {
return
}

try {
let res = await db.query(`SELECT warn_pv FROM usuarios WHERE id = $1`, [sender])
let warned = res.rows[0]?.warn_pv || false

if (!res.rowCount) {
await db.query(`INSERT INTO usuarios (id, warn_pv) VALUES ($1, true)`, [sender])
await m.reply(`Здравствуйте, запрещено использовать команды в частном порядке...\n\n*\`🔰 ЕСЛИ ВЫ ХОТИТЕ ПРЕОБРЕСТИ БОТА:\` _*обращайтесь по это номеру 👇*_\n${[info.nn, info.nn2, info.nn3, info.nn4, info.nn5, info.nn6].getRandom()}`)
return false
}

if (!warned) {
await db.query(`UPDATE usuarios SET warn_pv = true WHERE id = $1`, [sender])
await m.reply(`Здравствуйте, запрещено использовать команды в частном порядке...\n\n*\`🔰 ЕСЛИ ВЫ ХОТИТЕ ПРЕОБРЕСТИ БОТА:\` _*обращайтесь по это номеру 👇*_\n${[info.nn, info.nn2, info.nn3, info.nn4, info.nn5, info.nn6].getRandom()}`)
return false
}

return false
} catch (e) {
return false
}
}