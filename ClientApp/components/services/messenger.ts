/**
 * MessageArgs
 */
export class MessageArgs extends Object {
}

type actionHandler = (message: string, args?: MessageArgs) => void;
/**
 * Messenger
 */
export class Messenger {

    private static _default = new Messenger();
    public static get default(): Messenger {
        return Messenger._default;
    }

    private readonly _recipients: { [key: string]: actionHandler[] };
    constructor() {
        this._recipients = {};
    }

    public register(message: string, action: actionHandler) {
        // console.log("===>begin register");
        // console.log(message);

        let actions = this._recipients[message];
        if (!actions) {
            actions = [];
            this._recipients[message] = actions;
        }

        actions.push(action);
        // console.log(this._recipients);
        // console.log("===<end register");
    }

    public sendMessage(message: string, args?: MessageArgs) {
        // console.log("===>begin sendMessage");
        // console.log(this._recipients);
        // console.log(message);
        // console.log(args);

        let actions = this._recipients[message];
        if (!actions) {
            return;
        }

        actions.map((v) => v(message, args));
        // console.log("===<end sendMessage");
    }

    public unregister(message: string, action: any) {
        // console.log("begin unregister");

        let actions = this._recipients[message];
        if (!actions) {
            return;
        }

        let idx = actions.findIndex((v) => v === action);
        if (idx) {
            actions.splice(idx, 1);
        }

        // console.log(this._recipients);
        // console.log("end unregister");
    }
}