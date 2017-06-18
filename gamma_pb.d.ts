// package: 
// file: gamma.proto

import * as jspb from "google-protobuf";

export class Iloc extends jspb.Message {
  getY(): number;
  setY(value: number): void;

  getX(): number;
  setX(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Iloc.AsObject;
  static toObject(includeInstance: boolean, msg: Iloc): Iloc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Iloc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Iloc;
  static deserializeBinaryFromReader(message: Iloc, reader: jspb.BinaryReader): Iloc;
}

export namespace Iloc {
  export type AsObject = {
    y: number,
    x: number,
  }
}

export class Floc extends jspb.Message {
  getY(): number;
  setY(value: number): void;

  getX(): number;
  setX(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Floc.AsObject;
  static toObject(includeInstance: boolean, msg: Floc): Floc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Floc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Floc;
  static deserializeBinaryFromReader(message: Floc, reader: jspb.BinaryReader): Floc;
}

export namespace Floc {
  export type AsObject = {
    y: number,
    x: number,
  }
}

export class IDloc extends jspb.Message {
  getDy(): number;
  setDy(value: number): void;

  getDx(): number;
  setDx(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDloc.AsObject;
  static toObject(includeInstance: boolean, msg: IDloc): IDloc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IDloc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDloc;
  static deserializeBinaryFromReader(message: IDloc, reader: jspb.BinaryReader): IDloc;
}

export namespace IDloc {
  export type AsObject = {
    dy: number,
    dx: number,
  }
}

export class FDloc extends jspb.Message {
  getDy(): number;
  setDy(value: number): void;

  getDx(): number;
  setDx(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FDloc.AsObject;
  static toObject(includeInstance: boolean, msg: FDloc): FDloc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FDloc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FDloc;
  static deserializeBinaryFromReader(message: FDloc, reader: jspb.BinaryReader): FDloc;
}

export namespace FDloc {
  export type AsObject = {
    dy: number,
    dx: number,
  }
}

export class Dloc extends jspb.Message {
  getDyDt(): number;
  setDyDt(value: number): void;

  getDxDt(): number;
  setDxDt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dloc.AsObject;
  static toObject(includeInstance: boolean, msg: Dloc): Dloc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dloc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dloc;
  static deserializeBinaryFromReader(message: Dloc, reader: jspb.BinaryReader): Dloc;
}

export namespace Dloc {
  export type AsObject = {
    dyDt: number,
    dxDt: number,
  }
}

export class Turn extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Turn.AsObject;
  static toObject(includeInstance: boolean, msg: Turn): Turn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Turn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Turn;
  static deserializeBinaryFromReader(message: Turn, reader: jspb.BinaryReader): Turn;
}

export namespace Turn {
  export type AsObject = {
    id: number,
  }
}

export class AMessage extends jspb.Message {
  hasTurn(): boolean;
  clearTurn(): void;
  getTurn(): Turn | undefined;
  setTurn(value?: Turn): void;

  hasUpdates(): boolean;
  clearUpdates(): void;
  getUpdates(): UpdateSeq | undefined;
  setUpdates(value?: UpdateSeq): void;

  hasReveals(): boolean;
  clearReveals(): void;
  getReveals(): RevealSeq | undefined;
  setReveals(value?: RevealSeq): void;

  hasAdds(): boolean;
  clearAdds(): void;
  getAdds(): AddSeq | undefined;
  setAdds(value?: AddSeq): void;

  hasDels(): boolean;
  clearDels(): void;
  getDels(): DelSeq | undefined;
  setDels(value?: DelSeq): void;

  hasTerImages(): boolean;
  clearTerImages(): void;
  getTerImages(): TerImageSeq | undefined;
  setTerImages(value?: TerImageSeq): void;

