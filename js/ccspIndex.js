if(window.top.location.href != window.self.location.href){
   window.top.location.href = "http://ccsp.ir";
}

  var pageScroll , userScrol,topbtn,iv1,defOpacity;
     topbtn = document.getElementById("gotop");
     pageScroll = window.document.body.scrollHeight;

  function checkUserScrool(minScroll)
  {
      userScrol = document.body.scrollTop;
     if(userScrol >= minScroll) {
         clearInterval(iv1)
         defOpacity = Number(getComputedStyle(topbtn).opacity);
        if(defOpacity < 1){
           inv1 = setInterval(
               function(){
                   if(defOpacity < 1){
                  topbtn.style.opacity = defOpacity + 0.1 ;
                  defOpacity += 0.1 ;
                   }
                   else
                      return;
               }
            ,50)
        }
     }
     else{
         var defOpacity = Number(getComputedStyle(topbtn).opacity);
         clearInterval(iv1)
         if(defOpacity>=0 ){
              inv1 = setInterval(
                  function(){
                     if(defOpacity>=0 ){
                     topbtn.style.opacity = defOpacity - 0.1 ;
                      defOpacity -= 0.1
                     }
                     else{
                        return
                     }
                  }

              ,50)
         }
     }
  }
  window.document.addEventListener('scroll',function(){checkUserScrool(870)})
function fixedmenu(menuID,menuPosSCroll)
{
    menuID = document.getElementById(menuID);
   var  userScrool = window.document.body.scrollTop;
    if(userScrool >= menuPosSCroll){
        setTimeout(function(){
            menuID.style.position = "fixed";
            menuID.style.width = "100%"
            menuID.style.top = "0"
            menuID.style.zIndex = "99"
        },300)

    }
    else{
        setTimeout(function(){
            menuID.style.position = "static";
        },300)
    }
}

window.document.addEventListener("scroll",function(){fixedmenu("categooryMenu",150)})
var sizeElement = document.getElementById("resize");
  function resize(){
      sizeElement.innerHTML = window.innerWidth + "*" + window.innerHeight;
  }
resize()
  window.addEventListener('resize',resize)























