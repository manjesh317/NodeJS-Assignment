$(function(){
    let name=$("#name")
    let password=$("#password")
    let p=1
    console.log(name.val())
    $("#login").click(function(){
    
                $.get('/api/users',function(data){
        
                     for(row of data){
                         if(row.name==name.val() && row.password==password.val()){
                             p=2
                            var url = "bandList.html?name=" + name.val()
                            window.location.href=url
                         }
                     }
                    if(p==1){
                    window.alert("Invalid Credentials")
                     }
            })
        })
        }) 




