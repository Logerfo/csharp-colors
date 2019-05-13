"use strict";
import * as vscode from "vscode";

export class DecorationMap {
    _map: Map<any, any>;
    _keys;

    constructor() {
        this._map = new Map();
        this._keys = [];
    }

    get(color) {
        if (!this._map.has(color)) {
            let rules: vscode.DecorationRenderOptions = {};
            rules.color = "invalid; border-bottom:solid 2px " + color;
            this._map.set(color, vscode.window.createTextEditorDecorationType(rules));
            this._keys.push(color);
        }
        return this._map.get(color);
    }

    keys() {
        return this._keys.slice();
    }

    dispose() {
        this._map.forEach((decoration) => {
            decoration.dispose();
        });
    }
}
