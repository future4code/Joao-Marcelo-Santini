"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Relation {
    constructor(adderFriendId, friendAddedId) {
        this.adderFriendId = adderFriendId;
        this.friendAddedId = friendAddedId;
    }
    getAdderFriendIdId() {
        return this.adderFriendId;
    }
    setAdderFriendId(adderFriendId) {
        this.adderFriendId = adderFriendId;
    }
    getFollowedId() {
        return this.friendAddedId;
    }
    setFriendAddedIdId(friendAddedId) {
        this.friendAddedId = friendAddedId;
    }
}
exports.Relation = Relation;
