/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.15.8
 * source: GammaProto.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export declare enum Fields {
    none = 0,
    turn = 1,
    update = 2,
    reveal = 3,
    add = 4,
    del = 5,
    timages = 21,
    mimages = 22
}
export declare class Iloc extends pb_1.Message {
    constructor(data?: any[] | {
        y?: number;
        x?: number;
    });
    get y(): number;
    set y(value: number);
    get x(): number;
    set x(value: number);
    static fromObject(data: {
        y?: number;
        x?: number;
    }): Iloc;
    toObject(): {
        y?: number;
        x?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Iloc;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): Iloc;
}
export declare class Floc extends pb_1.Message {
    constructor(data?: any[] | {
        y?: number;
        x?: number;
    });
    get y(): number;
    set y(value: number);
    get x(): number;
    set x(value: number);
    static fromObject(data: {
        y?: number;
        x?: number;
    }): Floc;
    toObject(): {
        y?: number;
        x?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Floc;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): Floc;
}
export declare class IDloc extends pb_1.Message {
    constructor(data?: any[] | {
        dy?: number;
        dx?: number;
    });
    get dy(): number;
    set dy(value: number);
    get dx(): number;
    set dx(value: number);
    static fromObject(data: {
        dy?: number;
        dx?: number;
    }): IDloc;
    toObject(): {
        dy?: number;
        dx?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IDloc;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): IDloc;
}
export declare class FDloc extends pb_1.Message {
    constructor(data?: any[] | {
        dy?: number;
        dx?: number;
    });
    get dy(): number;
    set dy(value: number);
    get dx(): number;
    set dx(value: number);
    static fromObject(data: {
        dy?: number;
        dx?: number;
    }): FDloc;
    toObject(): {
        dy?: number;
        dx?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FDloc;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): FDloc;
}
export declare class Dloc extends pb_1.Message {
    constructor(data?: any[] | {
        dy_dt?: number;
        dx_dt?: number;
    });
    get dy_dt(): number;
    set dy_dt(value: number);
    get dx_dt(): number;
    set dx_dt(value: number);
    static fromObject(data: {
        dy_dt?: number;
        dx_dt?: number;
    }): Dloc;
    toObject(): {
        dy_dt?: number;
        dx_dt?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Dloc;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): Dloc;
}
export declare class Turn extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
    });
    get id(): number;
    set id(value: number);
    static fromObject(data: {
        id?: number;
    }): Turn;
    toObject(): {
        id?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Turn;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): Turn;
}
export declare class AMessage extends pb_1.Message {
    constructor(data?: any[] | {
        turn?: Turn;
        updates?: UpdateSeq;
        reveals?: RevealSeq;
        adds?: AddSeq;
        dels?: DelSeq;
        ter_images?: TerImageSeq;
        mod_images?: ModImageSeq;
    });
    get turn(): Turn;
    set turn(value: Turn);
    get updates(): UpdateSeq;
    set updates(value: UpdateSeq);
    get reveals(): RevealSeq;
    set reveals(value: RevealSeq);
    get adds(): AddSeq;
    set adds(value: AddSeq);
    get dels(): DelSeq;
    set dels(value: DelSeq);
    get ter_images(): TerImageSeq;
    set ter_images(value: TerImageSeq);
    get mod_images(): ModImageSeq;
    set mod_images(value: ModImageSeq);
    static fromObject(data: {
        turn?: ReturnType<typeof Turn.prototype.toObject>;
        updates?: ReturnType<typeof UpdateSeq.prototype.toObject>;
        reveals?: ReturnType<typeof RevealSeq.prototype.toObject>;
        adds?: ReturnType<typeof AddSeq.prototype.toObject>;
        dels?: ReturnType<typeof DelSeq.prototype.toObject>;
        ter_images?: ReturnType<typeof TerImageSeq.prototype.toObject>;
        mod_images?: ReturnType<typeof ModImageSeq.prototype.toObject>;
    }): AMessage;
    toObject(): {
        turn?: ReturnType<typeof Turn.prototype.toObject>;
        updates?: ReturnType<typeof UpdateSeq.prototype.toObject>;
        reveals?: ReturnType<typeof RevealSeq.prototype.toObject>;
        adds?: ReturnType<typeof AddSeq.prototype.toObject>;
        dels?: ReturnType<typeof DelSeq.prototype.toObject>;
        ter_images?: ReturnType<typeof TerImageSeq.prototype.toObject>;
        mod_images?: ReturnType<typeof ModImageSeq.prototype.toObject>;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AMessage;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): AMessage;
}
export declare class Update extends pb_1.Message {
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
    });
    get id(): number;
    set id(value: number);
    get hp(): number;
    set hp(value: number);
    get isHp(): boolean;
    set isHp(value: boolean);
    get floc(): Floc;
    set floc(value: Floc);
    get is_floc(): boolean;
    set is_floc(value: boolean);
    get iloc(): Iloc;
    set iloc(value: Iloc);
    get is_iloc(): boolean;
    set is_iloc(value: boolean);
    get dloc(): Dloc;
    set dloc(value: Dloc);
    get is_dloc(): boolean;
    set is_dloc(value: boolean);
    get player_id(): number;
    set player_id(value: number);
    get quality(): number;
    set quality(value: number);
    static fromObject(data: {
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
    }): Update;
    toObject(): {
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
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Update;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): Update;
}
export declare class UpdateSeq extends pb_1.Message {
    constructor(data?: any[] | {
        updates?: Update[];
    });
    get updates(): Update[];
    set updates(value: Update[]);
    static fromObject(data: {
        updates?: ReturnType<typeof Update.prototype.toObject>[];
    }): UpdateSeq;
    toObject(): {
        updates?: ReturnType<typeof Update.prototype.toObject>[];
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UpdateSeq;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): UpdateSeq;
}
export declare class Ident extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
        type?: string;
        i_ndx?: number;
        m_ndx?: number;
        display?: string;
        player_id?: number;
    });
    get id(): number;
    set id(value: number);
    get type(): string;
    set type(value: string);
    get i_ndx(): number;
    set i_ndx(value: number);
    get m_ndx(): number;
    set m_ndx(value: number);
    get display(): string;
    set display(value: string);
    get player_id(): number;
    set player_id(value: number);
    static fromObject(data: {
        id?: number;
        type?: string;
        i_ndx?: number;
        m_ndx?: number;
        display?: string;
        player_id?: number;
    }): Ident;
    toObject(): {
        id?: number;
        type?: string;
        i_ndx?: number;
        m_ndx?: number;
        display?: string;
        player_id?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Ident;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): Ident;
}
export declare class Add extends pb_1.Message {
    constructor(data?: any[] | {
        ident?: Ident;
        update?: Update;
    });
    get ident(): Ident;
    set ident(value: Ident);
    get update(): Update;
    set update(value: Update);
    static fromObject(data: {
        ident?: ReturnType<typeof Ident.prototype.toObject>;
        update?: ReturnType<typeof Update.prototype.toObject>;
    }): Add;
    toObject(): {
        ident?: ReturnType<typeof Ident.prototype.toObject>;
        update?: ReturnType<typeof Update.prototype.toObject>;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Add;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): Add;
}
export declare class AddSeq extends pb_1.Message {
    constructor(data?: any[] | {
        adds?: Add[];
    });
    get adds(): Add[];
    set adds(value: Add[]);
    static fromObject(data: {
        adds?: ReturnType<typeof Add.prototype.toObject>[];
    }): AddSeq;
    toObject(): {
        adds?: ReturnType<typeof Add.prototype.toObject>[];
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AddSeq;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): AddSeq;
}
export declare class Del extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
    });
    get id(): number;
    set id(value: number);
    static fromObject(data: {
        id?: number;
    }): Del;
    toObject(): {
        id?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Del;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): Del;
}
export declare class DelSeq extends pb_1.Message {
    constructor(data?: any[] | {
        dels?: Del[];
    });
    get dels(): Del[];
    set dels(value: Del[]);
    static fromObject(data: {
        dels?: ReturnType<typeof Del.prototype.toObject>[];
    }): DelSeq;
    toObject(): {
        dels?: ReturnType<typeof Del.prototype.toObject>[];
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DelSeq;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): DelSeq;
}
export declare class TerRunX extends pb_1.Message {
    constructor(data?: any[] | {
        dx?: number;
        ztv?: number;
    });
    get dx(): number;
    set dx(value: number);
    get ztv(): number;
    set ztv(value: number);
    static fromObject(data: {
        dx?: number;
        ztv?: number;
    }): TerRunX;
    toObject(): {
        dx?: number;
        ztv?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerRunX;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): TerRunX;
}
export declare class TerRowY extends pb_1.Message {
    constructor(data?: any[] | {
        loc?: Iloc;
        runx?: TerRunX[];
    });
    get loc(): Iloc;
    set loc(value: Iloc);
    get runx(): TerRunX[];
    set runx(value: TerRunX[]);
    static fromObject(data: {
        loc?: ReturnType<typeof Iloc.prototype.toObject>;
        runx?: ReturnType<typeof TerRunX.prototype.toObject>[];
    }): TerRowY;
    toObject(): {
        loc?: ReturnType<typeof Iloc.prototype.toObject>;
        runx?: ReturnType<typeof TerRunX.prototype.toObject>[];
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerRowY;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): TerRowY;
}
export declare class RevealSeq extends pb_1.Message {
    constructor(data?: any[] | {
        rowy?: TerRowY[];
    });
    get rowy(): TerRowY[];
    set rowy(value: TerRowY[]);
    static fromObject(data: {
        rowy?: ReturnType<typeof TerRowY.prototype.toObject>[];
    }): RevealSeq;
    toObject(): {
        rowy?: ReturnType<typeof TerRowY.prototype.toObject>[];
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RevealSeq;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): RevealSeq;
}
export declare class SubImage extends pb_1.Message {
    constructor(data?: any[] | {
        y0?: number;
        x0?: number;
        y_px?: number;
        x_px?: number;
        y_off?: number;
        x_off?: number;
        alt_url?: string;
    });
    get y0(): number;
    set y0(value: number);
    get x0(): number;
    set x0(value: number);
    get y_px(): number;
    set y_px(value: number);
    get x_px(): number;
    set x_px(value: number);
    get y_off(): number;
    set y_off(value: number);
    get x_off(): number;
    set x_off(value: number);
    get alt_url(): string;
    set alt_url(value: string);
    static fromObject(data: {
        y0?: number;
        x0?: number;
        y_px?: number;
        x_px?: number;
        y_off?: number;
        x_off?: number;
        alt_url?: string;
    }): SubImage;
    toObject(): {
        y0?: number;
        x0?: number;
        y_px?: number;
        x_px?: number;
        y_off?: number;
        x_off?: number;
        alt_url?: string;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SubImage;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): SubImage;
}
export declare class ImageAry extends pb_1.Message {
    constructor(data?: any[] | {
        npixels?: number;
        nrows?: number;
        ncols?: number;
        url?: string;
    });
    get npixels(): number;
    set npixels(value: number);
    get nrows(): number;
    set nrows(value: number);
    get ncols(): number;
    set ncols(value: number);
    get url(): string;
    set url(value: string);
    static fromObject(data: {
        npixels?: number;
        nrows?: number;
        ncols?: number;
        url?: string;
    }): ImageAry;
    toObject(): {
        npixels?: number;
        nrows?: number;
        ncols?: number;
        url?: string;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ImageAry;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): ImageAry;
}
export declare class TerImage extends pb_1.Message {
    constructor(data?: any[] | {
        tvid?: number;
        name?: string;
        sub_image?: SubImage;
    });
    get tvid(): number;
    set tvid(value: number);
    get name(): string;
    set name(value: string);
    get sub_image(): SubImage;
    set sub_image(value: SubImage);
    static fromObject(data: {
        tvid?: number;
        name?: string;
        sub_image?: ReturnType<typeof SubImage.prototype.toObject>;
    }): TerImage;
    toObject(): {
        tvid?: number;
        name?: string;
        sub_image?: ReturnType<typeof SubImage.prototype.toObject>;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerImage;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): TerImage;
}
export declare class TerStats extends pb_1.Message {
    constructor(data?: any[] | {
        visibilty?: number;
        scoutablity?: number;
    });
    get visibilty(): number;
    set visibilty(value: number);
    get scoutablity(): number;
    set scoutablity(value: number);
    static fromObject(data: {
        visibilty?: number;
        scoutablity?: number;
    }): TerStats;
    toObject(): {
        visibilty?: number;
        scoutablity?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerStats;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): TerStats;
}
export declare class RoadStats extends pb_1.Message {
    constructor(data?: any[] | {
        quality?: number;
    });
    get quality(): number;
    set quality(value: number);
    static fromObject(data: {
        quality?: number;
    }): RoadStats;
    toObject(): {
        quality?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RoadStats;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): RoadStats;
}
export declare class TerImageSeq extends pb_1.Message {
    constructor(data?: any[] | {
        comp_image?: ImageAry;
        tmag?: TerImage[];
        zval?: number[];
        indx?: number[];
    });
    get comp_image(): ImageAry;
    set comp_image(value: ImageAry);
    get tmag(): TerImage[];
    set tmag(value: TerImage[]);
    get zval(): number[];
    set zval(value: number[]);
    get indx(): number[];
    set indx(value: number[]);
    static fromObject(data: {
        comp_image?: ReturnType<typeof ImageAry.prototype.toObject>;
        tmag?: ReturnType<typeof TerImage.prototype.toObject>[];
        zval?: number[];
        indx?: number[];
    }): TerImageSeq;
    toObject(): {
        comp_image?: ReturnType<typeof ImageAry.prototype.toObject>;
        tmag?: ReturnType<typeof TerImage.prototype.toObject>[];
        zval?: number[];
        indx?: number[];
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerImageSeq;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): TerImageSeq;
}
export declare class ModImage extends pb_1.Message {
    constructor(data?: any[] | {
        mndx?: number;
        name?: string;
        sub_image?: SubImage;
        p_color?: number;
    });
    get mndx(): number;
    set mndx(value: number);
    get name(): string;
    set name(value: string);
    get sub_image(): SubImage;
    set sub_image(value: SubImage);
    get p_color(): number;
    set p_color(value: number);
    static fromObject(data: {
        mndx?: number;
        name?: string;
        sub_image?: ReturnType<typeof SubImage.prototype.toObject>;
        p_color?: number;
    }): ModImage;
    toObject(): {
        mndx?: number;
        name?: string;
        sub_image?: ReturnType<typeof SubImage.prototype.toObject>;
        p_color?: number;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModImage;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): ModImage;
}
export declare class ModImageSeq extends pb_1.Message {
    constructor(data?: any[] | {
        mblk?: ImageAry;
        model?: ModImage[];
    });
    get mblk(): ImageAry;
    set mblk(value: ImageAry);
    get model(): ModImage[];
    set model(value: ModImage[]);
    static fromObject(data: {
        mblk?: ReturnType<typeof ImageAry.prototype.toObject>;
        model?: ReturnType<typeof ModImage.prototype.toObject>[];
    }): ModImageSeq;
    toObject(): {
        mblk?: ReturnType<typeof ImageAry.prototype.toObject>;
        model?: ReturnType<typeof ModImage.prototype.toObject>[];
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModImageSeq;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): ModImageSeq;
}
