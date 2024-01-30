 const os = require('os')
  let menus = false
  const moment = require("moment-timezone")
  const fs = require("fs")
  let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1,name, Module_Exports, fancy18 } = require("../lib");
  const long = String.fromCharCode(8206)
  const sɪɢᴍᴀ_readmore = long.repeat(4001)
  const sɪɢᴍᴀ_speed = require('performance-now')
  const sɪɢᴍᴀ_ᴍᴅ = require('../lib/plugins')
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
          kingcmd: "owner",
          infocmd: "to check owner number",
          kingclass: "general commands",

      },
      async(bot, person) => {
          const name = require('../Setting')
          const thmb = await getBuffer(global.THUMB_IMAGE)
          const vcard = 'BEGIN:VCARD\n' +
              'VERSION:3.0\n' +
              'FN:' + name.ownername + '\n' +
              'ORG:;\n' +
              'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
              'END:VCARD'
          let buttonMessaged = {
              contacts: { displayName: name.ownername, contacts: [{ vcard }] },
              contextInfo: {
                  externalAdReply: {
                      fowarded: true,
                      title: name.ownername,
                      body: 'ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ᴍᴇssᴀɢᴇ ᴍᴇ',
                      renderLargerThumbnail: true,
                      thumbnailUrl: ``,
                      thumbnail: thmb,
                      mediaType: 1,
                      mediaUrl: '',
                      sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + person.pushName,
                  },
              },
          };
          return await bot.sendMessage(person.chat, buttonMessaged, {   quoted: person, });
  
      }
  )

  const readDirectory = (text) => {
    return new Promise((resolve, reject) => {
      fs.readdir(text, (err, files) => {
        if (err) {reject('Error reading directory'); }
        else {
          resolve(files);
        }
      });
    });
  };

