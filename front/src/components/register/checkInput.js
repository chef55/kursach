export default function checkInput(name,value){
    //console.log("val:",value)
    if(value==''){
        return "Поле должно быть заполнено"
    }
    switch(name){
        case "password":{
            if(value.lenght<4){
                return "Password must be at least 5 characters long"
            }
            break
        }
        case "username":{
            break
        }
    }
    return "good"
}