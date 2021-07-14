"use strict";
var Template;
(function (Template) {
    async function Scene1() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            narrator: {
                T0000: "",
                T0001: ""
            },
            protagonist: {
                T0000: "",
                T0001: ""
            },
            yumeko: {
                T0000: "",
                T0001: ""
            },
            hana: {
                T0000: "",
                T0001: ""
            }
        };
        let firstDialogueAnswers = {
            iSayYes: "Okay",
            iSayNo: "Lieber nicht"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueAnswers, "dialogue");
        console.log("Scene 1 Start");
        Template.ƒS.Sound.fade(Template.sound.HappyTheme, 0.2, 0.1, true);
        // ƒS.Sound.fade(sound.SchoolCrowd, 0.4, 0.2, true);
        await Template.ƒS.Location.show(Template.locations.Classroom);
        // await ƒS.update(4);
        // ƒS.Sound.fade(sound.SchoolCrowd, 0 , 0.2, false);
        // ƒS.Sound.play(sound.SchoolBell, 0.1, false);
        await Template.ƒS.update(2);
        // ƒS.Sound.play(sound.Door, 0.1, false);
        // await ƒS.update(2);
        // await ƒS.Character.animate(characters.King, characters.King.pose.normal, leftToRight());
        // await ƒS.update(1);
        // ƒS.Speech.show;
        // await ƒS.Speech.tell(characters.King, "So, Kinder. Zum Start der wertvollen Stunde möchte ich gerne von Euch wissen, welche fünf Standortfaktoren für ein Unternehmen am wichtigsten sind.", true);
        // ƒS.Character.hideAll();
        // await ƒS.Character.show(characters.King, characters.King.pose.annoyed, ƒS.positionPercent(71, 100));
        // await ƒS.update(1);
        // await ƒS.Speech.tell(characters.King, "Keine Freiwilligen? Na gut, dann hilf du mir doch mal weiter, Amelia.");
        // ƒS.Character.hideAll();
        // await ƒS.Character.show(characters.Amelia, characters.Amelia.pose.embarassed, ƒS.positionPercent(31, 100));
        // await ƒS.update(1);
        // await ƒS.Speech.tell(characters.Amelia, "Ähm... Tut mir leid, Herr Kalt. Ich kann Ihnen die Frage leider nicht beantworten...");
        // ƒS.Character.hideAll();
        // await ƒS.Character.show(characters.King, characters.King.pose.angry, ƒS.positionPercent(71, 100));
        // await ƒS.update(1);
        // await ƒS.Speech.tell(characters.King, "Das kann doch nicht sein! Die letzte Stunde war doch erst vor zwei Tagen! Kann in diesem Raum überhaupt jemand etwas?");
        // await ƒS.Character.hide(characters.King);
        // await ƒS.update(1);
        // await ƒS.Character.animate(characters.Ben, characters.Ben.pose.normal, lefterToLeft());
        // await ƒS.update(1);
        // await ƒS.Speech.tell(characters.Ben, "Die Antwort auf Ihre eigentliche Frage lautet Grundstückflächen, Gebäude, Materialien, Energieversorgung und Staatsleistungen.");
        // await ƒS.Character.show(characters.King, characters.King.pose.normal, ƒS.positionPercent(71, 100));
        // await ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.King, "Na seht ihr. So lässt sich die Stunde doch schon viel angenehmer gestalten.");
        await Template.ƒS.update(2);
        Template.ƒS.Speech.clear();
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        Template.ƒS.Sound.play(Template.sound.SchoolBell, 0.1, false);
        Template.ƒS.Sound.fade(Template.sound.SchoolCrowd, 0.4, 0.2, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.School);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        await Template.ƒS.Speech.tell(Template.characters.Ben, "Haaaalt! " + Template.data.protagonist.name + ", warte auf mich!");
        await Template.ƒS.Character.animate(Template.characters.Ben, Template.characters.Ben.pose.cheeky, Template.leftToCenter());
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ben, "Puh, gut dass ich dich noch erwischt hab. Hast du heute noch was zu tun?");
        await Template.ƒS.Speech.tell(Template.characters.Ben, "Ich hab meine PS4 dabei... Wenn du willst, können wir bei dir ein bisschen Marbel's Abengers zocken? Na, was meinst du?");
        switch (firstDialogueElement) {
            case firstDialogueAnswers.iSayYes:
                Template.data.score += 20;
                await Template.ƒS.Speech.tell(Template.characters.MC, "Klar, Mama ist heute eh nicht da und Sophie wird wahrscheinlich auch wieder weg sein. Lass uns gehen.");
            //     ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
            //     await ƒS.Location.show(locations.garden);
            //     await ƒS.update(transition.hearts.duration, transition.hearts.alpha, transition.hearts.edge);
            //     await ƒS.Character.show(characters.yumeko, characters.yumeko.pose.normal, ƒS.positions.bottomright);    
            //     await ƒS.update(1);
            //     ƒS.Speech.show;
            //     await ƒS.Speech.tell(characters.yumeko, "Hallo, Fremder.", true);
            //     await ƒS.Character.show(characters.witch, characters.witch.pose.normal, ƒS.positionPercent(10, 100));
            //     await ƒS.update(1);
            //     await ƒS.Speech.tell(characters.witch, "Hallo! Wir haben dich hier noch nie gesehen. Könntest du uns deinen Namen verraten?", false)
            //     data.protagonist.name = await ƒS.Speech.getInput();
            //     console.log(data.protagonist.name);
            //     await ƒS.update(1);   
            //     await ƒS.Speech.tell(characters.witch, "Alles klar, " + data.protagonist.name + ", du hast dich sicher verlaufen. Wir sind gerade auf dem Weg zur nächsten Stadt. Wie wärs, möchtest du mit uns kommen?", false);
            //     await ƒS.update(1);    
            //     let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueAnswer, "dialoguebox");
            //     switch (firstDialogueElement) {
            //           case firstDialogueAnswer.iSayYes:
            //             //continue writing on this path here
            //             ƒS.Sound.play(sound.click, 1);
            //             ƒS.Progress.setData(data.score += 10);
            //             await ƒS.update(1);
            //             await ƒS.Speech.tell(characters.yumeko, "Lass uns gehen.");
            //             ƒS.Character.hideAll();
            //             break;
            //           case firstDialogueAnswer.iSayNo:
            //             ƒS.Sound.play(sound.click, 1);
            //             await ƒS.update(1);
            //             await ƒS.Speech.tell(characters.yumeko, "Dann verschwinde von hier...");
            //             ƒS.Character.hideAll();
            //             ƒS.Speech.clear();
            //             await ƒS.update(1);
            //             return;
            //             break;}
        }
    }
    Template.Scene1 = Scene1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("Start");
    //define transitions
    Template.transition = {
        teardrop: {
            duration: 2,
            alpha: "Transitions/teardrop.png",
            edge: 0.15
        },
        clock: {
            duration: 1.5,
            alpha: "Transitions/circlewipe-cw.jpg",
            edge: 0.8
        },
        swirl: {
            duration: 1.5,
            alpha: "Transitions/swirl.png",
            edge: 0.1
        },
        wet: {
            duration: 1.5,
            alpha: "Transitions/wet.jpg",
            edge: 0.8
        }
    };
    //define sound
    Template.sound = {
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
        Door: "Audio/door_opening.wav",
        SchoolCrowd: "Audio/crowd_school.wav",
        StreetCrowd: "Audio/crowd_streets.wav",
        EmergencySiren: "Audio/emergency_siren.wav",
        Heartbeat: "Audio/heartbeat.wav",
    };
    Template.locations = {
        Startscreen: {
            name: "Startscreen",
            background: "Images/Backgrounds/startscreen.jpg"
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
        }
    };
    Template.data = {
        protagonist: {
            name: ""
        },
        score: 0,
        state: {
            a: 1
        }
    };
    // define characters
    Template.characters = {
        Unbekannter: {
            name: "Unbekannter"
        },
        MC: {
            name: Template.data.protagonist.name,
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: { normal: "Images/Characters/MC.png" }
        },
        Ben: {
            name: "Ben",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/ben-normal.png",
                cheeky: "Images/Characters/ben-cheeky.png",
                smartphone: "Images/Characters/ben-smartphone.png"
            }
        },
        Amelia: {
            name: "Amelia",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/test.png",
                happy: "Images/Characters/amelia-happy.png",
                sad: "Images/Characters/amelia-sad.png",
                embarassed: "Images/Characters/amelia-embarassed.png"
            }
        },
        Sophie: {
            name: "Sophie",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/king-normal.png",
                annoyed: "Images/Characters/king-annoyed.png",
                angry: "Images/Characters/king-angry.png"
            }
        }
    };
    function leftToRight() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft },
            end: { translation: Template.ƒS.positionPercent(71, 100) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.leftToRight = leftToRight;
    function leftToCenter() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft },
            end: { translation: Template.ƒS.positions.bottomcenter },
            duration: 1.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.leftToCenter = leftToCenter;
    function lefterToLeft() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft },
            end: { translation: Template.ƒS.positionPercent(31, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.lefterToLeft = lefterToLeft;
    Template.items = {
        GoldenApple: {
            name: "GoldenApple",
            description: "A delicious golden apple. Is it healthy, though?",
            image: "Images/Item/golden_apple.png"
        }
    };
    Template.igMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        volumeUp: "+",
        volumeDown: "-",
        credits: "Credits",
        about: "About",
        open: "Open"
    };
    let volume = 5.0;
    function incrementSound() {
        if (volume >= 10)
            return;
        volume += 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.decrementSound = decrementSound;
    function showCredits() {
        Template.ƒS.Text.addClass("credits");
        Template.ƒS.Text.print("This is a Visual Novel Created with FudgeStory. Claudia Wegen is the Creator and Riem Yasin was the assisting lecturer for this project." + '<br/>' + "Characters are taken from The Sims 4. " + '<br/>' + " Main Theme: Always Remember to Never Forget - The Whole Other" + '<br/>' + "Sad Theme: No.8 Requiem - Esther Abrami" + '<br/>' + "Melanchony Theme: Through and Through - Amulets" + '<br/>' + "Angry Theme: Raging Streets - SefChol" + '<br/>' + "Ending Theme: Before I Go - RKVC");
        // showCredits();
    }
    Template.showCredits = showCredits;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        if (_option == Template.igMenu.save) {
            await Template.ƒS.Progress.save();
        }
        else if (_option == Template.igMenu.load) {
            await Template.ƒS.Progress.load();
        }
        else if (_option == Template.igMenu.volumeUp) {
            incrementSound();
        }
        else if (_option == Template.igMenu.volumeDown) {
            decrementSound();
        }
        else if (_option == Template.igMenu.close) {
            Template.gameMenu.close();
        }
        else if (_option == Template.igMenu.open) {
            Template.gameMenu.open();
        }
        else if (_option == Template.igMenu.credits) {
            showCredits();
        }
    }
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F4:
                console.log("save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("load");
                await Template.ƒS.Progress.load();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        //define the sequence of scene, each scene as an object with reference to the 
        let scenes = [
            { scene: Template.Start, name: "Start Scene" },
            { scene: Template.Scene1, name: "Garden Scene" }
        ];
        Template.gameMenu =
            Template.ƒS.Menu.create(Template.igMenu, buttonFunctionalities, "gameMenu");
        //start the sequence
        Template.ƒS.Progress.setData(Template.data);
        Template.ƒS.Progress.go(scenes);
    }
    Template.ƒS.Sound.setMasterVolume(volume);
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Start() {
        console.log("Start Scene loaded");
        Template.ƒS.Sound.fade(Template.sound.StartTheme, 0.07, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.Startscreen);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Unbekannter, "Willkommen zur Visual Novel 'Teardrops'. Bevor du loslegst, gäbe es da noch etwas.");
        await Template.ƒS.Character.show(Template.characters.MC, Template.characters.MC.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Unbekannter, "Dies ist der Protagonist der Geschichte. Du wirst gleich in seine Rolle schlüpfen. Doch davor möchte ich, dass du dir einen Namen für ihn ausdenkst.", false);
        Template.data.protagonist.name = await Template.ƒS.Speech.getInput();
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Unbekannter, Template.data.protagonist.name + "? Ein schöner Name. Dann kann die Visual Novel doch auch schon starten! Viel Spaß beim Spielen!", true);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.clear();
        Template.ƒS.Sound.fade(Template.sound.StartTheme, 0, 0.2, true);
        await Template.ƒS.update(2);
    }
    Template.Start = Start;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map