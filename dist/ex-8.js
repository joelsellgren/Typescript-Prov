"use strict";
// DIN UPPGIFT: Använda enums för att skapa olika användarroller som ska vara "Admin", "Member" eller "Guest". 
// Du ska även implementera funktionen assignBadgeColor som ska returnera en färg baserat på rollen. 
// Admin ska returnera "Red", Member ska returnera "Blue" och Guest ska returnera "Green". / 3 poäng
// 1. Definerier enums för UserRoles Adming, Member och Guest
var UserRole;
(function (UserRole) {
    // Här...
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Member"] = 1] = "Member";
    UserRole[UserRole["Guest"] = 2] = "Guest";
})(UserRole || (UserRole = {}));
// 2. Implementera assignBadgeColor-funktionen som ska returnera en färg baserat på användarens roll.
function assignBadgeColor(user) {
    // Här...
    if (user.role === UserRole.Admin) {
        return 'RED';
    }
    if (user.role === UserRole.Member) {
        return 'BLUE';
    }
    if (user.role === UserRole.Guest) {
        return 'GREEN';
    }
}
// Testa funktionen
const user1 = { name: "Alice", role: UserRole.Admin };
console.log(assignBadgeColor(user1)); // Ska skriva ut "Red".
