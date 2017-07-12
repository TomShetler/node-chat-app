var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

socket.emit('createMessage', {
  to: 'user@example.com',
  text: 'this is a message'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
