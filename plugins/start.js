//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   // 𝗦𝗛𝗔𝗗𝗢𝗪  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：6.0                                                       //

//
//──────────────────────────────────────//──────────────────────────────────────
//

//░██████╗██╗░░██╗░█████╗░██████╗░░█████╗░░██╗░░░░░░░██╗
//██╔════╝██║░░██║██╔══██╗██╔══██╗██╔══██╗░██║░░██╗░░██║
//╚█████╗░███████║███████║██║░░██║██║░░██║░╚██╗████╗██╔╝
//░╚═══██╗██╔══██║██╔══██║██║░░██║██║░░██║░░████╔═████║░
//██████╔╝██║░░██║██║░░██║██████╔╝╚█████╔╝░░╚██╔╝░╚██╔╝░
//╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░░╚════╝░░░░╚═╝░░░╚═╝░░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//██╗░░░██╗███████╗██████╗░░██████╗██╗░█████╗░███╗░░██╗
//██║░░░██║██╔════╝██╔══██╗██╔════╝██║██╔══██╗████╗░██║
//╚██╗░██╔╝█████╗░░██████╔╝╚█████╗░██║██║░░██║██╔██╗██║
//░╚████╔╝░██╔══╝░░██╔══██╗░╚═══██╗██║██║░░██║██║╚████║
//░░╚██╔╝░░███████╗██║░░██║██████╔╝██║╚█████╔╝██║░╚███║
//░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░╚═╝░╚════╝░╚═╝░░╚══╝

//░█████╗░██╗░░░██╗
//██╔═══╝░██║░░░██║
//██████╗░╚██╗░██╔╝
//██╔══██╗░╚████╔╝░
//╚█████╔╝░░╚██╔╝░░
//░╚════╝░░░░╚═╝░░░
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : SHADOW-MD
//  * @author : LAKSHAN DAMAYANTHA
//  * @description : SHADOW ,A Multi-functional whatsapp user bot.

