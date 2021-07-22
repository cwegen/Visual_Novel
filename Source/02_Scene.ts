namespace Template {
  export async function Scene2(): ƒS.SceneReturn {


    let firstDialogueAnswers = {
      Hemd: "kariertes Hemd",
      Anzug: "Anzug"
    };

    let secondDialogueAnswers = {
      Beeindruckend: "Beeindruckend...",
      Omas: "Lesen sowas nicht nur Omas?"
    };

    let thirdDialogueAnswers = {
      Dotdotdot: "...",
      Verstehen: "Sie wird es schon verstehen."
    };

    characters.MC.name = data.protagonist.name;
    ƒS.Sound.fade(sound.HappyTheme, 0.2, 1, true);
    ƒS.Sound.fade(sound.SchoolCrowd, 0.4, 1, true);
    await ƒS.Location.show(locations.School);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Speech.tell(characters.MC, "(Da ist River...)");
    await ƒS.Speech.tell(characters.Narrator, "River sitzt auf einer Bank und liest ein Buch nach dem Unterricht.");
    await ƒS.Speech.tell(characters.MC, "Hey, River.");
    await ƒS.Character.animate(characters.River, characters.River.pose.normal, leftToCenter());
    await ƒS.update();
    await ƒS.Speech.tell(characters.River, "Hallo, " + data.protagonist.name + ".");
    await ƒS.Speech.tell(characters.MC, "Darf ich mich setzen?");
    await ƒS.Speech.tell(characters.River, "Klar.");
    await ƒS.Speech.tell(characters.MC, "Danke. Ich dachte mir, dass du eventuell gerne mal etwas Gesellschaft hättest. Wie wärs, hättest du Lust, morgen mit mir zum WcTonalds zu gehen?");
    await ƒS.Speech.tell(characters.River, "Hmm... Ich weiß ja nicht.");
    await ƒS.Speech.tell(characters.MC, "Ach komm schon. Nur einmal.");
    await ƒS.Speech.tell(characters.River, "...");
    await ƒS.Speech.tell(characters.River, "......");
    await ƒS.Speech.tell(characters.River, "Na gut.");
    await ƒS.Speech.tell(characters.MC, "Super, ich freu mich. Dann bis morgen! Machs gut!");
    await ƒS.Speech.tell(characters.River, "Bis morgen.");
    ƒS.Character.hideAll();
    await ƒS.update(2);
    await ƒS.Character.animate(characters.Ben, characters.Ben.pose.normal, leftToCenter());
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Ben, "Und? Was hat sie gesagt?");
    await ƒS.Speech.tell(characters.MC, "Sie hat angebissen.");
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Ben, characters.Ben.pose.angry, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.Ben, "Oh Mann... Und du hast kein schlechtes Gewissen dabei?");
    await ƒS.Speech.tell(characters.MC, "Ach, sie wird schon damit klar kommen. Es ist ja nicht so, als ob ich sie nicht süß fände... Es ist nur ein kleiner Bonus, dass sie so anders ist.");
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Ben, characters.Ben.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.Ben, "Ich hoffe, du magst sie wirklich... Naja, was auch immer. Man sieht sich dann.");
    await ƒS.Speech.tell(characters.MC, "Jo, bis morgen.");
    ƒS.Character.hideAll();
    ƒS.Speech.clear();
    ƒS.Sound.fade(sound.SchoolCrowd, 0, 0.2, false);
    await ƒS.update(1);

    await ƒS.Location.show(locations.MCRoomDay);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Speech.tell(characters.Narrator, "Am nächsten Morgen.");
    await ƒS.Speech.tell(characters.MC, "(Was zieh ich denn heute an...)");
    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueAnswers, "dialogue");
    switch (firstDialogueElement) {
      case firstDialogueAnswers.Hemd:
        await ƒS.update(1);
        data.score += 5;
        await ƒS.Speech.tell(characters.MC, "(Das wird ausreichen... Besser, als beim Mittagessen overdressed zu sein...)");
        break;
      case firstDialogueAnswers.Anzug:
        await ƒS.update(1);
        data.score -= 5;
        await ƒS.Speech.tell(characters.MC, "(Sie soll besser sehen, dass ich mich anstrenge...)");
        break;
    }
    ƒS.Speech.clear();
    await ƒS.update(1);
    await ƒS.Location.show(locations.WcTonalds);
    await ƒS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);
    ƒS.Sound.fade(sound.RestaurantCrowd, 0.2, 1, true);
    await ƒS.Character.animate(characters.River, characters.River.pose.normal, leftToCenter());
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.MC, "Also... Was hättest du denn gerne?");
    await ƒS.Speech.tell(characters.River, "Ich hätte gerne Pommes.");
    await ƒS.Speech.tell(characters.MC, "Haha, was? Dann komm ich mir aber blöd vor mit meinem BigWac!");
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.River, characters.River.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.River, "Tja, nicht mein Problem.");
    await ƒS.Speech.tell(characters.MC, "Was hast du denn gestern eigentlich gelesen?");
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.River, characters.River.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.River, "In dem Buch geht es um die Kunst des Origami-Faltens.");
    let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueAnswers, "dialogue");
    switch (secondDialogueElement) {
      case secondDialogueAnswers.Beeindruckend:
        await ƒS.update(1);
        data.score += 10;
        await ƒS.Speech.tell(characters.MC, "Kannst du denn sowas auch?");
        await ƒS.Speech.tell(characters.River, "Naja, mehr oder weniger.");
        await ƒS.Speech.tell(characters.MC, "Das musst du mir mal zeigen!");
        await ƒS.Speech.tell(characters.Narrator, "River faltet aus der Serviette einen Hasen.");
        await ƒS.Speech.tell(characters.MC, "Wow, das ist beeindruckend.");
        break;
      case secondDialogueAnswers.Omas:
        await ƒS.update(1);
        data.score -= 10;
        await ƒS.Speech.tell(characters.MC, "Was? Das ist ja schräg. Lesen sowas nicht nur Omas?");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.River, characters.River.pose.sad, ƒS.positions.bottomcenter);
        await ƒS.update();
        await ƒS.Speech.tell(characters.River, "Toll, dass du mich so ernst nimmst...");
        await ƒS.Speech.tell(characters.MC, "Das war nicht so gemeint. Ich machte doch nur Witze!");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.River, characters.River.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update();
        await ƒS.Speech.tell(characters.River, "Wirklich?");
        await ƒS.Speech.tell(characters.MC, "Ja, du kannst mir vertrauen.");
        await ƒS.Speech.tell(characters.River, "Okay...");
    }
    await ƒS.Speech.tell(characters.MC, "Hey, hättest du Lust morgen wieder mit mir essen zu gehen? Wir können ja wo anders hin. Du scheinst ja WcTonalds nicht besonders zu mögen.");
    await ƒS.Speech.tell(characters.River, "WcTonalds ist schon in Ordnung...");
    await ƒS.Speech.tell(characters.MC, "Na dann, lass uns doch wieder hierher gehen.");
    await ƒS.Speech.tell(characters.River, "Okay.");
    ƒS.Character.hideAll();
    ƒS.Speech.clear();
    ƒS.Sound.fade(sound.RestaurantCrowd, 0, 0.2, false);
    await ƒS.update(1);
    await ƒS.Location.show(locations.Black);
    ƒS.Speech.hide();
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Location.show(locations.WcTonalds);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    ƒS.Sound.fade(sound.RestaurantCrowd, 0.2, 1, true);
    await ƒS.Character.animate(characters.River, characters.River.pose.normal, leftToCenter());
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Einige Male später...");
    await ƒS.Speech.tell(characters.MC, "Hey, River... Ich mag dich echt gerne und wollte dir das hier schenken... Ich finde, es passt perfekt zu dir.");


    let usednecklace: boolean = false;

    do {

      if ((await ƒS.Inventory.open()).includes("Halskette")) {
        console.log("check");
        usednecklace = true;
      }
      else {
        await ƒS.Speech.tell(characters.Narrator, "Versuch es nochmal!");
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
    await ƒS.Speech.tell(characters.River, "Oh... Danke. Das hätte ich nicht erwartet...");
    await ƒS.Speech.tell(characters.MC, "Ich hoffe sie gefällt dir!");
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.River, characters.River.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.River, "Ja, die Kette ist wirklich wunderschön. Ich werde gut auf sie aufpassen.");
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.River, characters.River.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.River, "...");
    await ƒS.Speech.tell(characters.River, "Sorry, ich muss leider dringend gehen.");
    await ƒS.Speech.tell(characters.MC, "Aber...");
    ƒS.Character.hideAll();
    ƒS.Speech.clear();
    ƒS.Sound.fade(sound.RestaurantCrowd, 0, 0.2, false);

    await ƒS.Location.show(locations.School);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    ƒS.Sound.fade(sound.SchoolCrowd, 0.4, 0.2, true);
    await ƒS.Character.animate(characters.Ben, characters.Ben.pose.angry, leftToCenter());
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Ben, "Und? Bist du nun zufrieden?");
    await ƒS.Speech.tell(characters.MC, "Nun sei nicht so... Gönn mir doch mal ein bisschen Spaß. Ich bin mir sicher, dass es River auch gut tut.");
    await ƒS.Speech.tell(characters.Ben, "Sicher nicht, wenn sie von deinen Absichten erfährt.");
    let thirdDialogueElement = await ƒS.Menu.getInput(thirdDialogueAnswers, "dialogue");
    switch (thirdDialogueElement) {
      case thirdDialogueAnswers.Dotdotdot:
        await ƒS.update(1);
        data.score += 10;
        await ƒS.Speech.tell(characters.MC, "...");
        await ƒS.Speech.tell(characters.Ben, "Du musst wirklich mal mit den Spielchen aufhören.");
        await ƒS.Speech.tell(characters.MC, "Komm, gib mir bitte 'ne Pause...");
        break;
      case thirdDialogueAnswers.Verstehen:
        await ƒS.update(1);
        data.score -= 10;
        await ƒS.Speech.tell(characters.MC, "Sie wird es schon verstehen. Außerdem mag ich sie doch wirklich!");
        await ƒS.Speech.tell(characters.Ben, "Aber aus welchem Grund denn...");
        break;
    }
    ƒS.Character.hideAll();
    ƒS.Speech.clear();
    ƒS.Sound.fade(sound.SchoolCrowd, 0, 0.2, false);
    await ƒS.Location.show(locations.Black);
    ƒS.Speech.hide();
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Location.show(locations.School);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    ƒS.Sound.fade(sound.SchoolCrowd, 0.4, 0.2, false);
    await ƒS.Speech.tell(characters.Narrator, "Ein paar Tage später...");
    await ƒS.Character.animate(characters.River, characters.River.pose.normal, leftToCenter());
    await ƒS.Speech.tell(characters.MC, "River! Ich wusste, dass ich dich wieder hier finden würde.");
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.River, characters.River.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.River, data.protagonist.name + ", hallo. Schön dich zu sehen.");
    await ƒS.Speech.tell(characters.MC, "Ebenso! Du, ähm.. Ich fände es toll, wenn wir mal zusammen ins Kino gehen würden..");
    await ƒS.Speech.tell(characters.MC, "Und einen Film zusammen anschauen würden, was meinst du?");
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.River, characters.River.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.River, "...");

    if (data.score >= 5) {
      await ƒS.Speech.tell(characters.River, "Na gut, wieso auch nicht.");
      await ƒS.Speech.tell(characters.MC, "Super, ich freu' mich! Samstag um 17:00 Uhr für The Ping 3?");
      ƒS.Character.hideAll();
      await ƒS.Character.show(characters.River, characters.River.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update();
      await ƒS.Speech.tell(characters.River, "Gerne.");
      await ƒS.Speech.tell(characters.MC, "Man sieht sich!");
      await ƒS.Speech.tell(characters.River, "Bis dann.");
      ƒS.Character.hideAll();
      ƒS.Speech.clear();
      ƒS.Sound.fade(sound.SchoolCrowd, 0, 0.2, false);
      ƒS.Sound.fade(sound.HappyTheme, 0, 0.2, false);
      await ƒS.Location.show(locations.Cinema);
      await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      await ƒS.Speech.tell(characters.MC, "(Hmm... Wo bleibt sie denn?)");
      await ƒS.Speech.tell(characters.MC, "(...)");
      await ƒS.Speech.tell(characters.MC, "Sie kommt wohl leider nicht. Dann schaue ich mir den Film halt alleine an.");
      ƒS.Sound.fade(sound.Cinema, 0.2, 1, true);
      await ƒS.Speech.tell(characters.MC, "(...)");
      await ƒS.Speech.tell(characters.Narrator, "5 Minuten später.");
      await ƒS.Speech.tell(characters.MC, "(Vielleicht wartet sie ja doch im Foyer auf mich...)");
      ƒS.Sound.fade(sound.Cinema, 0.05, 1, true);
      await ƒS.Speech.tell(characters.MC, "(Hmm, ich seh sie nicht...)");
      await ƒS.Character.animate(characters.River, characters.River.pose.sad, leftToCenter());
      await ƒS.Speech.tell(characters.Narrator, "River erscheint aus dem Kinosaal.");
      await ƒS.Speech.tell(characters.MC, "River?! Wo kommst du denn her?");
      await ƒS.Speech.tell(characters.River, "Wieso bist du rausgegangen? Ich dachte, wir wollten uns den Film zusammen anschauen.");
      await ƒS.Speech.tell(characters.MC, "Zusammen? Ich wusste nicht mal, dass du im Kinosaal warst!");
      await ƒS.Speech.tell(characters.River, "Aber... Wir haben uns den Film doch gemeinsam angeschaut... Da ist es doch egal wo wir sitzen.");
      await ƒS.Speech.tell(characters.MC, "Haha, du bist echt seltsam, River! Lass uns nun nebeneinander sitzen.");
      ƒS.Character.hideAll();
      await ƒS.Character.show(characters.River, characters.River.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update();
      await ƒS.Speech.tell(characters.River, "Okay...");
      ƒS.Sound.fade(sound.Cinema, 0.2, 1, true);
      await ƒS.update(3);
      ƒS.Character.hideAll();
      ƒS.Speech.clear();
      ƒS.Sound.fade(sound.Cinema, 0, 0.2, false);
    }
    else if (data.score < 5) {
      ƒS.Character.hideAll();
      await ƒS.Character.show(characters.River, characters.River.pose.sad, ƒS.positions.bottomcenter);
      await ƒS.update();
      await ƒS.Speech.tell(characters.River, "Tut mir leid. Ich glaube nicht, dass das eine gute Idee ist.");
      await ƒS.Speech.tell(characters.MC, "Natürlich... Das kann ich verstehen.");
      await ƒS.Speech.tell(characters.MC, "...");
      await ƒS.Speech.tell(characters.MC, "Ich geh dann mal lieber. Hab' noch vieles zu erledigen.");
      ƒS.Character.hideAll();
      ƒS.Speech.clear();
      ƒS.Sound.fade(sound.SchoolCrowd, 0, 0.2, false);
      ƒS.Sound.fade(sound.HappyTheme, 0, 0.2, false);
    }

  }

}