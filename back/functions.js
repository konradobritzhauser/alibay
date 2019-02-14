//This file has extra convenience functions that are used on various other files

let functionsList={
    getUrl:function(originalUrl){
        let urlArray=originalUrl.split("?")
        return urlArray[0]
    },
    logEPTrigger:function(originalUrl){
        
        console.log("\n-------------------------------\ntriggered endpoint:",functionsList.getUrl(originalUrl))
    },

    stringToNumber: function(cookieSessionId){
    console.log("cookie as string",cookieSessionId)
    let numberCookieSessionId=parseInt(cookieSessionId,10)
    console.log(typeof numberCookieSessionId)
    console.log("cookie as number",numberCookieSessionId)
    return numberCookieSessionId
    }
}










module.exports=functionsList
