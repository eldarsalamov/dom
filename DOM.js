//1.Функция которая добавит внутрь body (до блока div) заголовок с текстом “Работа с DOM”.
function showList (){
    const elem = document.createElement('h1');
    elem.textContent = "Работа с DOM";
    document.body.prepend(elem)
}



//2.Функция которая добавит внутрь div#main в самый конец ссылку на статью о DOM.
function showList2() {
    const elem2 = document.getElementById('main')
    let src = document.createElement('a')
    src.textContent = 'ссылка на статью с DOM'
    src.href = 'https://ru.wikipedia.org/wiki/Document_Object_Model'
    main.append(src)
}


//3. Функция которая принимает один параметр - название цвета - и меняет фоновый цвет
function color(nameColor) {
  document.body.bgColor = nameColor
}


// 4.Функция которая принимает один параметр - текст - и добавляет в в конец списка #list новый элемент li c текстом переданным в функцию
function setText(text) {
    const li = document.createElement("li")
    const list = document.getElementById('list')
    li.textContent = (text);
    list.append(li);
}



// //5.Для получения других узлов можно использовать - document.getElementById();
function deleteBlock() {
    const copyright = document.getElementById("copyright")
    copyright.remove()
}
