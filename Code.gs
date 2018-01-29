function doPost(req) {
  var sheets = SpreadsheetApp.openById('REPLACE_ME_WITH_YOUR_SHEET_ID');
  var params = req.parameters;

  var nR = getNextRow(sheets) + 1;

  if (params.token == 'REPLACE_ME_WITH_YOUR_TOKEN') {

    // PROCESS TEXT FROM MESSAGE
    var textRaw = String(params.text).replace(/^\s*fitfam\s*:*\s*/gi,'');
    var text = textRaw.split(/\s*;\s*/g);

    // FALL BACK TO DEFAULT TEXT IF NO UPDATE PROVIDED
    var type   = text[0] || "No type Specified";
    var duration = text[1] || "No duration provided";
    var goal     = text[2] || "No goal provided";
    var notes  = text[3] || "No notes provided";

    // RECORD TIMESTAMP AND USER NAME IN SPREADSHEET
    sheets.getRangeByName('timestamp').getCell(nR,1).setValue(new Date());
    sheets.getRangeByName('user').getCell(nR,1).setValue(params.user_name);

    // RECORD UPDATE INFORMATION INTO SPREADSHEET
    sheets.getRangeByName('type').getCell(nR,1).setValue(type);
    sheets.getRangeByName('duration').getCell(nR,1).setValue(duration);
    sheets.getRangeByName('goal').getCell(nR,1).setValue(goal);
    sheets.getRangeByName('notes').getCell(nR,1).setValue(notes);

    var channel = "febfit2018";

    postResponse(channel,params.channel_name,type,params.user_name,duration,goal,notes);

  } else {
    return;
  }
}

function getNextRow(sheets) {
  var timestamps = sheets.getRangeByName("timestamp").getValues();
  for (i in timestamps) {
    if(timestamps[i][0] == "") {
      return Number(i);
      break;
    }
  }
}
