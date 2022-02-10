console.log(" ");
console.log('%cLev2_5', 'color: yellowgreen; font-weight:700; font-size16px');
console.log(" ");

let inputBuName = document.getElementById("bundeslandInfo");
let outputBuInfo = document.getElementById("bundeslandInfoErgebnis");

function check() {
    let textClear = inputBuName.value.toLowerCase();
    console.log(textClear);
    switch (textClear) {
        case "badenwürttemberg":
            outputBuInfo.innerHTML = `Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt`;
            break;

        case 'bayern':
            outputBuInfo.innerHTML = `Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt`;
            break;

        case 'berlin':
            outputBuInfo.innerHTML = `Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt`;
            break;

        case 'brandenburg':
            outputBuInfo.innerHTML = `Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt`;
            break;

        case 'bremen':
            outputBuInfo.innerHTML = `Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt`;
            break;

        case 'hamburg':
            outputBuInfo.innerHTML = `Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt`;
            break;

        case 'hessen':
            outputBuInfo.innerHTML = `Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt`;
            break;

        case 'mecklenburg-vorpommern':
            outputBuInfo.innerHTML = `Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt`;
            break;

        case 'niedersachsen':
            outputBuInfo.innerHTML = `Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt`;
            break;

        case 'nordrhein-westfalen':
            outputBuInfo.innerHTML = `Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt`;
            break;

        case 'rheinland-pfalz':
            outputBuInfo.innerHTML = `Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt`;
            break;

        case 'saarland':
            outputBuInfo.innerHTML = `Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt`;
            break;

        case 'sachsen':
            outputBuInfo.innerHTML = `Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt`;
            break;

        case 'sachsen-anhalt':
            outputBuInfo.innerHTML = `Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt`;
            break;

        case 'schleswig-holstein':
            outputBuInfo.innerHTML = `Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt`;
            break;

        case 'thüringen':
            outputBuInfo.innerHTML = `Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt`;
            break;

        default:
            outputBuInfo.innerHTML = `Ein solches Bundesland gibt es in Deutschland nicht oder es wurde ohne Bindestrich( - ) geschrieben`
            break;
    }
}

console.log(" ");
console.log('%cLev2_7', 'color: yellowgreen; font-weight:700; font-size16px');
console.log(" ");

let seleCtion = document.getElementById("mylist");
let outputTxt = document.getElementById("masse");


function showtxt() {
    let numClear = Number(seleCtion.value);
    switch (true) {
        case numClear === 0:
            outputTxt.innerHTML = `<b>Brief und Postkarte</b> <br>
            L: 10 - 23,5 cm
            B: 7 - 12,5 cm
            H: bis 1 cm`;
            break;

        case numClear === 1:
            outputTxt.innerHTML = `<b>DHL Paket 2 kg</b> <br>
            bis 60 x 30 x 15 cm`;
            break;

        case numClear === 2:
            outputTxt.innerHTML = `<b>DHL Paket 5 kg</b> <br>
            bis 120 x 60 x 60 cm`;
            break;

        case numClear === 3:
            outputTxt.innerHTML = `<b>DHL Paket 10 kg</b> <br>
            bis 120 x 60 x 60 cm`;
            break;

        default:
            outputTxt.innerHTML = `<b>Extra große Größe</b>`;
            break;
    }
}