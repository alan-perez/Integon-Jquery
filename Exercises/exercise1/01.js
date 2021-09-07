$(() => {
  $("div.poem-stanza").addClass("highlight");
  $("div.author").addClass("highlight");
  //chaining
  $("p").css('color','red').css('background-color','yellow').slideUp(2000).slideDown(2000);

});
