function recommend()
{
    var a;
    a=Math.floor(Math.random() * 5);
    if(a==0)
        document.getElementById("hello").innerHTML = "Machine Learning";
        if(a==0)
        document.getElementById("hello").innerHTML = "Artificail Intelligence";
        if(a==1)
        document.getElementById("hello").innerHTML = "Cloud Computing";
        if(a==2)
        document.getElementById("hello").innerHTML = "Information Security";
        if(a==3)
        document.getElementById("hello").innerHTML = "Image Analysis";
        if(a==4)
        document.getElementById("hello").innerHTML = "Web Application";
    return false;
}