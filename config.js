/**
   * Create By Fazx Store
   * Recode By GBIC YT
   * Contact Me on wa.me/6282351108031
   * Follow https://github.com/gbicyt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6282351108031']
global.ownernomer = "6282351108031"
global.premium = ['6282351108031']
global.packname = 'Ⓒ FBS 2023'
global.author = 'ayykuhh kah?'
global.sessionName = 'FANXYZ'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '⸢ ▰▰▰▰▰▰▰▰ 100% - Selesai ⸥',
    admin: '⸢ Fitur Khusus Admin Group! ⸥',
    botAdmin: '⸢ Bot Harus Menjadi Admin Terlebih Dahulu! ⸥',
    premime: '⸢ Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner ⸥',
    owner: '⸢ Fitur Khusus Owner Bot ⸥',
    group: '⸢ Fitur Digunakan Hanya Untuk Group! ⸥',
    private: '⸢ Fitur Digunakan Hanya Untuk Private Chat! ⸥',
    bot: '⸢ Fitur Khusus Pengguna Nomor Bot ⸥',
    wait: '⸢ ⟲ Loading... ⸥',
    error: '⸢ ╳ Error! ⸥',
    errapi: '⸢ ╳ Error Mungkin Apikey Tidak Valid! ⸥',
    errmor: '⸢ ╳ Error Kesalahan Sistem ⸥',
    endLimit: '⸢ ⨻ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 ⸥',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 250
}

// Fake
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')

// Url
global.mygit = 'https://github.com/gbicyt'
global.myyt = 'https://www.youtube.com/channel/UC4drGxmbr7nPvbShL9OaptA'
global.myytv = '.'
global.mygc = "https://chat.whatsapp.com/DBM9wPHcbWOChzE3MT7jd9"

// Engak Ngaruh, Belum Kepasang
global.botname = 'Fazx Bot'
global.akulaku = 'Bot By Fazx Store'
global.ytname = 'YT GBIC YT' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
