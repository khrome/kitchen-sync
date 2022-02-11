const should = require('chai').should();
const ks = require('../kitchen-sync');

describe('kitchen-sync', ()=>{
    describe('performs correctly using a simple timeout', ()=>{

        let testFN = (cb)=>{
            let callback = ks(cb);
            setTimeout(function(){
                callback(null, 'something');
            }, 50)
            return callback.return;
        }

        it('works as a callback', (done)=>{
            testFN((err, result)=>{
                should.not.exist(err);
                should.exist(result);
                done();
            });
        });

        it('works as a promise', ()=>{
            try{
                return testFN();
            }catch(ex){
                should.not.exist(ex);
            }
        });

        it('works in an async function', async function(){
            try{
                return await testFN();
            }catch(ex){
                should.not.exist(ex);
            }
        });
    });
});
