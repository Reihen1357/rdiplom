/* Мутации объектов
 const person = {
    name: 'Andy',
    age: 21,
    info: {
        isMarried: true,
        language: ['ru', 'en']
    }
}

/*const copyPerson = { ...person } //Оператор разделения объекта на св-ва. Можно мутировать вложенные объекты в исходном объекте*/
/*const copyPerson = JSON.parse(JSON.stringify(person)) //После конвертации не мутируются в оригинальном объекте вложенные объекты */

// Функции

const personObj = {
    name: 'Andy',
    age: 21,
    info: {
        isMarried: true,
        language: ['ru', 'en']
    }
}


function persObjChange(person) {
    const copyPerson = JSON.parse(JSON.stringify(person)) //Создание копии объекта и его изменение (3 hours 5 min video)
    copyPerson.name = 'Carl'
    copyPerson.info.isMarried = false
    copyPerson.info.language[1] = 'de'
    return copyPerson
}

const copyPerson = persObjChange(personObj)
console.log(personObj)
console.log(copyPerson)
