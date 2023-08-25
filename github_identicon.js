/**
 * Dependencies
 * 
 * [CryptoJS](https://www.npmjs.com/package/crypto-js)
 */
import * as Crypto from 'crypto-js';
export class GithubIdenticon {
    constructor(value) { }

    calculateHash(value) {
        return Crypto.SHA256(value);
    }

    hashHex(hashVal) {
        return hashVal.toString(Crypto.enc.Hex);
    }


    hashBin(hashVal) {
        var binary = "";
        const hex = this.hashHex(hashVal);
        for (var i = 0; i < hex.length; i += 2) {
            var hexByte = hex.substr(i, 2);
            var byteValue = parseInt(hexByte, 16);
            var byteBinary = byteValue.toString(2).padStart(8, "0");
            binary += byteBinary;
        }
        return binary;
    }
}