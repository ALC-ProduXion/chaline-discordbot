module.exports = {
    name: "slipknot", 
    description: "c'est slipknot", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/ConcernedHelplessHornedtoad-size_restricted.gif", 
            "https://64.media.tumblr.com/222cd209deea741609b9033bae7f3f87/01be1d3c78147414-3b/s250x400/1853855790e869f90da479522f81a372a6fef3cd.gif",
            "https://cdn.discordapp.com/attachments/842763425351860234/842767095438508062/monophy.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}