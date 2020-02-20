function getUserName() {
    var name = localStorage.getItem("name");
    $('#ui_name').text(name)
    console.log(name)
}