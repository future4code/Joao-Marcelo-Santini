export class Product {
    constructor(
        private id: string,
        private name: string,
        private photo: string,
        private value: string
    ) { }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPhoto(): string {
        return this.photo;
    }

    public setPhoto(photo: string): void {
        this.photo = photo;
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value: string): void {
        this.value = value;
    }

}