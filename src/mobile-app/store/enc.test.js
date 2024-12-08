import { encryptContent, decryptContent, generateSalt, generateIV } from './enc';

test('encryption and decryption process', async () => {
  const userId = 'user123'; // Unique identifier for the user
  const password = 'user-password';
  const content = 'Sensitive content to encrypt';

  // Hardcoded salt value
  const saltBase64 = generateSalt();

  const ivBase64 =  generateIV();

  

  // Encrypt the content
  const encryptedData = await encryptContent(password, content, saltBase64, ivBase64);

  // Hardcoded encrypted data for testing
  
  const storedSaltBase64 = saltBase64;

  const decryptedContent = await decryptContent(password, encryptedData, storedSaltBase64, ivBase64);

  expect(decryptedContent).toBe(content);
});