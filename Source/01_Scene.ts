namespace Template {
  export async function Scene1(): ƒS.SceneReturn {
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

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueAnswers, "dialogue");

    
  
    console.log("Scene 1 Start");

    ƒS.Sound.fade(sound.HappyTheme, 0.2, 0.1, true);
    // ƒS.Sound.fade(sound.SchoolCrowd, 0.4, 0.2, true);
    await ƒS.Location.show(locations.Classroom);
    // await ƒS.update(4);
    // ƒS.Sound.fade(sound.SchoolCrowd, 0 , 0.2, false);
    // ƒS.Sound.play(sound.SchoolBell, 0.1, false);
    await ƒS.update(2);
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
    await ƒS.Speech.tell(characters.King, "Na seht ihr. So lässt sich die Stunde doch schon viel angenehmer gestalten.");
    await ƒS.update(2);
    ƒS.Speech.clear();
    ƒS.Character.hideAll();
    await ƒS.update(1);
    ƒS.Sound.play(sound.SchoolBell, 0.1, false);
    ƒS.Sound.fade(sound.SchoolCrowd, 0.4 , 0.2, true);
    await ƒS.update(1);
    await ƒS.Location.show(locations.School);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Speech.tell(characters.Ben, "Haaaalt! " + data.protagonist.name + ", warte auf mich!");
    await ƒS.Character.animate(characters.Ben, characters.Ben.pose.cheeky, leftToCenter());
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Ben, "Puh, gut dass ich dich noch erwischt hab. Hast du heute noch was zu tun?");
    await ƒS.Speech.tell(characters.Ben, "Ich hab meine PS4 dabei... Wenn du willst, können wir bei dir ein bisschen Marbel's Abengers zocken? Na, was meinst du?");

    switch (firstDialogueElement) {
      case firstDialogueAnswers.iSayYes:
        data.score += 20;
    await ƒS.Speech.tell(characters.MC, "Klar, Mama ist heute eh nicht da und Sophie wird wahrscheinlich auch wieder weg sein. Lass uns gehen.");

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