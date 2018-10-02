/**
 * Created by pekko1215 on 2017/07/24.
 */

var lotdata = {
    normal: [
        {   name:"リプレイ",
            value:1/7.7},
        {   name:"ベル",
            value:1/9.3},
        {   name:"スイカ",
            value:1/256},
        {   name:"チェリー",
            value:1/64},
        {   name:"BIG",
            value:1/200},
        {   name:'REG',
            value:1/240}
    ],
    "big":[
        {
            name:"JACIN",
            value:1/7.7
        }
    ],
    "jac":[
        {
            name:"JACGAME",
            value:1
        }
    ]
}

function setColorEffect(color){
    return ()=>{
        $('#effect').addClass(color);
        slotmodule.once('bet',()=>{
            $('#effect').removeClass();
        })
        return true;
    }
}

var effectFunc = {
    blue:setColorEffect('blue'),
    red:setColorEffect('red'),
    yellow:setColorEffect('yellow'),
    green:setColorEffect('green'),
    rainbow:setColorEffect('rainbow'),
    white:setColorEffect('white'),
    premier1:setColorEffect('premier1'),
    premier2:setColorEffect('white'),
    reverse:()=>{
        $('#effect').addClass('reverse');
        setTimeout(()=>{
            $('#effect').removeClass();
        },3000)
        return true;
    }
}

var getEffect = {
    "はずれ":()=>{
        if(rand(128)){
            if(!rand(12)){
                return effectFunc['reverse']();
            }
        }else{
            return effectFunc['white']();
        }
    },
    "リプレイ":()=>{
        if(rand(4)){return null}
        return effectFunc['blue']();
    },
    "ベル":()=>{
        if(rand(4)){return null}
        return effectFunc['yellow']();
    },
    "スイカ":()=>{
        return effectFunc['green']();
    },
    "チェリー":()=>{
        if(rand(2)){return null}
        return effectFunc['red']();
    },
    "BIG":()=>{
        if(!rand(3)){return null}
        switch(rand(13)){
            case 0:
            case 1:
            case 2:
                return effectFunc['reverse']();
                break
            case 3:
            case 4:
                return effectFunc['white']();
                break
            case 5:
                return effectFunc['blue']();
                break
            case 6:
                return effectFunc['yellow']();
                break
            case 7:
            case 8:
                return effectFunc['green']();
                break
            case 9:
            case 10:
                return effectFunc['red']();
                break
            case 11:
                return effectFunc['premier1']();
                break
            case 12:
                return effectFunc['premier2']();
                break
        }
    }
}