const _0x49e583=_0x4f24;(function(_0x4f3367,_0x1625b0){const _0x350809=_0x4f24,_0x4eea93=_0x4f3367();while(!![]){try{const _0x3ec0fe=-parseInt(_0x350809(0x173))/0x1*(parseInt(_0x350809(0x16a))/0x2)+-parseInt(_0x350809(0x15f))/0x3+-parseInt(_0x350809(0x152))/0x4+-parseInt(_0x350809(0x153))/0x5*(-parseInt(_0x350809(0x150))/0x6)+parseInt(_0x350809(0x168))/0x7*(-parseInt(_0x350809(0x169))/0x8)+parseInt(_0x350809(0x15a))/0x9*(-parseInt(_0x350809(0x175))/0xa)+-parseInt(_0x350809(0x16f))/0xb*(-parseInt(_0x350809(0x16c))/0xc);if(_0x3ec0fe===_0x1625b0)break;else _0x4eea93['push'](_0x4eea93['shift']());}catch(_0x29c937){_0x4eea93['push'](_0x4eea93['shift']());}}}(_0x1862,0x46f21));const {cmd}=require(_0x49e583(0x15d)),Hiru=require(_0x49e583(0x15e)),Esana=require('@sl-code-lords/esana-news'),axios=require(_0x49e583(0x16b)),config=require(_0x49e583(0x17a));let activeGroups={},lastNewsTitles={};function _0x4f24(_0xe89521,_0x369a09){const _0x186261=_0x1862();return _0x4f24=function(_0x4f24c2,_0x39ef7a){_0x4f24c2=_0x4f24c2-0x14a;let _0x12585c=_0x186261[_0x4f24c2];return _0x12585c;},_0x4f24(_0xe89521,_0x369a09);}async function getLatestNews(){const _0x17d299=_0x49e583;let _0x14fcfe=[];try{const _0x1166e0=new Hiru(),_0x56dba9=await _0x1166e0['BreakingNews']();_0x14fcfe[_0x17d299(0x160)]({'title':_0x56dba9['results'][_0x17d299(0x15c)],'content':_0x56dba9[_0x17d299(0x167)]['news'],'date':_0x56dba9[_0x17d299(0x167)][_0x17d299(0x16e)]});}catch(_0x2ed6f7){console['error'](_0x17d299(0x162)+_0x2ed6f7['message']);}try{const _0x240ea0=new Esana(),_0x4bf30d=await _0x240ea0[_0x17d299(0x161)]();_0x4bf30d&&_0x4bf30d[_0x17d299(0x15c)]&&_0x4bf30d[_0x17d299(0x166)]&&_0x4bf30d[_0x17d299(0x14a)]?_0x14fcfe[_0x17d299(0x160)]({'title':_0x4bf30d['title'],'content':_0x4bf30d[_0x17d299(0x166)],'date':_0x4bf30d[_0x17d299(0x14a)]}):console[_0x17d299(0x14d)](_0x17d299(0x176));}catch(_0x5ba491){console[_0x17d299(0x14d)](_0x17d299(0x159)+_0x5ba491[_0x17d299(0x177)]);}return _0x14fcfe;}async function checkAndPostNews(_0x3d0734,_0x99335d){const _0x5e70c2=_0x49e583,_0x6efe2d=await getLatestNews();_0x6efe2d[_0x5e70c2(0x14f)](async _0x5c4a27=>{const _0x538dc7=_0x5e70c2;!lastNewsTitles[_0x99335d]&&(lastNewsTitles[_0x99335d]=[]),!lastNewsTitles[_0x99335d]['includes'](_0x5c4a27[_0x538dc7(0x15c)])&&(await _0x3d0734['sendMessage'](_0x99335d,{'text':'🗞️\x20*'+_0x5c4a27[_0x538dc7(0x15c)]+'*\x0a'+_0x5c4a27[_0x538dc7(0x151)]+'\x0a'+_0x5c4a27[_0x538dc7(0x16e)]+_0x538dc7(0x154)}),lastNewsTitles[_0x99335d][_0x538dc7(0x160)](_0x5c4a27[_0x538dc7(0x15c)]),lastNewsTitles[_0x99335d][_0x538dc7(0x172)]>0x64&&lastNewsTitles[_0x99335d][_0x538dc7(0x16d)]());});}cmd({'pattern':_0x49e583(0x14c),'desc':_0x49e583(0x156),'isGroup':!![],'react':'🗞️','filename':__filename},async(_0x408b99,_0x278bc1,_0x468298,{from:_0x1a9689,isGroup:_0x3b9e93,participants:_0x4c04cf})=>{const _0x47a146=_0x49e583;try{if(_0x3b9e93){const _0x4dd974=_0x4c04cf[_0x47a146(0x178)](_0x56c4b6=>_0x56c4b6['id']===_0x278bc1[_0x47a146(0x14b)]&&_0x56c4b6[_0x47a146(0x164)]),_0x53f712=_0x278bc1[_0x47a146(0x14b)]===_0x408b99[_0x47a146(0x157)]['jid'];_0x4dd974||_0x53f712?!activeGroups[_0x1a9689]?(activeGroups[_0x1a9689]=!![],await _0x408b99['sendMessage'](_0x1a9689,{'text':_0x47a146(0x14e)}),!activeGroups['interval']&&(activeGroups[_0x47a146(0x179)]=setInterval(async()=>{const _0x1199ec=_0x47a146;for(const _0x1490be in activeGroups){activeGroups[_0x1490be]&&_0x1490be!==_0x1199ec(0x179)&&await checkAndPostNews(_0x408b99,_0x1490be);}},0xea60))):await _0x408b99[_0x47a146(0x165)](_0x1a9689,{'text':_0x47a146(0x174)}):await _0x408b99[_0x47a146(0x165)](_0x1a9689,{'text':'❌\x20This\x20command\x20can\x20only\x20be\x20used\x20by\x20group\x20admins\x20or\x20the\x20bot\x20owner\x20!!'});}else await _0x408b99[_0x47a146(0x165)](_0x1a9689,{'text':_0x47a146(0x158)});}catch(_0x1c6bf0){console[_0x47a146(0x14d)](_0x47a146(0x15b)+_0x1c6bf0[_0x47a146(0x177)]),await _0x408b99['sendMessage'](_0x1a9689,{'text':'Failed\x20to\x20activate\x20the\x20news\x20service.'});}}),cmd({'pattern':'stopnews','desc':_0x49e583(0x155),'isGroup':!![],'react':'❌','filename':__filename},async(_0x148835,_0x1d7348,_0x198945,{from:_0x1693c9,isGroup:_0x2415d4,participants:_0x7e8ff4})=>{const _0x97f009=_0x49e583;try{if(_0x2415d4){const _0x212496=_0x7e8ff4[_0x97f009(0x178)](_0x48b1aa=>_0x48b1aa['id']===_0x1d7348['sender']&&_0x48b1aa[_0x97f009(0x164)]),_0x394a9d=_0x1d7348[_0x97f009(0x14b)]===_0x148835[_0x97f009(0x157)][_0x97f009(0x170)];_0x212496||_0x394a9d?activeGroups[_0x1693c9]?(delete activeGroups[_0x1693c9],await _0x148835[_0x97f009(0x165)](_0x1693c9,{'text':_0x97f009(0x171)}),Object['keys'](activeGroups)[_0x97f009(0x172)]===0x1&&activeGroups[_0x97f009(0x179)]&&(clearInterval(activeGroups[_0x97f009(0x179)]),delete activeGroups[_0x97f009(0x179)])):await _0x148835['sendMessage'](_0x1693c9,{'text':'❌\x2024/7\x20News\x20is\x20not\x20active\x20in\x20this\x20group\x20!!'}):await _0x148835[_0x97f009(0x165)](_0x1693c9,{'text':_0x97f009(0x163)});}else await _0x148835[_0x97f009(0x165)](_0x1693c9,{'text':'This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups!!'});}catch(_0x3ac903){console[_0x97f009(0x14d)](_0x97f009(0x15b)+_0x3ac903[_0x97f009(0x177)]),await _0x148835[_0x97f009(0x165)](_0x1693c9,{'text':'Failed\x20to\x20deactivate\x20the\x20news\x20service.'});}});function _0x1862(){const _0x3c3b87=['📰\x2024/7\x20News\x20Activated.','forEach','408sXdKbt','content','1411896wKWVWB','30465ESqfsF','\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ꜱᴀʜᴀꜱ\x20ᴛᴇᴄʜ*','Disable\x20Sri\x20Lankan\x20news\x20updates\x20in\x20this\x20group','Enable\x20Sri\x20Lankan\x20news\x20updates\x20in\x20this\x20group','user','This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.','Error\x20fetching\x20Esana\x20News:\x20','1053OoADxA','Error\x20in\x20news\x20command:\x20','title','../command','hirunews-scrap','1415574qLIawm','push','getLatestNews','Error\x20fetching\x20Hiru\x20News:\x20','❌\x20This\x20command\x20can\x20only\x20be\x20used\x20by\x20group\x20admins\x20or\x20the\x20bot\x20owner\x20!!','admin','sendMessage','description','results','7sIxSTp','1292168wKLueV','6816Qdevrk','axios','105036hFVCMq','shift','date','1793vbvlJl','jid','❌\x2024/7\x20SHADOW\x20-\x20MD\x20News\x20Deactivated\x20NOW..','length','121QsqLhx','🗞️\x2024/7\x20SHADOW\x20-\x20MD\x20News\x20Activated\x20Successful..','12970kRuBpH','Error:\x20Esana\x20News\x20returned\x20invalid\x20data.','message','some','interval','../config','publishedAt','sender','startnews','error'];_0x1862=function(){return _0x3c3b87;};return _0x1862();}