  hasModImages(): boolean;
  clearModImages(): void;
  getModImages(): ModImageSeq | undefined;
  setModImages(value?: ModImageSeq): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AMessage): AMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AMessage;
  static deserializeBinaryFromReader(message: AMessage, reader: jspb.BinaryReader): AMessage;
}

export namespace AMessage {
  export type AsObject = {
    turn?: Turn.AsObject,
    updates?: UpdateSeq.AsObject,
    reveals?: RevealSeq.AsObject,
    adds?: AddSeq.AsObject,
    dels?: DelSeq.AsObject,
    terImages?: TerImageSeq.AsObject,
    modImages?: ModImageSeq.AsObject,
  }
}

export class Update extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getHp(): number;
  setHp(value: number): void;

  getIshp(): boolean;
  setIshp(value: boolean): void;

  hasFloc(): boolean;
  clearFloc(): void;
  getFloc(): Floc | undefined;
  setFloc(value?: Floc): void;

  getIsFloc(): boolean;
  setIsFloc(value: boolean): void;

  hasIloc(): boolean;
  clearIloc(): void;
  getIloc(): Iloc | undefined;
  setIloc(value?: Iloc): void;

  getIsIloc(): boolean;
  setIsIloc(value: boolean): void;

  hasDloc(): boolean;
  clearDloc(): void;
  getDloc(): Dloc | undefined;
  setDloc(value?: Dloc): void;

  getIsDloc(): boolean;
  setIsDloc(value: boolean): void;

  getPlayerId(): number;
  setPlayerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Update.AsObject;
  static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Update;
  static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
}

export namespace Update {
  export type AsObject = {
    id: number,
    hp: number,
    ishp: boolean,
    floc?: Floc.AsObject,
    isFloc: boolean,
    iloc?: Iloc.AsObject,
    isIloc: boolean,
    dloc?: Dloc.AsObject,
    isDloc: boolean,
    playerId: number,
  }
}

export class UpdateSeq extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<Update>;
  setUpdatesList(value: Array<Update>): void;
  addUpdates(value?: Update, index?: number): Update;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeq): UpdateSeq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSeq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeq;
  static deserializeBinaryFromReader(message: UpdateSeq, reader: jspb.BinaryReader): UpdateSeq;
}

export namespace UpdateSeq {
  export type AsObject = {
    updatesList: Array<Update.AsObject>,
  }
}

export class Ident extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): string;
  setType(value: string): void;

  getINdx(): number;
  setINdx(value: number): void;

  getMNdx(): number;
  setMNdx(value: number): void;

  getDisplay(): string;
  setDisplay(value: string): void;

  getPlayerId(): number;
  setPlayerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ident.AsObject;
  static toObject(includeInstance: boolean, msg: Ident): Ident.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ident, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ident;
  static deserializeBinaryFromReader(message: Ident, reader: jspb.BinaryReader): Ident;
}

export namespace Ident {
  export type AsObject = {
    id: number,
    type: string,
    iNdx: number,
    mNdx: number,
    display: string,
    playerId: number,
  }
}

export class Add extends jspb.Message {
  hasIdent(): boolean;
  clearIdent(): void;
  getIdent(): Ident | undefined;
  setIdent(value?: Ident): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): Update | undefined;
  setUpdate(value?: Update): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Add.AsObject;
  static toObject(includeInstance: boolean, msg: Add): Add.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Add, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Add;
  static deserializeBinaryFromReader(message: Add, reader: jspb.BinaryReader): Add;
}

export namespace Add {
  export type AsObject = {
    ident?: Ident.AsObject,
    update?: Update.AsObject,
  }
}

export class AddSeq extends jspb.Message {
  clearAddsList(): void;
  getAddsList(): Array<Add>;
  setAddsList(value: Array<Add>): void;
  addAdds(value?: Add, index?: number): Add;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSeq.AsObject;
  static toObject(includeInstance: boolean, msg: AddSeq): AddSeq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSeq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSeq;
  static deserializeBinaryFromReader(message: AddSeq, reader: jspb.BinaryReader): AddSeq;
}

