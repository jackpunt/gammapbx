/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as pb_1 from "google-protobuf";
export enum Fields {
    none = 0,
    turn = 1,
    update = 2,
    reveal = 3,
    add = 4,
    del = 5,
    timages = 21,
    mimages = 22
}
export class Iloc extends pb_1.Message {
    constructor(data?: any[] | {
        y?: number;
        x?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.y = data.y;
            this.x = data.x;
        }
    }
    get y(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set y(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get x(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set x(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            y: this.y,
            x: this.x
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.y !== undefined)
            writer.writeInt32(1, this.y);
        if (this.x !== undefined)
            writer.writeInt32(2, this.x);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Iloc {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Iloc();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.y = reader.readInt32();
                    break;
                case 2:
                    message.x = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class Floc extends pb_1.Message {
    constructor(data?: any[] | {
        y?: number;
        x?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.y = data.y;
            this.x = data.x;
        }
    }
    get y(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set y(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get x(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set x(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            y: this.y,
            x: this.x
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.y !== undefined)
            writer.writeFloat(1, this.y);
        if (this.x !== undefined)
            writer.writeFloat(2, this.x);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Floc {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Floc();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.y = reader.readFloat();
                    break;
                case 2:
                    message.x = reader.readFloat();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class IDloc extends pb_1.Message {
    constructor(data?: any[] | {
        dy?: number;
        dx?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dy = data.dy;
            this.dx = data.dx;
        }
    }
    get dy(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set dy(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get dx(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set dx(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            dy: this.dy,
            dx: this.dx
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dy !== undefined)
            writer.writeInt32(1, this.dy);
        if (this.dx !== undefined)
            writer.writeInt32(2, this.dx);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IDloc {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new IDloc();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.dy = reader.readInt32();
                    break;
                case 2:
                    message.dx = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class FDloc extends pb_1.Message {
    constructor(data?: any[] | {
        dy?: number;
        dx?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dy = data.dy;
            this.dx = data.dx;
        }
    }
    get dy(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set dy(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get dx(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set dx(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            dy: this.dy,
            dx: this.dx
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dy !== undefined)
            writer.writeFloat(1, this.dy);
        if (this.dx !== undefined)
            writer.writeFloat(2, this.dx);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FDloc {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FDloc();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.dy = reader.readFloat();
                    break;
                case 2:
                    message.dx = reader.readFloat();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class Dloc extends pb_1.Message {
    constructor(data?: any[] | {
        dy_dt?: number;
        dx_dt?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dy_dt = data.dy_dt;
            this.dx_dt = data.dx_dt;
        }
    }
    get dy_dt(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set dy_dt(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get dx_dt(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set dx_dt(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            dy_dt: this.dy_dt,
            dx_dt: this.dx_dt
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dy_dt !== undefined)
            writer.writeFloat(1, this.dy_dt);
        if (this.dx_dt !== undefined)
            writer.writeFloat(2, this.dx_dt);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Dloc {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Dloc();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.dy_dt = reader.readFloat();
                    break;
                case 2:
                    message.dx_dt = reader.readFloat();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class Turn extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.id = data.id;
        }
    }
    get id(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            id: this.id
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeUint32(1, this.id);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Turn {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Turn();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class AMessage extends pb_1.Message {
    constructor(data?: any[] | {
        turn?: Turn;
        updates?: UpdateSeq;
        reveals?: RevealSeq;
        adds?: AddSeq;
        dels?: DelSeq;
        ter_images?: TerImageSeq;
        mod_images?: ModImageSeq;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.turn = data.turn;
            this.updates = data.updates;
            this.reveals = data.reveals;
            this.adds = data.adds;
            this.dels = data.dels;
            this.ter_images = data.ter_images;
            this.mod_images = data.mod_images;
        }
    }
    get turn(): Turn {
        return pb_1.Message.getWrapperField(this, Turn, 1) as Turn;
    }
    set turn(value: Turn) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get updates(): UpdateSeq {
        return pb_1.Message.getWrapperField(this, UpdateSeq, 2) as UpdateSeq;
    }
    set updates(value: UpdateSeq) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get reveals(): RevealSeq {
        return pb_1.Message.getWrapperField(this, RevealSeq, 3) as RevealSeq;
    }
    set reveals(value: RevealSeq) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get adds(): AddSeq {
        return pb_1.Message.getWrapperField(this, AddSeq, 4) as AddSeq;
    }
    set adds(value: AddSeq) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get dels(): DelSeq {
        return pb_1.Message.getWrapperField(this, DelSeq, 5) as DelSeq;
    }
    set dels(value: DelSeq) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get ter_images(): TerImageSeq {
        return pb_1.Message.getWrapperField(this, TerImageSeq, 21) as TerImageSeq;
    }
    set ter_images(value: TerImageSeq) {
        pb_1.Message.setWrapperField(this, 21, value);
    }
    get mod_images(): ModImageSeq {
        return pb_1.Message.getWrapperField(this, ModImageSeq, 22) as ModImageSeq;
    }
    set mod_images(value: ModImageSeq) {
        pb_1.Message.setWrapperField(this, 22, value);
    }
    toObject() {
        return {
            turn: this.turn && this.turn.toObject(),
            updates: this.updates && this.updates.toObject(),
            reveals: this.reveals && this.reveals.toObject(),
            adds: this.adds && this.adds.toObject(),
            dels: this.dels && this.dels.toObject(),
            ter_images: this.ter_images && this.ter_images.toObject(),
            mod_images: this.mod_images && this.mod_images.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.turn !== undefined)
            writer.writeMessage(1, this.turn, () => this.turn.serialize(writer));
        if (this.updates !== undefined)
            writer.writeMessage(2, this.updates, () => this.updates.serialize(writer));
        if (this.reveals !== undefined)
            writer.writeMessage(3, this.reveals, () => this.reveals.serialize(writer));
        if (this.adds !== undefined)
            writer.writeMessage(4, this.adds, () => this.adds.serialize(writer));
        if (this.dels !== undefined)
            writer.writeMessage(5, this.dels, () => this.dels.serialize(writer));
        if (this.ter_images !== undefined)
            writer.writeMessage(21, this.ter_images, () => this.ter_images.serialize(writer));
        if (this.mod_images !== undefined)
            writer.writeMessage(22, this.mod_images, () => this.mod_images.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AMessage {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new AMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.turn, () => message.turn = Turn.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.updates, () => message.updates = UpdateSeq.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.reveals, () => message.reveals = RevealSeq.deserialize(reader));
                    break;
                case 4:
                    reader.readMessage(message.adds, () => message.adds = AddSeq.deserialize(reader));
                    break;
                case 5:
                    reader.readMessage(message.dels, () => message.dels = DelSeq.deserialize(reader));
                    break;
                case 21:
                    reader.readMessage(message.ter_images, () => message.ter_images = TerImageSeq.deserialize(reader));
                    break;
                case 22:
                    reader.readMessage(message.mod_images, () => message.mod_images = ModImageSeq.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class Update extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
        hp?: number;
        isHp?: boolean;
        floc?: Floc;
        is_floc?: boolean;
        iloc?: Iloc;
        is_iloc?: boolean;
        dloc?: Dloc;
        is_dloc?: boolean;
        player_id?: number;
        quality?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.id = data.id;
            this.hp = data.hp;
            this.isHp = data.isHp;
            this.floc = data.floc;
            this.is_floc = data.is_floc;
            this.iloc = data.iloc;
            this.is_iloc = data.is_iloc;
            this.dloc = data.dloc;
            this.is_dloc = data.is_dloc;
            this.player_id = data.player_id;
            this.quality = data.quality;
        }
    }
    get id(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get hp(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set hp(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get isHp(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as boolean;
    }
    set isHp(value: boolean) {
        pb_1.Message.setField(this, 3, value);
    }
    get floc(): Floc {
        return pb_1.Message.getWrapperField(this, Floc, 4) as Floc;
    }
    set floc(value: Floc) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get is_floc(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as boolean;
    }
    set is_floc(value: boolean) {
        pb_1.Message.setField(this, 5, value);
    }
    get iloc(): Iloc {
        return pb_1.Message.getWrapperField(this, Iloc, 6) as Iloc;
    }
    set iloc(value: Iloc) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get is_iloc(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as boolean;
    }
    set is_iloc(value: boolean) {
        pb_1.Message.setField(this, 7, value);
    }
    get dloc(): Dloc {
        return pb_1.Message.getWrapperField(this, Dloc, 8) as Dloc;
    }
    set dloc(value: Dloc) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get is_dloc(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as boolean;
    }
    set is_dloc(value: boolean) {
        pb_1.Message.setField(this, 9, value);
    }
    get player_id(): number {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined) as number;
    }
    set player_id(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get quality(): number {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined) as number;
    }
    set quality(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    toObject() {
        return {
            id: this.id,
            hp: this.hp,
            isHp: this.isHp,
            floc: this.floc && this.floc.toObject(),
            is_floc: this.is_floc,
            iloc: this.iloc && this.iloc.toObject(),
            is_iloc: this.is_iloc,
            dloc: this.dloc && this.dloc.toObject(),
            is_dloc: this.is_dloc,
            player_id: this.player_id,
            quality: this.quality
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeUint32(1, this.id);
        if (this.hp !== undefined)
            writer.writeInt32(2, this.hp);
        if (this.isHp !== undefined)
            writer.writeBool(3, this.isHp);
        if (this.floc !== undefined)
            writer.writeMessage(4, this.floc, () => this.floc.serialize(writer));
        if (this.is_floc !== undefined)
            writer.writeBool(5, this.is_floc);
        if (this.iloc !== undefined)
            writer.writeMessage(6, this.iloc, () => this.iloc.serialize(writer));
        if (this.is_iloc !== undefined)
            writer.writeBool(7, this.is_iloc);
        if (this.dloc !== undefined)
            writer.writeMessage(8, this.dloc, () => this.dloc.serialize(writer));
        if (this.is_dloc !== undefined)
            writer.writeBool(9, this.is_dloc);
        if (this.player_id !== undefined)
            writer.writeUint32(10, this.player_id);
        if (this.quality !== undefined)
            writer.writeFloat(11, this.quality);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Update {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Update();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readUint32();
                    break;
                case 2:
                    message.hp = reader.readInt32();
                    break;
                case 3:
                    message.isHp = reader.readBool();
                    break;
                case 4:
                    reader.readMessage(message.floc, () => message.floc = Floc.deserialize(reader));
                    break;
                case 5:
                    message.is_floc = reader.readBool();
                    break;
                case 6:
                    reader.readMessage(message.iloc, () => message.iloc = Iloc.deserialize(reader));
                    break;
                case 7:
                    message.is_iloc = reader.readBool();
                    break;
                case 8:
                    reader.readMessage(message.dloc, () => message.dloc = Dloc.deserialize(reader));
                    break;
                case 9:
                    message.is_dloc = reader.readBool();
                    break;
                case 10:
                    message.player_id = reader.readUint32();
                    break;
                case 11:
                    message.quality = reader.readFloat();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class UpdateSeq extends pb_1.Message {
    constructor(data?: any[] | {
        updates?: Update[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.updates = data.updates;
        }
    }
    get updates(): Update[] {
        return pb_1.Message.getRepeatedWrapperField(this, Update, 1) as Update[];
    }
    set updates(value: Update[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        return {
            updates: this.updates.map((item: Update) => item.toObject())
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.updates !== undefined)
            writer.writeRepeatedMessage(1, this.updates, (item: Update) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UpdateSeq {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new UpdateSeq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.updates, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Update.deserialize(reader), Update));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class Ident extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
        type?: string;
        i_ndx?: number;
        m_ndx?: number;
        display?: string;
        player_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.id = data.id;
            this.type = data.type;
            this.i_ndx = data.i_ndx;
            this.m_ndx = data.m_ndx;
            this.display = data.display;
            this.player_id = data.player_id;
        }
    }
    get id(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get type(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set type(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get i_ndx(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set i_ndx(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get m_ndx(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set m_ndx(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get display(): string {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as string;
    }
    set display(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    get player_id(): number {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined) as number;
    }
    set player_id(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    toObject() {
        return {
            id: this.id,
            type: this.type,
            i_ndx: this.i_ndx,
            m_ndx: this.m_ndx,
            display: this.display,
            player_id: this.player_id
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeUint32(1, this.id);
        if (typeof this.type === "string" && this.type.length)
            writer.writeString(2, this.type);
        if (this.i_ndx !== undefined)
            writer.writeUint32(3, this.i_ndx);
        if (this.m_ndx !== undefined)
            writer.writeUint32(4, this.m_ndx);
        if (typeof this.display === "string" && this.display.length)
            writer.writeString(8, this.display);
        if (this.player_id !== undefined)
            writer.writeUint32(10, this.player_id);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Ident {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Ident();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readUint32();
                    break;
                case 2:
                    message.type = reader.readString();
                    break;
                case 3:
                    message.i_ndx = reader.readUint32();
                    break;
                case 4:
                    message.m_ndx = reader.readUint32();
                    break;
                case 8:
                    message.display = reader.readString();
                    break;
                case 10:
                    message.player_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class Add extends pb_1.Message {
    constructor(data?: any[] | {
        ident?: Ident;
        update?: Update;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.ident = data.ident;
            this.update = data.update;
        }
    }
    get ident(): Ident {
        return pb_1.Message.getWrapperField(this, Ident, 1) as Ident;
    }
    set ident(value: Ident) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get update(): Update {
        return pb_1.Message.getWrapperField(this, Update, 2) as Update;
    }
    set update(value: Update) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            ident: this.ident && this.ident.toObject(),
            update: this.update && this.update.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ident !== undefined)
            writer.writeMessage(1, this.ident, () => this.ident.serialize(writer));
        if (this.update !== undefined)
            writer.writeMessage(2, this.update, () => this.update.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Add {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Add();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.ident, () => message.ident = Ident.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.update, () => message.update = Update.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class AddSeq extends pb_1.Message {
    constructor(data?: any[] | {
        adds?: Add[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.adds = data.adds;
        }
    }
    get adds(): Add[] {
        return pb_1.Message.getRepeatedWrapperField(this, Add, 1) as Add[];
    }
    set adds(value: Add[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        return {
            adds: this.adds.map((item: Add) => item.toObject())
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.adds !== undefined)
            writer.writeRepeatedMessage(1, this.adds, (item: Add) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AddSeq {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new AddSeq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.adds, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Add.deserialize(reader), Add));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class Del extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.id = data.id;
        }
    }
    get id(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            id: this.id
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeUint32(2, this.id);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Del {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Del();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class DelSeq extends pb_1.Message {
    constructor(data?: any[] | {
        dels?: Del[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dels = data.dels;
        }
    }
    get dels(): Del[] {
        return pb_1.Message.getRepeatedWrapperField(this, Del, 1) as Del[];
    }
    set dels(value: Del[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        return {
            dels: this.dels.map((item: Del) => item.toObject())
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dels !== undefined)
            writer.writeRepeatedMessage(1, this.dels, (item: Del) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DelSeq {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DelSeq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.dels, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Del.deserialize(reader), Del));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class TerRunX extends pb_1.Message {
    constructor(data?: any[] | {
        dx?: number;
        ztv?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dx = data.dx;
            this.ztv = data.ztv;
        }
    }
    get dx(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set dx(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get ztv(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set ztv(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        return {
            dx: this.dx,
            ztv: this.ztv
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dx !== undefined)
            writer.writeInt32(2, this.dx);
        if (this.ztv !== undefined)
            writer.writeInt32(3, this.ztv);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerRunX {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TerRunX();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.dx = reader.readInt32();
                    break;
                case 3:
                    message.ztv = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class TerRowY extends pb_1.Message {
    constructor(data?: any[] | {
        loc?: Iloc;
        runx?: TerRunX[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.loc = data.loc;
            this.runx = data.runx;
        }
    }
    get loc(): Iloc {
        return pb_1.Message.getWrapperField(this, Iloc, 1) as Iloc;
    }
    set loc(value: Iloc) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get runx(): TerRunX[] {
        return pb_1.Message.getRepeatedWrapperField(this, TerRunX, 2) as TerRunX[];
    }
    set runx(value: TerRunX[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    toObject() {
        return {
            loc: this.loc && this.loc.toObject(),
            runx: this.runx.map((item: TerRunX) => item.toObject())
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.loc !== undefined)
            writer.writeMessage(1, this.loc, () => this.loc.serialize(writer));
        if (this.runx !== undefined)
            writer.writeRepeatedMessage(2, this.runx, (item: TerRunX) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerRowY {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TerRowY();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.loc, () => message.loc = Iloc.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.runx, () => pb_1.Message.addToRepeatedWrapperField(message, 2, TerRunX.deserialize(reader), TerRunX));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class RevealSeq extends pb_1.Message {
    constructor(data?: any[] | {
        rowy?: TerRowY[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.rowy = data.rowy;
        }
    }
    get rowy(): TerRowY[] {
        return pb_1.Message.getRepeatedWrapperField(this, TerRowY, 1) as TerRowY[];
    }
    set rowy(value: TerRowY[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        return {
            rowy: this.rowy.map((item: TerRowY) => item.toObject())
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.rowy !== undefined)
            writer.writeRepeatedMessage(1, this.rowy, (item: TerRowY) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RevealSeq {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new RevealSeq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.rowy, () => pb_1.Message.addToRepeatedWrapperField(message, 1, TerRowY.deserialize(reader), TerRowY));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class SubImage extends pb_1.Message {
    constructor(data?: any[] | {
        y0?: number;
        x0?: number;
        y_px?: number;
        x_px?: number;
        y_off?: number;
        x_off?: number;
        alt_url?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.y0 = data.y0;
            this.x0 = data.x0;
            this.y_px = data.y_px;
            this.x_px = data.x_px;
            this.y_off = data.y_off;
            this.x_off = data.x_off;
            this.alt_url = data.alt_url;
        }
    }
    get y0(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set y0(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get x0(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set x0(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get y_px(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set y_px(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get x_px(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set x_px(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get y_off(): number {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as number;
    }
    set y_off(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get x_off(): number {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as number;
    }
    set x_off(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get alt_url(): string {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as string;
    }
    set alt_url(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    toObject() {
        return {
            y0: this.y0,
            x0: this.x0,
            y_px: this.y_px,
            x_px: this.x_px,
            y_off: this.y_off,
            x_off: this.x_off,
            alt_url: this.alt_url
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.y0 !== undefined)
            writer.writeUint32(2, this.y0);
        if (this.x0 !== undefined)
            writer.writeUint32(3, this.x0);
        if (this.y_px !== undefined)
            writer.writeUint32(4, this.y_px);
        if (this.x_px !== undefined)
            writer.writeUint32(5, this.x_px);
        if (this.y_off !== undefined)
            writer.writeUint32(6, this.y_off);
        if (this.x_off !== undefined)
            writer.writeUint32(7, this.x_off);
        if (typeof this.alt_url === "string" && this.alt_url.length)
            writer.writeString(8, this.alt_url);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SubImage {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new SubImage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.y0 = reader.readUint32();
                    break;
                case 3:
                    message.x0 = reader.readUint32();
                    break;
                case 4:
                    message.y_px = reader.readUint32();
                    break;
                case 5:
                    message.x_px = reader.readUint32();
                    break;
                case 6:
                    message.y_off = reader.readUint32();
                    break;
                case 7:
                    message.x_off = reader.readUint32();
                    break;
                case 8:
                    message.alt_url = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class ImageAry extends pb_1.Message {
    constructor(data?: any[] | {
        npixels?: number;
        nrows?: number;
        ncols?: number;
        url?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.npixels = data.npixels;
            this.nrows = data.nrows;
            this.ncols = data.ncols;
            this.url = data.url;
        }
    }
    get npixels(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set npixels(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get nrows(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set nrows(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get ncols(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set ncols(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get url(): string {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
    }
    set url(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    toObject() {
        return {
            npixels: this.npixels,
            nrows: this.nrows,
            ncols: this.ncols,
            url: this.url
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.npixels !== undefined)
            writer.writeUint32(1, this.npixels);
        if (this.nrows !== undefined)
            writer.writeUint32(2, this.nrows);
        if (this.ncols !== undefined)
            writer.writeUint32(3, this.ncols);
        if (typeof this.url === "string" && this.url.length)
            writer.writeString(4, this.url);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ImageAry {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ImageAry();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.npixels = reader.readUint32();
                    break;
                case 2:
                    message.nrows = reader.readUint32();
                    break;
                case 3:
                    message.ncols = reader.readUint32();
                    break;
                case 4:
                    message.url = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class TerImage extends pb_1.Message {
    constructor(data?: any[] | {
        tvid?: number;
        name?: string;
        sub_image?: SubImage;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.tvid = data.tvid;
            this.name = data.name;
            this.sub_image = data.sub_image;
        }
    }
    get tvid(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set tvid(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get name(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get sub_image(): SubImage {
        return pb_1.Message.getWrapperField(this, SubImage, 3) as SubImage;
    }
    set sub_image(value: SubImage) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        return {
            tvid: this.tvid,
            name: this.name,
            sub_image: this.sub_image && this.sub_image.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.tvid !== undefined)
            writer.writeUint32(1, this.tvid);
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(2, this.name);
        if (this.sub_image !== undefined)
            writer.writeMessage(3, this.sub_image, () => this.sub_image.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerImage {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TerImage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.tvid = reader.readUint32();
                    break;
                case 2:
                    message.name = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.sub_image, () => message.sub_image = SubImage.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class TerStats extends pb_1.Message {
    constructor(data?: any[] | {
        visibilty?: number;
        scoutablity?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.visibilty = data.visibilty;
            this.scoutablity = data.scoutablity;
        }
    }
    get visibilty(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set visibilty(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get scoutablity(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set scoutablity(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            visibilty: this.visibilty,
            scoutablity: this.scoutablity
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.visibilty !== undefined)
            writer.writeFloat(1, this.visibilty);
        if (this.scoutablity !== undefined)
            writer.writeFloat(2, this.scoutablity);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerStats {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TerStats();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.visibilty = reader.readFloat();
                    break;
                case 2:
                    message.scoutablity = reader.readFloat();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class RoadStats extends pb_1.Message {
    constructor(data?: any[] | {
        quality?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.quality = data.quality;
        }
    }
    get quality(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set quality(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            quality: this.quality
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.quality !== undefined)
            writer.writeFloat(1, this.quality);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RoadStats {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new RoadStats();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.quality = reader.readFloat();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class TerImageSeq extends pb_1.Message {
    constructor(data?: any[] | {
        comp_image?: ImageAry;
        tmag?: TerImage[];
        zval?: number[];
        indx?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2, 3, 4], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.comp_image = data.comp_image;
            this.tmag = data.tmag;
            this.zval = data.zval;
            this.indx = data.indx;
        }
    }
    get comp_image(): ImageAry {
        return pb_1.Message.getWrapperField(this, ImageAry, 1) as ImageAry;
    }
    set comp_image(value: ImageAry) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get tmag(): TerImage[] {
        return pb_1.Message.getRepeatedWrapperField(this, TerImage, 2) as TerImage[];
    }
    set tmag(value: TerImage[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get zval(): number[] {
        return pb_1.Message.getField(this, 3) as number[];
    }
    set zval(value: number[]) {
        pb_1.Message.setField(this, 3, value);
    }
    get indx(): number[] {
        return pb_1.Message.getField(this, 4) as number[];
    }
    set indx(value: number[]) {
        pb_1.Message.setField(this, 4, value);
    }
    toObject() {
        return {
            comp_image: this.comp_image && this.comp_image.toObject(),
            tmag: this.tmag.map((item: TerImage) => item.toObject()),
            zval: this.zval,
            indx: this.indx
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.comp_image !== undefined)
            writer.writeMessage(1, this.comp_image, () => this.comp_image.serialize(writer));
        if (this.tmag !== undefined)
            writer.writeRepeatedMessage(2, this.tmag, (item: TerImage) => item.serialize(writer));
        if (this.zval !== undefined)
            writer.writePackedInt32(3, this.zval);
        if (this.indx !== undefined)
            writer.writePackedInt32(4, this.indx);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerImageSeq {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TerImageSeq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.comp_image, () => message.comp_image = ImageAry.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.tmag, () => pb_1.Message.addToRepeatedWrapperField(message, 2, TerImage.deserialize(reader), TerImage));
                    break;
                case 3:
                    message.zval = reader.readPackedInt32();
                    break;
                case 4:
                    message.indx = reader.readPackedInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class ModImage extends pb_1.Message {
    constructor(data?: any[] | {
        mndx?: number;
        name?: string;
        sub_image?: SubImage;
        p_color?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.mndx = data.mndx;
            this.name = data.name;
            this.sub_image = data.sub_image;
            this.p_color = data.p_color;
        }
    }
    get mndx(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set mndx(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get name(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get sub_image(): SubImage {
        return pb_1.Message.getWrapperField(this, SubImage, 3) as SubImage;
    }
    set sub_image(value: SubImage) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get p_color(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set p_color(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    toObject() {
        return {
            mndx: this.mndx,
            name: this.name,
            sub_image: this.sub_image && this.sub_image.toObject(),
            p_color: this.p_color
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mndx !== undefined)
            writer.writeUint32(1, this.mndx);
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(2, this.name);
        if (this.sub_image !== undefined)
            writer.writeMessage(3, this.sub_image, () => this.sub_image.serialize(writer));
        if (this.p_color !== undefined)
            writer.writeUint32(5, this.p_color);
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModImage {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ModImage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.mndx = reader.readUint32();
                    break;
                case 2:
                    message.name = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.sub_image, () => message.sub_image = SubImage.deserialize(reader));
                    break;
                case 5:
                    message.p_color = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export class ModImageSeq extends pb_1.Message {
    constructor(data?: any[] | {
        mblk?: ImageAry;
        model?: ModImage[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.mblk = data.mblk;
            this.model = data.model;
        }
    }
    get mblk(): ImageAry {
        return pb_1.Message.getWrapperField(this, ImageAry, 1) as ImageAry;
    }
    set mblk(value: ImageAry) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get model(): ModImage[] {
        return pb_1.Message.getRepeatedWrapperField(this, ModImage, 2) as ModImage[];
    }
    set model(value: ModImage[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    toObject() {
        return {
            mblk: this.mblk && this.mblk.toObject(),
            model: this.model.map((item: ModImage) => item.toObject())
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mblk !== undefined)
            writer.writeMessage(1, this.mblk, () => this.mblk.serialize(writer));
        if (this.model !== undefined)
            writer.writeRepeatedMessage(2, this.model, (item: ModImage) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModImageSeq {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ModImageSeq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.mblk, () => message.mblk = ImageAry.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.model, () => pb_1.Message.addToRepeatedWrapperField(message, 2, ModImage.deserialize(reader), ModImage));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
