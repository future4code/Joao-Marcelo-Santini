"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Band {
    constructor(id, name, music_genre, responsible) {
        this.id = id;
        this.name = name;
        this.music_genre = music_genre;
        this.responsible = responsible;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getMusicGenre() {
        return this.music_genre;
    }
    getResponsible() {
        return this.responsible;
    }
}
exports.Band = Band;
