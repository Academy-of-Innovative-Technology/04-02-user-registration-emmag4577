document.addEventListener("DOMContentLoaded", function () {

    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        var firstName = document.querySelectorAll(".form-control")[0].value;
        var lastName = document.querySelectorAll(".form-control")[1].value;
        var email = document.querySelectorAll(".form-control")[2].value;
        var password = document.querySelectorAll(".form-control")[3].value;

        var country = document.querySelector(".form-select").value;

        var accountType = document.querySelector('input[name="accountType"]:checked').nextElementSibling.textContent;

        var about = document.querySelector("textarea").value;

        var user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            country: country,
            accountType: accountType,
            about: about
        };

        localStorage.setItem("registeredUser", JSON.stringify(user));
    });


    document.querySelector("#loadUserBtn").addEventListener("click", function(){

        var saved = localStorage.getItem("registeredUser");

        if(saved == null){
            document.querySelector("#noSavedUser").classList.remove("d-none");
            document.querySelector("#savedUserPanel").classList.add("d-none");
            return;
        }

        var savedUser = JSON.parse(saved);

        document.querySelector("#savedFirstName").textContent = savedUser.firstName;
        document.querySelector("#savedLastName").textContent = savedUser.lastName;
        document.querySelector("#savedEmail").textContent = savedUser.email;
        document.querySelector("#savedCountry").textContent = savedUser.country;
        document.querySelector("#savedAccountType").textContent = savedUser.accountType;
        document.querySelector("#savedAbout").textContent = savedUser.about;

        document.querySelector("#noSavedUser").classList.add("d-none");
        document.querySelector("#savedUserPanel").classList.remove("d-none");
    });

    document.querySelector("#loadUserBtn").addEventListener("click", function(){

    var saved = localStorage.getItem("registeredUser");

    if(saved == null){
        document.querySelector("#noSavedUser").classList.remove("d-none");
        document.querySelector("#savedUserPanel").classList.add("d-none");
        return;
    }

    var savedUser = JSON.parse(saved);

    document.querySelector("#savedFirstName").textContent = savedUser.firstName;
    document.querySelector("#savedLastName").textContent = savedUser.lastName;
    document.querySelector("#savedEmail").textContent = savedUser.email;
    document.querySelector("#savedCountry").textContent = savedUser.country;
    document.querySelector("#savedAccountType").textContent = savedUser.accountType;
    document.querySelector("#savedAbout").textContent = savedUser.about;

    document.querySelector("#noSavedUser").classList.add("d-none");
    document.querySelector("#savedUserPanel").classList.remove("d-none");
});

    document.querySelector("#clearUserBtn").addEventListener("click", function(){

        localStorage.removeItem("registeredUser");

        document.querySelector("#noSavedUser").classList.remove("d-none");
        document.querySelector("#savedUserPanel").classList.add("d-none");

    });

});