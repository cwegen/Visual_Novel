"use strict";
var Teardrops;
(function (Teardrops) {
    async function Scene1() {
        let firstDialogueAnswers = {
            iSayWait: "Warte!",
            iSayNothing: "..."
        };
        Teardrops.characters.MC.name = Teardrops.data.protagonist.name;
        Teardrops.ƒS.Sound.fade(Teardrops.sound.HappyTheme, 0.2, 0.1, true);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0.4, 0.2, true);
        await Teardrops.ƒS.Location.show(Teardrops.locations.Classroom);
        await Teardrops.ƒS.update(4);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0, 0.2, false);
        Teardrops.ƒS.Sound.play(Teardrops.sound.SchoolBell, 0.1, false);
        await Teardrops.ƒS.update(2);
        Teardrops.ƒS.Sound.play(Teardrops.sound.Door, 0.1, false);
        await Teardrops.ƒS.update(2);
        await Teardrops.ƒS.Character.animate(Teardrops.characters.King, Teardrops.characters.King.pose.normal, Teardrops.leftToRight());
        await Teardrops.ƒS.update(1);
        Teardrops.ƒS.Speech.show;
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.King, "So, Kinder. Zum Start der wertvollen Stunde möchte ich gerne von Euch wissen, welche fünf Standortfaktoren für ein Unternehmen am wichtigsten sind.", true);
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.King, Teardrops.characters.King.pose.annoyed, Teardrops.ƒS.positionPercent(71, 100));
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.King, "Keine Freiwilligen? Na gut, dann hilf du mir doch mal weiter, Amelia.");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.embarassed, Teardrops.ƒS.positionPercent(31, 100));
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Ähm... Tut mir leid, Herr King. Ich kann Ihnen die Frage leider nicht beantworten...");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.King, Teardrops.characters.King.pose.angry, Teardrops.ƒS.positionPercent(71, 100));
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.King, "Das kann doch nicht sein! Die letzte Stunde war doch erst vor zwei Tagen! Kann in diesem Raum überhaupt jemand etwas?");
        await Teardrops.ƒS.Character.hide(Teardrops.characters.King);
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Character.animate(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.normal, Teardrops.lefterToLeft());
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Die Antwort auf Ihre eigentliche Frage lautet Grundstückflächen, Gebäude, Materialien, Energieversorgung und Staatsleistungen.");
        await Teardrops.ƒS.Character.show(Teardrops.characters.King, Teardrops.characters.King.pose.normal, Teardrops.ƒS.positionPercent(71, 100));
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.King, "Na seht ihr. So lässt sich die Stunde doch schon viel angenehmer gestalten.");
        await Teardrops.ƒS.update(2);
        Teardrops.ƒS.Speech.clear();
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.update(1);
        Teardrops.ƒS.Sound.play(Teardrops.sound.SchoolBell, 0.1, false);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0.4, 0.2, true);
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Location.show(Teardrops.locations.School);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Haaaalt! " + Teardrops.data.protagonist.name + ", warte auf mich!");
        await Teardrops.ƒS.Character.animate(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.cheeky, Teardrops.leftToCenter());
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Puh, gut dass ich dich noch erwischt hab. Hast du heute noch was zu tun?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Ich hab meine PS4 dabei... Wenn du willst, können wir bei dir ein bisschen Marbel's Abengers zocken? Na, was meinst du?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Klar, Mama ist heute eh nicht da und Sophie wird wahrscheinlich auch wieder weg sein. Lass uns gehen.");
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0, 2, true);
        Teardrops.ƒS.Character.hideAll();
        Teardrops.ƒS.Speech.clear();
        Teardrops.ƒS.Sound.fade(Teardrops.sound.HappyTheme, 0, 0.2, true);
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Location.show(Teardrops.locations.MCRoomDay);
        await Teardrops.ƒS.update(Teardrops.transition.swirl.duration, Teardrops.transition.swirl.alpha, Teardrops.transition.swirl.edge);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Und los gehts!");
        Teardrops.ƒS.Sound.fade(Teardrops.sound.GameTheme, 0.1, 0.2, true);
        await Teardrops.ƒS.Location.show(Teardrops.locations.MCRoomNight);
        await Teardrops.ƒS.update(5);
        await Teardrops.ƒS.Character.show(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.normal, Teardrops.ƒS.positionPercent(71, 100));
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Es ist schon ziemlich spät geworden... Vielleicht sollte ich besser ma-");
        Teardrops.ƒS.Sound.play(Teardrops.sound.Door, 0.1, false);
        await Teardrops.ƒS.Character.animate(Teardrops.characters.Sophie, Teardrops.characters.Sophie.pose.angry, Teardrops.lefterToLeft());
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Was ist denn hier schon wieder los?! Warum müsst ihr IMMER nur vor dieser dummen Konsole hocken? Wie wärs mal damit, etwas produktives zu machen?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Na los, worauf wartet ihr denn? Ben, du bist nicht besser. Verschwinde nun lieber von hier.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Entschuldigung, Ma'am. Ich wollte eh schon gehen... Sorry, " + Teardrops.data.protagonist.name + ". Ich schreib dir nachher.");
        let firstDialogueElement = await Teardrops.ƒS.Menu.getInput(firstDialogueAnswers, "dialogue");
        switch (firstDialogueElement) {
            case firstDialogueAnswers.iSayWait:
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Hey, warte doch mal... Ich komme mit!");
                await Teardrops.ƒS.update(1);
                Teardrops.ƒS.Character.hide(Teardrops.characters.Ben);
                await Teardrops.ƒS.update(1);
                Teardrops.ƒS.Character.hideAll();
                await Teardrops.ƒS.Character.show(Teardrops.characters.Sophie, Teardrops.characters.Sophie.pose.sad, Teardrops.ƒS.positionPercent(31, 100));
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Niemand hört auf mich...");
                Teardrops.ƒS.Character.hideAll();
                Teardrops.ƒS.Sound.fade(Teardrops.sound.GameTheme, 0, 0.2, false);
                Teardrops.ƒS.Speech.clear();
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Location.show(Teardrops.locations.Playground);
                await Teardrops.ƒS.update(Teardrops.transition.teardrop.duration, Teardrops.transition.teardrop.alpha, Teardrops.transition.teardrop.edge);
                Teardrops.ƒS.Sound.fade(Teardrops.sound.Crickets, 0.2, 2, true);
                await Teardrops.ƒS.Character.show(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.normal, Teardrops.ƒS.positions.bottomcenter);
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Das war ziemlich verrückt... Ist deine Schwester immer so?");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Naja, ab und zu kommt sie betrunken nach Hause und wirft die ganze Bude durcheinander...");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Heute scheint auch so ein Fall gewesen zu sein. Sorry dafür, Bro.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Alles gut, sowas bin ich ja auch schon vom King gewohnt.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Haha stimmt! Da sind wir schon abgehärtet...");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "...");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Aber meinst du nicht, dass Sophie irgendwo etwas Recht hat?");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ich meine, was haben wir bis heute erreicht? Außerdem bin ich echt langweilig. Alles was ich kann ist E-Gitarre spielen und zocken...");
                Teardrops.ƒS.Character.hideAll();
                await Teardrops.ƒS.Character.show(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.normal, Teardrops.ƒS.positions.bottomcenter);
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Bro, wie kommst du darauf... Du bist Einzigartig.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Halt die Klappe. Ich brauche etwas, um wirklich auffallen zu können..");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Etwas besonderes, wie River. Schau sie dir mal an, kein Mädchen ist wie sie. Sie ist komplett anders.");
                Teardrops.ƒS.Character.hideAll();
                await Teardrops.ƒS.Character.show(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.angry, Teardrops.ƒS.positions.bottomcenter);
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Yo, meinst du das gerade ernst?");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Leider ja... Das ist mein voller Ernst.");
                Teardrops.ƒS.Character.hideAll();
                await Teardrops.ƒS.Character.show(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.normal, Teardrops.ƒS.positions.bottomcenter);
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Gut... Tu, was auch immer dich glücklich macht. Aber denk' dran, dass auch sie Gefühle hat.");
                Teardrops.ƒS.Character.hideAll();
                Teardrops.ƒS.Speech.clear();
                Teardrops.ƒS.Sound.fade(Teardrops.sound.Crickets, 0, 0.2, false);
                await Teardrops.ƒS.update(1);
                break;
            case firstDialogueAnswers.iSayNothing:
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "...");
                Teardrops.ƒS.Sound.fade(Teardrops.sound.GameTheme, 0, 2, false);
                Teardrops.ƒS.Character.hideAll();
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Character.show(Teardrops.characters.Sophie, Teardrops.characters.Sophie.pose.normal, Teardrops.ƒS.positionPercent(31, 100));
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Ich mag dich echt gern', " + Teardrops.data.protagonist.name + ". Du bist mein Bruder. Aber trotzdem musst du dir mal bewusst werden, dass du es zu nichts bringst, wenn du den ganzen Tag Videospiele spielst.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ich weiß doch... Weißt du, ich hab das Gefühl, dass ich einfach nur existiere. Ich fühle mich wie der Nebencharakter der Geschichte.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Glaubst du, ich würde mehr schaffen, wenn ich mich besser fühle? Wenn ich das Loch in mir stopfen würde?");
                Teardrops.ƒS.Character.hideAll();
                await Teardrops.ƒS.Character.show(Teardrops.characters.Sophie, Teardrops.characters.Sophie.pose.smiling, Teardrops.ƒS.positionPercent(31, 100));
                await Teardrops.ƒS.update();
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Klar doch. Du weißt, dass ich dich immer unterstütze.");
                Teardrops.ƒS.Character.hideAll();
                await Teardrops.ƒS.Character.show(Teardrops.characters.Sophie, Teardrops.characters.Sophie.pose.normal, Teardrops.ƒS.positionPercent(31, 100));
                await Teardrops.ƒS.update();
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Übrigens... Das von vorhin tut mir Leid... Ich glaube, ich habe wieder etwas zu viel getrunken... Du weißt, dass ich dann immer schnell wütend werde.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Schon verziehen! Ich weiß, du meinst es trotzdem gut.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Danke... Ich geh' dann mal wieder in mein Zimmer.");
                Teardrops.ƒS.Sound.play(Teardrops.sound.Door, 0.1, false);
                Teardrops.ƒS.Speech.clear();
                await Teardrops.ƒS.update(1);
                Teardrops.ƒS.Character.hideAll();
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Hmm... Ich schreib' Ben mal lieber.)");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Hey Ben. Hab mich spontan entschieden. Ich werd morgen Mittag River ansprechen.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Was, wieso? Hab ich was verpasst?");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ich hab gerade einfach das Bedürfnis nach was Neuem... Du weißt doch, dass ich mit ihr zusammen viel mehr auffallen würde. ;)");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Okay... Dann viel Spaß mit deinen Spielchen... o.o");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Ich weiß gar nicht, was ich dazu noch sagen soll...");
                Teardrops.ƒS.Speech.clear();
                await Teardrops.ƒS.update(1);
                break;
        }
    }
    Teardrops.Scene1 = Scene1;
})(Teardrops || (Teardrops = {}));
var Teardrops;
(function (Teardrops) {
    async function Scene2() {
        let firstDialogueAnswers = {
            Hemd: "kariertes Hemd",
            Anzug: "schicker Anzug"
        };
        let secondDialogueAnswers = {
            Beeindruckend: "Beeindruckend...",
            Omas: "Lesen sowas nicht nur Omas?"
        };
        let thirdDialogueAnswers = {
            Dotdotdot: "...",
            Verstehen: "Sie wird es schon verstehen."
        };
        Teardrops.characters.MC.name = Teardrops.data.protagonist.name;
        Teardrops.ƒS.Sound.fade(Teardrops.sound.HappyTheme, 0.2, 1, true);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0.4, 1, true);
        await Teardrops.ƒS.Location.show(Teardrops.locations.School);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Da ist River...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "River sitzt auf einer Bank und liest ein Buch nach dem Unterricht.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Hey, River.");
        await Teardrops.ƒS.Character.animate(Teardrops.characters.River, Teardrops.characters.River.pose.normal, Teardrops.leftToCenter());
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Hallo, " + Teardrops.data.protagonist.name + ".");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Darf ich mich setzen?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Klar.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Danke. Ich dachte mir, dass du eventuell gerne mal etwas Gesellschaft hättest. Wie wärs, hättest du Lust, morgen mit mir zum WcTonalds zu gehen?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Hmm... Ich weiß ja nicht.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ach komm schon. Nur einmal.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "...");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "......");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Na gut.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Super, ich freu mich. Dann bis morgen! Machs gut!");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Bis morgen.");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.update(2);
        await Teardrops.ƒS.Character.animate(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.normal, Teardrops.leftToCenter());
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Und? Was hat sie gesagt?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Sie hat angebissen.");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.angry, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Oh Mann... Und du hast kein schlechtes Gewissen dabei?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ach, sie wird schon damit klar kommen. Es ist ja nicht so, als ob ich sie nicht süß fände... Es ist nur ein kleiner Bonus, dass sie so anders ist.");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.normal, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Ich hoffe, du magst sie wirklich... Naja, was auch immer. Man sieht sich dann.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Jo, bis morgen.");
        Teardrops.ƒS.Character.hideAll();
        Teardrops.ƒS.Speech.clear();
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0, 0.2, false);
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Location.show(Teardrops.locations.MCRoomDay);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "Am nächsten Morgen.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Was zieh ich denn heute an...)");
        let firstDialogueElement = await Teardrops.ƒS.Menu.getInput(firstDialogueAnswers, "dialogue");
        switch (firstDialogueElement) {
            case firstDialogueAnswers.Hemd:
                await Teardrops.ƒS.update(1);
                Teardrops.data.score += 5;
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Das wird ausreichen... Besser, als beim Mittagessen overdressed zu sein...)");
                break;
            case firstDialogueAnswers.Anzug:
                await Teardrops.ƒS.update(1);
                Teardrops.data.score -= 5;
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Sie soll besser sehen, dass ich mich anstrenge...)");
                break;
        }
        Teardrops.ƒS.Speech.clear();
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Location.show(Teardrops.locations.WcTonalds);
        await Teardrops.ƒS.update(Teardrops.transition.swirl.duration, Teardrops.transition.swirl.alpha, Teardrops.transition.swirl.edge);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.RestaurantCrowd, 0.2, 1, true);
        await Teardrops.ƒS.Character.animate(Teardrops.characters.River, Teardrops.characters.River.pose.normal, Teardrops.leftToCenter());
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Also... Was hättest du denn gerne?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Ich hätte gerne Pommes.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Haha, was? Dann komm ich mir aber blöd vor mit meinem BigWac!");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.happy, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Tja, nicht mein Problem.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Was hast du denn gestern eigentlich gelesen?");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.normal, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "In dem Buch geht es um die Kunst des Origami-Faltens.");
        let secondDialogueElement = await Teardrops.ƒS.Menu.getInput(secondDialogueAnswers, "dialogue");
        switch (secondDialogueElement) {
            case secondDialogueAnswers.Beeindruckend:
                await Teardrops.ƒS.update(1);
                Teardrops.data.score += 10;
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Kannst du denn sowas auch?");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Naja, mehr oder weniger.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Das musst du mir mal zeigen!");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "River faltet aus der Serviette einen Hasen.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Wow, das ist beeindruckend.");
                break;
            case secondDialogueAnswers.Omas:
                await Teardrops.ƒS.update(1);
                Teardrops.data.score -= 10;
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Was? Das ist ja schräg. Lesen sowas nicht nur Omas?");
                Teardrops.ƒS.Character.hideAll();
                await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.sad, Teardrops.ƒS.positions.bottomcenter);
                await Teardrops.ƒS.update();
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Toll, dass du mich so ernst nimmst...");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Das war nicht so gemeint. Ich machte doch nur Witze!");
                Teardrops.ƒS.Character.hideAll();
                await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.normal, Teardrops.ƒS.positions.bottomcenter);
                await Teardrops.ƒS.update();
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Wirklich?");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ja, du kannst mir vertrauen.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Okay...");
        }
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Hey, hättest du Lust morgen wieder mit mir essen zu gehen? Wir können ja wo anders hin. Du scheinst ja WcTonalds nicht besonders zu mögen.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "WcTonalds ist schon in Ordnung...");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Na dann, lass uns doch wieder hierher gehen.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Okay.");
        Teardrops.ƒS.Character.hideAll();
        Teardrops.ƒS.Speech.clear();
        Teardrops.ƒS.Sound.fade(Teardrops.sound.RestaurantCrowd, 0, 0.2, false);
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Location.show(Teardrops.locations.Black);
        Teardrops.ƒS.Speech.hide();
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        await Teardrops.ƒS.Location.show(Teardrops.locations.WcTonalds);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.RestaurantCrowd, 0.2, 1, true);
        await Teardrops.ƒS.Character.animate(Teardrops.characters.River, Teardrops.characters.River.pose.normal, Teardrops.leftToCenter());
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "Einige Male später...");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Hey, River... Ich mag dich echt gerne und wollte dir das hier schenken... Ich finde, es passt perfekt zu dir.");
        let usednecklace = false;
        do {
            if ((await Teardrops.ƒS.Inventory.open()).includes("Halskette")) {
                console.log("check");
                usednecklace = true;
            }
            else {
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "Versuch es nochmal!");
            }
        } while (usednecklace == false);
        // let foo = () => {
        //   return new Promise(async (resolve, reject) => {
        //     (await ƒS.Inventory.open()).includes("Halskette")
        //       resolve("Halskette");
        //     reject("No Item Used");
        //   })
        // }
        /* INVENTAR ÖFFNEN */
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Oh... Danke. Das hätte ich nicht erwartet...");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ich hoffe sie gefällt dir!");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.happy, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Ja, die Kette ist wirklich wunderschön. Ich werde gut auf sie aufpassen.");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.normal, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "...");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Sorry, ich muss leider dringend gehen.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Aber...");
        Teardrops.ƒS.Character.hideAll();
        Teardrops.ƒS.Speech.clear();
        Teardrops.ƒS.Sound.fade(Teardrops.sound.RestaurantCrowd, 0, 0.2, false);
        await Teardrops.ƒS.Location.show(Teardrops.locations.School);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0.4, 0.2, true);
        await Teardrops.ƒS.Character.animate(Teardrops.characters.Ben, Teardrops.characters.Ben.pose.angry, Teardrops.leftToCenter());
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Und? Bist du nun zufrieden?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Nun sei nicht so... Gönn mir doch mal ein bisschen Spaß. Ich bin mir sicher, dass es River auch gut tut.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Sicher nicht, wenn sie von deinen Absichten erfährt.");
        let thirdDialogueElement = await Teardrops.ƒS.Menu.getInput(thirdDialogueAnswers, "dialogue");
        switch (thirdDialogueElement) {
            case thirdDialogueAnswers.Dotdotdot:
                await Teardrops.ƒS.update(1);
                Teardrops.data.score += 10;
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "...");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Du musst wirklich mal mit den Spielchen aufhören.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Komm, gib mir bitte 'ne Pause...");
                break;
            case thirdDialogueAnswers.Verstehen:
                await Teardrops.ƒS.update(1);
                Teardrops.data.score -= 10;
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Sie wird es schon verstehen. Außerdem mag ich sie doch wirklich!");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Ben, "Aber aus welchem Grund denn...");
                break;
        }
        Teardrops.ƒS.Character.hideAll();
        Teardrops.ƒS.Speech.clear();
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0, 0.2, false);
        await Teardrops.ƒS.Location.show(Teardrops.locations.Black);
        Teardrops.ƒS.Speech.hide();
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        await Teardrops.ƒS.Location.show(Teardrops.locations.School);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0.4, 0.2, false);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "Ein paar Tage später...");
        await Teardrops.ƒS.Character.animate(Teardrops.characters.River, Teardrops.characters.River.pose.normal, Teardrops.leftToCenter());
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "River! Ich wusste, dass ich dich wieder hier finden würde.");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.happy, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, Teardrops.data.protagonist.name + ", hallo. Schön dich zu sehen.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ebenso! Du, ähm.. Ich fände es toll, wenn wir mal zusammen ins Kino gehen würden..");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Und einen Film zusammen anschauen würden, was meinst du?");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.normal, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "...");
        if (Teardrops.data.score >= 5) {
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Na gut, wieso auch nicht.");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Super, ich freu' mich! Samstag um 17:00 Uhr für The Ping 3?");
            Teardrops.ƒS.Character.hideAll();
            await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.happy, Teardrops.ƒS.positions.bottomcenter);
            await Teardrops.ƒS.update();
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Gerne.");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Man sieht sich!");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Bis dann.");
            Teardrops.ƒS.Character.hideAll();
            Teardrops.ƒS.Speech.clear();
            Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0, 0.2, false);
            Teardrops.ƒS.Sound.fade(Teardrops.sound.HappyTheme, 0, 0.2, false);
            await Teardrops.ƒS.Location.show(Teardrops.locations.Foyer);
            await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Hmm... Wo bleibt sie denn?)");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(...)");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Sie kommt wohl leider nicht. Dann schaue ich mir den Film halt alleine an.");
            await Teardrops.ƒS.Location.show(Teardrops.locations.Cinema);
            await Teardrops.ƒS.update(Teardrops.transition.swirl.duration, Teardrops.transition.swirl.alpha, Teardrops.transition.swirl.edge);
            Teardrops.ƒS.Sound.fade(Teardrops.sound.Cinema, 0.3, 1, true);
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(...)");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "5 Minuten später.");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Vielleicht wartet sie ja doch im Foyer auf mich...)");
            await Teardrops.ƒS.Location.show(Teardrops.locations.Foyer);
            await Teardrops.ƒS.update(Teardrops.transition.swirl.duration, Teardrops.transition.swirl.alpha, Teardrops.transition.swirl.edge);
            Teardrops.ƒS.Sound.fade(Teardrops.sound.Cinema, 0.1, 1, true);
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Hmm, ich seh sie nicht...)");
            await Teardrops.ƒS.Character.animate(Teardrops.characters.River, Teardrops.characters.River.pose.sad, Teardrops.leftToCenter());
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "River erscheint aus dem Kinosaal.");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "River?! Wo kommst du denn her?");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Wieso bist du rausgegangen? Ich dachte, wir wollten uns den Film zusammen anschauen.");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Zusammen? Ich wusste nicht mal, dass du im Kinosaal warst!");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Aber... Wir haben uns den Film doch gemeinsam angeschaut... Da ist es doch egal wo wir sitzen.");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Haha, du bist echt seltsam, River! Lass uns nun nebeneinander sitzen.");
            Teardrops.ƒS.Character.hideAll();
            await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.happy, Teardrops.ƒS.positions.bottomcenter);
            await Teardrops.ƒS.update();
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Okay...");
            await Teardrops.ƒS.Location.show(Teardrops.locations.Cinema);
            await Teardrops.ƒS.update(Teardrops.transition.swirl.duration, Teardrops.transition.swirl.alpha, Teardrops.transition.swirl.edge);
            Teardrops.ƒS.Sound.fade(Teardrops.sound.Cinema, 0.3, 1, true);
            await Teardrops.ƒS.update(3);
            Teardrops.ƒS.Character.hideAll();
            Teardrops.ƒS.Speech.clear();
            Teardrops.ƒS.Sound.fade(Teardrops.sound.Cinema, 0, 0.2, false);
        }
        else if (Teardrops.data.score < 5) {
            Teardrops.ƒS.Character.hideAll();
            await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.sad, Teardrops.ƒS.positions.bottomcenter);
            await Teardrops.ƒS.update();
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Tut mir leid. Ich glaube nicht, dass das eine gute Idee ist.");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Natürlich... Das kann ich verstehen.");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "...");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ich geh dann mal lieber. Hab' noch vieles zu erledigen.");
            Teardrops.ƒS.Character.hideAll();
            Teardrops.ƒS.Speech.clear();
            Teardrops.ƒS.Sound.fade(Teardrops.sound.SchoolCrowd, 0, 0.2, false);
            Teardrops.ƒS.Sound.fade(Teardrops.sound.HappyTheme, 0, 0.2, false);
        }
    }
    Teardrops.Scene2 = Scene2;
})(Teardrops || (Teardrops = {}));
var Teardrops;
(function (Teardrops) {
    async function Scene3() {
        let firstDialogueAnswers = {
            Helfen: "Ganz langsam... Was genau ist denn passiert?",
            NichtHelfen: "Ich glaub' nicht, dass ich dir helfen kann."
        };
        let secondDialogueAnswers = {
            NichtsVerloren: "Dann hast du wegen ihm nichts verloren.",
            Eingebrockt: "Das hast du dir bestimmt selbst eingebrockt."
        };
        let badDialogueAnswers = {
            Spaß: "War nur ein Spaß... Wieso hat er Schluss gemacht?",
            Eingebrockt: "Das hast du dir bestimmt selbst eingebrockt."
        };
        Teardrops.characters.MC.name = Teardrops.data.protagonist.name;
        await Teardrops.ƒS.Location.show(Teardrops.locations.MCRoomNight);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "Eine Woche später...");
        await Teardrops.ƒS.update(1);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SadTheme, 0.15, 0.2, true);
        Teardrops.ƒS.Sound.play(Teardrops.sound.DoorKnock, 0.1);
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ja?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Hey, " + Teardrops.data.protagonist.name + "... Kann ich reinkommen?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Klar, was ist denn los?");
        Teardrops.ƒS.Sound.play(Teardrops.sound.Door, 0.1);
        await Teardrops.ƒS.Character.animate(Teardrops.characters.Sophie, Teardrops.characters.Sophie.pose.sad, Teardrops.leftToCenter());
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Ed hat mit mir Schluss gemacht... Ich weiß nicht mehr, was ich machen soll.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Bitte hilf mir, " + Teardrops.data.protagonist.name + "...");
        let firstDialogueElement = await Teardrops.ƒS.Menu.getInput(firstDialogueAnswers, "dialogue");
        switch (firstDialogueElement) {
            case firstDialogueAnswers.Helfen:
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ganz langsam... Was genau ist denn passiert?");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Er meint, ich bin zu emotional für ihn... Er kommt nicht damit klar, dass ich ab und zu Stimmungsschwankungen hab'.");
                //ENDINGS
                let secondDialogueElement = await Teardrops.ƒS.Menu.getInput(secondDialogueAnswers, "dialogue");
                switch (secondDialogueElement) {
                    case secondDialogueAnswers.NichtsVerloren:
                        await Teardrops.ƒS.update(1);
                        await normalGoodEnding();
                        break;
                    case secondDialogueAnswers.Eingebrockt:
                        await Teardrops.ƒS.update(1);
                        await badEnding();
                        break;
                }
                break;
            case firstDialogueAnswers.NichtHelfen:
                await Teardrops.ƒS.update(1);
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ich glaub' nicht, dass ich dir helfen kann.");
                await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Was?! Wieso nicht?");
                let badDialogueElement = await Teardrops.ƒS.Menu.getInput(badDialogueAnswers, "dialogue");
                switch (badDialogueElement) {
                    case badDialogueAnswers.Spaß:
                        await Teardrops.ƒS.update(1);
                        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "War nur ein Spaß... Wieso hat er Schluss gemacht?");
                        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Er meint, ich bin zu emotional für ihn... Er kommt nicht damit klar, dass ich ab und zu Stimmungsschwankungen hab'.");
                        let secondDialogueElement = await Teardrops.ƒS.Menu.getInput(secondDialogueAnswers, "dialogue");
                        switch (secondDialogueElement) {
                            case secondDialogueAnswers.NichtsVerloren:
                                await Teardrops.ƒS.update(1);
                                await normalGoodEnding();
                                break;
                            case secondDialogueAnswers.Eingebrockt:
                                await Teardrops.ƒS.update(1);
                                await badEnding();
                                break;
                        }
                        break;
                    case badDialogueAnswers.Eingebrockt:
                        await Teardrops.ƒS.update(1);
                        await badEnding();
                        break;
                }
                break;
        }
    }
    Teardrops.Scene3 = Scene3;
    async function normalGoodEnding() {
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Mach dir mal keine Sorgen. Wenn das so ist, hast du wegen ihm nichts verloren.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Ich werde bestimmt einsam sterben...");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "So ein Quatsch! Du bist unglaublich liebenswert und hast eh etwas besseres verdient. Du wirst den richtigen noch finden.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Danke...");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Jetzt mach ich dir erst mal einen Tee und dann zocken wir eine Runde Marbels Abengers.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ich weiß, du magst sowas eigentlich gar nicht, aber die Ablenkung wird dir gut tun. Du wirst schon sehen.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Du bist viel zu lieb. Was würde ich nur ohne dich tun...");
        Teardrops.ƒS.Character.hideAll();
        Teardrops.ƒS.Speech.clear();
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SadTheme, 0, 0.2, false);
        await Teardrops.ƒS.Location.show(Teardrops.locations.City);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.HappyTheme, 0.2, 0.2, true);
        await Teardrops.ƒS.Character.animate(Teardrops.characters.Sophie, Teardrops.characters.Sophie.pose.smiling, Teardrops.leftToCenter());
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Und dann hab ich ihm gesagt: 'Du hast eh keinen guten Einfluss auf mich. Ohne dich bin ich besser dran!'");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Das ist doch super!");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Hey, jetzt mal ehrlich. Ich bin dir unglaublich dankbar dafür, dass du für mich da bist.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Es tut echt gut mal wieder normale Sachen mit meinem Bruder zu unternehmen!");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ebenso. Du hast mir nichts zu danken. Schließlich bist du ja auch immer für mich da.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Was das angeht... Wie läufts denn eigentlich gerade mit River? Hast du sie endlich gefragt?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Naja, wir unternehmen viel gemeinsam... Ich weiß nicht genau, was sie sagen würde");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Na los, frag sie doch einfach! Sie wird schon nicht nein sagen!");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ich wüsste nicht wann...");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Frag sie am besten, wenn ihr alleine seid. Der richtige Zeitpunkt wird schon noch kommen.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Gut, ich werde danach Ausschau halten...");
        Teardrops.ƒS.Character.hideAll();
        Teardrops.ƒS.Speech.clear();
        await Teardrops.ƒS.Location.show(Teardrops.locations.Classroom);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        await Teardrops.ƒS.Character.animate(Teardrops.characters.River, Teardrops.characters.River.pose.normal, Teardrops.leftToCenter());
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "Eine Woche später... River und " + Teardrops.data.protagonist.name + " sitzen während der Mittagspause im Klassenzimmer und essen Vesper.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ich finde es übrigens wirklich schön, dass du jeden Tag die Kette trägst.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Sie sieht toll an dir aus.");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.happy, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Danke...");
        Teardrops.ƒS.Sound.fade(Teardrops.sound.HappyTheme, 0, 1, false);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "River, ich muss dir gestehen, dass ich dich ziemlich mag. Ich habe lange darüber nachgedacht und möchte dich etwas fragen.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Willst du meine feste Freundin werden?");
        if (Teardrops.data.score >= 5) {
            Teardrops.ƒS.Character.hideAll();
            await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.embarassed, Teardrops.ƒS.positions.bottomcenter);
            await Teardrops.ƒS.update();
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Oh... Ähm, das hätte ich nicht erwartet...");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Bist du dir wirklich sicher?");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Klar doch.");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Da ist noch etwas, das ich dir sagen müsste...");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Ich falle unter dem Autismus-Spektrum und naja, vielleicht hast du deshalb schon gemerkt, dass ich... anders bin?");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "... Denkst du, du würdest das trotzdem noch wollen?");
            Teardrops.ƒS.Sound.fade(Teardrops.sound.HappyTheme, 0.2, 1, true);
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Natürlich! Damit hätte ich zwar nicht gerechnet, aber ausmachen tut es mir absolut nichts!");
            Teardrops.ƒS.Character.hideAll();
            await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.happy, Teardrops.ƒS.positions.bottomcenter);
            await Teardrops.ƒS.update();
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Dann bin ich glücklich..");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Ich bin auch super glücklich! Ich hatte wirklich Angst davor, was du sagen würdest.");
            Teardrops.ƒS.Character.hideAll();
            await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.normal, Teardrops.ƒS.positions.bottomcenter);
            await Teardrops.ƒS.update();
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Pssst! Da kommt jemand... Ich glaube, der Unterricht fängt bald an...");
            Teardrops.ƒS.Character.hideAll();
            Teardrops.ƒS.Speech.hide();
            await Teardrops.ƒS.update(2);
            Teardrops.ƒS.Sound.fade(Teardrops.sound.HappyTheme, 0, 2, false);
            //HAPPY ENDING
        }
        if (Teardrops.data.score < 5) {
            Teardrops.ƒS.Character.hideAll();
            await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.embarassed, Teardrops.ƒS.positions.bottomcenter);
            await Teardrops.ƒS.update();
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Oh... Ähm, das hätte ich nicht erwartet...");
            Teardrops.ƒS.Sound.fade(Teardrops.sound.MelanchonyTheme, 0.2, 1, true);
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Ich weiß nicht, " + Teardrops.data.protagonist.name + ". Wir sollten vielleicht lieber Freunde bleiben... Ich glaube nicht, dass ich die richtige für dich wäre");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Aber wieso das denn?");
            Teardrops.ƒS.Character.hideAll();
            await Teardrops.ƒS.Character.show(Teardrops.characters.River, Teardrops.characters.River.pose.sad, Teardrops.ƒS.positions.bottomcenter);
            await Teardrops.ƒS.update();
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "...");
            await Teardrops.ƒS.Speech.tell(Teardrops.characters.River, "Entschuldige bitte, der Unterricht fängt bald an. Ich müsste noch auf die Toilette..");
            Teardrops.ƒS.Character.hideAll();
            Teardrops.ƒS.Speech.hide();
            await Teardrops.ƒS.update(2);
            Teardrops.ƒS.Sound.fade(Teardrops.sound.MelanchonyTheme, 0, 1, false);
            //NORMAL ENDING
        }
    }
    async function badEnding() {
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Das hast du dir bestimmt selbst eingebrockt.");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.Character.show(Teardrops.characters.Sophie, Teardrops.characters.Sophie.pose.angry, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update();
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Sophie, "Auf dich kann man sich nicht verlassen. Das war ja klar. Danke für nichts!");
        Teardrops.ƒS.Character.hideAll();
        await Teardrops.ƒS.update();
        Teardrops.ƒS.Sound.play(Teardrops.sound.Door, 0.1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Ob ich wohl zu grob war?)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Was auch immer... Sie benimmt sich ja auch nicht immer wie die tollste Schwester.)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Außerdem ist es ja sogesehen wirklich ihre Schuld. Ich darf doch wohl noch die Wahrheit sagen...)");
        Teardrops.ƒS.Sound.fade(Teardrops.sound.SadTheme, 0, 1, false);
        Teardrops.ƒS.Speech.clear();
        await Teardrops.ƒS.Location.show(Teardrops.locations.MCRoomDay);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.GameTheme, 0.1, 1, true);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "Eine Woche später...");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Wo ist denn eigentlich Sophie? Ich hab' sie jetzt seit fünf Tagen nicht gesehen...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Es ist ja normal, dass sie oft nicht zu Hause ist, aber so lange? Hoffentlich ist ihr nichts passiert...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Ich schreib' ihr lieber mal...)");
        Teardrops.ƒS.Sound.fade(Teardrops.sound.GameTheme, 0.05, 1, true);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Hey Sophie, sorry, dass ich so gemein zu dir war... Ist denn alles in Ordnung bei dir?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Komisch... Die Nachricht kommt nicht an. Anscheinend ist ihr Handy aus.)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Vielleicht rufe ich lieber die Polizei und melde sie als vermisst.)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Hallo? Ich möchte meine Schwester als vermisst melden...");
        Teardrops.ƒS.Sound.fade(Teardrops.sound.GameTheme, 0, 2, false);
        Teardrops.ƒS.Speech.clear();
        await Teardrops.ƒS.Location.show(Teardrops.locations.MCRoomDay);
        await Teardrops.ƒS.update(Teardrops.transition.clock.duration, Teardrops.transition.clock.alpha, Teardrops.transition.clock.edge);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "Am nächsten Tag...");
        Teardrops.ƒS.Sound.play(Teardrops.sound.DoorBell, 0.2);
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Hallo?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Polizist, "Hallo junger Mann. Ist jemand von Ihren Erziehungsberechtigten da?");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Nein, Herr Officer... Haben Sie Neuigkeiten über meine Schwester erfahren?");
        Teardrops.ƒS.Sound.fade(Teardrops.sound.MelanchonyTheme, 0.1, 1, true);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Polizist, "Ja... Es tut mir Leid, Ihnen mitteilen zu müssen, dass Ihre Schwester wohl Suizid begangen hat.");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "Nein, das kann nicht sein...");
        await Teardrops.ƒS.Location.show(Teardrops.locations.Graveyard);
        await Teardrops.ƒS.update(Teardrops.transition.teardrop.duration, Teardrops.transition.teardrop.alpha, Teardrops.transition.teardrop.edge);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Wie kann ich nur so verdammt nochmal dumm sein... Ich bin Schuld an allem!)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(......)");
        Teardrops.ƒS.Sound.fade(Teardrops.sound.Rain, 0.15, 2, true);
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Es fängt an zu regnen...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Ist ja auch egal...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Wie viel Zeit wohl schon vergangen ist?)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Vielleicht fühl' ich mich ja lebendiger, wenn ich mich etwas bewege...)");
        await Teardrops.ƒS.Location.show(Teardrops.locations.City);
        await Teardrops.ƒS.update(Teardrops.transition.teardrop.duration, Teardrops.transition.teardrop.alpha, Teardrops.transition.teardrop.edge);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Ob River auch so enden wird, wenn sie von meiner wahren Intention erfährt...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(Ich bin ein Monster.)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.MC, "(...)");
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.UnbekannteFrau, "Oh mein Gott! Pass auf!!");
        Teardrops.ƒS.Sound.play(Teardrops.sound.CarCrash, 0.2);
        Teardrops.ƒS.Speech.hide();
        Teardrops.ƒS.Sound.fade(Teardrops.sound.MelanchonyTheme, 0, 1, false);
        await Teardrops.ƒS.Location.show(Teardrops.locations.Black);
        await Teardrops.ƒS.update(2);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.EmergencySiren, 0.3, 0);
        await Teardrops.ƒS.update(6);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.EmergencySiren, 0, 1);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.Heartbeat, 0.2, 1, false);
        await Teardrops.ƒS.update(4);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.Heartbeat, 0, 1, false);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.Rain, 0, 1, false);
        //BAD ENDING
    }
})(Teardrops || (Teardrops = {}));
var Teardrops;
(function (Teardrops) {
    async function End() {
        await Teardrops.ƒS.Location.show(Teardrops.locations.End);
        Teardrops.ƒS.Sound.fade(Teardrops.sound.EndingTheme, 0.1, 2);
        await Teardrops.ƒS.update(2);
    }
    Teardrops.End = End;
})(Teardrops || (Teardrops = {}));
var Teardrops;
(function (Teardrops) {
    Teardrops.ƒ = FudgeCore;
    Teardrops.ƒS = FudgeStory;
    let menuOpened = true;
    Teardrops.transition = {
        teardrop: {
            duration: 1,
            alpha: "Transitions/teardrop.png",
            edge: 0.3
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
    Teardrops.sound = {
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
        CarCrash: "Audio/car_crash.wav",
        EmergencySiren: "Audio/emergency_siren.mp3",
        Heartbeat: "Audio/heartbeat.wav"
    };
    Teardrops.locations = {
        Startscreen: {
            name: "Startscreen",
            background: "Images/Backgrounds/startscreen.jpg"
        },
        Black: {
            name: "Black",
            background: "Images/Backgrounds/black.jpg"
        },
        Cinema: {
            name: "Kino",
            background: "Images/Backgrounds/cinema.jpg"
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
        End: {
            name: "The End",
            background: "Images/Backgrounds/end.jpg"
        },
        Foyer: {
            name: "Foyer",
            background: "Images/Backgrounds/foyer.jpg"
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
        WcTonalds: {
            name: "WcTonalds",
            background: "Images/Backgrounds/wctonalds.jpg"
        }
    };
    Teardrops.data = {
        protagonist: {
            name: ""
        },
        score: 0,
        state: {
            a: 1
        }
    };
    // define characters
    Teardrops.characters = {
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
            name: Teardrops.data.protagonist.name,
            origin: Teardrops.ƒS.ORIGIN.BOTTOMCENTER,
            pose: { normal: "Images/Characters/MC.png" }
        },
        Ben: {
            name: "Ben",
            origin: Teardrops.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Teardrops.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/river-normal.png",
                happy: "Images/Characters/river-happy.png",
                sad: "Images/Characters/river-sad.png",
                embarassed: "Images/Characters/river-embarassed.png"
            }
        },
        Sophie: {
            name: "Sophie",
            origin: Teardrops.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Teardrops.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/king-normal.png",
                annoyed: "Images/Characters/king-annoyed.png",
                angry: "Images/Characters/king-angry.png"
            }
        },
    };
    function leftToRight() {
        return {
            start: { translation: Teardrops.ƒS.positions.bottomleft },
            end: { translation: Teardrops.ƒS.positionPercent(71, 100) },
            duration: 2,
            playmode: Teardrops.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Teardrops.leftToRight = leftToRight;
    function leftToCenter() {
        return {
            start: { translation: Teardrops.ƒS.positions.bottomleft },
            end: { translation: Teardrops.ƒS.positions.bottomcenter },
            duration: 1.5,
            playmode: Teardrops.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Teardrops.leftToCenter = leftToCenter;
    function lefterToLeft() {
        return {
            start: { translation: Teardrops.ƒS.positions.bottomleft },
            end: { translation: Teardrops.ƒS.positionPercent(31, 100) },
            duration: 1,
            playmode: Teardrops.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Teardrops.lefterToLeft = lefterToLeft;
    Teardrops.items = {
        Necklace: {
            name: "Halskette",
            description: "Eine schöne Halskette mit einem Tropfenanhänger aus Mondstein.",
            image: "Images/Items/necklace.jpg",
            handler: hndItem
        }
    };
    function hndItem(_event) {
        console.log(_event);
    }
    Teardrops.hndItem = hndItem;
    Teardrops.igMenu = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        volumeUp: "+",
        volumeDown: "-",
        close: "Close"
    };
    let volume = 5.0;
    function incrementSound() {
        if (volume >= 10)
            return;
        volume += 0.5;
        Teardrops.ƒS.Sound.setMasterVolume(volume);
    }
    Teardrops.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        Teardrops.ƒS.Sound.setMasterVolume(volume);
    }
    Teardrops.decrementSound = decrementSound;
    function showCredits() {
        Teardrops.ƒS.Text.addClass("credits");
        Teardrops.ƒS.Text.print("This is a Visual Novel Created with FudgeStory. Claudia Wegen is the author and Riem Yasin was the assisting lecturer for this project." + '<br/>' + "Characters are taken from The Sims 4. Big Thanks to Electronic Arts!" + '<br/>' + " Main Theme: Always Remember to Never Forget - The Whole Other" + '<br/>' + "Beginning Theme: Dolphin-esque - Godmode" + '<br/>' + "Sad Theme: No.8 Requiem - Esther Abrami" + '<br/>' + "Melanchony Theme: Through and Through - Amulets" + '<br/>' + "Angry Theme: Raging Streets - SefChol" + '<br/>' + "Ending Theme: Before I Go - RKVC");
    }
    Teardrops.showCredits = showCredits;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        if (_option == Teardrops.igMenu.save) {
            await Teardrops.ƒS.Progress.save();
        }
        else if (_option == Teardrops.igMenu.load) {
            await Teardrops.ƒS.Progress.load();
        }
        else if (_option == Teardrops.igMenu.volumeUp) {
            incrementSound();
        }
        else if (_option == Teardrops.igMenu.volumeDown) {
            decrementSound();
        }
        else if (_option == Teardrops.igMenu.close) {
            let menuElem = document.getElementsByClassName("gameMenu")[0];
            menuElem.style.display = "none";
            menuOpened = false;
        }
        else if (_option == Teardrops.igMenu.credits) {
            showCredits();
        }
    }
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Teardrops.ƒ.KEYBOARD_CODE.F4:
                await Teardrops.ƒS.Progress.save();
                break;
            case Teardrops.ƒ.KEYBOARD_CODE.F8:
                await Teardrops.ƒS.Progress.load();
                break;
            case Teardrops.ƒ.KEYBOARD_CODE.ESC:
                let menuElem = document.getElementsByClassName("gameMenu")[0];
                if (menuOpened) {
                    menuElem.style.display = "none";
                    menuOpened = false;
                }
                else {
                    menuElem.style.display = "block";
                    menuOpened = true;
                }
                break;
        }
    }
    window.addEventListener("DOMContentLoaded", start);
    function start(_event) {
        //define the sequence of scene, each scene as an object with reference to the 
        let scenes = [
            { scene: Teardrops.Start, name: "Start Scene" },
            { scene: Teardrops.Scene1, name: "Abschnitt 1" },
            { scene: Teardrops.Scene2, name: "Abschnitt 2" },
            { scene: Teardrops.Scene3, name: "Abschnitt 3" },
            { scene: Teardrops.End, name: "The End" }
        ];
        Teardrops.gameMenu =
            Teardrops.ƒS.Menu.create(Teardrops.igMenu, buttonFunctionalities, "gameMenu");
        //start the sequence
        Teardrops.ƒS.Progress.setData(Teardrops.data);
        Teardrops.ƒS.Progress.go(scenes);
        Teardrops.ƒS.Inventory.add(Teardrops.items.Necklace);
    }
    // let sceneParent = document.getElementById("scene");
    // window.addEventListener("load", appendChild);
    // function appendChild(_event: Event): void {
    //     console.log(sceneParent);
    //     sceneParent.appendChild(ƒS.Menu);
    // }
    Teardrops.ƒS.Sound.setMasterVolume(volume);
})(Teardrops || (Teardrops = {}));
var Teardrops;
(function (Teardrops) {
    async function Start() {
        Teardrops.ƒS.Sound.fade(Teardrops.sound.StartTheme, 0.07, 0.1, true);
        await Teardrops.ƒS.Location.show(Teardrops.locations.Startscreen);
        await Teardrops.ƒS.update(2);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "Willkommen zur Visual Novel 'Teardrops'. Bevor du loslegst, gäbe es da noch etwas.");
        await Teardrops.ƒS.Character.show(Teardrops.characters.MC, Teardrops.characters.MC.pose.normal, Teardrops.ƒS.positions.bottomcenter);
        await Teardrops.ƒS.update(1);
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, "Dies hier ist der Protagonist der Geschichte. Du wirst gleich in seine Rolle schlüpfen. Doch davor möchte ich, dass du dir einen Namen für ihn ausdenkst.", false);
        Teardrops.data.protagonist.name = await Teardrops.ƒS.Speech.getInput();
        await Teardrops.ƒS.update(1);
        Teardrops.characters.MC.name = Teardrops.data.protagonist.name;
        await Teardrops.ƒS.Speech.tell(Teardrops.characters.Narrator, Teardrops.data.protagonist.name + "? Ein schöner Name. Dann kann die Visual Novel doch auch schon starten! Viel Spaß beim Spielen!", true);
        Teardrops.ƒS.Character.hideAll();
        Teardrops.ƒS.Speech.clear();
        Teardrops.ƒS.Sound.fade(Teardrops.sound.StartTheme, 0, 0.2, true);
        await Teardrops.ƒS.update(2);
    }
    Teardrops.Start = Start;
})(Teardrops || (Teardrops = {}));
//# sourceMappingURL=Template.js.map