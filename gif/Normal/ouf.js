module.exports = {
    name: "ouf", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/882367ed30caa10615711b81dfe15d34/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://images.squarespace-cdn.com/content/v1/5bf42bf0af2096b4115cec23/1567537139862-64HUAAWS4IIK0KVH718E/ke17ZwdGBToddI8pDm48kIisVeufsLaqPYS75OuX1FxZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGUIyZMpo6jDvOlV8ELZznZDi-rr9EJ6o3n8IpvEJDIMaEcAfnVBrEqrgp1UxUHGkY/obama+gif.gif');}
    }
}