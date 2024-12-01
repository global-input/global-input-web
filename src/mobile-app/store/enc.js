import * as globalInputMessage from 'global-input-message';
import CryptoJS from 'crypto-js';
// Helper function to convert ArrayBuffer to Base64 string
function arrayBufferToBase64(buffer) {
    const byteArray = new Uint8Array(buffer);
    let binaryString = '';
    for (let i = 0; i < byteArray.byteLength; i++) {
      binaryString += String.fromCharCode(byteArray[i]);
    }
    return btoa(binaryString);
  }
  
  // Helper function to convert Base64 string to ArrayBuffer
  function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }
    return byteArray.buffer;
  }
  
  // Function to check if Web Crypto API is available
  function isWebCryptoAvailable() {
    return typeof window !== 'undefined' && window.crypto && window.crypto.subtle;
    // return false;
  }



  // Function to generate a random salt and return it as a Base64 string
export function generateSalt() {
    if (isWebCryptoAvailable()) {
      // Generate random salt using Web Crypto API
      const saltArray = window.crypto.getRandomValues(new Uint8Array(16)); // 128-bit salt
      return arrayBufferToBase64(saltArray);
    } else {
      // Generate random salt using CryptoJS
      const saltWordArray = CryptoJS.lib.WordArray.random(128 / 8); // 128-bit salt
      return CryptoJS.enc.Base64.stringify(saltWordArray);
    }
  }


  async function encryptContentWebCrypto(password, content, saltBase64) {
    // Ensure inputs are strings
    if (typeof password !== 'string' || typeof content !== 'string' || typeof saltBase64 !== 'string') {
      throw new Error('Invalid input: password, content, and salt must be strings.');
    }
  
    const encoder = new TextEncoder();
    const data = encoder.encode(content);
    const salt = base64ToArrayBuffer(saltBase64);
  
    // Import password as a key
    const passwordKey = await window.crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      'PBKDF2',
      false,
      ['deriveKey']
    );
  
    // Derive an encryption key from the password
    const key = await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      passwordKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  
    // Generate a random IV
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV
  
    // Encrypt the data
    const encrypted = await window.crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      key,
      data
    );
  
    // Return Base64 encoded strings for storage
    return {
      ciphertext: arrayBufferToBase64(encrypted),
      iv: arrayBufferToBase64(iv),
      // The salt is provided externally
    };
  }


  function encryptContentCryptoJS(password, content, saltBase64) {
    // Ensure inputs are strings
    if (typeof password !== 'string' || typeof content !== 'string' || typeof saltBase64 !== 'string') {
      throw new Error('Invalid input: password, content, and salt must be strings.');
    }
  
    const salt = CryptoJS.enc.Base64.parse(saltBase64);
  
    // Derive the key
    const key = CryptoJS.PBKDF2(password, salt, {
      keySize: 256 / 32,
      iterations: 100000,
      hasher: CryptoJS.algo.SHA256,
    });
  
    // Generate a random IV
    const iv = CryptoJS.lib.WordArray.random(128 / 8); // 128-bit IV
  
    // Encrypt the data
    const encrypted = CryptoJS.AES.encrypt(content, key, { iv: iv });
  
    // Return Base64 encoded strings
    return {
      ciphertext: encrypted.toString(), // Base64 string
      iv: CryptoJS.enc.Base64.stringify(iv), // Base64 string
      // The salt is provided externally
    };
  }


  export async function encryptContent(password, content, saltBase64) {
    if (isWebCryptoAvailable()) {
      return await encryptContentWebCrypto(password, content, saltBase64);
    } else {
      return encryptContentCryptoJS(password, content, saltBase64);
    }
  }


  async function decryptContentWebCrypto(password, encryptionData, saltBase64) {
    // Ensure inputs are valid
    if (
      typeof password !== 'string' ||
      typeof saltBase64 !== 'string' ||
      typeof encryptionData !== 'object' ||
      typeof encryptionData.ciphertext !== 'string' ||
      typeof encryptionData.iv !== 'string'
    ) {
      throw new Error('Invalid input: password, encryptionData, and salt must be valid.');
    }
  
    const salt = base64ToArrayBuffer(saltBase64);
  
    // Import password as a key
    const passwordKey = await window.crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(password),
      'PBKDF2',
      false,
      ['deriveKey']
    );
  
    // Derive the same key using the salt
    const key = await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      passwordKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );
  
    // Convert Base64 strings back to ArrayBuffers
    const encryptedData = base64ToArrayBuffer(encryptionData.ciphertext);
    const ivArray = base64ToArrayBuffer(encryptionData.iv);
  
    // Decrypt the data
    const decrypted = await window.crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: new Uint8Array(ivArray),
      },
      key,
      encryptedData
    );
  
    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
  }


  function decryptContentCryptoJS(password, encryptionData, saltBase64) {
    // Ensure inputs are valid
    if (
      typeof password !== 'string' ||
      typeof saltBase64 !== 'string' ||
      typeof encryptionData !== 'object' ||
      typeof encryptionData.ciphertext !== 'string' ||
      typeof encryptionData.iv !== 'string'
    ) {
      throw new Error('Invalid input: password, encryptionData, and salt must be valid.');
    }
  
    const salt = CryptoJS.enc.Base64.parse(saltBase64);
  
    // Derive the key
    const key = CryptoJS.PBKDF2(password, salt, {
      keySize: 256 / 32,
      iterations: 100000,
      hasher: CryptoJS.algo.SHA256,
    });
  
    // Decrypt the data
    const decrypted = CryptoJS.AES.decrypt(
      encryptionData.ciphertext,
      key,
      {
        iv: CryptoJS.enc.Base64.parse(encryptionData.iv),
      }
    );
  
    return decrypted.toString(CryptoJS.enc.Utf8);
  }


  export async function decryptContent(password, encryptionData, saltBase64) {
    if (isWebCryptoAvailable()) {
      return await decryptContentWebCrypto(password, encryptionData, saltBase64);
    } else {
      return decryptContentCryptoJS(password, encryptionData, saltBase64);
    }
  }


  


  function generateRandomStringWebCrypto(length = 10) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < length; i++) {
      // Map the random byte to a character index
      const randomIndex = array[i] % charactersLength;
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  export function generateRandomString(length = 10) {
  if (isWebCryptoAvailable()) {
    return generateRandomStringWebCrypto(length);
  } else {
    return globalInputMessage.generateRandomString(length);
  }
}



export async function test(){
  const userId = 'user123'; // Unique identifier for the user
  const password = 'user-password';
  const content = 'Sensitive content to encrypt';

  // Generate a salt and store it in localStorage
  let saltBase64 = localStorage.getItem(`encryptionSalt_${userId}`);
  if (!saltBase64) {
    saltBase64 = generateSalt();
    localStorage.setItem(`encryptionSalt_${userId}`, saltBase64);
  }

  // Encrypt the content
  const encryptedData = await encryptContent(password, content, saltBase64);

  // Store encryptedData (ciphertext and iv) in localStorage
  localStorage.setItem('encryptedContent', JSON.stringify(encryptedData));

  // Later, retrieve and decrypt the content
  const storedEncryptedData = JSON.parse(localStorage.getItem('encryptedContent'));
  const storedSaltBase64 = localStorage.getItem(`encryptionSalt_${userId}`);

  const decryptedContent = await decryptContent(password, storedEncryptedData, storedSaltBase64);

  console.log('Decrypted Content:', decryptedContent);



}