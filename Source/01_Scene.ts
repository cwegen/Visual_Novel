namespace Template {
  export async function Scene1(): ƒS.SceneReturn {

    let firstDialogueAnswers = {
      iSayWait: "Warte!",
      iSayNothing: "..."
    };

    characters.MC.name = data.protagonist.name;
    ƒS.Sound.fade(sound.HappyTheme, 0.2, 0.1, true);
    ƒS.Sound.fade(sound.SchoolCrowd, 0.4, 0.2, true);
    await ƒS.Location.show(locations.Classroom);
    await ƒS.update(4);
    ƒS.Sound.fade(sound.SchoolCrowd, 0 , 0.2, false);
    ƒS.Sound.play(sound.SchoolBell, 0.1, false);
    await ƒS.update(2);
    ƒS.Sound.play(sound.Door, 0.1, false);
    await ƒS.update(2);
    await ƒS.Character.animate(characters.King, characters.King.pose.normal, leftToRight());
    await ƒS.update(1);
    ƒS.Speech.show;
    await ƒS.Speech.tell(characters.King, "So, Kinder. Zum Start der wertvollen Stunde möchte ich gerne von Euch wissen, welche fünf Standortfaktoren für ein Unternehmen am wichtigsten sind.", true);
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.King, characters.King.pose.annoyed, ƒS.positionPercent(71, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.King, "Keine Freiwilligen? Na gut, dann hilf du mir doch mal weiter, Amelia.");
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.River, characters.River.pose.embarassed, ƒS.positionPercent(31, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.River, "Ähm... Tut mir leid, Herr King. Ich kann Ihnen die Frage leider nicht beantworten...");
    ƒS.Character.hideAll();    
    await ƒS.Character.show(characters.King, characters.King.pose.angry, ƒS.positionPercent(71, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.King, "Das kann doch nicht sein! Die letzte Stunde war doch erst vor zwei Tagen! Kann in diesem Raum überhaupt jemand etwas?");
    await ƒS.Character.hide(characters.King);
    await ƒS.update(1);
    await ƒS.Character.animate(characters.Ben, characters.Ben.pose.normal, lefterToLeft());
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Ben, "Die Antwort auf Ihre eigentliche Frage lautet Grundstückflächen, Gebäude, Materialien, Energieversorgung und Staatsleistungen.");
    await ƒS.Character.show(characters.King, characters.King.pose.normal, ƒS.positionPercent(71, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.King, "Na seht ihr. So lässt sich die Stunde doch schon viel angenehmer gestalten.");
    await ƒS.update(2);
    ƒS.Speech.clear();
    ƒS.Character.hideAll();
    await ƒS.update(1);
    ƒS.Sound.play(sound.SchoolBell, 0.1, false);
    ƒS.Sound.fade(sound.SchoolCrowd, 0.4, 0.2, true);
    await ƒS.update(1);

    await ƒS.Location.show(locations.School);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Speech.tell(characters.Ben, "Haaaalt! " + data.protagonist.name + ", warte auf mich!");
    await ƒS.Character.animate(characters.Ben, characters.Ben.pose.cheeky, leftToCenter());
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Ben, "Puh, gut dass ich dich noch erwischt hab. Hast du heute noch was zu tun?");
    await ƒS.Speech.tell(characters.Ben, "Ich hab meine PS4 dabei... Wenn du willst, können wir bei dir ein bisschen Marbel's Abengers zocken? Na, was meinst du?");
    await ƒS.Speech.tell(characters.MC, "Klar, Mama ist heute eh nicht da und Sophie wird wahrscheinlich auch wieder weg sein. Lass uns gehen.");
    ƒS.Sound.fade(sound.SchoolCrowd, 0, 2, true);
    ƒS.Character.hideAll();
    ƒS.Speech.clear();
    ƒS.Sound.fade(sound.HappyTheme, 0, 0.2, true);
    await ƒS.update(1);

    await ƒS.Location.show(locations.MCRoomDay);
    await ƒS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);
    await ƒS.Speech.tell(characters.Ben, "Und los gehts!");
    ƒS.Sound.fade(sound.GameTheme, 0.1, 0.2, true);
    await ƒS.Location.show(locations.MCRoomNight);
    await ƒS.update(5);
    await ƒS.Character.show(characters.Ben, characters.Ben.pose.normal, ƒS.positionPercent(71, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Ben, "Es ist schon ziemlich spät geworden... Vielleicht sollte ich besser ma-");
    ƒS.Sound.play(sound.Door, 0.2, false);
    await ƒS.Character.animate(characters.Sophie, characters.Sophie.pose.angry, lefterToLeft());
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Sophie, "Was ist denn hier schon wieder los?! Warum müsst ihr IMMER nur vor dieser dummen Konsole hocken? Wie wärs mal damit, etwas produktives zu machen?");
    await ƒS.Speech.tell(characters.Sophie, "Na los, worauf wartet ihr denn? Ben, du bist nicht besser. Verschwinde nun lieber von hier.");
    await ƒS.Speech.tell(characters.Ben, "Entschuldigung, Ma'am. Ich wollte eh schon gehen... Sorry, " + data.protagonist.name + ". Ich schreib dir nachher.");
    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueAnswers, "dialogue");
     switch (firstDialogueElement) {

       case firstDialogueAnswers.iSayWait:
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.MC, "Hey, warte doch mal... Ich komme mit!");
        await ƒS.update(1);
        ƒS.Character.hide(characters.Ben);        
        await ƒS.update(1);
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Sophie, characters.Sophie.pose.sad, ƒS.positionPercent(31, 100));        
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Sophie, "Niemand hört auf mich...");
        ƒS.Character.hideAll();
        ƒS.Sound.fade(sound.GameTheme, 0, 0.2, false);
        ƒS.Speech.clear();
        await ƒS.update(1);
        await ƒS.Location.show(locations.Playground);
        await ƒS.update(transition.teardrop.duration, transition.teardrop.alpha, transition.teardrop.edge);
        ƒS.Sound.fade(sound.Crickets, 0.2 , 2, true);
        await ƒS.Character.show(characters.Ben, characters.Ben.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Ben, "Das war ziemlich verrückt... Ist deine Schwester immer so?");
        await ƒS.Speech.tell(characters.MC, "Naja, ab und zu kommt sie betrunken nach Hause und wirft die ganze Bude durcheinander...");
        await ƒS.Speech.tell(characters.MC, "Heute scheint auch so ein Fall gewesen zu sein. Sorry dafür, bro.");
        await ƒS.Speech.tell(characters.Ben, "Alles gut, sowas bin ich ja auch schon vom King gewohnt.");
        await ƒS.Speech.tell(characters.MC, "Haha stimmt! Da sind wir schon abgehärtet...");
        await ƒS.Speech.tell(characters.MC, "...");
        await ƒS.Speech.tell(characters.MC, "Aber meinst du nicht, dass Sophie irgendwo etwas Recht hat?");
        await ƒS.Speech.tell(characters.MC, "Ich meine, was haben wir bis heute erreicht? Außerdem bin ich echt langweilig. Alles was ich kann ist E-Gitarre spielen und zocken...");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Ben, characters.Ben.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Ben, "Bro, wie kommst du darauf... Du bist Einzigartig.");
        await ƒS.Speech.tell(characters.MC, "Halt die Klappe. Ich brauche etwas, um wirklich herausstechen zu können..");
        await ƒS.Speech.tell(characters.MC, "Etwas besonderes, wie River. Schau sie dir mal an, kein Mädchen ist wie sie. Sie ist komplett anders.");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Ben, characters.Ben.pose.angry, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Ben, "Yo, meinst du das gerade ernst?");
        await ƒS.Speech.tell(characters.MC, "Leider ja... Das ist mein voller Ernst.");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Ben, characters.Ben.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Ben, "Gut... Tu, was auch immer dich glücklich macht. Aber denk' dran, dass auch sie Gefühle hat.");
        ƒS.Character.hideAll();
        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.Crickets, 0, 0.2, false);
        await ƒS.update(1);
        break;

      case firstDialogueAnswers.iSayNothing:
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.MC, "...");
        ƒS.Sound.fade(sound.GameTheme, 0, 2, false);
        ƒS.Character.hideAll();
        await ƒS.update(1);
        await ƒS.Character.show(characters.Sophie, characters.Sophie.pose.normal, ƒS.positionPercent(31, 100));    
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Sophie, "Ich mag dich echt gern', " + data.protagonist.name + ". Du bist mein Bruder. Aber trotzdem musst du dir mal bewusst werden, dass du es zu nichts bringst, wenn du den ganzen Tag Videospiele spielst.");
        await ƒS.Speech.tell(characters.MC, "Ich weiß doch... Weißt du, ich hab das Gefühl, dass ich einfach nur existiere. Ich fühle mich wie der Nebencharakter der Geschichte.");
        await ƒS.Speech.tell(characters.MC, "Glaubst du, ich würde mehr schaffen, wenn ich mich besser fühle? Wenn ich das Loch in mir stopfen würde?");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Sophie, characters.Sophie.pose.smiling, ƒS.positionPercent(31, 100));  
        await ƒS.update();
        await ƒS.Speech.tell(characters.Sophie, "Klar doch. Du weißt, dass ich dich immer unterstütze.");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Sophie, characters.Sophie.pose.normal, ƒS.positionPercent(31, 100)); 
        await ƒS.update();
        await ƒS.Speech.tell(characters.Sophie, "Übrigens... Das von vorhin tut mir Leid... Ich glaube, ich habe wieder etwas zu viel getrunken... Du weißt, dass ich dann immer schnell wütend werde.");
        await ƒS.Speech.tell(characters.MC, "Schon verziehen! Ich weiß, du meinst es trotzdem gut.");
        await ƒS.Speech.tell(characters.Sophie, "Danke... Ich geh' dann mal wieder in mein Zimmer.");
        ƒS.Sound.play(sound.Door, 0.2, false);
        ƒS.Speech.clear();
        await ƒS.update(1);
        ƒS.Character.hideAll();
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.MC, "(Hmm... Ich schreib' Ben mal lieber.)");
        await ƒS.Speech.tell(characters.MC, "Hey Ben. Hab mich spontan entschieden. Ich werd morgen Mittag River ansprechen.");
        await ƒS.Speech.tell(characters.Ben, "Was, wieso? Hab ich was verpasst?");
        await ƒS.Speech.tell(characters.MC, "Ich hab gerade einfach das Bedürfnis nach was Neuem... Du weißt doch, dass ich mit ihr zusammen viel mehr auffallen würde. ;)");
        await ƒS.Speech.tell(characters.Ben, "Okay... Dann viel Spaß mit deinen Spielchen... o.o");
        await ƒS.Speech.tell(characters.Ben, "Ich weiß gar nicht, was ich dazu noch sagen soll...");
        ƒS.Speech.clear();
        await ƒS.update(1);
        break;
    }

  }

}