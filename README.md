# fitfamtracker
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

`fitfam: the_activity; the_duration; the_goal; some_notes`
`fitfam: running; 43 minutes; 45 minutes; It felt great!`

## Set up your spreadsheet
First create a new spreadsheet and set up the rows that will hold our data. Freeze the top row for convenience, and then name the columns- (Timestamp	User	Type	Duration	Goal	Notes)

### Set up your columns
To make these columns easier to interact with, we’re going to make use of Named Ranges. This allows us to refer to a group of cells by an arbitrary name, rather than their cell reference. To name a range, select the column, then choose Data > Named Ranges. Give it a name (this is the name you'll use in the [Code.gs](Code.gs) script) and hit Done. Be sure to name all 6 columns.

### Create a script
 From the Tools menu, choose Script Editor, click Blank Project.

Erase the existing code in the editor and past in the contents of the main script [Code.gs](Code.gs)
