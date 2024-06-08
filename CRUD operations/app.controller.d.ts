/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { AppService } from './app.service';
import { User } from './user.models';
import { userUpdateDto } from './userUpdate.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(userDto: User): Promise<import("mongoose").Document<unknown, {}, import("./user.models").userDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    readUser(): Promise<(import("mongoose").Document<unknown, {}, import("./user.models").userDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>)[]>;
    updateUser(id: string, update: userUpdateDto): Promise<User>;
    deleteUser(id: string): Promise<import("mongoose").Document<unknown, {}, import("./user.models").userDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
}
