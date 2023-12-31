function openForm() {
    history.pushState({page: 2}, "Form", "?form");
    return false;
}
function openHome() {
    history.replaceState({page: 1}, "Home", "?home");
    return false;
}

$(document).ready(function () {
    $(".myButton").click(function (event) {
        openForm();
        event.preventDefault();
        $("#my").fadeIn(297, function () {
            $("#myForm").css("display", "block").animate({opacity: 1}, 198);
        });
        document.getElementById("myForm").addEventListener("submit", function(event) {
            var tel = document.getElementById("num").value;
            var email = document.getElementById("email_polz").value;
          
            var telRegex = /^\d+$/;
            var emailRegex = /@/;
          
            if (!telRegex.test(tel) || !emailRegex.test(email)) {
              event.preventDefault(); 
              alert("Пожалуйста, введите корректные данные");
            }
          });
        if (localStorage.getItem("name").length > 0) {
            document.querySelector("#name_polz").value =
            localStorage.getItem("name");
        }
        if (localStorage.getItem("tel").length > 0) {
            document.querySelector("#num").value =
            localStorage.getItem("tel");
        }
        if (localStorage.getItem("organiz").length > 0) {
            document.querySelector("#txt").value =
            localStorage.getItem("organiz");
        }
        if (localStorage.getItem("email").length > 0) {
            document.querySelector("#email_polz").value =
            localStorage.getItem("email");
        }
        if (localStorage.getItem("soob").length > 0) {
            document.querySelector("#mes").value =
            localStorage.getItem("soob");
        }
        if (localStorage.getItem("check") === "true") {
            document.querySelector("#check").checked = true;
        }
    });
 

    $("#my, #nazad").click(function () {
        $("#myForm").animate({opacity: 0}, 198, function () {
            $(this).css("display", "none");
            openHome();
        });
    });

    $("#otpr").click(function () {
        var slapform = new Slapform();
        $("#otpr").prop("disabled", true);
        slapform.submit({
            data: {
                checkbox: localStorage.getItem("check"),
                phone: localStorage.getItem("tel"),
                organization: localStorage.getItem("organiz"),
                email: localStorage.getItem("email"),
                message: localStorage.getItem("soob"),
                name: localStorage.getItem("name")
            },
            form: 'qxJzm75u7E'
        }).then(function () {
            alert("Ваше сообщение успешно отправлено!");
        }).catch(function () {
            alert("Ошибка отправки сообщения. Попробуйте ещё раз.");
        });
        document.querySelector("#name_polz").value = "";
        document.querySelector("#num").value = "";
        document.querySelector("#txt").value = "";
        document.querySelector("#email_polz").value = "";
        document.querySelector("#mes").value = "";
        document.querySelector("#check").checked = false;
        localStorage.clear();
        return false;
    });
  
    addEventListener("popstate", function () {
        $("#myForm").animate({opacity: 0}, 198, function () {
            $(this).css("display", "none");
            openHome();
        });
    }, false);

    $("#name_polz,#num, #txt, #email_polz, #mes, #check").change(function () {
        var nam = $("#name_polz").val();
        var number=$("#num").val();
        var org=$("#txt").val();
        var email = $("#email_polz").val();
        var mes = $("#mes").val();
        var check = $("#check").prop("checked");
        localStorage.setItem("name", nam);
        localStorage.setItem("tel", number);
        localStorage.setItem("organiz", org);
        localStorage.setItem("email", email);
        localStorage.setItem("mes", mes);
        if (check) {
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("check", false);
        }
        if (nam.length > 0 && number.length > 0 && org.length > 0 && email.length > 0 && mes.length > 0 && check) {
            $("#otpr").prop("disabled", false);
        } else {
            $("#otpr").prop("disabled", true);
        }
        return false;
    });
});
