'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { DocumentHighlight } from './color-highlight';

let instanceMap = null;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    instanceMap = [];
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("extension.colorHighlight", runHighlightEditorCommand));
    vscode.window.onDidChangeVisibleTextEditors(onOpenEditor, null, context.subscriptions);
    onOpenEditor(vscode.window.visibleTextEditors);
}

async function runHighlightEditorCommand(editor, edit, document) {
    if (!document)
        document = editor && editor.document;

    return doHighlight([document]);
}

async function doHighlight(documents = []) {
    if (documents.length) {
        const instances = await Promise.all(documents.map(findOrCreateInstance))
        return instances.map(instance => instance.onUpdate());
    }
}

async function findOrCreateInstance(document) {
    if (!document) {
        return
    }

    const found = instanceMap.find(({ document: refDoc }) => refDoc === document);

    if (!found) {
        const instance = new DocumentHighlight(document);
        instanceMap.push(instance);
    }

    return found || instanceMap[instanceMap.length - 1];
}

function onOpenEditor(editors) {
    // dispose all inactive editors
    const documents = editors.map(({ document }) => document);
    const forDisposal = instanceMap.filter(({ document }) => documents.indexOf(document) === -1);

    instanceMap = instanceMap.filter(({ document }) => documents.indexOf(document) > -1);
    forDisposal.forEach(instance => instance.dispose());

    // enable highlight in active editors
    const validDocuments = documents.filter(doc => (<vscode.TextDocument>doc).languageId == "csharp");

    doHighlight(validDocuments);
}

// this method is called when your extension is deactivated
export function deactivate() {
    instanceMap.forEach((instance) => instance.dispose());
    instanceMap = null;
}
