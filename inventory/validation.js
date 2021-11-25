class validation{
    static validateform()
    {
        let x=document.forms["Login"] ["name"].value;
                  if (x==""){
              alert("name must be filled out");
               return false;
    }
    let y=document.forms["Login"] ["E-mail"].value;
         if (y==""){
             alert("e-mail must be filled");
             return false;
         }
         let z=document.forms["Login"] ["password"].value;
        if (z==""){
            alert("password must be filled");
            return false;
        }   
         }
        }