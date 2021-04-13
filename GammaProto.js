import * as pb_1 from "google-protobuf";
export var Fields;
(function (Fields) {
    Fields[Fields["none"] = 0] = "none";
    Fields[Fields["turn"] = 1] = "turn";
    Fields[Fields["update"] = 2] = "update";
    Fields[Fields["reveal"] = 3] = "reveal";
    Fields[Fields["add"] = 4] = "add";
    Fields[Fields["del"] = 5] = "del";
    Fields[Fields["timages"] = 21] = "timages";
    Fields[Fields["mimages"] = 22] = "mimages";
})(Fields || (Fields = {}));
export class Iloc extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.y = data.y;
            this.x = data.x;
        }
    }
    get y() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set y(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get x() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set x(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            y: this.y,
            x: this.x
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.y !== undefined)
            writer.writeInt32(1, this.y);
        if (this.x !== undefined)
            writer.writeInt32(2, this.x);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Iloc();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.y = data.y;
            this.x = data.x;
        }
    }
    get y() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set y(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get x() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set x(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            y: this.y,
            x: this.x
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.y !== undefined)
            writer.writeFloat(1, this.y);
        if (this.x !== undefined)
            writer.writeFloat(2, this.x);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Floc();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dy = data.dy;
            this.dx = data.dx;
        }
    }
    get dy() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set dy(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get dx() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set dx(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            dy: this.dy,
            dx: this.dx
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dy !== undefined)
            writer.writeInt32(1, this.dy);
        if (this.dx !== undefined)
            writer.writeInt32(2, this.dx);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IDloc();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dy = data.dy;
            this.dx = data.dx;
        }
    }
    get dy() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set dy(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get dx() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set dx(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            dy: this.dy,
            dx: this.dx
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dy !== undefined)
            writer.writeFloat(1, this.dy);
        if (this.dx !== undefined)
            writer.writeFloat(2, this.dx);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FDloc();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dy_dt = data.dy_dt;
            this.dx_dt = data.dx_dt;
        }
    }
    get dy_dt() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set dy_dt(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get dx_dt() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set dx_dt(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            dy_dt: this.dy_dt,
            dx_dt: this.dx_dt
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dy_dt !== undefined)
            writer.writeFloat(1, this.dy_dt);
        if (this.dx_dt !== undefined)
            writer.writeFloat(2, this.dx_dt);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Dloc();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.id = data.id;
        }
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            id: this.id
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeUint32(1, this.id);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Turn();
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
    constructor(data) {
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
    get turn() {
        return pb_1.Message.getWrapperField(this, Turn, 1);
    }
    set turn(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get updates() {
        return pb_1.Message.getWrapperField(this, UpdateSeq, 2);
    }
    set updates(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get reveals() {
        return pb_1.Message.getWrapperField(this, RevealSeq, 3);
    }
    set reveals(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get adds() {
        return pb_1.Message.getWrapperField(this, AddSeq, 4);
    }
    set adds(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get dels() {
        return pb_1.Message.getWrapperField(this, DelSeq, 5);
    }
    set dels(value) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get ter_images() {
        return pb_1.Message.getWrapperField(this, TerImageSeq, 21);
    }
    set ter_images(value) {
        pb_1.Message.setWrapperField(this, 21, value);
    }
    get mod_images() {
        return pb_1.Message.getWrapperField(this, ModImageSeq, 22);
    }
    set mod_images(value) {
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
    serialize(w) {
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
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AMessage();
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
    constructor(data) {
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
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get hp() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set hp(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get isHp() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set isHp(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get floc() {
        return pb_1.Message.getWrapperField(this, Floc, 4);
    }
    set floc(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get is_floc() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set is_floc(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get iloc() {
        return pb_1.Message.getWrapperField(this, Iloc, 6);
    }
    set iloc(value) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get is_iloc() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set is_iloc(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get dloc() {
        return pb_1.Message.getWrapperField(this, Dloc, 8);
    }
    set dloc(value) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get is_dloc() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set is_dloc(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get player_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined);
    }
    set player_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get quality() {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined);
    }
    set quality(value) {
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
    serialize(w) {
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
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Update();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.updates = data.updates;
        }
    }
    get updates() {
        return pb_1.Message.getRepeatedWrapperField(this, Update, 1);
    }
    set updates(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        return {
            updates: this.updates.map((item) => item.toObject())
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.updates !== undefined)
            writer.writeRepeatedMessage(1, this.updates, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new UpdateSeq();
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
    constructor(data) {
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
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get type() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set type(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get i_ndx() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set i_ndx(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get m_ndx() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set m_ndx(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get display() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set display(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get player_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined);
    }
    set player_id(value) {
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
    serialize(w) {
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
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Ident();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.ident = data.ident;
            this.update = data.update;
        }
    }
    get ident() {
        return pb_1.Message.getWrapperField(this, Ident, 1);
    }
    set ident(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get update() {
        return pb_1.Message.getWrapperField(this, Update, 2);
    }
    set update(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            ident: this.ident && this.ident.toObject(),
            update: this.update && this.update.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ident !== undefined)
            writer.writeMessage(1, this.ident, () => this.ident.serialize(writer));
        if (this.update !== undefined)
            writer.writeMessage(2, this.update, () => this.update.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Add();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.adds = data.adds;
        }
    }
    get adds() {
        return pb_1.Message.getRepeatedWrapperField(this, Add, 1);
    }
    set adds(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        return {
            adds: this.adds.map((item) => item.toObject())
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.adds !== undefined)
            writer.writeRepeatedMessage(1, this.adds, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AddSeq();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.id = data.id;
        }
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            id: this.id
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id !== undefined)
            writer.writeUint32(2, this.id);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Del();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dels = data.dels;
        }
    }
    get dels() {
        return pb_1.Message.getRepeatedWrapperField(this, Del, 1);
    }
    set dels(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        return {
            dels: this.dels.map((item) => item.toObject())
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dels !== undefined)
            writer.writeRepeatedMessage(1, this.dels, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DelSeq();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dx = data.dx;
            this.ztv = data.ztv;
        }
    }
    get dx() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set dx(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get ztv() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set ztv(value) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        return {
            dx: this.dx,
            ztv: this.ztv
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dx !== undefined)
            writer.writeInt32(2, this.dx);
        if (this.ztv !== undefined)
            writer.writeInt32(3, this.ztv);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TerRunX();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.loc = data.loc;
            this.runx = data.runx;
        }
    }
    get loc() {
        return pb_1.Message.getWrapperField(this, Iloc, 1);
    }
    set loc(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get runx() {
        return pb_1.Message.getRepeatedWrapperField(this, TerRunX, 2);
    }
    set runx(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    toObject() {
        return {
            loc: this.loc && this.loc.toObject(),
            runx: this.runx.map((item) => item.toObject())
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.loc !== undefined)
            writer.writeMessage(1, this.loc, () => this.loc.serialize(writer));
        if (this.runx !== undefined)
            writer.writeRepeatedMessage(2, this.runx, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TerRowY();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.rowy = data.rowy;
        }
    }
    get rowy() {
        return pb_1.Message.getRepeatedWrapperField(this, TerRowY, 1);
    }
    set rowy(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        return {
            rowy: this.rowy.map((item) => item.toObject())
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.rowy !== undefined)
            writer.writeRepeatedMessage(1, this.rowy, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RevealSeq();
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
    constructor(data) {
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
    get y0() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set y0(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get x0() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set x0(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get y_px() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set y_px(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get x_px() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set x_px(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get y_off() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set y_off(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get x_off() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set x_off(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get alt_url() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set alt_url(value) {
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
    serialize(w) {
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
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SubImage();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.npixels = data.npixels;
            this.nrows = data.nrows;
            this.ncols = data.ncols;
            this.url = data.url;
        }
    }
    get npixels() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set npixels(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get nrows() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set nrows(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get ncols() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set ncols(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get url() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set url(value) {
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
    serialize(w) {
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
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ImageAry();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.tvid = data.tvid;
            this.name = data.name;
            this.sub_image = data.sub_image;
        }
    }
    get tvid() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set tvid(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set name(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get sub_image() {
        return pb_1.Message.getWrapperField(this, SubImage, 3);
    }
    set sub_image(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        return {
            tvid: this.tvid,
            name: this.name,
            sub_image: this.sub_image && this.sub_image.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.tvid !== undefined)
            writer.writeUint32(1, this.tvid);
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(2, this.name);
        if (this.sub_image !== undefined)
            writer.writeMessage(3, this.sub_image, () => this.sub_image.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TerImage();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.visibilty = data.visibilty;
            this.scoutablity = data.scoutablity;
        }
    }
    get visibilty() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set visibilty(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get scoutablity() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set scoutablity(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            visibilty: this.visibilty,
            scoutablity: this.scoutablity
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.visibilty !== undefined)
            writer.writeFloat(1, this.visibilty);
        if (this.scoutablity !== undefined)
            writer.writeFloat(2, this.scoutablity);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TerStats();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.quality = data.quality;
        }
    }
    get quality() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set quality(value) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            quality: this.quality
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.quality !== undefined)
            writer.writeFloat(1, this.quality);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RoadStats();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2, 3, 4], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.comp_image = data.comp_image;
            this.tmag = data.tmag;
            this.zval = data.zval;
            this.indx = data.indx;
        }
    }
    get comp_image() {
        return pb_1.Message.getWrapperField(this, ImageAry, 1);
    }
    set comp_image(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get tmag() {
        return pb_1.Message.getRepeatedWrapperField(this, TerImage, 2);
    }
    set tmag(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get zval() {
        return pb_1.Message.getField(this, 3);
    }
    set zval(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get indx() {
        return pb_1.Message.getField(this, 4);
    }
    set indx(value) {
        pb_1.Message.setField(this, 4, value);
    }
    toObject() {
        return {
            comp_image: this.comp_image && this.comp_image.toObject(),
            tmag: this.tmag.map((item) => item.toObject()),
            zval: this.zval,
            indx: this.indx
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.comp_image !== undefined)
            writer.writeMessage(1, this.comp_image, () => this.comp_image.serialize(writer));
        if (this.tmag !== undefined)
            writer.writeRepeatedMessage(2, this.tmag, (item) => item.serialize(writer));
        if (this.zval !== undefined)
            writer.writePackedInt32(3, this.zval);
        if (this.indx !== undefined)
            writer.writePackedInt32(4, this.indx);
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TerImageSeq();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.mndx = data.mndx;
            this.name = data.name;
            this.sub_image = data.sub_image;
            this.p_color = data.p_color;
        }
    }
    get mndx() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set mndx(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set name(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get sub_image() {
        return pb_1.Message.getWrapperField(this, SubImage, 3);
    }
    set sub_image(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get p_color() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set p_color(value) {
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
    serialize(w) {
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
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ModImage();
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
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.mblk = data.mblk;
            this.model = data.model;
        }
    }
    get mblk() {
        return pb_1.Message.getWrapperField(this, ImageAry, 1);
    }
    set mblk(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get model() {
        return pb_1.Message.getRepeatedWrapperField(this, ModImage, 2);
    }
    set model(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    toObject() {
        return {
            mblk: this.mblk && this.mblk.toObject(),
            model: this.model.map((item) => item.toObject())
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mblk !== undefined)
            writer.writeMessage(1, this.mblk, () => this.mblk.serialize(writer));
        if (this.model !== undefined)
            writer.writeRepeatedMessage(2, this.model, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
        return undefined;
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ModImageSeq();
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
