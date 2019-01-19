import CryptoJS from 'crypto-js';
export default{
     encrypt:(message, key)=> {
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var ivHex = CryptoJS.enc.Utf8.parse('asdewqrf');
        var encrypted = CryptoJS.TripleDES.encrypt(message, keyHex, {
            iv: ivHex,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    },
    sort_ASCII:(obj)=>{
        let arr = new Array();
        let num = 0;
        for (let i in obj) {
            arr[num] = i;
            num++;
        }
        var sortArr = arr.sort();
        let sign='';
        for (let i in sortArr) {
            sign=sign+sortArr[i]+'='+obj[sortArr[i]]+','
        }
        return sign.substring(0, sign.lastIndexOf(','));
    }
}
