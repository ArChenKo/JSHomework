let imya = prompt('Как к Вам можно обращаться?', 'Незнакомец')


function ShowName() {
    alert(`Приветствую! ${imya} - это прекрасное имя!`);
}


ShowName();

let userage = prompt(`${imya}, сколько вам лет? `, '10')

switch (true) {
    case 10 <= +userage && +userage < 18:
        alert('Не забудь сделать домашку!')
        break;
    case 18 <= +userage && +userage < 30:
        alert('Вы взрослый, вам все можно)')
        break;
    case 30 <= +userage && +userage < 55:
        alert('Ложитесь спасть. Завтра на работу.')
        break;
    case 55 <= +userage:
        alert('Пора бы вам отдохнуть!')
        break;
    default:
        alert('Ну ладно)')
        break;
}

function ChangeStyleSpis() {
    let element = document.getElementById('spisok')
    element.classList.toggle('ice')

    // if (element.classList.contains('ice'))
    //     element.classList.remove('ice')
    // else
    //     element.classList.add('ice')

}


function ChangeStyleText() {
    let element = document.getElementById('txt');
    let text = 'Описание картинки. И еще какой-то текст.'
    element.textContent = element.textContent == 'Другой совсем текст)))' ? text : 'Другой совсем текст)))';
    element.classList.toggle('ice')
}


let butn = document.getElementById('bt')
butn.addEventListener('click', ChangeStyleSpis)

let butn2 = document.getElementById('bt2')
butn2.addEventListener('click', ChangeStyleText)