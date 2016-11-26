import "../setup.js";
import "./playerFeature.js";

new function() {

    mlm.package(this, {
        name:    "player",
        imports: "miruken.mvc,mlm",
        exports: "PlayersController"
    });

    eval(this.imports);

    const PlayersController = Controller.extend({
        $properties: {
            players:   [] 
        },
        initialize() {
            this.base();
            return PlayerFeature(this.io).players()
                .then(players => this.players = players);
        },

        showPlayers() {
            return ViewRegion(this.io).show("app/player/players.html");
        },
        goToPlayer(player) {
            PlayerController(this).next(ctrl => ctrl.showPlayer({ id: player.id }));
        },
        create() {
            CreatePlayerController(this).next(ctrl => ctrl.createPlayer());
        }
    });

    eval(this.exports);

};
