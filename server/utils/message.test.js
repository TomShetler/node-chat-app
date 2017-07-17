const expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var testMessage = generateMessage('Rick', 'This is a test');
      expect(testMessage.from).toMatch('Rick');
      expect(testMessage.text).toMatch('This is a test');
      expect(testMessage.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Rick';
    var lat = 1;
    var long = 1;
    var url = 'https://www.google.com/maps?q=1,1';
    var testLocation = generateLocationMessage(from, lat, long);
    expect(testLocation).toInclude({from, url});
    expect(testLocation.createdAt).toBeA('number');
  });
});
