const name = document.getElementsByName('name')[0].value, 
    surname = document.getElementsByName('surname')[0].value, 
    email = document.getElementsByName('email')[0].value, 
    phone = document.getElementsByName('phone')[0].value, 
    message = document.getElementsByName('message')[0].value;
    if (name == "") { document.getElementsByName('name')[0].value = localStorage.getItem("name");}
    if (name != "") localStorage.setItem("name", name);
    if (surname == "") document.getElementsByName('surname')[0].value = localStorage.getItem("surname");
    if (surname != "") localStorage.setItem("surname", surname);
    if (email == "") document.getElementsByName('email')[0].value = localStorage.getItem("email");
    if (email != "") localStorage.setItem("email", email);
    if (phone == "") document.getElementsByName('phone')[0].value = localStorage.getItem("phone");
    if (phone != "") localStorage.setItem("phone", phone);
    if (message == "") document.getElementsByName('message')[0].value = localStorage.getItem("message");
    if (message != "") localStorage.setItem("message", message);

OK.onclick = function() {
    if(get_cookie("flag")=="true") {
        alert(`${get_cookie("name")} ${get_cookie("surname")}, ваше обращение обрабатывается!`);
        deleteAllCookies();
    }
    else {
    wrong="";
    const name = document.getElementsByName('name')[0].value, 
    surname = document.getElementsByName('surname')[0].value, 
    email = document.getElementsByName('email')[0].value, 
    phone = document.getElementsByName('phone')[0].value, 
    message = document.getElementsByName('message')[0].value;
    let object = {
        name: name, 
        surname: surname, 
        email: email, 
        phone: phone, 
        message: message
    }
    if(object.name=="") {
        wrong+="Имя,";
    }
    if(object.surname=="") {
        wrong+="Фамилия,";
    }
    var phoneReg = /^[+][0-9]{1}[ ][(][0-9]{3}[)][ ][0-9]{2}[-][0-9]{2}[-][0-9]{3}$/;
    if(!phoneReg.test(object.phone) && object.phone!="") {
        wrong+="Телефон,";
    }
    var mailReg =  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(!mailReg.test(object.email) || object.email==null) {
        wrong+="Почта,";
    }
    if(object.message=="") {
        wrong+="Сообщение";
    }
    if(wrong!="") {
        alert(`Поля ${wrong} заполнены не верно, пожалуйста исправьте`);
    }
    else {
        alert(`${object.name} ${object.surname} спасибо за обращение!`);
        document.cookie = `name=${object.name}`;
        document.cookie = `surname=${object.surname}`;
        document.cookie = `flag=true`
    }
    console.log(object);
}
    

  };
  function get_cookie ( cookie_name )
  {
    var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
   
    if ( results )
      return ( unescape ( results[2] ) );
    else
      return null;
  }

  function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}