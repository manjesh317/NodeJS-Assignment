
let a=$('#name')

$('#sign-up').submit((e)=>{
    e.preventDefault()
    
    let b=a.val()
    console.log("name is  "+b)

})



// $(function(){
//     let bandList=$('#band-List')

//     fetchBands(function(bands){
//         bandList.empty()
//         for(band of bands ){
//             bandList.append(createBandCard(band))
//         }
//     })
// })