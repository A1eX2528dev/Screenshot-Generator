function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const answers = [["всилу", "таккак", "потомучто", "впоследствии", "изза", "втечение", "чтобы"], [125,234,124,35,24,12,45,345],[125,234,124,35,24,12,45,345],[125,234,124,35,24,12,45,345],
["усвоить","надеть","дипломатичный","вдох","жестокий","горячий","скрытый","безответно", "понятный"],
["преследовало","ежегодный","своей","передовой","пример","расширить","часть","впечатление"],
["двести","яслей","клади","две","восьмисотому","времени","семистах","обеим"],
[83452,14235,38546,13246,74658,48672,16457,63847],
[125,234,124,35,24,12,45,345],
[125,234,124,35,24,123,45,345],
[125,234,124,235,24,12,45,345],
[125,234,124,35,24,12,45,345],
[125,234,124,35,24,123,45,345],
[125,234,124,235,24,12,45,345],
[125,234,124,35,24,123,45,345],
[125,234,124,35,24,12,45,345],
[125,234,124,235,24,12,45,345],
[12345,123,456,358,2346,2345,14578,1245],
[1345,2346,1235,456,136,245,356,1234],
[125,234,124,235,24,12,45,345],
[125,234,124,35,24,123,45,345],
[125,234,124,35,24,12,45,345],
[125,234,124,235,24,12,45,345],
["шедевр","тоидело","реветь","молодойстарый","прибылуехал","иделовшляпе","куст","лечитьврачевать",],
[11,12,44,21,35,54,4,23],
[3578,1735,2138,5728,5296,8267,7184,4218]
]
let date = prompt("Дата (XX.XX.XXXX)", '01.01.2024');
let time = prompt("Время (XX:XX)",  '10:00');
let timeElem = document.querySelector('#date')
timeElem.textContent =`Сдана ${date} ${time} (МСК)`
let errCount = prompt("Количество ошибок",);
let i = 0
let errList = [];
while (i < errCount) {
    errList.push(prompt(`Введите номер ${i+1} ошибки`));
    i++
}

const container = document.querySelector("#container");

i = 0
c = 0
while (i < 26) {
    if(i == (errList[c]-1)) {
        let liveQ = answers[i];
        let random = getRandomInt(6)
        let q1 = liveQ[random]
        let q2 = liveQ[random + 1]
        container.insertAdjacentHTML(`beforeend`, `
        <tr class="res_row"><td style="text-align:right"><a style="padding: 0 10px; color: black;" href="#prob1">${i+1}</a></td><td style="text-align:right;"><a style="padding: 0 10px; color: black;" href="#" target="_blank">${getRandomInt(50000)}</a></td>
        <td style="text-align:center;background-color:#ffc0c0;font-size: 90%;">${q1}</td><td style="text-align:center; background: none;font-size: 90%;">${q2}</td></tr>
    `)
    c++
    i++
    }
    else {
        let liveQ = answers[i];
        let random = getRandomInt(7);
        let q = liveQ[random]
    container.insertAdjacentHTML(`beforeend`, `
    <tr class="res_row"><td style="text-align:right"><a style="padding: 0 10px; color: black;" href="#prob1">${i+1}</a></td><td style="text-align:right;"><a style="padding: 0 10px; color: black;" href="#" target="_blank">${getRandomInt(50000)}</a></td>
        <td style="text-align:center;background-color:#c0ffc0;font-size: 90%;">${q}</td><td style="text-align:center; background: none;font-size: 90%;">${q}</td></tr>
    `)
    i++
    }
}
