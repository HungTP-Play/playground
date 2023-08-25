var $1HOpm$cryptojs = require("crypto-js");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "GithubIdenticon", () => $80edcdc4c527ecf0$export$f7c98094a623f7aa);
/**
 * Dependencies
 * 
 * [CryptoJS](https://www.npmjs.com/package/crypto-js)
 */ 
class $80edcdc4c527ecf0$export$f7c98094a623f7aa {
    constructor(value){}
    calculateHash(value) {
        return $1HOpm$cryptojs.SHA256(value);
    }
    hashHex(hashVal) {
        return hashVal.toString($1HOpm$cryptojs.enc.Hex);
    }
    hashBin(hashVal) {
        var binary = "";
        const hex = this.hashHex(hashVal);
        for(var i = 0; i < hex.length; i += 2){
            var hexByte = hex.substr(i, 2);
            var byteValue = parseInt(hexByte, 16);
            var byteBinary = byteValue.toString(2).padStart(8, "0");
            binary += byteBinary;
        }
        return binary;
    }
}


//# sourceMappingURL=github_identicon.js.map
