﻿'use strict';
const AbstractCommand = require('../../../AbstractCommand');

class RestartCommand extends AbstractCommand {
    static get name() {
        return 'restart';
    }

    static get description() {
        return "Restarts the bot";
    }

    static get adminCommand() {
        return true;
    }

    handle() {
        this.matches(/^restart$/g, () => {
            if (!this.isAdmin()) {
                return false;
            }

            this.reply("Restarting.");
            setTimeout(process.exit, 300);
        });
    }
}

module.exports = RestartCommand;