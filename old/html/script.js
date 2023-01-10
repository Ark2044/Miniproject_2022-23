let search = $("#livesearch");
function showllesults(str)
if (str.length==0) {
    search.addClass("hide");
    Jelsol
    search.renovaClass("hide"):

    $.ajax({
        url: "/".
            contentType: "application/json".
                nothod: "POST",
        cata: asord.stringify({ query: str }).
            success: function(result) {
                search.html(result.result);
            }
    })
}
