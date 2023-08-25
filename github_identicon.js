/**
 * Dependencies
 * 
 * [CryptoJS](https://www.npmjs.com/package/crypto-js)
 */
import * as Crypto from 'crypto-js';
export class GithubIdenticon {
    value = ''
    constructor(value) {
        this.value = value;
    }

    calculateHash(value) {
        return Crypto.SHA256(value);
    }

    hashHex(hashVal) {
        return hashVal.toString(Crypto.enc.Hex);
    }


    hashBin(hex) {
        var binary = "";
        for (var i = 0; i < hex.length; i += 2) {
            var hexByte = hex.substr(i, 2);
            var byteValue = parseInt(hexByte, 16);
            var byteBinary = byteValue.toString(2).padStart(8, "0");
            binary += byteBinary;
        }
        return binary;
    }

    binaryToInt(binString) {
        return parseInt(binString, 2);
    }

    getBits(from, len, binString) {
        return binString.slice(from, from + len)
    }

    getRgbColor(binString) {
        const redBits = this.getBits(0, 8, binString);
        const greenBits = this.getBits(8, 8, binString);
        const blueBits = this.getBits(16, 8, binString);

        const redVal = this.binaryToInt(redBits);
        const greenVal = this.binaryToInt(greenBits);
        const blueVal = this.binaryToInt(blueBits);

        return [redVal, greenVal, blueVal];
    }

    getPlacement(binString) {
        const START_OFFSET = 24
        const placementFromBits = new Array(15).fill(0).map((_, i) => {
            return START_OFFSET + i * 8;
        });

        const placementValues = placementFromBits.map((v) => {
            const bits = this.getBits(i, 8, binString);
            return this.binaryToInt(bits)
        });

        return placementValues.map((v) => v % 2 == 0);
    }

    getIdenticonParts() {
        const valHash = this.calculateHash(this.value);
        const valHashHex = this.hashHex(valHash);
        const valHasBin = this.hashBin(valHashHex);

        const rgb = this.getRgbColor(valHasBin);
        const placements = this.getPlacement(valHasBin);

        return {
            rgb,
            placements,
        }
    }
}