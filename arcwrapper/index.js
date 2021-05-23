const fetch = require('node-fetch')
const core = 'https://api-core.werewolf-apps.com'

const removeScheduleDeleteAccount = async ({
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

const deleteChatMessageForClan = async ({
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

const deleteClan = async ({
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

const updateClan = async ({
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

const updateAvatarSlots = async ({
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

const claimRankedAward = async ({
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

const getWheelRewardWithSecret = async ({
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

const voteForOutfit = async ({
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

const claimCustomGameRole = async ({
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

const createClan = async ({
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

const addChatMessageForClan = async ({
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

const leaveClan = async ({
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

const removeClanMember = async ({
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

const acceptClanInvitation = async ({
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

const joinClan = async ({
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

const invitePlayerToJoinClan = async ({
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

const voteFeedback = async ({
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

const submitPlayerOrigin = async ({
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

const claimRankedAwardSelected = async ({
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

const videoAdWatched = async ({
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

const reduceBanTimeAsAward = async ({
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

const scheduleDeleteAccount = async ({
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

const rewardVideoForLevelUpBonusViewed = async ({
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

const rewardVideoWatched = async ({
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

const claimCustomGamesWithGold = async ({
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

const claimAvatarSlot = async ({
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

const claimBattlePassRewardWithGold = async ({
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

const claimCurrentBattlePassWithGold = async ({
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

const getAvatarSlotsForPlayer = async ({
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

const getClanById = async ({
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

const getClanByPlayerId = async ({
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

const getClanRanking = async ({
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

const searchForClan = async ({
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

const getClanChat = async ({
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

const getRotatingLimitedOffers = async ({
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

const getBadgeIdsForPlayer = async ({
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

const getRankedWinnersTop11to100 = async ({
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

const getQuickGamesCurrentRoles = async ({
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

const getRankedRoleRotations = async ({
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

const getAvatarSlots = async ({
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

const getTop100 = async ({
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

const getTop100Month = async ({
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

const getTop100Week = async ({
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

const getTop100Day = async ({
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

const getTop100Friends = async ({
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

const getRankedWinnersTop10AllSeasons = async ({
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

const getFeedbackVoting = async ({
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

const winsInCurrentSeason = async ({
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

const getCurrentBattlePassAndSeason = async ({
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

const getOwnClan = async ({
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

const getWheelItems = async ({
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

const getOpenRequests = async ({
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

const getAnnouncements = async ({
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

const getAllItemSetOffers = async ({
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

const getOwnCustomGameRoleIds = async ({
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

const getAllCustomGameRoles = async ({
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

const getHistoryOfGalleryVotingItems = async ({
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

const getActiveGalleryVotingItems = async ({
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


const getRankedSeasonAward = async ({
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

const getRankedSeasonInfo = async ({
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

const getCurrentRank = async ({
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

const getOwnHighScoreList = async ({
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

const getTop100Players = async ({
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

const unmarkFriendAsFavourite = async ({
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

const markFriendAsFavourite = async ({
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

const friendsRequestDeclineAll = async ({
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

const friendsRequestAcceptAll = async ({
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

const friendsRequestDecline = async ({
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

const friendsRequestAccept = async ({
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

const friendsRequestDelete = async ({
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

const removeFriend = async ({
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

const addFriend = async ({
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

const getPendingFriendRequests = async ({
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

const getFriends = async ({
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

const markGiftAsRead = async ({
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

const getReceivedAndUnreadGifts = async ({
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

const purchaseGemOffer = async ({
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

const setEquippedProfileIconForPlayer = async ({
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

const setEquippedItemsForPlayer = async ({
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

const getEquippedItems = async ({
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

const getAllPurchasableItems = async ({
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

const openLootbox = async ({
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

const claimTutorialHat = async ({
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

const claimBanPanItem = async ({
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

const claimVoteItem = async ({
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

const claimQuizItem = async ({
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

const claimMemoryItem = async ({
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

const claimServerRestartItem = async ({
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

const unequipTalisman = async ({
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

const equipTalisman = async ({
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

const claimEmoji = async ({
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

const claimProfileIcon = async ({
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

const claimRosePackage = async ({
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

const upgradeTalisman = async ({
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

const claimTalisman = async ({
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

const claimAvatarItem = async ({
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

const toggleHideBadges = async ({
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

const toggleHideClanTag = async ({
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

const toggleNoClanInvites = async ({
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

const getFriendsInvitationRewards = async ({
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

const getGoldenWheelConditions = async ({
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

const getGoldenWheelItems = async ({
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

const goldenWheelSpin = async ({
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

const getDailyRewards = async ({
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

const updatePlayerStatus = async ({
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

const getAllItemSets = async ({
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

const searchForPlayerByUsername = async ({
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

const sendPrivateChats = async ({
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

const getPrivateChats = async ({
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

const markAsOnline = async ({
    accessToken
}) => {
    const res = await fetch(core + '/players/online', {
        method: 'PUT',
        headers: {
            'authorization': `Bearer ${accessToken}`
        },
    })
    return await res.json()
}

const sendRedeemCode = async ({
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

const claimDailyReward = async ({
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

const savePersonalMsg = async ({
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

const getSelfPlayer = async ({
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

const updateLocale = async ({
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

const getPlayerStats = async ({
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

const changeUserProfile = async ({
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

const getInventory = async ({
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

const registerPlayerWithAccessToken = async ({
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

module.exports = class CoreApiClient {
    static acceptClanInvitation = acceptClanInvitation
    static addChatMessageForClan = addChatMessageForClan
    static addFriend = addFriend
    static changeUserProfile = changeUserProfile
    static claimAvatarItem = claimAvatarItem
    static claimAvatarSlot = claimAvatarSlot
    static claimBanPanItem = claimBanPanItem
    static claimBattlePassRewardWithGold = claimBattlePassRewardWithGold
    static claimCurrentBattlePassWithGold = claimCurrentBattlePassWithGold
    static claimCustomGameRole = claimCustomGameRole
    static claimCustomGamesWithGold = claimCustomGamesWithGold
    static claimDailyReward = claimDailyReward
    static claimEmoji = claimEmoji
    static claimMemoryItem = claimMemoryItem
    static claimProfileIcon = claimProfileIcon
    static claimQuizItem = claimQuizItem
    static claimRankedAward = claimRankedAward
    static claimRankedAwardSelected = claimRankedAwardSelected
    static claimRosePackage = claimRosePackage
    static claimServerRestartItem = claimServerRestartItem
    static claimTalisman = claimTalisman
    static claimTutorialHat = claimTutorialHat
    static claimVoteItem = claimVoteItem
    static createClan = createClan
    static deleteChatMessageForClan = deleteChatMessageForClan
    static deleteClan = deleteClan
    static equipTalisman = equipTalisman
    static friendsRequestAccept = friendsRequestAccept
    static friendsRequestDecline = friendsRequestDecline
    static friendsRequestAcceptAll = friendsRequestAcceptAll
    static friendsRequestDeclineAll = friendsRequestDeclineAll
    static friendsRequestDelete = friendsRequestDelete
    static getActiveGalleryVotingItems = getActiveGalleryVotingItems
    static getAllCustomGameRoles = getAllCustomGameRoles
    static getAllItemSetOffers = getAllItemSetOffers
    static getAllItemSets = getAllItemSets
    static getAllPurchasableItems = getAllPurchasableItems
    static getAnnouncements = getAnnouncements
    static getAvatarSlots = getAvatarSlots
    static getAvatarSlotsForPlayer = getAvatarSlotsForPlayer
    static getBadgeIdsForPlayer = getBadgeIdsForPlayer
    static getClanById = getClanById
    static getClanByPlayerId = getClanByPlayerId
    static getClanChat = getClanChat
    static getClanRanking = getClanRanking
    static getCurrentBattlePassAndSeason = getCurrentBattlePassAndSeason
    static getCurrentRank = getCurrentRank
    static getDailyRewards = getDailyRewards
    static getEquippedItems = getEquippedItems
    static getFeedbackVoting = getFeedbackVoting
    static getFriends = getFriends
    static getFriendsInvitationRewards = getFriendsInvitationRewards
    static getGoldenWheelConditions = getGoldenWheelConditions
    static getGoldenWheelItems = getGoldenWheelItems
    static getHistoryOfGalleryVotingItems = getHistoryOfGalleryVotingItems
    static getInventory = getInventory
    static getOpenRequests = getOpenRequests
    static getOwnClan = getOwnClan
    static getOwnCustomGameRoleIds = getOwnCustomGameRoleIds
    static getOwnHighScoreList = getOwnHighScoreList
    static getPendingFriendRequests = getPendingFriendRequests
    static getPlayerStats = getPlayerStats
    static getPrivateChats = getPrivateChats
    static getQuickGamesCurrentRoles = getQuickGamesCurrentRoles
    static getRankedRoleRotations = getRankedRoleRotations
    static getRankedSeasonAward = getRankedSeasonAward
    static getRankedSeasonInfo = getRankedSeasonInfo
    static getRankedWinnersTop10AllSeasons = getRankedWinnersTop10AllSeasons
    static getRankedWinnersTop11to100 = getRankedWinnersTop11to100
    static getReceivedAndUnreadGifts = getReceivedAndUnreadGifts
    static getRotatingLimitedOffers = getRotatingLimitedOffers
    static getSelfPlayer = getSelfPlayer
    static getTop100 = getTop100
    static getTop100Day = getTop100Day
    static getTop100Friends = getTop100Friends
    static getTop100Month = getTop100Month
    static getTop100Players = getTop100Players
    static getTop100Week = getTop100Week
    static getWheelItems = getWheelItems
    static getWheelRewardWithSecret = getWheelRewardWithSecret
    static goldenWheelSpin = goldenWheelSpin
    static invitePlayerToJoinClan = invitePlayerToJoinClan
    static joinClan = joinClan
    static leaveClan = leaveClan
    static markAsOnline = markAsOnline
    static markFriendAsFavourite = markFriendAsFavourite
    static markGiftAsRead = markGiftAsRead
    static openLootbox = openLootbox
    static purchaseGemOffer = purchaseGemOffer
    static reduceBanTimeAsAward = reduceBanTimeAsAward
    static registerPlayerWithAccessToken = registerPlayerWithAccessToken
    static removeClanMember = removeClanMember
    static removeFriend = removeFriend
    static rewardVideoForLevelUpBonusViewed = rewardVideoForLevelUpBonusViewed
    static rewardVideoWatched = rewardVideoWatched
    static savePersonalMsg = savePersonalMsg
    static scheduleDeleteAccount = scheduleDeleteAccount
    static searchForClan = searchForClan
    static searchForPlayerByUsername = searchForPlayerByUsername
    static sendPrivateChats = sendPrivateChats
    static sendRedeemCode = sendRedeemCode
    static setEquippedItemsForPlayer = setEquippedItemsForPlayer
    static setEquippedProfileIconForPlayer = setEquippedProfileIconForPlayer
    static submitPlayerOrigin = submitPlayerOrigin
    static toggleHideBadges = toggleHideBadges
    static toggleHideClanTag = toggleHideClanTag
    static toggleNoClanInvites = toggleNoClanInvites
    static unequipTalisman = unequipTalisman
    static unmarkFriendAsFavourite = unmarkFriendAsFavourite
    static updateAvatarSlots = updateAvatarSlots
    static updateClan = updateClan
    static updateLocale = updateLocale
    static updatePlayerStatus = updatePlayerStatus
    static upgradeTalisman = upgradeTalisman
    static videoAdWatched = videoAdWatched
    static voteFeedback = voteFeedback
    static voteForOutfit = voteForOutfit
    static winsInCurrentSeason = winsInCurrentSeason
    static removeScheduleDeleteAccount = removeScheduleDeleteAccount
}
