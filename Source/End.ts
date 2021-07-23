namespace Teardrops {
    export async function End(): ƒS.SceneReturn {

        await ƒS.Location.show(locations.End);
        ƒS.Sound.fade(sound.EndingTheme, 0.1, 2);
        await ƒS.update(2);

    }
}
