

// function addBand(name,description,done){
//     $.post('/api/band',{
//         name:name,
//         description:description
//     }, function(data){
//         done(data)
//     })
// }

$(function(){
    let url=new URLSearchParams(window.location.search)
let usename=url.get('name')
        let name=$("#name")
        let description=$("#description")
    console.log("Helllllllllo"+usename)
        
        $("#btnaddband").click(function(){
            addBand(name.val(),description.val(),usename,function(addedUser){
                window.alert("Added "+addedUser.name+" to Database")
            })
                            
        })
    }) 


