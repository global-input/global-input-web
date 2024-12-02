import { encryptContent, decryptContent, generateSalt } from './enc';

test('encryption and decryption process', async () => {
  const userId = 'user123'; // Unique identifier for the user
  const password = 'user-password';
  const content = 'Sensitive content to encrypt';

  // Hardcoded salt value
  const saltBase64 = generateSalt();

  // Encrypt the content
  const encryptedData = await encryptContent(password, content, saltBase64);

  // Hardcoded encrypted data for testing
  const storedEncryptedData = encryptedData;
  const storedSaltBase64 = saltBase64;

  const decryptedContent = await decryptContent(password, storedEncryptedData, storedSaltBase64);

  expect(decryptedContent).toBe(content);
});