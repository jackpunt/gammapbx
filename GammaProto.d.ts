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
    toObject(): {
        y: number;
        x: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Iloc;
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
    toObject(): {
        y: number;
        x: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Floc;
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
    toObject(): {
        dy: number;
        dx: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IDloc;
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
    toObject(): {
        dy: number;
        dx: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FDloc;
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
    toObject(): {
        dy_dt: number;
        dx_dt: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Dloc;
}
export declare class Turn extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
    });
    get id(): number;
    set id(value: number);
    toObject(): {
        id: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Turn;
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
    toObject(): {
        turn: {
            id: number;
        };
        updates: {
            updates: {
                id: number;
                hp: number;
                isHp: boolean;
                floc: {
                    y: number;
                    x: number;
                };
                is_floc: boolean;
                iloc: {
                    y: number;
                    x: number;
                };
                is_iloc: boolean;
                dloc: {
                    dy_dt: number;
                    dx_dt: number;
                };
                is_dloc: boolean;
                player_id: number;
                quality: number;
            }[];
        };
        reveals: {
            rowy: {
                loc: {
                    y: number;
                    x: number;
                };
                runx: {
                    dx: number;
                    ztv: number;
                }[];
            }[];
        };
        adds: {
            adds: {
                ident: {
                    id: number;
                    type: string;
                    i_ndx: number;
                    m_ndx: number;
                    display: string;
                    player_id: number;
                };
                update: {
                    id: number;
                    hp: number;
                    isHp: boolean;
                    floc: {
                        y: number;
                        x: number;
                    };
                    is_floc: boolean;
                    iloc: {
                        y: number;
                        x: number;
                    };
                    is_iloc: boolean;
                    dloc: {
                        dy_dt: number;
                        dx_dt: number;
                    };
                    is_dloc: boolean;
                    player_id: number;
                    quality: number;
                };
            }[];
        };
        dels: {
            dels: {
                id: number;
            }[];
        };
        ter_images: {
            comp_image: {
                npixels: number;
                nrows: number;
                ncols: number;
                url: string;
            };
            tmag: {
                tvid: number;
                name: string;
                sub_image: {
                    y0: number;
                    x0: number;
                    y_px: number;
                    x_px: number;
                    y_off: number;
                    x_off: number;
                    alt_url: string;
                };
            }[];
            zval: number[];
            indx: number[];
        };
        mod_images: {
            mblk: {
                npixels: number;
                nrows: number;
                ncols: number;
                url: string;
            };
            model: {
                mndx: number;
                name: string;
                sub_image: {
                    y0: number;
                    x0: number;
                    y_px: number;
                    x_px: number;
                    y_off: number;
                    x_off: number;
                    alt_url: string;
                };
                p_color: number;
            }[];
        };
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AMessage;
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
    toObject(): {
        id: number;
        hp: number;
        isHp: boolean;
        floc: {
            y: number;
            x: number;
        };
        is_floc: boolean;
        iloc: {
            y: number;
            x: number;
        };
        is_iloc: boolean;
        dloc: {
            dy_dt: number;
            dx_dt: number;
        };
        is_dloc: boolean;
        player_id: number;
        quality: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Update;
}
export declare class UpdateSeq extends pb_1.Message {
    constructor(data?: any[] | {
        updates?: Update[];
    });
    get updates(): Update[];
    set updates(value: Update[]);
    toObject(): {
        updates: {
            id: number;
            hp: number;
            isHp: boolean;
            floc: {
                y: number;
                x: number;
            };
            is_floc: boolean;
            iloc: {
                y: number;
                x: number;
            };
            is_iloc: boolean;
            dloc: {
                dy_dt: number;
                dx_dt: number;
            };
            is_dloc: boolean;
            player_id: number;
            quality: number;
        }[];
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UpdateSeq;
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
    toObject(): {
        id: number;
        type: string;
        i_ndx: number;
        m_ndx: number;
        display: string;
        player_id: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Ident;
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
    toObject(): {
        ident: {
            id: number;
            type: string;
            i_ndx: number;
            m_ndx: number;
            display: string;
            player_id: number;
        };
        update: {
            id: number;
            hp: number;
            isHp: boolean;
            floc: {
                y: number;
                x: number;
            };
            is_floc: boolean;
            iloc: {
                y: number;
                x: number;
            };
            is_iloc: boolean;
            dloc: {
                dy_dt: number;
                dx_dt: number;
            };
            is_dloc: boolean;
            player_id: number;
            quality: number;
        };
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Add;
}
export declare class AddSeq extends pb_1.Message {
    constructor(data?: any[] | {
        adds?: Add[];
    });
    get adds(): Add[];
    set adds(value: Add[]);
    toObject(): {
        adds: {
            ident: {
                id: number;
                type: string;
                i_ndx: number;
                m_ndx: number;
                display: string;
                player_id: number;
            };
            update: {
                id: number;
                hp: number;
                isHp: boolean;
                floc: {
                    y: number;
                    x: number;
                };
                is_floc: boolean;
                iloc: {
                    y: number;
                    x: number;
                };
                is_iloc: boolean;
                dloc: {
                    dy_dt: number;
                    dx_dt: number;
                };
                is_dloc: boolean;
                player_id: number;
                quality: number;
            };
        }[];
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AddSeq;
}
export declare class Del extends pb_1.Message {
    constructor(data?: any[] | {
        id?: number;
    });
    get id(): number;
    set id(value: number);
    toObject(): {
        id: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Del;
}
export declare class DelSeq extends pb_1.Message {
    constructor(data?: any[] | {
        dels?: Del[];
    });
    get dels(): Del[];
    set dels(value: Del[]);
    toObject(): {
        dels: {
            id: number;
        }[];
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DelSeq;
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
    toObject(): {
        dx: number;
        ztv: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerRunX;
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
    toObject(): {
        loc: {
            y: number;
            x: number;
        };
        runx: {
            dx: number;
            ztv: number;
        }[];
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerRowY;
}
export declare class RevealSeq extends pb_1.Message {
    constructor(data?: any[] | {
        rowy?: TerRowY[];
    });
    get rowy(): TerRowY[];
    set rowy(value: TerRowY[]);
    toObject(): {
        rowy: {
            loc: {
                y: number;
                x: number;
            };
            runx: {
                dx: number;
                ztv: number;
            }[];
        }[];
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RevealSeq;
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
    toObject(): {
        y0: number;
        x0: number;
        y_px: number;
        x_px: number;
        y_off: number;
        x_off: number;
        alt_url: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SubImage;
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
    toObject(): {
        npixels: number;
        nrows: number;
        ncols: number;
        url: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ImageAry;
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
    toObject(): {
        tvid: number;
        name: string;
        sub_image: {
            y0: number;
            x0: number;
            y_px: number;
            x_px: number;
            y_off: number;
            x_off: number;
            alt_url: string;
        };
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerImage;
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
    toObject(): {
        visibilty: number;
        scoutablity: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerStats;
}
export declare class RoadStats extends pb_1.Message {
    constructor(data?: any[] | {
        quality?: number;
    });
    get quality(): number;
    set quality(value: number);
    toObject(): {
        quality: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RoadStats;
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
    toObject(): {
        comp_image: {
            npixels: number;
            nrows: number;
            ncols: number;
            url: string;
        };
        tmag: {
            tvid: number;
            name: string;
            sub_image: {
                y0: number;
                x0: number;
                y_px: number;
                x_px: number;
                y_off: number;
                x_off: number;
                alt_url: string;
            };
        }[];
        zval: number[];
        indx: number[];
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TerImageSeq;
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
    toObject(): {
        mndx: number;
        name: string;
        sub_image: {
            y0: number;
            x0: number;
            y_px: number;
            x_px: number;
            y_off: number;
            x_off: number;
            alt_url: string;
        };
        p_color: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModImage;
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
    toObject(): {
        mblk: {
            npixels: number;
            nrows: number;
            ncols: number;
            url: string;
        };
        model: {
            mndx: number;
            name: string;
            sub_image: {
                y0: number;
                x0: number;
                y_px: number;
                x_px: number;
                y_off: number;
                x_off: number;
                alt_url: string;
            };
            p_color: number;
        }[];
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModImageSeq;
}
