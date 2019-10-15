let paramurl=new URLSearchParams(window.location.search)
let usname=paramurl.get('name')
$(function(){
    
    
    $("#adband").click(function(){
        var url = "add_Band.html?name=" + usname
                            window.location.href=url
        })
        }) 

