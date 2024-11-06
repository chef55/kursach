export default function checkInput(name,value){
    //console.log("val:",value)
    /*if(value==''){
        return "Все поля должны быть заполнены"
    }*/
    switch(name){
        case "password":{
            if(value=''){
                return "Password field must be filled"
            }
            break
        }
        case "username":{
            if(value=''){
                return "Username field must be filled"
            }
            break
        }
    }
    return "good"
}