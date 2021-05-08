# WWO-Selfbot a Selfbot for Werewolf Online (Wolvesville)

### Installation / Usage
##### Requirements:
- Node.js installed
- Git installed (optional)
##### Tutorial:
1. Clone repo or download as zip and unzip it 
2. Set up configuration (./config)
3. ``npm install``to install all needed modules
4. ``npm start `` or ``node index.js`` in terminal / console
5. Image join the opened friend game in your invitations (should be from your own account)

##### Configuration (./config)
###### 1. "config.json"
- prefix: prefix used before commands, should not include two or more spaces
- addOwnerToPermittedUsersByDefault: lets the bot owner (you) use restricted commands (permissions.json)
- replicateEmojisFromOtherUsers: copy emojis used ingame (other users)
- openNewLobbyAfterGameOver: opens a new lobby after a game is over without you having to restart the process
- autoDoubleXp: experimental feature, should double your xp automatically after a game is over
- inviteOwnerInterval: the amount of milliseconds between the invitations beeing sent to your account
- lobbyTimeoutForOwnerJoin: (milliseconds) opens a new lobby if the bot owner has not joined util then
- defaultGameMode: default game mode of the lobby (custom is not supported!!!)
- exitOnGameIdError: sometimes the bot does not receive a gameId, this option determines wether the bot should exit the process or open a new lobby which you can the join again
- logging: toggles logging for different events (command usage is always logged)
###### 2. "credentials.json"
- only accounts using email and password authentication method are supported
- OAuth Support (Google etc) may come soon
###### 3. "permissions.json"
- publicCmds: Commands that are available to others (and you too)
- restrictedCmds: Commands that are only available to permitted users
- disabledCmds: Disabled Commands that no one is able to use
- permittedUsers: All playerIds in this array are able to use restricted commands (if set in config, you are automatically added)
### Functionality
##### Commands (may be outdated, check ./src/commands)
- aliases
- close
- copyemotes
- eval
- game
- help
- invite
- invitefriends
- newgame
- ping
- player
- prefix
- roses
- rosesforall
- say
- suicide
- typing
- usage

### Bugreports, Questions, Feature requests etc:
##### Discord: Nulled#7888
##### Youtube: https://bit.ly/3uvA3LX


### Disclaimer
##### Please don't take this project as an attempt to harm wwo/wv's service! I like the game but always felt like i miss some extra functionality and as the devs decided to use hermes to compile their code you cannot simply mod the game itself anymore, so this is currently the only way to add some more functionality to the base game. I hope you have the same intentions and are not going to abuse their service in any way. Stay safe everyone! ~Nulled
