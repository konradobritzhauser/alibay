//This file has extra convenience functions that are used on various other files

let functionsList={
    getUrl:function(originalUrl){
        let urlArray=originalUrl.split("?")
        return urlArray[0]
    },
    logEPTrigger:function(originalUrl){
        
        console.log("\n-------------------------------\ntriggered endpoint:",functionsList.getUrl(originalUrl))
    }
}










module.exports=functionsList
