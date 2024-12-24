const userLoginText = {
  app: {
    title: 'Global Input App',
  },
  errorMessages: {
    setup: {
      missingPassword: 'Password required.',
      missingRepeatedPassword:
        'Confirm the password in the second field. This is to make sure you remember your password.',
      repeatedPasswordNotMatch: 'Password does not match.',
      failedToSetup: 'Failed to setup your password',
    },
    login: {
      missingPassword: 'Password required.',
      incorrectPassword: 'Incorrect password.',
    },
    changePassword: {
      missing: {
        originalPassword: 'Please provide your current password.',
        newPassword: 'Please provide your new password.',
        repeatedPassword: 'Please confirm your new password.',
      },
      notLoggedIn: 'User not logged in',
      passwordNotMatch: 'Password provided is not valid.',
      repeatedPasswordNotMatch: "The confirmed password doesn't match.",
      failedToChangePassword: 'Failed to change your password',
    },
  },
  setup: {
    title: 'Setup Password',
    password: {
      placeHolder: 'Password that you can remember',
    },
    repeatedPassword: {
      placeHolder: 'Confirm your password',
    },
    buttonText: 'Setup',
    
  },
  login: {
    title: 'Login',
    content:
      'Your password is used exclusively for encrypting and decrypting your encryption keys, which are then used to secure your data. Please note that  no data (including encrypted data and encryption keys) is stored outside your device.',
    password: {
      placeHolder: 'Password',
    },
    buttonText: 'Login',
  },
  resetApp: {
    buttonText: 'Reset App',
    title: 'Restting App',
    content:
      'This will reset the app and remove all the data you have entered in the app. You will need to setup your password again. Are you sure you want to reset the app?',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  },
  changePassword: {
    title: 'Changing Password',    
    labels: {
      originalPassword: 'Current password',
      newPassword: 'New password',
      repeatedPassword: 'Confirm the new password',
      cancelButton: 'Cancel',
      confirmButton: 'Confirm',
    },
    errors: {
      missing: {
        originalPassword: 'Please provide your current password.',
        newPassword: 'Please provide your new password.',
        repeatedPassword:
          'Please confirm your new password. This is to make sure you can remember it.',
      },
      notLoggedIn: 'Not logged in',
      passwordNotMatch: 'Your current password is not correct',
      repeatedPasswordNotMatch: "Confirmed password doesn't match.",
      failedToChangePassword: 'Failed to change the password',
    },
  },
}
export default userLoginText
