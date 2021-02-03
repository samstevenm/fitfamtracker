function postResponse(channel,channel_name,type,user_name,duration,goal,notes) {
  var payload = {
    "channel": channel,
    "username": "fitfambot",
    "fallback": "This is an update from a FitFamBot. Your client chose not to show the attachment.",
    "attachments":[
       {
          "pretext": " @" + user_name + " completed a **" + type + "** workout!",
          "authorname": user_name,
          "color": "#00ff00",
          "fields":[
             {
                "title":"Duration",
                "value": duration,
                "short":false
             },
             {
                "title":"Goal",
                "value": goal,
                "short":false
             },
             {
                "title":"Notes",
                "value": notes,
                "short": false
             }
          ]
       }
    ]
  };

  var url = 'https://mm.themyers.party/hooks/tk674oobbpfq3bm3p7r5bxgsaa';
  var options = {
    muteHttpExceptions:false,
    contentType:"application/json",
    method:"post",
    payload: JSON.stringify(payload)
  };
  
  console.log("Options:"+options);
  var response = UrlFetchApp.fetch(url,options);
}
