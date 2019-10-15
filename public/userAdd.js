function addUser(name, company, dob, email, password,done){
    $.post('/api/users',{
        name:name,
        company:company,
        dateOfBirth:dob,
        email:email,
        password:password
    }, function(data){
        done(data)
    })
}

$(function(){
        let name=$("#name")
        let company=$('#company')
        let dob=$('#dob')
        let email=$('#email')
        let password=$('#password')
        $("#btnsignup").click(function(){
            addUser(name.val(),company.val(),dob.val(),email.val(),password.val(),function(addedUser){
                window.alert("Added "+addedUser.username+" to Database")
            })
        })
    }) 