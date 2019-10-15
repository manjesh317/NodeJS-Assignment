let url1=new URLSearchParams(window.location.search)
let username=url1.get('name')
//console.log(username)
function fetchBand(done){
    $.get('/api/band',function(data){
        done(data)
    })
}

function addBand(name,description,UserId,done){
    $.post('/api/band',{
        name:name,
        description:description,
        UserId:UserId
        
    }, function(data){
        done(data)
    })
}

function createBandCard(band){
    console.log(band.name)
    
    return $('<div><table class="form-control" border="8px"><tr> <td class="product-name" style="width: 160px;">'+band.name+'</td> <td class="band-description"style="width: 160px;" ;">'+band.description+'</td></tr> </table></div>')

}

$(function(){
    let bandList=$('#band-list')

    fetchBand(function(bands){
        bandList.empty()
        for(band of bands)
        {
            bandList.append(createBandCard(band))
        }
    })
})