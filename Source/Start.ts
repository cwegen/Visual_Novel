namespace Template {
    export async function Start(): ƒS.SceneReturn {

        console.log("Start Scene loaded");

        ƒS.Sound.fade(sound.StartTheme, 0.07, 0.1, true);
        await ƒS.Location.show(locations.Startscreen);
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.Unbekannter, "Willkommen zur Visual Novel 'Teardrops'. Bevor du loslegst, gäbe es da noch etwas.");
        await ƒS.Character.show(characters.MC, characters.MC.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Unbekannter, "Dies ist der Protagonist der Geschichte. Du wirst gleich in seine Rolle schlüpfen. Doch davor möchte ich, dass du dir einen Namen für ihn ausdenkst.", false);
        data.protagonist.name = await ƒS.Speech.getInput();
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Unbekannter, data.protagonist.name + "? Ein schöner Name. Dann kann die Visual Novel doch auch schon starten! Viel Spaß beim Spielen!", true);
        ƒS.Character.hideAll();
        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.StartTheme, 0, 0.2, true);
        await ƒS.update(2);
    }
}