module.exports = {
    name: 'rickroll',
    description: 'Rick who ?',
    execute(message) {
        message.channel.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
}