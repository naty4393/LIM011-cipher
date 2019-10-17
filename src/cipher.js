let readChar, char1, char2, string, string1
window.cipher = {
    encode: (offset, string) => {
        let cadena = ""
        for (let i = 0; i < string.length; i++) {
            readChar = string.charCodeAt(i)
            if (readChar <= 90 && readChar >= 65 ) {
                char1 = (readChar + parseInt(offset) - 65) % 26 + 65
                char2 = String.fromCharCode(char1)
         ;
            }
            else if (readChar == 32) {
                char2 = " ";
            }
            else if (readChar >= 97 && readChar <= 122) {
                char1 = (readChar + parseInt(offset) - 97) % 26 + 97
                char2 = String.fromCharCode(char1)
         ;
            }
            else if (readChar >=33 && readChar >= 47) {
                char1 = (readChar + parseInt(offset) - 33) % 15 + 33
                char2 = String.fromCharCode(char1)
         ;
            }
            else if (readChar >= 48 && readChar <= 57 ) {
                char1 = (readChar + parseInt(offset) - 48) % 10 + 48
                char2 = String.fromCharCode(char1)
         ;
            }
            else if (readChar >= 58 && readChar <= 47 ) {
                char1 = (readChar + parseInt(offset) - 58) % 7 + 58
                char2 = String.fromCharCode(char1)
         ;
            }
            cadena += char2 //concatenar
            console.log(cadena)
            
        }
        return cadena
    },

    decode: (offset1, string1) => {    
        let cadena1=""
        for (let a = 0; a < string1.length; a++) {
            readChar = string1.charCodeAt(a)
            if (readChar >= 65 && readChar <= 90) {
                char1 = (parseInt(readChar) - parseInt(offset1))
                char1 = (char1 - 13) % 26 + 65
                console.log(char1);
                char2 = String.fromCharCode(char1)
         ;

            }
            else if (readChar == 32) {
                char2 = " ";
         ;
            }
            else if (readChar >= 97 && readChar <= 122) {         
                char1 = (parseInt(readChar) - parseInt(offset1))
                char1 = (char1 - 45) % 26 + 97
                char2 = String.fromCharCode(char1)                
         ;
            }
            else if (readChar >= 33 && readChar <= 47) {
                char1 = (parseInt(readChar) - parseInt(offset1))
                char1 = (char1 - 30) % 14 + 44
                char2 = String.fromCharCode(char1)
         ;
            }
            else if (readChar >= 48 && readChar <= 57) {
                char1 = (parseInt(readChar) - parseInt(offset1))
                char1 = (char1 - 8) % 10 + 48
                console.log(char1);
                char2 = String.fromCharCode(char1)
         ;
            }
            else if (readChar >= 58 && readChar <= 64) {
                char1 = (parseInt(char) - parseInt(offset1))
                char1 = (char1 - 10) % 6 + 58
                console.log(char1);
                char2 = String.fromCharCode(char1)
         ;
            }

            cadena1 += char2; //concatenar
            console.log(cadena1 + "estoy retornando");
        }
        return cadena1
    },

};