export namespace AddSeq {
  export type AsObject = {
    addsList: Array<Add.AsObject>,
  }
}

export class Del extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Del.AsObject;
  static toObject(includeInstance: boolean, msg: Del): Del.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Del, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Del;
  static deserializeBinaryFromReader(message: Del, reader: jspb.BinaryReader): Del;
}

export namespace Del {
  export type AsObject = {
    id: number,
  }
}

export class DelSeq extends jspb.Message {
  clearDelsList(): void;
  getDelsList(): Array<Del>;
  setDelsList(value: Array<Del>): void;
  addDels(value?: Del, index?: number): Del;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelSeq.AsObject;
  static toObject(includeInstance: boolean, msg: DelSeq): DelSeq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DelSeq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelSeq;
  static deserializeBinaryFromReader(message: DelSeq, reader: jspb.BinaryReader): DelSeq;
}

export namespace DelSeq {
  export type AsObject = {
    delsList: Array<Del.AsObject>,
  }
}

export class TerRunX extends jspb.Message {
  getDx(): number;
  setDx(value: number): void;

  getZtv(): number;
  setZtv(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TerRunX.AsObject;
  static toObject(includeInstance: boolean, msg: TerRunX): TerRunX.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TerRunX, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TerRunX;
  static deserializeBinaryFromReader(message: TerRunX, reader: jspb.BinaryReader): TerRunX;
}

export namespace TerRunX {
  export type AsObject = {
    dx: number,
    ztv: number,
  }
}

export class TerRowY extends jspb.Message {
  hasLoc(): boolean;
  clearLoc(): void;
  getLoc(): Iloc | undefined;
  setLoc(value?: Iloc): void;

  clearRunxList(): void;
  getRunxList(): Array<TerRunX>;
  setRunxList(value: Array<TerRunX>): void;
  addRunx(value?: TerRunX, index?: number): TerRunX;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TerRowY.AsObject;
  static toObject(includeInstance: boolean, msg: TerRowY): TerRowY.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TerRowY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TerRowY;
  static deserializeBinaryFromReader(message: TerRowY, reader: jspb.BinaryReader): TerRowY;
}

export namespace TerRowY {
  export type AsObject = {
    loc?: Iloc.AsObject,
    runxList: Array<TerRunX.AsObject>,
  }
}

export class RevealSeq extends jspb.Message {
  clearRowyList(): void;
  getRowyList(): Array<TerRowY>;
  setRowyList(value: Array<TerRowY>): void;
  addRowy(value?: TerRowY, index?: number): TerRowY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevealSeq.AsObject;
  static toObject(includeInstance: boolean, msg: RevealSeq): RevealSeq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevealSeq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevealSeq;
  static deserializeBinaryFromReader(message: RevealSeq, reader: jspb.BinaryReader): RevealSeq;
}

export namespace RevealSeq {
  export type AsObject = {
    rowyList: Array<TerRowY.AsObject>,
  }
}

export class SubImage extends jspb.Message {
  getY0(): number;
  setY0(value: number): void;

  getX0(): number;
  setX0(value: number): void;

  getYPx(): number;
  setYPx(value: number): void;

  getXPx(): number;
  setXPx(value: number): void;

  getYOff(): number;
  setYOff(value: number): void;

  getXOff(): number;
  setXOff(value: number): void;

  getAltUrl(): string;
  setAltUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubImage.AsObject;
  static toObject(includeInstance: boolean, msg: SubImage): SubImage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubImage;
  static deserializeBinaryFromReader(message: SubImage, reader: jspb.BinaryReader): SubImage;
}

export namespace SubImage {
  export type AsObject = {
    y0: number,
    x0: number,
    yPx: number,
    xPx: number,
    yOff: number,
    xOff: number,
    altUrl: string,
  }
}

export class ImageAry extends jspb.Message {
  getNpixels(): number;
  setNpixels(value: number): void;

  getNrows(): number;
  setNrows(value: number): void;

