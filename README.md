# FitFam
Track slack channel workouts in a simple GoogleSheet
Heavily Influenced by: http://jd.mares.co/tutorials/2015/09/20/slack-google-apps-script-stand-ups.html

### Prerequisites
1. Understand the basics of JavaScript
2. Have a Google or Google Apps account
3. Have access to add integrations to a Slack team (you can create a new team for free)

### Goals
1. To allow users to save workouts to a shared Google Sheet by sending a message in a Slack channel.
2. Send a message back into a Slack channel, summarizing the update.

### Slack message Format:

Usage: `fitfam: the_activity; the_duration; the_goal; some_notes`

Example: `fitfam: running; 43 minutes; 45 minutes; It felt great!`

## SHEETS- Set up your spreadsheet
First create a new spreadsheet and set up the rows that will hold our data. Freeze the top row for convenience, and then name the columns- (Timestamp	User	Type	Duration	Goal	Notes)

### SHEETS- Set up your columns
To make these columns easier to interact with, we’re going to make use of Named Ranges. This allows us to refer to a group of cells by an arbitrary name, rather than their cell reference. To name a range, select the column, then choose Data > Named Ranges. Give it a name (this is the name you'll use in the [Code.gs](Code.gs) script) and hit Done. Be sure to name all 6 columns.

### SCRIPT- Create a script
 From the Tools menu, choose Script Editor, click Blank Project.

Erase the existing code in the editor and paste in the contents of the main script [Code.gs](Code.gs)

From the Publish menu, choose Deploy as Web App. If you haven’t saved/named the project yet, you’ll be prompted to do so. Give it a name and then click OK. Choose the following options:

Execute the app as: Me, Who has access to the app: Anyone, even anonymous.

Click Deploy, then copy the address of the Current web app URL to your clipboard. You’ll need that in the next step.

## SLACK- Create an Outgoing WebHook to send information to Google Sheets
In order to get data out of Slack, we create a WebHook.

Go to https://[your Slack team].slack.com/services/new and find Outgoing WebHooks.

Click View, then Add Outgoing WebHooks Integration.

In the next screen, take a look at the section titled “Outgoing Data”. This is a preview of the data that our script will receive when someone sends an update. For example, if someone posts the update from a Slack channel called #myProject, we could access the name of that channel in our script by using request.parameters.channel_name. Pretty simple.

Scroll down to the section titled Integration Settings. Choose the following settings:

+ Channel: Any
+ Trigger Word(s): update:
+ URL(s): Paste in the Apps Script URL you copied in the previous step
+ Token: Copy the value in this field to your clipboard
+ Descriptive Label: Whatever_you_want
+ Ignore the rest of the fields, and click Save Settings.

### SCRIPT- Put the copied token in [Code.gs](Code.gs)
One quirk of Google Apps Script is that saving our file doesn’t automatically redeploy it so we need to do that manually.

+ Publish > Deploy as web app
+ Project Version: New
+ Click Update

_It’s important that you change Project Version to “New” every time you redeploy. Thankfully, the URL does not change when you redeploy, so you don’t have to change any settings in Slack._

## SLACK- Create an Incoming WebHook to post back to Slack
At this point we can post workouts to the sheet- we still want to have a summary of these updates posted back into a shared channel.

Go to https://[your Slack team].slack.com/services/new and find Incoming WebHooks.

Click View, then choose a channel (e.g. #somechannel). Click Add Incoming WebHooks Integration.

Scroll down to the section titled Integration Settings. Choose the following settings:

+ Post to Channel: #somechannel
+ Webhook URL: Leave as default, click Copy URL
+ Descriptive Label: Whatever you want
+ Leave the rest of the settings in their default state, and click Save Settings.

## SCRIPT- Send a response from Google Apps Script
Back to Google Apps Script Editor. Create a second .gs file by selecting File > New > Script File. Give the file the name PostResponse.gs and click OK.

Erase the existing code in the editor and paste in the code from  [PostResponse.gs](PostResponse.gs)


