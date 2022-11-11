import STATE from "./STATE";


class Util{
    // static pre = "http://localhost:4000/"
    // static pre = "http://192.168.1.4:4000/"
    static pre = "http://10.0.2.2:4000/"
    static async getData(url,param="",headers={}){
        url = this.pre+url;
        // console.log(url,'sh');

        let resp = {status : 0,desc:'Error'}
        try{
            resp = await fetch(url,{
                method:'GET',
                headers:headers
            });
            resp = await resp.json();
            // console.log(resp);
            return resp;
        }catch(e){
            console.error(e)
        }


    }

    static toLoadData(param){
        try{
            let initial = STATE[param].initial;
            if(initial!=null){
                let current = new Date().getTime();
                let diff = ((current - initial)/1000);
                if(diff > STATE[param].threshold){
                    STATE[param].initial =  new Date().getTime();
                    return true;
                }
            }else{
                STATE[param].initial =  new Date().getTime();
                return true;
            }
        }catch(e){

        }
        return false;
    }

    static toLoad(initial,threshold){
        let current = new Date().getTime();
        let diff = ((current - initial)/1000);
        if(diff > threshold){
            return true;
        }
        return false;
    }
}

export default Util;