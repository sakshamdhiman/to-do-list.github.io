$("ul").on("click", "li", function(){
  //we can add listners using jquery only on elements that exixts when tis code is run the first time
  //as all li are not present the first time the code is run we select ul and inside the li

  //click adds listners for existing elements
  //on adds listners for all potential future elements

  $(this).toggleClass("completed");//toggle b/w gray,linethrough and black,none
});
/*
if($(this).css("color")==="rgb(128, 128, 128)"){
  $(this).css({
    color:"rgb(0, 0, 0)",
    textDecoration:"none"
  });
}
else{
$(this).css({
  color:"rgb(128, 128, 128)",
  textDecoration:"line-through"//JAVASSCRIPT DOES NOT ALLOW HYFENS IN ATTRIBUTES SO USE CAMEL CASING
});
}
*/

$("ul").on("click","span", function(event){
  //parent to go to li instead span
  //fadeOut to give transition to removing
  //fadeOut just makes display value none does not remove the element
  //remove removes the element
  $(this).parent().fadeOut(300,function(){
    $(this).remove();
  });
  //stopPpropagation to stop bubbling
  event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
  //.which to get the ascii value of the key pressed
  if(event.which === 13){
    var livalue = $(this).val();// to get the value in the text area
        $(this).val("") ;//to make the value in the text area null
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+" "+livalue+"</li>");// to input the text in this function inside the html file just as it inspect
  }
});
$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle(200);
});
