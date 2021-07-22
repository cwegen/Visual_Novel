
namespace Template {
    export async function Scene3(): ƒS.SceneReturn {

        let firstDialogueAnswers = {
            Helfen: "Ganz langsam... Was genau ist denn passiert?",
            NichtHelfen: "Ich glaub' nicht, dass ich dir helfen kann."
        };

        let secondDialogueAnswers = {
            Eingebrockt: "Das hast du dir bestimmt selbst eingebrockt.",
            NichtsVerloren: "Dann hast du wegen ihm nichts verloren."
        };

        let badDialogueAnswers = {
            Spaß: "War nur ein Spaß... Wieso hat er Schluss gemacht?",
            Eingebrockt: "Das hast du dir bestimmt selbst eingebrockt."
        };

        characters.MC.name = data.protagonist.name;
        await ƒS.Location.show(locations.MCRoomNight);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await ƒS.Speech.tell(characters.Narrator, "Eine Woche später...");
        await ƒS.update(1);
        ƒS.Sound.fade(sound.SadTheme, 0.15, 0.2, true);
        ƒS.Sound.play(sound.DoorKnock, 0.2);
        await ƒS.Speech.tell(characters.MC, "Ja?");
        await ƒS.Speech.tell(characters.Sophie, "Hey, " + data.protagonist.name + "... Kann ich reinkommen?");
        await ƒS.Speech.tell(characters.MC, "Klar, was ist denn los?");
        ƒS.Sound.play(sound.Door, 0.4);
        await ƒS.Character.animate(characters.Sophie, characters.Sophie.pose.sad, leftToCenter());
        await ƒS.Speech.tell(characters.Sophie, "Ed hat mit mir Schluss gemacht... Ich weiß nicht mehr, was ich machen soll.");
        await ƒS.Speech.tell(characters.Sophie, "Bitte hilf mir, " + data.protagonist.name + "...");
        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueAnswers, "dialogue");
        


