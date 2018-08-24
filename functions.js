//This file contains some things that do stuff
function RNG(min,max){
    var range = max - min + 1;
    return Math.floor(range * Math.random())+ min;
}

function RNGandKnuckles(min,max){
    var rn = RNG(min,max);
    while(RNG(0,777) === 1){
        rn*=RNG(2,5);;
    }
    return rn;
}

function difference(a,b){
    return Math.abs(a-b);
}

function within2dRange(posA,posB,range){
    if(difference(posA.x,posB.x) < range && difference(posA.y,posB.y)<range){
        return true;
    }else{
        return false;
    }
}

function findAngleFromPointsRadians(start,end){
	return Math.atan2(end.y - start.y, end.x - start.x);
}

function findAngleFromPointsDegrees(start,end){
    return Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
}

function randomColour(r1,g1,b1,a1,r2,g2,b2,a2){
    return {r:RNG(r1,r2),g:RNG(g1,g2),b:RNG(b1,b2),a:(RNG(a1,a2)*0.01)};
}