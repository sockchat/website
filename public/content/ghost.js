/*
 * Ghastly socks in header
 */

var startTime;

function ghostSock() {

    var diff = (new Date()).getTime() - startTime;
    var vals = [ -5 * Math.cos( (diff / 1000) * (.85 * Math.PI) ), -9 * Math.sin( (diff / 1000) * (.85 * Math.PI) ) ];

    document.getElementById('ghost').style.backgroundPosition = vals[0] + 'px ' + vals[1] + 'px';

}

window.onload = function() {

    startTime = (new Date()).getTime();

    setInterval('ghostSock();', 17);

};
