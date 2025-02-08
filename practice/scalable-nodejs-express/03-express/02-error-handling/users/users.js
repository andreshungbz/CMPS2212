"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.users = void 0;
exports.users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
];
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.getUserById = function (userId) {
        if (exports.users.find(function (i) { return i.id == userId; })) {
            return true;
        }
        else {
            return false;
        }
    };
    return Users;
}());
exports.Users = Users;
