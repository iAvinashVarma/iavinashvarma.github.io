function openProject(evt, projectName, companyNum) {
    var i, x, tablinks;
    var clsName = "company" + companyNum.toString();
    var tabLink = "tablink" + companyNum.toString();
    x = document.getElementsByClassName(clsName);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(tabLink);
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " w3-dark-grey";
}