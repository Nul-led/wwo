# ArcWrapper

### Installation:
`npm i arcwrapper`

### General Information
ArcWrapper uses Promises for its methods, so you will need to use async functions or .then()

### Using ArcWrapper:
```javascript
const ArcWrapper = require('arcwrapper')

ArcWrapper.sampleMethod({ accessToken: "test" })
    .then(response => console.log(response))
    
// or using async functions

async function myFunction(arg0) {
    const response = await ArcWrapper.sampleMethod({ accessToken: arg0 })
    console.log(response)
}
```

### It is recommended to use an IDE like VSCode to see all the methods, alternatively, here is a list
- acceptClanInvitation
- addChatMessageForClan
- addFriend
- changeUserProfile
- claimAvatarItem
- claimAvatarSlot
- claimBanPanItem
- claimBattlePassRewardWithGold
- claimCurrentBattlePassWithGold
- claimCustomGameRole
- claimCustomGamesWithGold
- claimDailyReward
- claimEmoji
- claimMemoryItem
- claimProfileIcon
- claimQuizItem
- claimRankedAward
- claimRankedAwardSelected
- claimRosePackage
- claimServerRestartItem
- claimTalisman
- claimTutorialHat
- claimVoteItem
- createClan
- deleteChatMessageForClan
- deleteClan
- equipTalisman
- friendsRequestAccept
- friendsRequestDecline
- friendsRequestAcceptAll
- friendsRequestDeclineAll
- friendsRequestDelete
- getActiveGalleryVotingItems
- getAllCustomGameRoles
- getAllItemSetOffers
- getAllItemSets
- getAllPurchasableItems
- getAnnouncements
- getAvatarSlots
- getAvatarSlotsForPlayer
- getBadgeIdsForPlayer
- getClanById
- getClanByPlayerId
- getClanChat
- getClanRanking
- getCurrentBattlePassAndSeason
- getCurrentRank
- getDailyRewards
- getEquippedItems
- getFeedbackVoting
- getFriends
- getFriendsInvitationRewards
- getGoldenWheelConditions
- getGoldenWheelItems
- getHistoryOfGalleryVotingItems
- getInventory
- getOpenRequests
- getOwnClan
- getOwnCustomGameRoleIds
- getOwnHighScoreList
- getPendingFriendRequests
- getPlayerStats
- getPrivateChats
- getQuickGamesCurrentRoles
- getRankedRoleRotations
- getRankedSeasonAward
- getRankedSeasonInfo
- getRankedWinnersTop10AllSeasons
- getRankedWinnersTop11to100
- getReceivedAndUnreadGifts
- getRotatingLimitedOffers
- getSelfPlayer
- getTop100
- getTop100Day
- getTop100Friends
- getTop100Month
- getTop100Players
- getTop100Week
- getWheelItems
- getWheelRewardWithSecret
- goldenWheelSpin
- invitePlayerToJoinClan
- joinClan
- leaveClan
- markAsOnline
- markFriendAsFavourite
- markGiftAsRead
- openLootbox
- purchaseGemOffer
- reduceBanTimeAsAward
- registerPlayerWithAccessToken
- removeClanMember
- removeFriend
- rewardVideoForLevelUpBonusViewed
- rewardVideoWatched
- savePersonalMsg
- scheduleDeleteAccount
- searchForClan
- searchForPlayerByUsername
- sendPrivateChats
- sendRedeemCode
- setEquippedItemsForPlayer
- setEquippedProfileIconForPlayer
- submitPlayerOrigin
- toggleHideBadges
- toggleHideClanTag
- toggleNoClanInvites
- unequipTalisman
- unmarkFriendAsFavourite
- updateAvatarSlots
- updateClan
- updateLocale
- updatePlayerStatus
- upgradeTalisman
- videoAdWatched
- voteFeedback
- voteForOutfit
- winsInCurrentSeason
- removeScheduleDeleteAccount
