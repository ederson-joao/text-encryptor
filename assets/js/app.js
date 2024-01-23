let input = document.getElementById('text-input');
let output = document.getElementById('text-output');
let outputTextEmpty = document.querySelector('.output-text-empty');
let outputText = document.querySelector('.output-text');

outputTextEmpty.style.display = 'block';
outputText.style.display = 'none';

function encryptButton() {
    const encryptedText = encrypt(input.value);
    output.value = encryptedText;

    outputTextEmpty.style.display = 'none';
    outputText.style.display = 'block';
}

function encrypt(stringEncrypt) {
    let keys = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["a", "ai"]];
    stringEncrypt = stringEncrypt.toLowerCase();

    for (i = 0; i < keys.length; i++) {
        if (stringEncrypt.includes(keys[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(keys[i][0], keys[i][1]);
        }
    }

    return stringEncrypt;
}

function decryptButton() {
    const decryptText = decrypt(input.value);
    output.value = decryptText;

    outputTextEmpty.style.display = 'none';
    outputText.style.display = 'block';
}

function decrypt(stringDecrypt) {
    let keys = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for (i = 0 ; i < keys.length ; i++) {
        if(stringDecrypt.includes(keys[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(keys[i][1], keys[i][0]);
        }
    }

    return stringDecrypt;
}

function copyText() {
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand("copy");
}