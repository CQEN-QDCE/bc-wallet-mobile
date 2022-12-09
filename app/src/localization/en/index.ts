const translation = {
  BCID: {
    GetID: 'Get BCID',
    GetDigitalID: 'Get your QC Digital ID',
  },
  Global: {
    EnterPin: 'Enter Pin',
    '6DigitPin': '6 Digit Pin',
    Submit: 'Submit',
    'NoneYet!': 'None yet!',
    Cancel: 'Cancel',
    Confirm: 'Confirm',
    Accept: 'Accept',
    Reject: 'Reject',
    Share: 'Share',
    Decline: 'Decline',
    Back: 'Back',
    Next: 'Next',
    Continue: 'Continue',
    Info: 'Information',
    'ThisDecisionCannotBeChanged.': 'This decision cannot be changed.',
    Failure: 'Failure',
    Success: 'Success',
    SomethingWentWrong: 'Something went wrong',
    Done: 'Done',
    Skip: 'Skip',
    View: 'View',
    Home: 'Home',
    ErrorCode: 'Error Code',
    Okay: 'Okay',
  },
  Language: {
    English: 'English',
    French: 'French',
  },
  Biometry: {
    Toggle: 'Toggle Biometrics',
    EnabledText1: "Log in with your phone's biometrics instead of your wallet PIN.",
    EnabledText1Bold: 'you will need to use biometrics to open your BC Wallet.',
    EnabledText2:
      'This means all fingerprint and facial data added on this phone can be used to access your BC Wallet.',
    EnabledText3: 'Anyone who can access your phone with biometrics can access your BC Wallet.',
    EnabledText3Bold: 'Ensure only you have access to your wallet.',
    Warning: '\n\nEnsure only you have access to your wallet.',
    UseToUnlock: 'Use biometrics to unlock wallet?',
  },
  Error: {
    Title2020: 'Unable to parse invitation',
    Message2020: 'There was a problem parsing the connection invitation.',
    Title2021: 'Unable to receive invitation',
    Message2021: 'There was a problem receiving the invitation to connect.',
    Title2022: 'Unable to find legacy DID',
    Message2022: 'There was a problem extracting the did repository.',
    Title2024: 'BCSC Authentication',
    Message2024: 'The authentication request was canceled.',
    Title2025: 'BCSC Authentication',
    Message2025: 'There was a problem reported by BCSC.',
    NoMessage: 'No Message',
  },
  StatusMessages: {
    InitAgent: 'Initializing agent ..',
  },
  Terms: {
    TermsOfService: 'Terms of Service',
    TermsOfServiceText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel consectetur diam. Nunc sit amet elit est. Praesent libero elit, consectetur dapibus diam non, facilisis euismod velit. Etiam a ligula eget leo elementum tincidunt. Fusce et lorem turpis. Nunc tempus nisl consectetur eros vehicula venenatis. Suspendisse potenti. Aenean vitae aliquet augue. Maecenas lacinia nunc vitae blandit hendrerit. Sed congue risus quis magna convallis sollicitudin. Integer in ante vel orci ornare porta quis id libero. Proin mollis urna nec lectus fringilla, sit amet aliquam urna fringilla. Praesent pellentesque non augue et gravida. Donec congue urna ac massa consequat, lacinia condimentum dolor blandit. Nam ultrices tellus at risus dignissim, quis cursus mauris pellentesque. Donec at scelerisque ipsum. Praesent eu massa at tellus cursus ornare. Fusce vel faucibus dolor. Etiam blandit velit sed velit tempus feugiat. Donec condimentum pretium suscipit. Sed suscipit, leo molestie tempus maximus, turpis enim hendrerit nibh, semper sagittis turpis velit sed nisl. Aliquam eu ultrices velit. Aenean tristique mauris justo, eu commodo quam semper non. Curabitur ultricies auctor mi eu tempus. Sed bibendum eros sed neque semper fermentum. Nullam porta tortor ut ante congue molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sit amet aliquam nunc, malesuada auctor quam. Pellentesque vel lobortis risus, volutpat suscipit velit. Aenean ut erat sed metus interdum mattis. Nam consectetur ante eu felis rhoncus, et volutpat dolor tincidunt. Vivamus sit amet feugiat mi. Proin in dui ac metus vehicula fringilla eget id mauris. Maecenas et elit venenatis dolor pulvinar pulvinar in et leo. Aliquam scelerisque viverra sapien at bibendum. Curabitur et libero nec enim convallis porttitor sed a libero. In hac habitasse platea dictumst. Integer dignissim velit eu pharetra ultricies. Vestibulum at velit hendrerit, pretium purus eget, lobortis tellus. Maecenas non erat ut lacus scelerisque luctus et et tellus.',
    IAgree: 'I Agree',
    Attestation: 'I have read, understand and accept the terms of this EULA.',
  },
  PinCreate: {
    UserAuthenticationPin: 'User authentication pin',
    PinMustBe6DigitsInLength: 'Pin must be 6 digits in length',
    PinsEnteredDoNotMatch: 'Pins entered do not match',
    '6DigitPin': '6 Digit Pin',
    ReenterPin: 'Re-Enter Pin',
    Create: 'Create',
    PINDisclaimer:
      'If you forget it, you will have to again : \n   • Configure your wallet.\n    • Request the certificates already issued in your portfolio again.',
  },
  PinEnter: {
    IncorrectPin: 'Incorrect Pin',
  },
  ContactDetails: {
    Created: 'Created',
    ConnectionState: 'Connection State',
    AContact: 'A contact',
  },
  Credentials: {
    CredentialsNotFound: 'Credentials not found',
  },
  CredentialDetails: {
    Id: 'Id:',
    CreatedAt: 'Created At:',
    Version: 'Version',
    Issued: 'Issued',
    PrivacyPolicy: 'Privacy policy',
    TermsAndConditions: 'Terms and conditions',
    RemoveFromWallet: 'Remove from wallet',
    Revoked: 'Revoked',
  },
  Home: {
    Welcome: 'Welcome',
    Notifications: 'Notifications',
    NoNewUpdates: 'You have no new notifications.',
    NoCredentials: 'You have no credentials in your wallet.',
    SeeAll: 'See all',
    YouHave: 'You have',
    Credential: 'credential',
    Credentials: 'credentials',
    InYourWallet: 'in your wallet',
  },
  Scan: {
    SuccessfullyAcceptedConnection: 'Successfully Accepted Connection',
    AcceptingConnection: 'Accepting Connection',
    ConnectionRecordIdNotFound: 'Connection record ID not found',
    ConnectionAccepted: 'Connection Accepted',
    ConnectionNotFound: 'Connection not found',
    InvalidQrCode: 'Invalid QR code. Please try again.',
    UnableToHandleRedirection: 'Unable to handle redirection',
  },
  Connection: {
    JustAMoment: 'Just a moment while we make a secure connection...',
  },
  CredentialOffer: {
    ThisIsTakingLongerThanExpected: 'This is taking Longer than expected. Check back later for your new credential.',
    'RejectThisCredential?': 'Reject this Credential?',
    AcceptingCredential: 'Accepting Credential',
    SuccessfullyAcceptedCredential: 'Successfully Accepted Credential',
    RejectingCredential: 'Rejecting Credential',
    SuccessfullyRejectedCredential: 'Successfully Rejected Credential',
    CredentialNotFound: 'Credential not found',
    CredentialAccepted: 'Credential Accepted',
    CredentialRejected: 'Credential Rejected',
    CredentialAddedToYourWallet: 'Credential added to your wallet',
    CredentialDeclined: 'Credential declined',
    CredentialOnTheWay: 'Your credential is on the way',
    CredentialOffer: 'New Credential Offer',
    IsOfferingYouACredential: 'is offering you a credential',
  },
  ProofRequest: {
    OfferDelay: 'Offer delay',
    'RejectThisProof?': 'Reject this Proof?',
    AcceptingProof: 'Accepting Proof',
    SuccessfullyAcceptedProof: 'Successfully Accepted Proof',
    ProofNotFound: 'Proof not Found',
    RejectingProof: 'Rejecting Proof',
    ProofAccepted: 'Proof Accepted',
    ProofRejected: 'Proof Rejected',
    RequestedCredentialsCouldNotBeFound: 'Requested credentials could not be found',
    ProofRequest: 'New Proof Request',
    NotAvailableInYourWallet: 'Not available in your wallet',
    IsRequestng: 'is requesting',
    IsRequestingSomethingYouDontHaveAvailable: "is requesting something you don't have available",
    IsRequestingYouToShare: 'is requesting you to share',
    WhichYouCanProvideFrom: 'which you can provide from',
    Details: 'Details',
    SendingTheInformationSecurely: 'Sending the information securely',
    InformationSentSuccessfully: 'Information sent successfully',
    ProofRequestDeclined: 'Proof request declined',
  },
  TabStack: {
    Home: 'Home',
    Scan: 'Scan',
    Credentials: 'Credentials',
  },
  RootStack: {
    Contacts: 'Contacts',
    Settings: 'Settings',
  },
  QRScanner: {
    PermissionToUseCamera: 'Permission to use camera',
    WeNeedYourPermissionToUseYourCamera: 'We need your permission to use your camera',
    Ok: 'Ok',
  },
  Record: {
    Hide: 'Hide',
    Show: 'Show',
    HideAll: 'Hide all',
    Hidden: 'Hidden',
  },
  Screens: {
    Splash: 'Splash',
    Onboarding: 'Quebec Wallet',
    Terms: 'Terms & Conditions',
    CreatePin: 'Create 6-Digit Pin',
    EnterPin: 'Enter Pin',
    Home: 'Home',
    Scan: 'Scan',
    Credentials: 'Credentials',
    CredentialDetails: 'Credential Details',
    Notifications: 'Notifications',
    CredentialOffer: 'Credential Offer',
    ProofRequest: 'Proof Request',
    ProofRequestAttributeDetails: 'Proof Request Attribute Details',
    Settings: 'Settings',
    Language: 'Language',
    Contacts: 'Contacts',
    ContactDetails: 'Contact Details',
  },
  Loading: {
    TakingTooLong: 'This is taking longer than usual. You can return to home or continue waiting.',
    BackToHome: 'Go back to home',
  },
  NetInfo: {
    NoInternetConnectionTitle: 'No internet connection',
    NoInternetConnectionMessage:
      "You're unable to access services using QC Wallet or receive credentials until you're back online.\n\nPlease check your internet connection.",
  },
  OnboardingPages: {
    FirstPageTitle: 'Welcome to the Quebec wallet',
    FirstPageBody1: 'The Quebec wallet allows you to receive, save and use your digital credentials.',
    FirstPageBody2: 'This app is secure and helps protect your online privacy.',
    FirstPageBody3:
      'The Quebec portfolio is currently in the early stages of development and the technology is being explored. Most people will not need the digital wallet since there are only a few credentials currently available.',
    SecondPageTitle: 'A digital credential, secretly saved',
    SecondPageBody:
      'The Quebec wallet protects your digital credentials, a digital version of your permits and identity card. \n\nThey are stored securely, only on your device.',
    ThirdPageTitle: 'Share only what is necessary',
    ThirdPageBogy:
      'To receive a credential, you must Capture the QR code that will be presented to you. \n\nThe information will be communicated through a private and protected communication.',
    FourthPageTitle: 'Take control of your information',
    FourthPageBody:
      'You have control over the information that is shared and used from your Quebec wallet. You only share the information required by the situation. \n\nThe Government of Quebec is never made aware of the interactions made when you use a digital certificate.',
    ButtonGetStarted: 'Configure Wallet',
  },
  Settings: {
    Help: 'Help',
    MoreInformation: 'More Information',
    HelpUsingBCWallet: 'Help using BC Wallet',
    ReportAProblem: 'Report A Problem',
    TermsOfUse: 'Terms of use',
    PrivacyStatement: 'Privacy statement',
    VulnerabilityDisclosurePolicy: 'Vulnerability disclosure policy',
    Accessibility: 'Accessibility',
    IntroductionToTheApp: 'Introduction to the app',
    Version: 'Version',
    VersionString: '0.0.0-0',
    AppPreferences: 'App Preferences',
    AboutApp: 'About App',
    Language: 'Language',
  },
  Developer: {
    Environment: 'Environment',
    Production: 'Production',
    Development: 'Development',
    Test: 'Test',
    DeveloperMode: 'Developer mode',
    Toggle: 'Toggle Developer Mode',
  },
}

export default translation