        switch (firstDialogueElement) {
            case firstDialogueAnswers.Helfen:
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.MC, "Ganz langsam... Was genau ist denn passiert?");
                await ƒS.Speech.tell(characters.Sophie, "Er meint, ich bin zu emotional für ihn... Er kommt nicht damit klar, dass ich ab und zu Stimmungsschwankungen hab'.");
                //ENDINGS
                let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueAnswers, "dialogue");
                switch (secondDialogueElement) {
                    case secondDialogueAnswers.NichtsVerloren:
                        await ƒS.update(1);
                        normalGoodEnding();
                        break;
                    case secondDialogueAnswers.Eingebrockt:
                        await ƒS.update(1);
                        badEnding();
                        break;
                }

                break;
            case firstDialogueAnswers.NichtHelfen:
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.MC, "Ich glaub' nicht, dass ich dir helfen kann.");
                await ƒS.Speech.tell(characters.Sophie, "Was?! Wieso nicht?");
                let badDialogueElement = await ƒS.Menu.getInput(badDialogueAnswers, "dialogue");
                switch (badDialogueElement) {
                    case badDialogueAnswers.Spaß:
                        await ƒS.update(1);
                        await ƒS.Speech.tell(characters.MC, "War nur ein Spaß... Wieso hat er Schluss gemacht?");
                        await ƒS.Speech.tell(characters.Sophie, "Er meint, ich bin zu emotional für ihn... Er kommt nicht damit klar, dass ich ab und zu Stimmungsschwankungen hab'.");
                        let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueAnswers, "dialogue");
                        switch (secondDialogueElement) {
                            case secondDialogueAnswers.NichtsVerloren:
                                await ƒS.update(1);
                                normalGoodEnding();
                                break;
                            case secondDialogueAnswers.Eingebrockt:
                                await ƒS.update(1);
                                badEnding();
                                break;
                        }

                        break;
                    case badDialogueAnswers.Eingebrockt:
                        await ƒS.update(1);
                        badEnding();
                        break;
                }

                break;
        }

    }



    async function normalGoodEnding(): Promise<void> {

        await ƒS.Speech.tell(characters.MC, "Mach dir mal keine Sorgen. Wenn das so ist, hast du wegen ihm nichts verloren.");
        await ƒS.Speech.tell(characters.Sophie, "Ich werde bestimmt einsam sterben...");
        await ƒS.Speech.tell(characters.MC, "So ein Quatsch! Du bist unglaublich liebenswert und hast eh etwas besseres verdient. Du wirst den richtigen noch finden.");
        await ƒS.Speech.tell(characters.Sophie, "Danke...");
        await ƒS.Speech.tell(characters.MC, "Jetzt mach ich dir erst mal einen Tee und dann zocken wir eine Runde Marbels Abengers.");
        await ƒS.Speech.tell(characters.MC, "Ich weiß, du magst sowas eigentlich gar nicht, aber die Ablenkung wird dir gut tun. Du wirst schon sehen.");
        await ƒS.Speech.tell(characters.Sophie, "Du bist viel zu lieb. Was würde ich nur ohne dich tun...");
        ƒS.Character.hideAll();
        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.SadTheme, 0, 0.2, false);

        await ƒS.Location.show(locations.City);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        ƒS.Sound.fade(sound.HappyTheme, 0.2, 0.2, true);
        await ƒS.Character.animate(characters.Sophie, characters.Sophie.pose.smiling, leftToCenter());
        await ƒS.Speech.tell(characters.Sophie, "Und dann hab ich ihm gesagt: 'Du hast eh keinen guten Einfluss auf mich. Ohne dich bin ich besser dran!'");
        await ƒS.Speech.tell(characters.MC, "Das ist doch super!");
        await ƒS.Speech.tell(characters.Sophie, "Hey, jetzt mal ehrlich. Ich bin dir unglaublich dankbar dafür, dass du für mich da bist.");
        await ƒS.Speech.tell(characters.Sophie, "Es tut echt gut mal wieder normale Sachen mit meinem Bruder zu unternehmen!");
        await ƒS.Speech.tell(characters.MC, "Ebenso. Du hast mir nichts zu danken. Schließlich bist du ja auch immer für mich da.");
        await ƒS.Speech.tell(characters.Sophie, "Was das angeht... Wie läufts denn eigentlich gerade mit River? Hast du sie endlich gefragt?");
        await ƒS.Speech.tell(characters.MC, "Naja, wir unternehmen viel gemeinsam... Ich weiß nicht genau, was sie sagen würde");
        await ƒS.Speech.tell(characters.Sophie, "Na los, frag sie doch einfach! Sie wird schon nicht nein sagen!");
        await ƒS.Speech.tell(characters.MC, "Ich wüsste nicht wann...");
        await ƒS.Speech.tell(characters.Sophie, "Frag sie am besten, wenn ihr alleine seid. Der richtige Zeitpunkt wird schon noch kommen.");
        await ƒS.Speech.tell(characters.MC, "Gut, ich werde danach Ausschau halten...");
        ƒS.Character.hideAll();
        ƒS.Speech.clear();

        await ƒS.Location.show(locations.Classroom);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await ƒS.Character.animate(characters.River, characters.River.pose.normal, leftToCenter());
        await ƒS.Speech.tell(characters.Narrator, "Eine Woche später... River und " + data.protagonist.name + " sitzen während der Mittagspause im Klassenzimmer und essen Vesper.");
        await ƒS.Speech.tell(characters.MC, "Ich finde es übrigens wirklich schön, dass du jeden Tag die Kette trägst.");
        await ƒS.Speech.tell(characters.MC, "Sie sieht toll an dir aus.");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.River, characters.River.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update();
        await ƒS.Speech.tell(characters.River, "Danke...");
        ƒS.Sound.fade(sound.HappyTheme, 0, 1, false);
        await ƒS.Speech.tell(characters.MC, "River, ich muss dir gestehen, dass ich dich ziemlich mag. Ich habe lange darüber nachgedacht und möchte dich etwas fragen.");
        await ƒS.Speech.tell(characters.MC, "Willst du meine feste Freundin werden?");

        if (data.score >= 5) {
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.River, characters.River.pose.embarassed, ƒS.positions.bottomcenter);
            await ƒS.update();
            await ƒS.Speech.tell(characters.River, "Oh... Ähm, das hätte ich nicht erwartet...");
            await ƒS.Speech.tell(characters.River, "Bist du dir wirklich sicher?");
            await ƒS.Speech.tell(characters.MC, "Klar doch.");
            await ƒS.Speech.tell(characters.River, "Da ist noch etwas, das ich dir sagen müsste...");
            await ƒS.Speech.tell(characters.River, "Ich falle unter dem Autismus-Spektrum und naja, vielleicht hast du deshalb schon gemerkt, dass ich... anders bin?");
            await ƒS.Speech.tell(characters.River, "... Denkst du, du würdest das trotzdem noch wollen?");
            ƒS.Sound.fade(sound.HappyTheme, 0.2, 1, true);
            await ƒS.Speech.tell(characters.MC, "Natürlich! Damit hätte ich zwar nicht gerechnet, aber ausmachen tut es mir absolut nichts!");
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.River, characters.River.pose.happy, ƒS.positions.bottomcenter);
            await ƒS.update();
            await ƒS.Speech.tell(characters.River, "Dann bin ich glücklich..");
            await ƒS.Speech.tell(characters.MC, "Ich bin auch super glücklich! Ich hatte wirklich Angst davor, was du sagen würdest.");
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.River, characters.River.pose.normal, ƒS.positions.bottomcenter);
            await ƒS.update();
            await ƒS.Speech.tell(characters.River, "Pssst! Da kommt jemand... Ich glaube, der Unterricht fängt bald an...");
            ƒS.Character.hideAll();
            ƒS.Speech.hide();
            await ƒS.update(2);
            ƒS.Sound.fade(sound.HappyTheme, 0, 2, false);
            
            //HAPPY ENDING
        }


        if (data.score < 5) {
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.River, characters.River.pose.embarassed, ƒS.positions.bottomcenter);
            await ƒS.update();
            await ƒS.Speech.tell(characters.River, "Oh... Ähm, das hätte ich nicht erwartet...");
            ƒS.Sound.fade(sound.MelanchonyTheme, 0.2, 1, true);
            await ƒS.Speech.tell(characters.River, "Ich weiß nicht, " + data.protagonist.name + ". Wir sollten vielleicht lieber Freunde bleiben... Ich glaube nicht, dass ich die richtige für dich wäre");
            await ƒS.Speech.tell(characters.MC, "Aber wieso das denn?");
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.River, characters.River.pose.sad, ƒS.positions.bottomcenter);
            await ƒS.update();
            await ƒS.Speech.tell(characters.River, "...");
            await ƒS.Speech.tell(characters.River, "Entschuldige bitte, der Unterricht fängt bald an. Ich müsste noch auf die Toilette..");
            ƒS.Character.hideAll();
            ƒS.Speech.hide();
            await ƒS.update(2);
            ƒS.Sound.fade(sound.MelanchonyTheme, 0, 1, false);
            //NORMAL ENDING
        }

    }



    async function badEnding(): Promise<void> {
        await ƒS.Speech.tell(characters.MC, "Das hast du dir bestimmt selbst eingebrockt.");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Sophie, characters.Sophie.pose.angry, ƒS.positions.bottomcenter);
        await ƒS.update();
        await ƒS.Speech.tell(characters.Sophie, "Auf dich kann man sich nicht verlassen. Das war ja klar. Danke für nichts!");
        ƒS.Character.hideAll();
        ƒS.Sound.play(sound.Door, 0.4);
        await ƒS.Speech.tell(characters.MC, "(...)");
        await ƒS.Speech.tell(characters.MC, "(Ob ich wohl zu grob war?)");
        await ƒS.Speech.tell(characters.MC, "(Was auch immer... Sie benimmt sich ja auch nicht immer wie die tollste Schwester.)");
        await ƒS.Speech.tell(characters.MC, "(Außerdem ist es ja sogesehen wirklich ihre Schuld. Ich darf doch wohl noch die Wahrheit sagen...)");
        ƒS.Sound.fade(sound.SadTheme, 0, 1, false);
        ƒS.Speech.clear();

        await ƒS.Location.show(locations.MCRoomDay);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        ƒS.Sound.fade(sound.GameTheme, 0.1, 1, true);
        await ƒS.Speech.tell(characters.Narrator, "Eine Woche später...");
        await ƒS.Speech.tell(characters.MC, "(Wo ist denn eigentlich Sophie? Ich hab' sie jetzt seit fünf Tagen nicht gesehen...)");
        await ƒS.Speech.tell(characters.MC, "(Es ist ja normal, dass sie oft nicht zu Hause ist, aber so lange? Hoffentlich ist ihr nichts passiert...)");
        await ƒS.Speech.tell(characters.MC, "(Ich schreib' ihr lieber mal...)");
        ƒS.Sound.fade(sound.GameTheme, 0.05, 1, true);
        await ƒS.Speech.tell(characters.MC, "Hey Sophie, sorry, dass ich so gemein zu dir war... Ist denn alles in Ordnung bei dir?");
        await ƒS.Speech.tell(characters.MC, "(...)");
        await ƒS.Speech.tell(characters.MC, "(Komisch... Die Nachricht kommt nicht an. Anscheinend ist ihr Handy aus.)");
        await ƒS.Speech.tell(characters.MC, "(Vielleicht rufe ich lieber die Polizei und melde sie als vermisst.)");
        await ƒS.Speech.tell(characters.MC, "Hallo? Ich möchte meine Schwester als vermisst melden...");
        ƒS.Sound.fade(sound.GameTheme, 0, 2, false);
        ƒS.Speech.clear();

        await ƒS.Location.show(locations.MCRoomDay);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await ƒS.Speech.tell(characters.Narrator, "Am nächsten Tag...");
        ƒS.Sound.play(sound.DoorBell, 0.2);
        await ƒS.Speech.tell(characters.MC, "Hallo?");
        await ƒS.Speech.tell(characters.Polizist, "Hallo junger Mann. Ist jemand von Ihren Erziehungsberechtigten da?");
        await ƒS.Speech.tell(characters.MC, "Nein, Herr Officer... Haben Sie Neuigkeiten über meine Schwester erfahren?");
        ƒS.Sound.fade(sound.MelanchonyTheme, 0.1, 1, true);
        await ƒS.Speech.tell(characters.Polizist, "Ja... Es tut mir Leid, das Ihnen sagen zu müssen. Ihre Schwester ist leider an Suizid gestorben.");
        await ƒS.Speech.tell(characters.MC, "Nein,das kann nicht sein...");

        await ƒS.Location.show(locations.Graveyard);
        await ƒS.update(transition.teardrop.duration, transition.teardrop.alpha, transition.teardrop.edge);
        await ƒS.Speech.tell(characters.MC, "(...)");
        await ƒS.Speech.tell(characters.MC, "(Wie kann ich nur so verdammt nochmal dumm sein... Ich bin Schuld an allem!)");
        await ƒS.Speech.tell(characters.MC, "(...)");
        await ƒS.Speech.tell(characters.MC, "(......)");
        ƒS.Sound.fade(sound.Rain, 0.2, 2, true);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.MC, "(Es fängt an zu regnen...)");
        await ƒS.Speech.tell(characters.MC, "(Ist ja auch egal...)");
        await ƒS.Speech.tell(characters.MC, "(...)");
        await ƒS.Speech.tell(characters.MC, "(Wie viel Zeit wohl schon vergangen ist?)");
        await ƒS.Speech.tell(characters.MC, "(...)");
        await ƒS.Speech.tell(characters.MC, "(Vielleicht fühl' ich mich ja lebendiger, wenn ich mich etwas bewege...)");

        await ƒS.Location.show(locations.City);
        await ƒS.update(transition.teardrop.duration, transition.teardrop.alpha, transition.teardrop.edge);
        await ƒS.Speech.tell(characters.MC, "(Ob River auch so enden wird, wenn sie von meiner wahren Intention erfährt...)");
        await ƒS.Speech.tell(characters.MC, "(Ich bin ein Monster.)");
        await ƒS.Speech.tell(characters.MC, "(...)");
        await ƒS.Speech.tell(characters.UnbekannteFrau, "Oh mein Gott! Pass auf!!");
        //carcrash ƒS.Sound.play(sound., 0.2, 1, true);
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.Black);
        await ƒS.update(2);
        ƒS.Sound.fade(sound.Heartbeat, 0.2, 1, false);
        await ƒS.update(4);
        ƒS.Sound.fade(sound.Heartbeat, 0, 1, false);
        ƒS.Sound.fade(sound.Rain, 0, 1, false);
        ƒS.Sound.fade(sound.MelanchonyTheme, 0, 1, false);
        //BAD ENDING
    }

}
