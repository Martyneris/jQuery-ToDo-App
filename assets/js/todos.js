// isbraukiame tam tikrus todos clickinant ant ju
$('ul').on("click", "li", function(){
   $(this).toggleClass("completed");
});

// spaudziam ant spano X, kad istrinti todos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
       $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //is inputo pasiimu verte naujam to do textui
        var todoText = $(this).val();
        $(this).val("");
        // sukuriamas naujas li ir pridedamas prie ul
        $("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + todoText + "</li>")
    }
});

$("#toggle-form").click(function(){
    $("input[type='text']").fadeToggle();
});