function showtime()
{
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session="AM";
    if(h==0)
    h=12;
    if(h>12)
    {
            h=h-12;
            session="PM";
    }
    h=(h>=10)? h :"0"+ h;
    m=(m>=10)? m :"0"+ m;
    s=(s>=10)? s :"0"+ s;



    
    let time=h+":"+m+":"+s+" "+session;

    let display=document.getElementById("clockdisplay");
    display.innerText=time;
    setTimeout(showtime,1000);
}

showtime();