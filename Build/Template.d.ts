declare namespace Teardrops {
    function Scene1(): ƒS.SceneReturn;
}
declare namespace Teardrops {
    function Scene2(): ƒS.SceneReturn;
}
declare namespace Teardrops {
    function Scene3(): ƒS.SceneReturn;
}
declare namespace Teardrops {
    function End(): ƒS.SceneReturn;
}
declare namespace Teardrops {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        teardrop: {
            duration: number;
            alpha: string;
            edge: number;
        };
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        StartTheme: string;
        HappyTheme: string;
        AngryTheme: string;
        MelanchonyTheme: string;
        SadTheme: string;
        EndingTheme: string;
        GameTheme: string;
        SchoolBell: string;
        DoorBell: string;
        DoorKnock: string;
        Door: string;
        SchoolCrowd: string;
        StreetCrowd: string;
        RestaurantCrowd: string;
        Crickets: string;
        Cinema: string;
        Rain: string;
        CarCrash: string;
        EmergencySiren: string;
        Heartbeat: string;
    };
    let locations: {
        Startscreen: {
            name: string;
            background: string;
        };
        Black: {
            name: string;
            background: string;
        };
        Cinema: {
            name: string;
            background: string;
        };
        City: {
            name: string;
            background: string;
        };
        Classroom: {
            name: string;
            background: string;
        };
        Graveyard: {
            name: string;
            background: string;
        };
        End: {
            name: string;
            background: string;
        };
        Foyer: {
            name: string;
            background: string;
        };
        MCRoomDay: {
            name: string;
            background: string;
        };
        MCRoomNight: {
            name: string;
            background: string;
        };
        Playground: {
            name: string;
            background: string;
        };
        School: {
            name: string;
            background: string;
        };
        WcTonalds: {
            name: string;
            background: string;
        };
    };
    let data: {
        protagonist: {
            name: string;
        };
        score: number;
        state: {
            a: number;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Polizist: {
            name: string;
        };
        UnbekannteFrau: {
            name: string;
        };
        MC: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Ben: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                cheeky: string;
                smartphone: string;
                smiling: string;
                angry: string;
            };
        };
        River: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                sad: string;
                embarassed: string;
            };
        };
        Sophie: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                smiling: string;
                sad: string;
                angry: string;
            };
        };
        King: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                annoyed: string;
                angry: string;
            };
        };
    };
    function leftToRight(): ƒS.AnimationDefinition;
    function leftToCenter(): ƒS.AnimationDefinition;
    function lefterToLeft(): ƒS.AnimationDefinition;
    let items: {
        Necklace: {
            name: string;
            description: string;
            image: string;
            handler: typeof hndItem;
        };
    };
    function hndItem(_event: CustomEvent): void;
    let uiElement: HTMLElement;
    let igMenu: {
        save: string;
        load: string;
        credits: string;
        volumeUp: string;
        volumeDown: string;
        close: string;
    };
    let gameMenu: ƒS.Menu;
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
}
declare namespace Teardrops {
    function Start(): ƒS.SceneReturn;
}
