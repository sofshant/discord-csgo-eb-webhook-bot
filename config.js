module.exports = config = {
    //these fields are MANDATORY
    app: {
        "webhookPath": "", /*webhook path here. MAKE SURE IT'S THE PATH (part after discord.com) AND NOT THE FULL URL.u can make one on discord server settings in the integrations tab*/
        "port": 443 /*should be 80 or 443 for production, can be (almost) anything for localhost*/
    },

    //these fields are optional
    customization: {
        "avUrl": "" /*put an avatar url if you want one*/,
        "name": "" /*name of the webhook if u want one*/,

        //embed stuff
        "embed": true, /*keep this if u want embeds or if you just want texts, set to false*/
        "sideColor": 0, /*color on side of embed (in decimal format). Use https://www.mathsisfun.com/hexadecimal-decimal-colors.html for help*/
        "author": {
            "name": "", /*author name*/
            "url": "" /*url*/,
            "icon": "" /*author icon*/,
        },

        thumbnail: { /*the image in the top right corner*/
            url: "",
        },

        description: "", /*description of embed*/

        image: { //the image below description and stuff
            url: "",
        },

        footer: {
            text: "", /*self-explanatory*/
            icon_url: "", /*icon next to it*/
        },
    }
};