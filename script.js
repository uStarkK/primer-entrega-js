let score, flag;
function validarIngreso()
{
    if(flag !="no" && flag !="si")
    {
        alert("Amigo, no pusiste ni si, ni no, escribi de nuevo")
        flag = prompt("iNGRESA SI O NO").toLowerCase()
        if(flag == "si" || flag =="no")
        {
            console.log(flag)
        }else 
        {
            while(flag !== "si" && flag !=="no")
            {
                alert("Amigo, no pusiste ni si, ni no, escribi de nuevo, sos re tonto")
                flag = prompt("iNGRESA SI O NO uwu").toLowerCase()
                console.log(flag);
            }
        }
    }   
}
flag = prompt("Quiere agregar notas? Ingrese 'Si' o 'No'").toLowerCase()
validarIngreso();



while(flag != "no")
{
    
    score = parseInt(prompt("Ingrese numero entre 1 y 10"))
    if(isNaN(score) == true)
    {
        alert("Man, no pusiste un número, intentá de nuevo")
        score = parseInt(prompt("Ingrese numero entre 1 y 10"))
        if(isNaN(score) == false)
        {
            console.log("Pusiste el numero" + score)
        }else
            {
                while(isNaN(score) == true)
                    {
                        alert("Seguis sin poner un número pa, no me hagas enojar")
                        score = parseInt(prompt("Ingrese numero entre 1 y 10"))
                    }
            }
    }

if(score>=1 && score<=10)
    {
        if(score>=1 && score<=5)
        {
            console.log("Capo desaprobaste")
        } else if(score==6 || score==7)
        {
            console.log("Capo aprobaste raspando")
        } else if(score==8 || score==9)
        {
            console.log("Capo aprobaste")
        } else 
        {
            console.log("Capo aprobaste zarpado")
        }
    } else
        {
            console.log("Amigo pone bien el numero")
        }
flag = prompt("Capo seguis ingresando? Ingrese 'si' o 'no'").toLowerCase()
validarIngreso();
}  
