namespace Template {

    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    
    export let transition = {
        teardrop: {
            duration: 1,
            alpha: "Transitions/teardrop.png",
            edge: 0.3
        },
        clock: {
            duration: 1.5,
            alpha:"Transitions/circlewipe-cw.jpg",
            edge: 0.8
        },
        swirl: {
            duration: 1.5,
            alpha:"Transitions/swirl.png",
            edge: 0.1
        },
        wet:{
            duration: 1.5,
            alpha:"Transitions/wet.jpg",
            edge: 0.8
        }
    };

    //define sound
    export let sound = {
        //music
        StartTheme: "Audio/start_theme.mp3",
        HappyTheme: "Audio/happy_theme.mp3",
        AngryTheme: "Audio/angry_theme.mp3",
        MelanchonyTheme: "Audio/melanchony_theme.mp3",
        SadTheme: "Audio/sad_theme.mp3",
        EndingTheme: "Audio/ending_theme.mp3",
        GameTheme: "Audio/game_theme.wav",

        //soundeffects
        SchoolBell: "Audio/school_bell.wav",
        DoorBell: "Audio/door_bell.wav",
        DoorKnock: "Audio/door_knock.wav",
        Door: "Audio/door_opening.wav",
        SchoolCrowd: "Audio/crowd_school.wav",
        StreetCrowd: "Audio/crowd_streets.wav",
        RestaurantCrowd: "Audio/restaurant_crowd.mp3",
        Crickets: "Audio/crickets.wav",
        Cinema: "Audio/cinema_horror_sounds.mp3",
        Rain: "Audio/rain.wav",
        EmergencySiren: "Audio/emergency_siren.wav",
        Heartbeat: "Audio/heartbeat.wav",


    };

    export let locations = {
        Startscreen: {
            name: "Startscreen",
            background: "Images/Backgrounds/startscreen.jpg"
        },
        Black: {
            name: "Black",
            background: "Images/Backgrounds/black.jpg"
        },
        City: {
            name: "Stadt",
            background: "Images/Backgrounds/city.jpg"
        },
        Classroom: {
            name: "Klassenraum",
            background: "Images/Backgrounds/classroom.jpg"
        },
        Graveyard: {
            name: "Friedhof",
            background: "Images/Backgrounds/graveyard.jpg"
        },
        MCRoomDay: {
            name: "Jugendzimmer_Tag",
            background: "Images/Backgrounds/mcroom-day.jpg"
        },
        MCRoomNight: {
            name: "Jugendzimmer_Nacht",
            background: "Images/Backgrounds/mcroom-night.jpg"
        },
        Playground: {
            name: "Spielplatz",
            background: "Images/Backgrounds/playground.jpg"
        },
        School: {
            name: "Schule",
            background: "Images/Backgrounds/school.jpg"
        },
        Cinema: {
            name: "Kino",
            background: "Images/Backgrounds/cinema.jpg"
        },
        WcTonalds: {
            name: "WcTonalds",
            background: "Images/Backgrounds/wctonalds.jpg"
        }
    };


    export let data = {
        protagonist: {
            name: ""
        }, 
        score: 0,
        state: {
            a: 1
        }
    };

    
    // define characters
    export let characters = {
        Narrator: {
            name: ""
        },

        Polizist: {
            name: "Polizist",
        },

        UnbekannteFrau: {
            name: "Unbekannte Frau",
        },

        MC: {
            name: data.protagonist.name,
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {normal: "Images/Characters/MC.png"}
        },

        Ben: {
            name: "Ben",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/ben-normal.png",
                cheeky: "Images/Characters/ben-cheeky.png",
                smartphone: "Images/Characters/ben-smartphone.png",
                smiling: "Images/Characters/ben-smiling.png",
                angry: "Images/Characters/ben-angry.png"
            }
        },

