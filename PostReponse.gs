function postResponse(channel, srcChannel, type, userName, duration, goal, notes) {

  var payload = {
    "channel": "#" + channel,
    "username": "FitFam",
    "icon_emoji": ":trophy:",
    "link_names": 1,
    "attachments":[
       {
          "fallback": "This is an update from a Slackbot integrated FamilyMyers. Your client chose not to show the attachment.",
          "pretext": " @" + userName + " completed a *" + type + "* workout in #" + srcChannel + "!",
          "mrkdwn_in": ["pretext"],
          "color": "#D00000",
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

  var url = 'REPLACE_ME_WITH_YOUR_URL';
  var options = {
    'method': 'post',
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(url,options);
}
