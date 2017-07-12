const expect = require('expect');
var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var testMessage = generateMessage('Rick', 'This is a test');
      expect(testMessage.from).toMatch('Rick');
      expect(testMessage.text).toMatch('This is a test');
      expect(testMessage.createdAt).toBeA('number');
  });
});
