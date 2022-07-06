$(document).ready(function () {
  $('#title').focus();
  $('#text').autosize();
});

function reply() {
  var divobj = document.querySelector("#divapp");
  var f = document.createElement("form");
  f.setAttribute('method', "post");
  f.setAttribute('action', "/submit");
  f.setAttribute('id', "textform");

  var textbox = document.createElement("input");
  textbox.name = "content";
  textbox.type = "textarea";
  textbox.name = "content";
  textbox.placeholder = "please enter";

  var i = document.createElement("input");
  i.setAttribute('type', "text");
  i.setAttribute('name', "author");
  i.setAttribute('placeholder', "Ваше Имя");

  var s = document.createElement("input");
  s.setAttribute('type', "submit");
  s.setAttribute('value', "Отправить");

  f.appendChild(textbox);
  f.appendChild(i);
  f.appendChild(s);
  divobj.appendChild(f);

}