        River: {
            name: "River",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/river-normal.png",
                happy: "Images/Characters/river-happy.png",
                sad: "Images/Characters/river-sad.png",
                embarassed: "Images/Characters/river-embarassed.png"
            }
        },
        
        Sophie: {
            name: "Sophie",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/sophie-normal.png",
                happy: "Images/Characters/sophie-happy.png",
                smiling: "Images/Characters/sophie-smiling.png",
                sad: "Images/Characters/sophie-sad.png",
                angry: "Images/Characters/sophie-angry.png"
            }
        },

        King: {
            name: "Herr King",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/king-normal.png",
                annoyed: "Images/Characters/king-annoyed.png",
                angry: "Images/Characters/king-angry.png"
            }
        },

    };

    export function leftToRight(): ƒS.AnimationDefinition {
        return {
          start: { translation: ƒS.positions.bottomleft },
          end: { translation: ƒS.positionPercent(71, 100) },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    export function leftToCenter(): ƒS.AnimationDefinition {
        return {
          start: { translation: ƒS.positions.bottomleft },
          end: { translation: ƒS.positions.bottomcenter },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    export function lefterToLeft(): ƒS.AnimationDefinition {
        return {
          start: { translation: ƒS.positions.bottomleft },
          end: { translation: ƒS.positionPercent(31, 100) },
          duration: 1,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    export let items = {
        Necklace: {
            name: "Halskette",
            description: "Eine schöne Halskette mit einem Tropfenanhänger aus Mondstein.",
            image: "Images/Items/necklace.jpg",
            handler: hndItem
        }
    };

    export function hndItem(_event: CustomEvent): void {
        console.log(_event);
      }



    export let uiElement: HTMLElement;

    export let igMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        volumeUp: "+",
        volumeDown: "-",
        credits: "Credits",
        about: "About",
        open: "Open"
    };

    export let gameMenu: ƒS.Menu;
    
    let volume: number= 5.0;

    export function incrementSound(): void {
        if (volume >= 10)
        return;
        volume += 0.5;
        ƒS.Sound.setMasterVolume(volume);
    }

    export function decrementSound(): void {
        if (volume <= 0)
        return;
      volume -= 0.5;
      ƒS.Sound.setMasterVolume(volume);
    }

    export function showCredits(): void {
        ƒS.Text.addClass("credits");
        ƒS.Text.print("This is a Visual Novel Created with FudgeStory. Claudia Wegen is the Creator and Riem Yasin was the assisting lecturer for this project." + '<br/>' + "Characters are taken from The Sims 4. "+ '<br/>' + " Main Theme: Always Remember to Never Forget - The Whole Other" + '<br/>' + "Sad Theme: No.8 Requiem - Esther Abrami" + '<br/>' + "Melanchony Theme: Through and Through - Amulets" + '<br/>' + "Angry Theme: Raging Streets - SefChol" + '<br/>' + "Ending Theme: Before I Go - RKVC");
    
        // showCredits();
    }

    async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        if (_option == igMenu.save) {
            await ƒS.Progress.save();
        }
        else if (_option == igMenu.load) {
            await ƒS.Progress.load();

        }
        else if (_option == igMenu.volumeUp) {
            incrementSound();
        }
        else if (_option == igMenu.volumeDown) {
            decrementSound();
        }
        else if (_option == igMenu.close) {
            gameMenu.close();
        }
        else if (_option == igMenu.open) {
            gameMenu.open();
        }
        else if (_option == igMenu.credits) {
            showCredits();
        }
        
    }

    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.F4:
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F8:
                await ƒS.Progress.load();
                break;
        }
    }
   
    window.addEventListener("DOMContentLoaded", start);
    function start(_event: Event): void {
        //define the sequence of scene, each scene as an object with reference to the 
        let scenes: ƒS.Scenes = [
            { scene: Start, name: "Start Scene"},
            { scene: Scene1, name: "Abschnitt 1"},
            { scene: Scene2, name: "Abschnitt 2"},
            { scene: Scene3, name: "Abschnitt 3"}
        ];

        gameMenu =
        ƒS.Menu.create(igMenu, buttonFunctionalities, "gameMenu");
        //start the sequence
        ƒS.Progress.setData(data);
        ƒS.Progress.go(scenes);
        ƒS.Inventory.add(items.Necklace);

    }

    // let sceneParent = document.getElementById("scene");
    // window.addEventListener("load", appendChild);
    // function appendChild(_event: Event): void {
    //     console.log(sceneParent);
    //     sceneParent.appendChild(ƒS.Menu);
    // }

    ƒS.Sound.setMasterVolume(volume);




}