  getNcols(): number;
  setNcols(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageAry.AsObject;
  static toObject(includeInstance: boolean, msg: ImageAry): ImageAry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageAry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageAry;
  static deserializeBinaryFromReader(message: ImageAry, reader: jspb.BinaryReader): ImageAry;
}

export namespace ImageAry {
  export type AsObject = {
    npixels: number,
    nrows: number,
    ncols: number,
    url: string,
  }
}

export class TerImage extends jspb.Message {
  getTvid(): number;
  setTvid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasSubImage(): boolean;
  clearSubImage(): void;
  getSubImage(): SubImage | undefined;
  setSubImage(value?: SubImage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TerImage.AsObject;
  static toObject(includeInstance: boolean, msg: TerImage): TerImage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TerImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TerImage;
  static deserializeBinaryFromReader(message: TerImage, reader: jspb.BinaryReader): TerImage;
}

export namespace TerImage {
  export type AsObject = {
    tvid: number,
    name: string,
    subImage?: SubImage.AsObject,
  }
}

export class TerImageSeq extends jspb.Message {
  hasCompImage(): boolean;
  clearCompImage(): void;
  getCompImage(): ImageAry | undefined;
  setCompImage(value?: ImageAry): void;

  clearTmagList(): void;
  getTmagList(): Array<TerImage>;
  setTmagList(value: Array<TerImage>): void;
  addTmag(value?: TerImage, index?: number): TerImage;

  clearZvalList(): void;
  getZvalList(): Array<number>;
  setZvalList(value: Array<number>): void;
  addZval(value: number, index?: number): number;

  clearIndxList(): void;
  getIndxList(): Array<number>;
  setIndxList(value: Array<number>): void;
  addIndx(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TerImageSeq.AsObject;
  static toObject(includeInstance: boolean, msg: TerImageSeq): TerImageSeq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TerImageSeq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TerImageSeq;
  static deserializeBinaryFromReader(message: TerImageSeq, reader: jspb.BinaryReader): TerImageSeq;
}

export namespace TerImageSeq {
  export type AsObject = {
    compImage?: ImageAry.AsObject,
    tmagList: Array<TerImage.AsObject>,
    zvalList: Array<number>,
    indxList: Array<number>,
  }
}

export class ModImage extends jspb.Message {
  getMndx(): number;
  setMndx(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasSubImage(): boolean;
  clearSubImage(): void;
  getSubImage(): SubImage | undefined;
  setSubImage(value?: SubImage): void;

  getPColor(): number;
  setPColor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModImage.AsObject;
  static toObject(includeInstance: boolean, msg: ModImage): ModImage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModImage;
  static deserializeBinaryFromReader(message: ModImage, reader: jspb.BinaryReader): ModImage;
}

export namespace ModImage {
  export type AsObject = {
    mndx: number,
    name: string,
    subImage?: SubImage.AsObject,
    pColor: number,
  }
}

export class ModImageSeq extends jspb.Message {
  hasMblk(): boolean;
  clearMblk(): void;
  getMblk(): ImageAry | undefined;
  setMblk(value?: ImageAry): void;

  clearModelList(): void;
  getModelList(): Array<ModImage>;
  setModelList(value: Array<ModImage>): void;
  addModel(value?: ModImage, index?: number): ModImage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModImageSeq.AsObject;
  static toObject(includeInstance: boolean, msg: ModImageSeq): ModImageSeq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModImageSeq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModImageSeq;
  static deserializeBinaryFromReader(message: ModImageSeq, reader: jspb.BinaryReader): ModImageSeq;
}

export namespace ModImageSeq {
  export type AsObject = {
    mblk?: ImageAry.AsObject,
    modelList: Array<ModImage.AsObject>,
  }
}

export enum Fields {
  none = 0,
  turn = 1,
  update = 2,
  reveal = 3,
  add = 4,
  del = 5,
  timages = 21,
  mimages = 22,
}

