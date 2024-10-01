const missingReturnErrorText = "Neither an error nor result was returned";
const ks = (cb, opts)=>{
    let options = opts || {};
    let callback = cb;
    if(!callback){
        let resolve = null;
        let reject = null;
        callback = (err, result)=>{
            if(err) return (reject && reject(err));
            if(result) return (resolve && resolve(result));
            if(options.errorOnMissingReturn){
                return reject(new Error(missingReturnErrorText));
            }else{
                (console.err || console.log)(
                    new Error(missingReturnErrorText)
                );
            }
        };
        callback.return = (new Promise((rslv, rjct)=>{
            resolve = rslv;
            reject = rjct;
        }));
    }
    return callback;
}
const sync = ks;
export { sync };
