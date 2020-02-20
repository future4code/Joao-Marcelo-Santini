export interface PostCreator {
    create(author: string, text: string): void;
}