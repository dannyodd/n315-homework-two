function initListeners() {
    //Load new page content when anchor tags are clicked
    $(window).on("hashchange", MODEL.changeRoute);
    MODEL.changeRoute();
    //Toggle "active" class to open/close the nav menu when the icon is clicked
    $(".navBars").click(function(e){
        $(".navBars").toggleClass("active");
        $(".navLinks").toggleClass("active");
    });

    //Toggle "active" class to close the nav menu when a link is clicked
    $(".navLinks a").click(function(e){
        $(".navBars").toggleClass("active");
        $(".navLinks").toggleClass("active");
    });

    //Toggle show/hide menu links when logged in/out
    $(".btnLogin a").click(function(e){
        $("#createrecipe").toggleClass("hidden");
        $("#loginBtn").toggleClass("hidden");
        $("#logoutBtn").toggleClass("hidden");
        $("#yourrecipes").toggleClass("hidden");
        $(".foot__loginOnly").toggleClass("hidden");
    })
}

$(document).ready(function() {
    initListeners();
});