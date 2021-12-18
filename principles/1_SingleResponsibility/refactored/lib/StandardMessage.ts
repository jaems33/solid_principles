export class StandardMessage {
  static WelcomeMessage() {
    console.log('Welcome to my application.')
  }
  static DisplayValidationError(fieldName: string) {
    console.error(`You did not provide a valid ${fieldName}.`)
  }
}