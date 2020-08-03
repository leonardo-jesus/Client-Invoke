var client = ZAFClient.init();

client.invoke('resize', { width: '100%', height: '200px' });

function buttonPressed() {
    client.invoke('ticket.comment.appendText', 'We will solve your problem')
    .then(function() {
        console.log('text has been appended');
    });
}