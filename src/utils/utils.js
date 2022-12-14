import { alertController } from "$ionic/svelte";
import { writable } from "svelte/store";
import { _ } from 'svelte-i18n'
import {get } from 'svelte/store'

const saveGame = (data, id) => {
    const storedTheme = localStorage.getItem("theme");
    const theme = writable(storedTheme);
    var today = { date: new Date() };

    theme.subscribe(value => {
        localStorage.setItem(id, JSON.stringify(data));
    });


}


const showAlert = async(options) => {
    options["backdropDismiss"] = false

    const alert = await alertController.create(options);
    alert.present();
};
async function showAlertPromise(options) {
    options["backdropDismiss"] = false
    const alert = await alertController.create(options);
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
    return result
};


const selectTab = async(controller, selected) => {
    let tries = 0;
    if (controller && controller.select) {
        controller.select(selected).then(async(x) => {
            const y = await controller.getSelected();
        });
    }

    // somehow the tabs-present method does not run well on the fisrst time, even though it gives positive response
    if (tries < 5) {
        setTimeout(() => {
            tries++;
            selectTab();
        }, 5);
    }
};

const updateTabs = (myTabs, name, visible) => {

    myTabs.map(x => {
        if (x.tab == name) {
            x.visible = visible
        }
    });
    //myTabs = [...myTabs]
    //console.log(myTabs)

}

function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + "'" + (secs < 10 ? "0" : "");
    ret += "" + secs + "\"";
    return ret;
}


let fatiga = (cyclist, currentGame, $currentGame) => showAlert({
    cssClass: "",
    header: "Cartas de fatiga",
    subHeader: `??Cuantas cartas de fatiga permanecen para ${cyclist.name} ?`,
    backdropDismiss: false,
    inputs: [{
        disabled: false,
        name: "fatiga",
        type: "number",
        placeholder: "Cartas de fatiga restantes",
    }, ],
    buttons: [{
        text: get(_)('MESSAGES.OK'),
        handler: (e) => {
            if (e.fatiga === "") {
                fatiga(cyclist, currentGame, $currentGame)
            }
            cyclist.fatiga = e.fatiga
            currentGame.set($currentGame)
        },
    }, ],
})


let mountainySprint = (cyclist, currentGame, $currentGame, textname, id) => showAlert({
    header: `Puntos de ${textname}`,
    subHeader: `??Cuantos puntos de ${textname} ha conseguido ${cyclist.name}?`,
    backdropDismiss: false,
    inputs: [{
        disabled: false,
        name: "value",
        type: "number",
        placeholder: `Puntos de ${textname}`,
        min: 0
    }, ],
    buttons: [{
        text: "Ok",
        handler: (e) => {
            if (e.value === "") {
                mountainySprint(cyclist, currentGame, $currentGame, textname, id)
            }
            cyclist.awards[id] = e.value
            currentGame.set($currentGame)
        },
    }, ],
})

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        if (keys[i].includes("game")) {
            values.push({ index: keys[i], game: localStorage.getItem(keys[i]) });
            console.log(keys[i])
                // values[keys[i]] = localStorage.getItem(keys[i])
        }

    }

    return values;
}


let alerts = {

    "select2team": {
        header: get(_)('ALERTS.CREATE_CAREER_FIRST'),
        subHeader: "",
        message: get(_)('ALERTS.SELECT_MINIMUM_2_TEAMS'),
        buttons: [get(_)('OK')],
    },
    "invalidPosition": (e) => {
        return {
            header: get(_)('MESSAGES.IMPOSSIBLE_SQUARES_TITLE'),
            message: `${get(_)('MESSAGES.IMPOSSIBLE_SQUARES_DESCRIPTION_1')} ${e} ${get(_)('MESSAGES.IMPOSSIBLE_SQUARES_DESCRIPTION_2')}`,
            buttons: [get(_)('MESSAGES.OK')],
        }
    }
}

export { showAlert, selectTab, updateTabs, fancyTimeFormat, fatiga, showAlertPromise, mountainySprint, saveGame, allStorage, alerts }