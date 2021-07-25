const fetch = require('node-fetch')
const core = 'https://api-core.wolvesville.com'

module.exports = class WolvesvilleCoreAPI {

  static removeScheduleDeleteAccount = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/players/self/delete', {
          method: 'DELETE',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static deleteChatMessageForClan = async ({
      accessToken,
      msg,
      date,
      playerId
  }) => {
      const res = await fetch(core + '/clans/chat', {
          method: 'DELETE',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              msg: msg,
              date: date,
              playerId: playerId
          })
      })
      return await res.json()
  }

  static deleteClan = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/clans', {
          method: 'DELETE',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static updateClan = async ({
      accessToken,
      name,
      description,
      coLeaderDescription,
      memberDescription,
      language,
      icon,
      iconColor,
      tag,
      joinType,
      minLevel
  }) => {
      const res = await fetch(core + '/clans/edit', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: name,
              description: description,
              coLeaderDescription: coLeaderDescription,
              memberDescription: memberDescription,
              language: language,
              icon: icon,
              iconColor: iconColor,
              tag: tag,
              joinType: joinType,
              minLevel: minLevel
          })
      })
      return await res.json()
  }

  static updateAvatarSlots = async ({
      accessToken,
      avatarSlots
  }) => {
      const res = await fetch(core + '/inventory/slots', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(avatarSlots)
      })
      return await res.json()
  }

  static claimRankedAward = async ({
      accessToken,
      seasonId
  }) => {
      const res = await fetch(core + '/ranked/awards/claim?seasonId=' + seasonId, {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getWheelRewardWithSecret = async ({
      accessToken,
      secretCode
  }) => {
      const res = await fetch(core + '/rewards/wheelRewardWithSecret/' + secretCode, {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static voteForOutfit = async ({
      accessToken,
      outfitId,
      rating
  }) => {
      const res = await fetch(core + '/votingGallery/v2/' + outfitId + '/vote', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              rating: rating
          })
      })
      return await res.json()
  }

  static claimCustomGameRole = async ({
      accessToken,
      roleId
  }) => {
      const res = await fetch(core + '/customGames/claimRole', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              roleId: roleId
          })
      })
      return await res.json()
  }

  static createClan = async ({
      accessToken,
      name,
      description,
      coLeaderDescription,
      memberDescription,
      language,
      icon,
      iconColor,
      tag,
      joinType,
      minLevel
  }) => {
      const res = await fetch(core + '/clans', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: name,
              description: description,
              coLeaderDescription: coLeaderDescription,
              memberDescription: memberDescription,
              language: language,
              icon: icon,
              iconColor: iconColor,
              tag: tag,
              joinType: joinType,
              minLevel: minLevel
          })
      })
      return await res.json()
  }

  static addChatMessageForClan = async ({
      accessToken,
      message
  }) => {
      const res = await fetch(core + '/clans/chat', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              message: message
          })
      })
      return await res.json()
  }

  static leaveClan = async ({
      accessToken,
      clanId
  }) => {
      const res = await fetch(core + '/clans/' + clanId + '/leave', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static removeClanMember = async ({
      accessToken,
      playerId
  }) => {
      const res = await fetch(core + '/clans/members/' + playerId + '/remove', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static acceptClanInvitation = async ({
      accessToken,
      clanId
  }) => {
      const res = await fetch(core + '/clans/' + clanId + '/acceptInvitation', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static joinClan = async ({
      accessToken,
      clanId,
      message
  }) => {
      const res = await fetch(core + '/clans/join', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              clanId: clanId,
              message: message
          })
      })
      return await res.json()
  }

  static invitePlayerToJoinClan = async ({
      accessToken,
      playerId,
      message
  }) => {
      const res = await fetch(core + '/clans/invite', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              playerId: playerId,
              message: message
          })
      })
      return await res.json()
  }

  static voteFeedback = async ({
      accessToken,
      id,
      rating
  }) => {
      const res = await fetch(core + '/feedback/player', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id: id,
              rating: rating
          })
      })
      return await res.json()
  }

  static submitPlayerOrigin = async ({
      accessToken,
      origin,
      msg
  }) => {
      const res = await fetch(core + '/rewards/playerOrigin', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              origin: origin,
              msg: msg
          })
      })
      return await res.json()
  }

  static claimRankedAwardSelected = async ({
      accessToken,
      seasonId,
      itemId
  }) => {
      const res = await fetch(core + '/ranked/awards/claim?seasonId=' + seasonId + '&itemId=' + itemId, {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static videoAdWatched = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/players/videoAdWatched', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static reduceBanTimeAsAward = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/rewards/reduceBanTime', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static scheduleDeleteAccount = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/players/self/delete', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static rewardVideoForLevelUpBonusViewed = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/rewards/rewardVideoForLevelUpBonus', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static rewardVideoWatched = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/rewards/rewardVideo', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static claimCustomGamesWithGold = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/customGames/claimWithGold', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static claimAvatarSlot = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/inventory/slots', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static claimBattlePassRewardWithGold = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/battlePass/rewards/claimWithGold', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static claimCurrentBattlePassWithGold = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/battlePass/claimWithGold', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getAvatarSlotsForPlayer = async ({
      accessToken,
      playerId
  }) => {
      const res = await fetch(core + '/inventory/slots/' + playerId, {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getClanById = async ({
      accessToken,
      clanId
  }) => {
      const res = await fetch(core + '/clans/' + clanId, {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getClanByPlayerId = async ({
      accessToken,
      playerId
  }) => {
      const res = await fetch(core + '/clans/byPlayer?playerId=' + playerId, {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getClanRanking = async ({
      accessToken,
      onlyOpen
  }) => {
      const res = await fetch(core + '/clans/v2/ranking?onlyOpen=' + onlyOpen, {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static searchForClan = async ({
      accessToken,
      name,
      onlyPublic
  }) => {
      const res = await fetch(core + '/clans/v2/search?name=' + name + '&onlyPublic=' + onlyPublic, {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getClanChat = async ({
      accessToken,
      page
  }) => {
      const res = await fetch(core + '/clans/chat?page=' + page, {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getRotatingLimitedOffers = async ({
      accessToken,
      enableRandomAvatarItemsSetDiscountedOffer
  }) => {
      const res = await fetch(core + '/billing/rotatingLimitedOffers?enabledRandomAvatarItemsSetDiscountedOffer=' + enableRandomAvatarItemsSetDiscountedOffer, {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getBadgeIdsForPlayer = async ({
      accessToken,
      playerId
  }) => {
      const res = await fetch(core + '/players/' + playerId + '/badgeIds', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getRankedWinnersTop11to100 = async ({
      accessToken,
      seasonId
  }) => {
      const res = await fetch(core + '/ranked/seasons/' + seasonId + '/top10to100Winners', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getQuickGamesCurrentRoles = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/roleRotation/quickGames/roles', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getRankedRoleRotations = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/roleRotation/ranked/en', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getAvatarSlots = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/inventory/slots', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getTop100 = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/highScores/top100', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getTop100Month = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/highScores/top100Monthly', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getTop100Week = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/highScores/top100Weekly', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getTop100Day = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/highScores/top100Daily', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getTop100Friends = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/highScores/top100Friends', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getRankedWinnersTop10AllSeasons = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/ranked/top10WinnersAllSeasons', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getFeedbackVoting = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/feedback/player', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static winsInCurrentSeason = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/ranked/winsInCurrentSeason', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getCurrentBattlePassAndSeason = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/battlePass/seasonAndBattlePass', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getOwnClan = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/clans/myClan', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getWheelItems = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/rewards/wheelItems', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getOpenRequests = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/clans/openRequests', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getAnnouncements = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/announcements', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getAllItemSetOffers = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/avatarItemSetOffers/released', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getOwnCustomGameRoleIds = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/customGames/ownRoles', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getAllCustomGameRoles = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/customGames/roles', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getHistoryOfGalleryVotingItems = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/votingGallery/v2/history', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getActiveGalleryVotingItems = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/votingGallery/v2/active', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getRankedSeasonAward = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/ranked/seasonAward', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getRankedSeasonInfo = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/ranked/seasonInfoCompact', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getCurrentRank = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/ranked/currentRank', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getOwnHighScoreList = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/ranked/highScore', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static getTop100Players = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/ranked/highScore/top100', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static unmarkFriendAsFavourite = async ({
      accessToken,
      targetPlayerId
  }) => {
      const res = await fetch(core + '/friends/' + targetPlayerId + '/favourite', {
          method: 'DELETE',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static markFriendAsFavourite = async ({
      accessToken,
      targetPlayerId
  }) => {
      const res = await fetch(core + '/friends/' + targetPlayerId + '/favourite', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static friendsRequestDeclineAll = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/friendRequests/decline/all', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static friendsRequestAcceptAll = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/friendRequests/accept/all', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static friendsRequestDecline = async ({
      accessToken,
      requestId
  }) => {
      const res = await fetch(core + '/friendRequests/' + requestId + '/decline', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static friendsRequestAccept = async ({
      accessToken,
      requestId
  }) => {
      const res = await fetch(core + '/friendRequests/' + requestId + '/accept', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static friendsRequestDelete = async ({
      accessToken,
      requestId
  }) => {
      const res = await fetch(core + '/friendRequests/' + requestId, {
          method: 'DELETE',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static removeFriend = async ({
      accessToken,
      targetPlayerId
  }) => {
      const res = await fetch(core + '/friends/' + targetPlayerId, {
          method: 'DELETE',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static addFriend = async ({
      accessToken,
      targetPlayerId
  }) => {
      const res = await fetch(core + '/friendRequests', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              targetPlayerId: targetPlayerId
          })
      })
      return await res.json()
  }

  static getPendingFriendRequests = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/friendRequests/pending', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static getFriends = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/friends', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static markGiftAsRead = async ({
      accessToken,
      giftId
  }) => {
      const res = await fetch(core + '/purchaseGifts/' + giftId + '/read', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static getReceivedAndUnreadGifts = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/purchaseGifts/receivedAndUnread', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static purchaseGemOffer = async ({
      accessToken,
      type,
      avatarItemsSetOfferId,
      giftRecipientId,
      giftMessage
  }) => {
      const res = await fetch(core + '/gemOffers/purchases', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              type: type,
              avatarItemsSetOfferId: avatarItemsSetOfferId,
              giftRecipientId: giftRecipientId,
              giftMessage: giftMessage
          })
      })
      return await res.json()
  }

  static setEquippedProfileIconForPlayer = async ({
      accessToken,
      profileIconId,
      color
  }) => {
      const res = await fetch(core + '/equippedItems/profileIcon', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              profileIconId: profileIconId,
              color: color
          })
      })
      return await res.json()
  }

  static setEquippedItemsForPlayer = async ({
      accessToken,
      skinColor,
      avatarHairId,
      avatarClothesBodyId,
      avatarGlassesId,
      avatarHatId,
      gravestoneId,
      avatarFrontId,
      avatarBackId,
      avatarEyesId,
      avatarBadgeId,
      avatarMaskId,
      avatarMouthId
  }) => {
      const res = await fetch(core + '/equippedItems', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              skinColor: skinColor,
              avatarHairId: avatarHairId,
              avatarClothesBodyId: avatarClothesBodyId,
              avatarGlassesId: avatarGlassesId,
              avatarHatId: avatarHatId,
              gravestoneId: gravestoneId,
              avatarFrontId: avatarFrontId,
              avatarBackId: avatarBackId,
              avatarEyesId: avatarEyesId,
              avatarBadgeId: avatarBadgeId,
              avatarMaskId: avatarMaskId,
              avatarMouthId: avatarMouthId
          })
      })
      return await res.json()
  }

  static getEquippedItems = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/equippedItems', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static getAllPurchasableItems = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/purchasableItems', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static openLootbox = async ({
      accessToken,
      lootboxId
  }) => {
      const res = await fetch(core + '/inventory/lootBoxes/' + lootboxId, {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static claimTutorialHat = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/inventory/tutorial/hat', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static claimBanPanItem = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/inventory/easterEggs/banPanItem', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static claimVoteItem = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/inventory/easterEggs/voteItem', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static claimQuizItem = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/inventory/easterEggs/quizItem', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static claimMemoryItem = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/inventory/easterEggs/memoryItem', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static claimServerRestartItem = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/inventory/serverRestart/claimSpecialItem', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static unequipTalisman = async ({
      accessToken,
      talismanId
  }) => {
      const res = await fetch(core + '/inventory/talismans/' + talismanId + '/unequip', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static equipTalisman = async ({
      accessToken,
      talismanId
  }) => {
      const res = await fetch(core + '/inventory/talismans/' + talismanId + '/equip', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static claimEmoji = async ({
      accessToken,
      emojiId
  }) => {
      const res = await fetch(core + '/inventory/emoji/' + emojiId + '/claim', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static claimProfileIcon = async ({
      accessToken,
      profileIconId
  }) => {
      const res = await fetch(core + '/inventory/profileIcon/' + profileIconId + '/claim', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static claimRosePackage = async ({
      accessToken,
      rosePackageId,
      count
  }) => {
      const res = await fetch(core + '/inventory/rosePackages/' + rosePackageId + '/claim', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              count: count
          })
      })
      return await res.json()
  }

  static upgradeTalisman = async ({
      accessToken,
      talismanId,
      count
  }) => {
      const res = await fetch(core + '/inventory/talismans/' + talismanId + '/upgrade', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              count: count
          })
      })
      return await res.json()
  }

  static claimTalisman = async ({
      accessToken,
      talismanId,
      count
  }) => {
      const res = await fetch(core + '/inventory/talismans/' + talismanId + '/claim', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              count: count
          })
      })
      return await res.json()
  }

  static claimAvatarItem = async ({
      accessToken,
      itemId
  }) => {
      const res = await fetch(core + '/inventory/avatarItems/' + itemId + '/claim', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static toggleHideBadges = async ({
      accessToken,
      boolean
  }) => {
      const res = await fetch(core + '/players/hideBadges?hide=' + boolean, {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static toggleHideClanTag = async ({
      accessToken,
      boolean
  }) => {
      const res = await fetch(core + '/players/hideClanTag?hide=' + boolean, {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static toggleNoClanInvites = async ({
      accessToken,
      boolean
  }) => {
      const res = await fetch(core + '/players/noClanInvite?noClanInvite=' + boolean, {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static getFriendsInvitationRewards = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/players/friendInvitationRewards', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static getGoldenWheelConditions = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/rewards/goldenWheelConditions', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static getGoldenWheelItems = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/rewards/goldenWheelItems', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static goldenWheelSpin = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/rewards/goldenWheelSpin', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static getDailyRewards = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/dailyRewards', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static updatePlayerStatus = async ({
      accessToken,
      status
  }) => {
      const res = await fetch(core + '/players/status?status=' + status, {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static getAllItemSets = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/avatarItems/itemSets', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static searchForPlayerByUsername = async ({
      accessToken,
      username
  }) => {
      const res = await fetch(core + '/players/search?username=' + username, {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static sendPrivateChats = async ({
      accessToken,
      targetId,
      msg
  }) => {
      const res = await fetch(core + '/privateChat', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              targetId: targetId,
              msg: msg
          })
      })
      return await res.json()
  }

  static getPrivateChats = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/privateChat', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static markAsOnline = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/players/online', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return;
  }

  static sendRedeemCode = async ({
      accessToken,
      code
  }) => {
      const res = await fetch(core + '/vouchers/redeem', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              code: code
          })
      })
      return await res.json()
  }

  static claimDailyReward = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/dailyRewards', {
          method: 'POST',
          headers: {
              'authorization': `Bearer ${accessToken}`
          },
      })
      return await res.json()
  }

  static savePersonalMsg = async ({
      accessToken,
      msg
  }) => {
      const res = await fetch(core + '/players/personalMsg', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              msg: msg
          })
      })
      return await res.json()
  }

  static getSelfPlayer = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/players/me', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static updateLocale = async ({
      accessToken,
      locale
  }) => {
      const res = await fetch(core + '/players/me/locale', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              locale: locale
          })
      })
      return await res.json()
  }

  static getPlayerStats = async ({
      accessToken,
      playerId
  }) => {
      const res = await fetch(core + '/players/' + playerId, {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static changeUserProfile = async ({
      accessToken,
      username,
      gender
  }) => {
      const res = await fetch(core + '/players/self', {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: username,
              gender: gender
          })
      })
      return await res.json()
  }

  static getInventory = async ({
      accessToken
  }) => {
      const res = await fetch(core + '/inventory', {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${accessToken}`
          }
      })
      return await res.json()
  }

  static registerPlayerWithAccessToken = async ({
      username,
      accessToken,
      gender,
      locale,
      friendId,
      versionNumber,
      platform
  }) => {
      const res = await fetch(core + '/players/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: username,
              token: accessToken,
              gender: gender,
              locale: locale,
              friendId: friendId,
              versionNumber: versionNumber,
              platform: platform
          })
      })
      return await res.json()
  }

}
