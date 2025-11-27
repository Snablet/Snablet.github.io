document.getElementById("submit").addEventListener("click", () => {
	const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const tandc = document.getElementById("tandc").checked;

    if (!firstname || !lastname || !email || !tandc) {
    	document.getElementById("error").style.display = "block";
    	return;
    }

    document.getElementById("error").style.display = "none";

    const mainbox = document.querySelector(".bigSexyGreyRectangle");
    const thankyou = document.getElementById("thankyou");

    mainbox.classList.add("fade-out");
    setTimeout(() => {
        thankyou.classList.add("show");
    }, 700);

});