Module_Exports({
    kingcmd: "menu",
    shortcut: ["list"],
    infocmd: "All Commands lists",
    kingclass: "general commands"
  }, async (_0x3c2b7e, _0x4be39a, _0x364003) => {
    const {
      commands: _0x3442f9
    } = require("../lib");
    let _0x59b23d = [];
    const _0x1f4c0d = _0x364003 ? _0x3442f9.find(_0x1696a7 => _0x1696a7.kingcmd === _0x364003) : false;
    if (_0x1f4c0d) {
      _0x59b23d.push("┏━━⟪ " + mztit + " ⟫━◈\n┃✬ ᴄᴏᴍᴍᴀɴᴅ " + _0x1f4c0d.kingcmd);
      if (_0x1f4c0d.kingclass) {
        _0x59b23d.push("┃✬ ᴄᴀᴛᴇɢᴏʀʏ " + _0x1f4c0d.kingclass);
      }
      if (_0x1f4c0d.shortcut) {
        _0x59b23d.push("┃✬ sʜᴏʀᴛᴄᴜᴛ " + _0x1f4c0d.shortcut);
      }
      if (_0x1f4c0d.use) {
        _0x59b23d.push("┃✬ ᴜsᴀɢᴇ\n " + prefix + _0x1f4c0d.kingcmd + " " + _0x1f4c0d.use);
      }
      if (_0x1f4c0d.infocmd) {
        _0x59b23d.push("┃✬ ɪɴꜰᴏ " + _0x1f4c0d.infocmd + "\n┗━━━━━━━━━━◈");
      }
      return await _0x4be39a.reply(_0x59b23d.join("\n"));
    }
    const _0x4357a0 = {};
    try {
      _0x3442f9.map(async (_0x30e747, _0x152af1) => {
        if (_0x30e747.dontAddCommandList === false && _0x30e747.kingcmd !== undefined) {
          if (!_0x4357a0[_0x30e747.kingclass]) {
            _0x4357a0[_0x30e747.kingclass] = [];
          }
          _0x4357a0[_0x30e747.kingclass].push(_0x30e747.kingcmd);
        }
      });
      timestampe = sɪɢᴍᴀ_speed();
      latensie = sɪɢᴍᴀ_speed() - timestampe;
      let [_0x20e8d6, _0x393cfa] = new Date().toLocaleString("en-pk", {
        timeZone: global.timezone
      }).split(",");
      let _0x979192 = await sck1.countDocuments();
      let _0x372184 = "┌───═[ *" + mztit + "* ]═────┐      \n⬡│▸ 𝗢𝘄𝗻𝗲𝗿 " + name.ownername + "\n⬡│▸ 𝗣𝗿𝗲𝗳𝗶𝘅 『 *" + prefix + "* 』\n⬡│▸ 𝗠𝗼𝗱𝗲 " + name.WORKTYPE + "\n⬡│▸ 𝗖𝘂𝗿𝗿𝗲𝗻𝘁-𝗧𝗶𝗺𝗲" + _0x393cfa + "\n⬡│▸ 𝗗𝗮𝘁𝗲 " + _0x20e8d6 + "\n⬡│▸ 𝗥𝗮𝗺-𝗨𝘀𝗮𝗴𝗲‌ " + formatp(os.totalmem() - os.freemem()) + "/" + formatp(os.totalmem()) + "\n⬡│▸ 𝗥𝘂𝗻𝗻𝗶𝗻𝗴-𝗦𝗶𝗻𝗰𝗲‌ " + runtime(process.uptime()) + "\n⬡│▸ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 " + _0x3442f9.length + "\n⬡│▸ 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲-𝗥𝗮𝘁𝗲‌ " + latensie.toFixed(4) + " 𝗦𝗲𝗰𝘀\n⬡│▸ 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 350\n⬡│▸ 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗔𝘀𝘁𝗿𝗼𝗽𝗲𝗱𝗮\n──────···\n─────────···▸▸\n    \n";
      let _0x33ce6e = false;
      for (const _0x181790 in _0x4357a0) {
        _0x372184 += "*〈* *" + tiny(_0x181790) + "* *〉*\n";
        if (_0x364003.toLowerCase() == _0x181790.toLowerCase().trim()) {
          _0x33ce6e = "*〈* *" + tiny(_0x181790) + "* *〉*\n";
          for (const _0x1811b9 of _0x4357a0[_0x181790]) {
            _0x33ce6e += "⎔│▸_ " + fancytext(_0x1811b9, 1) + "\n";
          }
          _0x33ce6e += "──────────⊷\n─────────────⊷\n *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Asta* ";
          break;
        } else {
          for (const _0x4c0684 of _0x4357a0[_0x181790]) {
            _0x372184 += "⎔│▸_ " + fancytext(_0x4c0684, 1) + "\n";
          }
          _0x372184 += "──────────⊷\n──────────────⊷\n";
        }
      }
      _0x372184 += " *ᴀsᴛᴀ-ᴍᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ* ";
      return await _0x3c2b7e.sendMessage(_0x4be39a.chat, {
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply: {
            title: "ᴀꜱᴛᴀ ᴍᴅ 2024",
            body: "ꜰᴏʟʟᴏᴡ ᴜꜱ",
            thumbnailUrl: "",
            thumbnail: log0,
            mediaType: 4,
            mediaUrl: "",
            sourceUrl: "https://web-qr-asta-md-e94d91b92bbf.herokuapp.com"
          }
        },
        image: {
          url: await botpic()
        },
        caption: _0x33ce6e ? _0x33ce6e : _0x372184
      });
    } catch {
      _0x4be39a.reply("*_Error With Client or Low Buffering Speed_*");
    }
  });
  
sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "file",
    infocmd: "to get extact name where that command is in repo.\nSo user can edit that.",
    kingclass: "general commands",

},
 async(bot, person, text ,{isCreator }) => {
   if(!isCreator) return person.reply("ᴏɴʟʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ")
   if(!text) return person.reply("ᴘʟᴇᴀsᴇ, ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ᴄᴏᴍᴍᴀɴᴅ/ᴅɪʀᴇᴄᴛᴏʀʏ")
   if(text.startsWith("."))
   {
      let res="------------- FILE MANAGER -------------\n"
      try {
            const sɪɢᴍᴀ_files = await readDirectory(text);
            files.forEach(sɪɢᴍᴀ_file => { res += file + '\n'; });
            await person.reply(res.toString());
      } catch (error) {  person.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let Maher = [];
          const cmd = commands.find((cmd) => cmd.kingcmd === (text.split(" ")[0].toLowerCase()))
          if (!cmd) return await person.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs");
          else Maher.push(`┏━━⟪⟪ ${mztit} ⟫━◈\n┃✬ ᴄᴏᴍᴍᴀɴᴅ ${cmd.kingcmd}`);
          if (cmd.kingclass) Maher.push(`┃✬ ᴄʟᴀss ${cmd.kingclass}`);
          if(cmd.kingpath) Maher.push(`┃✬ ꜰɪʟᴇ-ᴘᴀᴛʜ ${cmd.kingpath}\n┗━━━━━━━━━━◈\n${name.caption}`)
          return await person.reply(Maher.join('\n'));
  


  })
