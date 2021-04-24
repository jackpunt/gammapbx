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
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("y" in data) {
                this.y = data.y;
            }
            if ("x" in data) {
                this.x = data.x;
            }
        }
    }
    get y() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set y(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get x() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set x(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        var data: {
            y?: number;
            x?: number;
        } = {};
        if (this.y != null) {
            data.y = this.y;
        }
        if (this.x != null) {
            data.x = this.x;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.y !== undefined)
            writer.writeInt32(1, this.y);
        if (this.x !== undefined)
            writer.writeInt32(2, this.x);
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Iloc {
        return Iloc.deserialize(bytes);
    }
}
export class Floc extends pb_1.Message {
    constructor(data?: any[] | {
        y?: number;
        x?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("y" in data) {
                this.y = data.y;
            }
            if ("x" in data) {
                this.x = data.x;
            }
        }
    }
    get y() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set y(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get x() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set x(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        var data: {
            y?: number;
            x?: number;
        } = {};
        if (this.y != null) {
            data.y = this.y;
        }
        if (this.x != null) {
            data.x = this.x;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.y !== undefined)
            writer.writeFloat(1, this.y);
        if (this.x !== undefined)
            writer.writeFloat(2, this.x);
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Floc {
        return Floc.deserialize(bytes);
    }
}
export class IDloc extends pb_1.Message {
    constructor(data?: any[] | {
        dy?: number;
        dx?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("dy" in data) {
                this.dy = data.dy;
            }
            if ("dx" in data) {
                this.dx = data.dx;
            }
        }
    }
    get dy() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set dy(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get dx() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set dx(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        var data: {
            dy?: number;
            dx?: number;
        } = {};
        if (this.dy != null) {
            data.dy = this.dy;
        }
        if (this.dx != null) {
            data.dx = this.dx;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dy !== undefined)
            writer.writeInt32(1, this.dy);
        if (this.dx !== undefined)
            writer.writeInt32(2, this.dx);
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): IDloc {
        return IDloc.deserialize(bytes);
    }
}
export class FDloc extends pb_1.Message {
    constructor(data?: any[] | {
        dy?: number;
        dx?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("dy" in data) {
                this.dy = data.dy;
            }
            if ("dx" in data) {
                this.dx = data.dx;
            }
        }
    }
    get dy() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set dy(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get dx() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set dx(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        var data: {
            dy?: number;
            dx?: number;
        } = {};
        if (this.dy != null) {
            data.dy = this.dy;
        }
        if (this.dx != null) {
            data.dx = this.dx;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dy !== undefined)
            writer.writeFloat(1, this.dy);
        if (this.dx !== undefined)
            writer.writeFloat(2, this.dx);
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FDloc {
        return FDloc.deserialize(bytes);
    }
}
export class Dloc extends pb_1.Message {
    constructor(data?: any[] | {
        dy_dt?: number;
        dx_dt?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("dy_dt" in data) {
                this.dy_dt = data.dy_dt;
            }
            if ("dx_dt" in data) {
                this.dx_dt = data.dx_dt;
            }
        }
    }
    get dy_dt() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set dy_dt(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get dx_dt() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set dx_dt(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        var data: {
            dy_dt?: number;
            dx_dt?: number;
        } = {};
        if (this.dy_dt != null) {
            data.dy_dt = this.dy_dt;
        }
        if (this.dx_dt != null) {
            data.dx_dt = this.dx_dt;
        }
        return data;
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Dloc {
        return Dloc.deserialize(bytes);
    }
}
export class Turn extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data) {
                this.id = data.id;
            }
        }
    }
    get id() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        var data: {
            id?: number;
        } = {};
        if (this.id != null) {
            data.id = this.id;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeUint32(1, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Turn {
        return Turn.deserialize(bytes);
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
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("turn" in data) {
                this.turn = data.turn;
            }
            if ("updates" in data) {
                this.updates = data.updates;
            }
            if ("reveals" in data) {
                this.reveals = data.reveals;
            }
            if ("adds" in data) {
                this.adds = data.adds;
            }
            if ("dels" in data) {
                this.dels = data.dels;
            }
            if ("ter_images" in data) {
                this.ter_images = data.ter_images;
            }
            if ("mod_images" in data) {
                this.mod_images = data.mod_images;
            }
        }
    }
    get turn() {
        return pb_1.Message.getWrapperField(this, Turn, 1) as Turn;
    }
    set turn(value: Turn) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get updates() {
        return pb_1.Message.getWrapperField(this, UpdateSeq, 2) as UpdateSeq;
    }
    set updates(value: UpdateSeq) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get reveals() {
        return pb_1.Message.getWrapperField(this, RevealSeq, 3) as RevealSeq;
    }
    set reveals(value: RevealSeq) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get adds() {
        return pb_1.Message.getWrapperField(this, AddSeq, 4) as AddSeq;
    }
    set adds(value: AddSeq) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get dels() {
        return pb_1.Message.getWrapperField(this, DelSeq, 5) as DelSeq;
    }
    set dels(value: DelSeq) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get ter_images() {
        return pb_1.Message.getWrapperField(this, TerImageSeq, 21) as TerImageSeq;
    }
    set ter_images(value: TerImageSeq) {
        pb_1.Message.setWrapperField(this, 21, value);
    }
    get mod_images() {
        return pb_1.Message.getWrapperField(this, ModImageSeq, 22) as ModImageSeq;
    }
    set mod_images(value: ModImageSeq) {
        pb_1.Message.setWrapperField(this, 22, value);
    }
    toObject() {
        var data: {
            turn?: ReturnType<typeof Turn.prototype.toObject>;
            updates?: ReturnType<typeof UpdateSeq.prototype.toObject>;
            reveals?: ReturnType<typeof RevealSeq.prototype.toObject>;
            adds?: ReturnType<typeof AddSeq.prototype.toObject>;
            dels?: ReturnType<typeof DelSeq.prototype.toObject>;
            ter_images?: ReturnType<typeof TerImageSeq.prototype.toObject>;
            mod_images?: ReturnType<typeof ModImageSeq.prototype.toObject>;
        } = {};
        if (this.turn != null) {
            data.turn = this.turn.toObject();
        }
        if (this.updates != null) {
            data.updates = this.updates.toObject();
        }
        if (this.reveals != null) {
            data.reveals = this.reveals.toObject();
        }
        if (this.adds != null) {
            data.adds = this.adds.toObject();
        }
        if (this.dels != null) {
            data.dels = this.dels.toObject();
        }
        if (this.ter_images != null) {
            data.ter_images = this.ter_images.toObject();
        }
        if (this.mod_images != null) {
            data.mod_images = this.mod_images.toObject();
        }
        return data;
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
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AMessage {
        return AMessage.deserialize(bytes);
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
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data) {
                this.id = data.id;
            }
            if ("hp" in data) {
                this.hp = data.hp;
            }
            if ("isHp" in data) {
                this.isHp = data.isHp;
            }
            if ("floc" in data) {
                this.floc = data.floc;
            }
            if ("is_floc" in data) {
                this.is_floc = data.is_floc;
            }
            if ("iloc" in data) {
                this.iloc = data.iloc;
            }
            if ("is_iloc" in data) {
                this.is_iloc = data.is_iloc;
            }
            if ("dloc" in data) {
                this.dloc = data.dloc;
            }
            if ("is_dloc" in data) {
                this.is_dloc = data.is_dloc;
            }
            if ("player_id" in data) {
                this.player_id = data.player_id;
            }
            if ("quality" in data) {
                this.quality = data.quality;
            }
        }
    }
    get id() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get hp() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set hp(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get isHp() {
        return pb_1.Message.getField(this, 3) as boolean;
    }
    set isHp(value: boolean) {
        pb_1.Message.setField(this, 3, value);
    }
    get floc() {
        return pb_1.Message.getWrapperField(this, Floc, 4) as Floc;
    }
    set floc(value: Floc) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get is_floc() {
        return pb_1.Message.getField(this, 5) as boolean;
    }
    set is_floc(value: boolean) {
        pb_1.Message.setField(this, 5, value);
    }
    get iloc() {
        return pb_1.Message.getWrapperField(this, Iloc, 6) as Iloc;
    }
    set iloc(value: Iloc) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get is_iloc() {
        return pb_1.Message.getField(this, 7) as boolean;
    }
    set is_iloc(value: boolean) {
        pb_1.Message.setField(this, 7, value);
    }
    get dloc() {
        return pb_1.Message.getWrapperField(this, Dloc, 8) as Dloc;
    }
    set dloc(value: Dloc) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get is_dloc() {
        return pb_1.Message.getField(this, 9) as boolean;
    }
    set is_dloc(value: boolean) {
        pb_1.Message.setField(this, 9, value);
    }
    get player_id() {
        return pb_1.Message.getField(this, 10) as number;
    }
    set player_id(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get quality() {
        return pb_1.Message.getField(this, 11) as number;
    }
    set quality(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    toObject() {
        var data: {
            id?: number;
            hp?: number;
            isHp?: boolean;
            floc?: ReturnType<typeof Floc.prototype.toObject>;
            is_floc?: boolean;
            iloc?: ReturnType<typeof Iloc.prototype.toObject>;
            is_iloc?: boolean;
            dloc?: ReturnType<typeof Dloc.prototype.toObject>;
            is_dloc?: boolean;
            player_id?: number;
            quality?: number;
        } = {};
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.hp != null) {
            data.hp = this.hp;
        }
        if (this.isHp != null) {
            data.isHp = this.isHp;
        }
        if (this.floc != null) {
            data.floc = this.floc.toObject();
        }
        if (this.is_floc != null) {
            data.is_floc = this.is_floc;
        }
        if (this.iloc != null) {
            data.iloc = this.iloc.toObject();
        }
        if (this.is_iloc != null) {
            data.is_iloc = this.is_iloc;
        }
        if (this.dloc != null) {
            data.dloc = this.dloc.toObject();
        }
        if (this.is_dloc != null) {
            data.is_dloc = this.is_dloc;
        }
        if (this.player_id != null) {
            data.player_id = this.player_id;
        }
        if (this.quality != null) {
            data.quality = this.quality;
        }
        return data;
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
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Update {
        return Update.deserialize(bytes);
    }
}
export class UpdateSeq extends pb_1.Message {
    constructor(data?: any[] | {
        updates: Update[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
        if (!Array.isArray(data) && typeof data == "object") {
            this.updates = data.updates;
        }
    }
    get updates() {
        return pb_1.Message.getRepeatedWrapperField(this, Update, 1) as Update[];
    }
    set updates(value: Update[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        var data: {
            updates: ReturnType<typeof Update.prototype.toObject>[];
        } = {
            updates: this.updates.map((item: Update) => item.toObject())
        };
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.updates !== undefined)
            writer.writeRepeatedMessage(1, this.updates, (item: Update) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): UpdateSeq {
        return UpdateSeq.deserialize(bytes);
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
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data) {
                this.id = data.id;
            }
            if ("type" in data) {
                this.type = data.type;
            }
            if ("i_ndx" in data) {
                this.i_ndx = data.i_ndx;
            }
            if ("m_ndx" in data) {
                this.m_ndx = data.m_ndx;
            }
            if ("display" in data) {
                this.display = data.display;
            }
            if ("player_id" in data) {
                this.player_id = data.player_id;
            }
        }
    }
    get id() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get type() {
        return pb_1.Message.getField(this, 2) as string;
    }
    set type(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get i_ndx() {
        return pb_1.Message.getField(this, 3) as number;
    }
    set i_ndx(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get m_ndx() {
        return pb_1.Message.getField(this, 4) as number;
    }
    set m_ndx(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get display() {
        return pb_1.Message.getField(this, 8) as string;
    }
    set display(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    get player_id() {
        return pb_1.Message.getField(this, 10) as number;
    }
    set player_id(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    toObject() {
        var data: {
            id?: number;
            type?: string;
            i_ndx?: number;
            m_ndx?: number;
            display?: string;
            player_id?: number;
        } = {};
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.type != null) {
            data.type = this.type;
        }
        if (this.i_ndx != null) {
            data.i_ndx = this.i_ndx;
        }
        if (this.m_ndx != null) {
            data.m_ndx = this.m_ndx;
        }
        if (this.display != null) {
            data.display = this.display;
        }
        if (this.player_id != null) {
            data.player_id = this.player_id;
        }
        return data;
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
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Ident {
        return Ident.deserialize(bytes);
    }
}
export class Add extends pb_1.Message {
    constructor(data?: any[] | {
        ident?: Ident;
        update?: Update;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ident" in data) {
                this.ident = data.ident;
            }
            if ("update" in data) {
                this.update = data.update;
            }
        }
    }
    get ident() {
        return pb_1.Message.getWrapperField(this, Ident, 1) as Ident;
    }
    set ident(value: Ident) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get update() {
        return pb_1.Message.getWrapperField(this, Update, 2) as Update;
    }
    set update(value: Update) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        var data: {
            ident?: ReturnType<typeof Ident.prototype.toObject>;
            update?: ReturnType<typeof Update.prototype.toObject>;
        } = {};
        if (this.ident != null) {
            data.ident = this.ident.toObject();
        }
        if (this.update != null) {
            data.update = this.update.toObject();
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ident !== undefined)
            writer.writeMessage(1, this.ident, () => this.ident.serialize(writer));
        if (this.update !== undefined)
            writer.writeMessage(2, this.update, () => this.update.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Add {
        return Add.deserialize(bytes);
    }
}
export class AddSeq extends pb_1.Message {
    constructor(data?: any[] | {
        adds: Add[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
        if (!Array.isArray(data) && typeof data == "object") {
            this.adds = data.adds;
        }
    }
    get adds() {
        return pb_1.Message.getRepeatedWrapperField(this, Add, 1) as Add[];
    }
    set adds(value: Add[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        var data: {
            adds: ReturnType<typeof Add.prototype.toObject>[];
        } = {
            adds: this.adds.map((item: Add) => item.toObject())
        };
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.adds !== undefined)
            writer.writeRepeatedMessage(1, this.adds, (item: Add) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AddSeq {
        return AddSeq.deserialize(bytes);
    }
}
export class Del extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data) {
                this.id = data.id;
            }
        }
    }
    get id() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        var data: {
            id?: number;
        } = {};
        if (this.id != null) {
            data.id = this.id;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeUint32(2, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Del {
        return Del.deserialize(bytes);
    }
}
export class DelSeq extends pb_1.Message {
    constructor(data?: any[] | {
        dels: Del[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dels = data.dels;
        }
    }
    get dels() {
        return pb_1.Message.getRepeatedWrapperField(this, Del, 1) as Del[];
    }
    set dels(value: Del[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        var data: {
            dels: ReturnType<typeof Del.prototype.toObject>[];
        } = {
            dels: this.dels.map((item: Del) => item.toObject())
        };
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dels !== undefined)
            writer.writeRepeatedMessage(1, this.dels, (item: Del) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DelSeq {
        return DelSeq.deserialize(bytes);
    }
}
export class TerRunX extends pb_1.Message {
    constructor(data?: any[] | {
        dx?: number;
        ztv?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("dx" in data) {
                this.dx = data.dx;
            }
            if ("ztv" in data) {
                this.ztv = data.ztv;
            }
        }
    }
    get dx() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set dx(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get ztv() {
        return pb_1.Message.getField(this, 3) as number;
    }
    set ztv(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        var data: {
            dx?: number;
            ztv?: number;
        } = {};
        if (this.dx != null) {
            data.dx = this.dx;
        }
        if (this.ztv != null) {
            data.ztv = this.ztv;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dx !== undefined)
            writer.writeInt32(2, this.dx);
        if (this.ztv !== undefined)
            writer.writeInt32(3, this.ztv);
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TerRunX {
        return TerRunX.deserialize(bytes);
    }
}
export class TerRowY extends pb_1.Message {
    constructor(data?: any[] | {
        loc?: Iloc;
        runx: TerRunX[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("loc" in data) {
                this.loc = data.loc;
            }
            this.runx = data.runx;
        }
    }
    get loc() {
        return pb_1.Message.getWrapperField(this, Iloc, 1) as Iloc;
    }
    set loc(value: Iloc) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get runx() {
        return pb_1.Message.getRepeatedWrapperField(this, TerRunX, 2) as TerRunX[];
    }
    set runx(value: TerRunX[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    toObject() {
        var data: {
            loc?: ReturnType<typeof Iloc.prototype.toObject>;
            runx: ReturnType<typeof TerRunX.prototype.toObject>[];
        } = {
            runx: this.runx.map((item: TerRunX) => item.toObject())
        };
        if (this.loc != null) {
            data.loc = this.loc.toObject();
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.loc !== undefined)
            writer.writeMessage(1, this.loc, () => this.loc.serialize(writer));
        if (this.runx !== undefined)
            writer.writeRepeatedMessage(2, this.runx, (item: TerRunX) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TerRowY {
        return TerRowY.deserialize(bytes);
    }
}
export class RevealSeq extends pb_1.Message {
    constructor(data?: any[] | {
        rowy: TerRowY[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
        if (!Array.isArray(data) && typeof data == "object") {
            this.rowy = data.rowy;
        }
    }
    get rowy() {
        return pb_1.Message.getRepeatedWrapperField(this, TerRowY, 1) as TerRowY[];
    }
    set rowy(value: TerRowY[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        var data: {
            rowy: ReturnType<typeof TerRowY.prototype.toObject>[];
        } = {
            rowy: this.rowy.map((item: TerRowY) => item.toObject())
        };
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.rowy !== undefined)
            writer.writeRepeatedMessage(1, this.rowy, (item: TerRowY) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): RevealSeq {
        return RevealSeq.deserialize(bytes);
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
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("y0" in data) {
                this.y0 = data.y0;
            }
            if ("x0" in data) {
                this.x0 = data.x0;
            }
            if ("y_px" in data) {
                this.y_px = data.y_px;
            }
            if ("x_px" in data) {
                this.x_px = data.x_px;
            }
            if ("y_off" in data) {
                this.y_off = data.y_off;
            }
            if ("x_off" in data) {
                this.x_off = data.x_off;
            }
            if ("alt_url" in data) {
                this.alt_url = data.alt_url;
            }
        }
    }
    get y0() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set y0(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get x0() {
        return pb_1.Message.getField(this, 3) as number;
    }
    set x0(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get y_px() {
        return pb_1.Message.getField(this, 4) as number;
    }
    set y_px(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get x_px() {
        return pb_1.Message.getField(this, 5) as number;
    }
    set x_px(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get y_off() {
        return pb_1.Message.getField(this, 6) as number;
    }
    set y_off(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get x_off() {
        return pb_1.Message.getField(this, 7) as number;
    }
    set x_off(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get alt_url() {
        return pb_1.Message.getField(this, 8) as string;
    }
    set alt_url(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    toObject() {
        var data: {
            y0?: number;
            x0?: number;
            y_px?: number;
            x_px?: number;
            y_off?: number;
            x_off?: number;
            alt_url?: string;
        } = {};
        if (this.y0 != null) {
            data.y0 = this.y0;
        }
        if (this.x0 != null) {
            data.x0 = this.x0;
        }
        if (this.y_px != null) {
            data.y_px = this.y_px;
        }
        if (this.x_px != null) {
            data.x_px = this.x_px;
        }
        if (this.y_off != null) {
            data.y_off = this.y_off;
        }
        if (this.x_off != null) {
            data.x_off = this.x_off;
        }
        if (this.alt_url != null) {
            data.alt_url = this.alt_url;
        }
        return data;
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
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SubImage {
        return SubImage.deserialize(bytes);
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
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("npixels" in data) {
                this.npixels = data.npixels;
            }
            if ("nrows" in data) {
                this.nrows = data.nrows;
            }
            if ("ncols" in data) {
                this.ncols = data.ncols;
            }
            if ("url" in data) {
                this.url = data.url;
            }
        }
    }
    get npixels() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set npixels(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get nrows() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set nrows(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get ncols() {
        return pb_1.Message.getField(this, 3) as number;
    }
    set ncols(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get url() {
        return pb_1.Message.getField(this, 4) as string;
    }
    set url(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    toObject() {
        var data: {
            npixels?: number;
            nrows?: number;
            ncols?: number;
            url?: string;
        } = {};
        if (this.npixels != null) {
            data.npixels = this.npixels;
        }
        if (this.nrows != null) {
            data.nrows = this.nrows;
        }
        if (this.ncols != null) {
            data.ncols = this.ncols;
        }
        if (this.url != null) {
            data.url = this.url;
        }
        return data;
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
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ImageAry {
        return ImageAry.deserialize(bytes);
    }
}
export class TerImage extends pb_1.Message {
    constructor(data?: any[] | {
        tvid?: number;
        name?: string;
        sub_image?: SubImage;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("tvid" in data) {
                this.tvid = data.tvid;
            }
            if ("name" in data) {
                this.name = data.name;
            }
            if ("sub_image" in data) {
                this.sub_image = data.sub_image;
            }
        }
    }
    get tvid() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set tvid(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get name() {
        return pb_1.Message.getField(this, 2) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get sub_image() {
        return pb_1.Message.getWrapperField(this, SubImage, 3) as SubImage;
    }
    set sub_image(value: SubImage) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        var data: {
            tvid?: number;
            name?: string;
            sub_image?: ReturnType<typeof SubImage.prototype.toObject>;
        } = {};
        if (this.tvid != null) {
            data.tvid = this.tvid;
        }
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.sub_image != null) {
            data.sub_image = this.sub_image.toObject();
        }
        return data;
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
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TerImage {
        return TerImage.deserialize(bytes);
    }
}
export class TerStats extends pb_1.Message {
    constructor(data?: any[] | {
        visibilty?: number;
        scoutablity?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("visibilty" in data) {
                this.visibilty = data.visibilty;
            }
            if ("scoutablity" in data) {
                this.scoutablity = data.scoutablity;
            }
        }
    }
    get visibilty() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set visibilty(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get scoutablity() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set scoutablity(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        var data: {
            visibilty?: number;
            scoutablity?: number;
        } = {};
        if (this.visibilty != null) {
            data.visibilty = this.visibilty;
        }
        if (this.scoutablity != null) {
            data.scoutablity = this.scoutablity;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.visibilty !== undefined)
            writer.writeFloat(1, this.visibilty);
        if (this.scoutablity !== undefined)
            writer.writeFloat(2, this.scoutablity);
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TerStats {
        return TerStats.deserialize(bytes);
    }
}
export class RoadStats extends pb_1.Message {
    constructor(data?: any[] | {
        quality?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("quality" in data) {
                this.quality = data.quality;
            }
        }
    }
    get quality() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set quality(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        var data: {
            quality?: number;
        } = {};
        if (this.quality != null) {
            data.quality = this.quality;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.quality !== undefined)
            writer.writeFloat(1, this.quality);
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): RoadStats {
        return RoadStats.deserialize(bytes);
    }
}
export class TerImageSeq extends pb_1.Message {
    constructor(data?: any[] | {
        comp_image?: ImageAry;
        tmag: TerImage[];
        zval: number[];
        indx: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3, 4], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("comp_image" in data) {
                this.comp_image = data.comp_image;
            }
            this.tmag = data.tmag;
            this.zval = data.zval;
            this.indx = data.indx;
        }
    }
    get comp_image() {
        return pb_1.Message.getWrapperField(this, ImageAry, 1) as ImageAry;
    }
    set comp_image(value: ImageAry) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get tmag() {
        return pb_1.Message.getRepeatedWrapperField(this, TerImage, 2) as TerImage[];
    }
    set tmag(value: TerImage[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get zval() {
        return pb_1.Message.getField(this, 3) as number[];
    }
    set zval(value: number[]) {
        pb_1.Message.setField(this, 3, value);
    }
    get indx() {
        return pb_1.Message.getField(this, 4) as number[];
    }
    set indx(value: number[]) {
        pb_1.Message.setField(this, 4, value);
    }
    toObject() {
        var data: {
            comp_image?: ReturnType<typeof ImageAry.prototype.toObject>;
            tmag: ReturnType<typeof TerImage.prototype.toObject>[];
            zval: number[];
            indx: number[];
        } = {
            tmag: this.tmag.map((item: TerImage) => item.toObject()),
            zval: this.zval,
            indx: this.indx
        };
        if (this.comp_image != null) {
            data.comp_image = this.comp_image.toObject();
        }
        return data;
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
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TerImageSeq {
        return TerImageSeq.deserialize(bytes);
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
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mndx" in data) {
                this.mndx = data.mndx;
            }
            if ("name" in data) {
                this.name = data.name;
            }
            if ("sub_image" in data) {
                this.sub_image = data.sub_image;
            }
            if ("p_color" in data) {
                this.p_color = data.p_color;
            }
        }
    }
    get mndx() {
        return pb_1.Message.getField(this, 1) as number;
    }
    set mndx(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get name() {
        return pb_1.Message.getField(this, 2) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get sub_image() {
        return pb_1.Message.getWrapperField(this, SubImage, 3) as SubImage;
    }
    set sub_image(value: SubImage) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get p_color() {
        return pb_1.Message.getField(this, 5) as number;
    }
    set p_color(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    toObject() {
        var data: {
            mndx?: number;
            name?: string;
            sub_image?: ReturnType<typeof SubImage.prototype.toObject>;
            p_color?: number;
        } = {};
        if (this.mndx != null) {
            data.mndx = this.mndx;
        }
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.sub_image != null) {
            data.sub_image = this.sub_image.toObject();
        }
        if (this.p_color != null) {
            data.p_color = this.p_color;
        }
        return data;
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
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ModImage {
        return ModImage.deserialize(bytes);
    }
}
export class ModImageSeq extends pb_1.Message {
    constructor(data?: any[] | {
        mblk?: ImageAry;
        model: ModImage[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mblk" in data) {
                this.mblk = data.mblk;
            }
            this.model = data.model;
        }
    }
    get mblk() {
        return pb_1.Message.getWrapperField(this, ImageAry, 1) as ImageAry;
    }
    set mblk(value: ImageAry) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get model() {
        return pb_1.Message.getRepeatedWrapperField(this, ModImage, 2) as ModImage[];
    }
    set model(value: ModImage[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    toObject() {
        var data: {
            mblk?: ReturnType<typeof ImageAry.prototype.toObject>;
            model: ReturnType<typeof ModImage.prototype.toObject>[];
        } = {
            model: this.model.map((item: ModImage) => item.toObject())
        };
        if (this.mblk != null) {
            data.mblk = this.mblk.toObject();
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mblk !== undefined)
            writer.writeMessage(1, this.mblk, () => this.mblk.serialize(writer));
        if (this.model !== undefined)
            writer.writeRepeatedMessage(2, this.model, (item: ModImage) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
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
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ModImageSeq {
        return ModImageSeq.deserialize(bytes);
    }
}
