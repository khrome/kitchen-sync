let ks = (cb)=>{
    let callback = cb;
    if(!callback){
        let resolve = null;
        let reject = null;
        callback = (err, result)=>{
            if(err) return (reject && reject(err));
            if(result) return (resolve && resolve(result));
        };
        callback.return = (new Promise((rslv, rjct)=>{
            resolve = rslv;
            reject = rjct;
        }));
    }
    return callback;
}
ks.default = ks;
module.exports = ks;
