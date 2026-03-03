
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserVote
 * 
 */
export type UserVote = $Result.DefaultSelection<Prisma.$UserVotePayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model AudioStat
 * 
 */
export type AudioStat = $Result.DefaultSelection<Prisma.$AudioStatPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VoteType: {
  KEEP: 'KEEP',
  RELEASE: 'RELEASE'
};

export type VoteType = (typeof VoteType)[keyof typeof VoteType]

}

export type VoteType = $Enums.VoteType

export const VoteType: typeof $Enums.VoteType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserVotes
 * const userVotes = await prisma.userVote.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserVotes
   * const userVotes = await prisma.userVote.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userVote`: Exposes CRUD operations for the **UserVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVotes
    * const userVotes = await prisma.userVote.findMany()
    * ```
    */
  get userVote(): Prisma.UserVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audioStat`: Exposes CRUD operations for the **AudioStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioStats
    * const audioStats = await prisma.audioStat.findMany()
    * ```
    */
  get audioStat(): Prisma.AudioStatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserVote: 'UserVote',
    ChatMessage: 'ChatMessage',
    AudioStat: 'AudioStat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userVote" | "chatMessage" | "audioStat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserVote: {
        payload: Prisma.$UserVotePayload<ExtArgs>
        fields: Prisma.UserVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVotePayload>
          }
          findFirst: {
            args: Prisma.UserVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVotePayload>
          }
          findMany: {
            args: Prisma.UserVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVotePayload>[]
          }
          create: {
            args: Prisma.UserVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVotePayload>
          }
          createMany: {
            args: Prisma.UserVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVotePayload>
          }
          update: {
            args: Prisma.UserVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVotePayload>
          }
          deleteMany: {
            args: Prisma.UserVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVotePayload>
          }
          aggregate: {
            args: Prisma.UserVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVote>
          }
          groupBy: {
            args: Prisma.UserVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVoteCountArgs<ExtArgs>
            result: $Utils.Optional<UserVoteCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      AudioStat: {
        payload: Prisma.$AudioStatPayload<ExtArgs>
        fields: Prisma.AudioStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioStatPayload>
          }
          findFirst: {
            args: Prisma.AudioStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioStatPayload>
          }
          findMany: {
            args: Prisma.AudioStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioStatPayload>[]
          }
          create: {
            args: Prisma.AudioStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioStatPayload>
          }
          createMany: {
            args: Prisma.AudioStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AudioStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioStatPayload>
          }
          update: {
            args: Prisma.AudioStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioStatPayload>
          }
          deleteMany: {
            args: Prisma.AudioStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudioStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioStatPayload>
          }
          aggregate: {
            args: Prisma.AudioStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioStat>
          }
          groupBy: {
            args: Prisma.AudioStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioStatCountArgs<ExtArgs>
            result: $Utils.Optional<AudioStatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userVote?: UserVoteOmit
    chatMessage?: ChatMessageOmit
    audioStat?: AudioStatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model UserVote
   */

  export type AggregateUserVote = {
    _count: UserVoteCountAggregateOutputType | null
    _min: UserVoteMinAggregateOutputType | null
    _max: UserVoteMaxAggregateOutputType | null
  }

  export type UserVoteMinAggregateOutputType = {
    id: string | null
    ipHash: string | null
    voteType: $Enums.VoteType | null
    createdAt: Date | null
  }

  export type UserVoteMaxAggregateOutputType = {
    id: string | null
    ipHash: string | null
    voteType: $Enums.VoteType | null
    createdAt: Date | null
  }

  export type UserVoteCountAggregateOutputType = {
    id: number
    ipHash: number
    voteType: number
    createdAt: number
    _all: number
  }


  export type UserVoteMinAggregateInputType = {
    id?: true
    ipHash?: true
    voteType?: true
    createdAt?: true
  }

  export type UserVoteMaxAggregateInputType = {
    id?: true
    ipHash?: true
    voteType?: true
    createdAt?: true
  }

  export type UserVoteCountAggregateInputType = {
    id?: true
    ipHash?: true
    voteType?: true
    createdAt?: true
    _all?: true
  }

  export type UserVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVote to aggregate.
     */
    where?: UserVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVotes to fetch.
     */
    orderBy?: UserVoteOrderByWithRelationInput | UserVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVotes
    **/
    _count?: true | UserVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVoteMaxAggregateInputType
  }

  export type GetUserVoteAggregateType<T extends UserVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVote[P]>
      : GetScalarType<T[P], AggregateUserVote[P]>
  }




  export type UserVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVoteWhereInput
    orderBy?: UserVoteOrderByWithAggregationInput | UserVoteOrderByWithAggregationInput[]
    by: UserVoteScalarFieldEnum[] | UserVoteScalarFieldEnum
    having?: UserVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVoteCountAggregateInputType | true
    _min?: UserVoteMinAggregateInputType
    _max?: UserVoteMaxAggregateInputType
  }

  export type UserVoteGroupByOutputType = {
    id: string
    ipHash: string
    voteType: $Enums.VoteType
    createdAt: Date
    _count: UserVoteCountAggregateOutputType | null
    _min: UserVoteMinAggregateOutputType | null
    _max: UserVoteMaxAggregateOutputType | null
  }

  type GetUserVoteGroupByPayload<T extends UserVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVoteGroupByOutputType[P]>
            : GetScalarType<T[P], UserVoteGroupByOutputType[P]>
        }
      >
    >


  export type UserVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipHash?: boolean
    voteType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userVote"]>



  export type UserVoteSelectScalar = {
    id?: boolean
    ipHash?: boolean
    voteType?: boolean
    createdAt?: boolean
  }

  export type UserVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ipHash" | "voteType" | "createdAt", ExtArgs["result"]["userVote"]>

  export type $UserVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ipHash: string
      voteType: $Enums.VoteType
      createdAt: Date
    }, ExtArgs["result"]["userVote"]>
    composites: {}
  }

  type UserVoteGetPayload<S extends boolean | null | undefined | UserVoteDefaultArgs> = $Result.GetResult<Prisma.$UserVotePayload, S>

  type UserVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserVoteCountAggregateInputType | true
    }

  export interface UserVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVote'], meta: { name: 'UserVote' } }
    /**
     * Find zero or one UserVote that matches the filter.
     * @param {UserVoteFindUniqueArgs} args - Arguments to find a UserVote
     * @example
     * // Get one UserVote
     * const userVote = await prisma.userVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVoteFindUniqueArgs>(args: SelectSubset<T, UserVoteFindUniqueArgs<ExtArgs>>): Prisma__UserVoteClient<$Result.GetResult<Prisma.$UserVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserVoteFindUniqueOrThrowArgs} args - Arguments to find a UserVote
     * @example
     * // Get one UserVote
     * const userVote = await prisma.userVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVoteClient<$Result.GetResult<Prisma.$UserVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoteFindFirstArgs} args - Arguments to find a UserVote
     * @example
     * // Get one UserVote
     * const userVote = await prisma.userVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVoteFindFirstArgs>(args?: SelectSubset<T, UserVoteFindFirstArgs<ExtArgs>>): Prisma__UserVoteClient<$Result.GetResult<Prisma.$UserVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoteFindFirstOrThrowArgs} args - Arguments to find a UserVote
     * @example
     * // Get one UserVote
     * const userVote = await prisma.userVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVoteClient<$Result.GetResult<Prisma.$UserVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVotes
     * const userVotes = await prisma.userVote.findMany()
     * 
     * // Get first 10 UserVotes
     * const userVotes = await prisma.userVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVoteWithIdOnly = await prisma.userVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVoteFindManyArgs>(args?: SelectSubset<T, UserVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserVote.
     * @param {UserVoteCreateArgs} args - Arguments to create a UserVote.
     * @example
     * // Create one UserVote
     * const UserVote = await prisma.userVote.create({
     *   data: {
     *     // ... data to create a UserVote
     *   }
     * })
     * 
     */
    create<T extends UserVoteCreateArgs>(args: SelectSubset<T, UserVoteCreateArgs<ExtArgs>>): Prisma__UserVoteClient<$Result.GetResult<Prisma.$UserVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserVotes.
     * @param {UserVoteCreateManyArgs} args - Arguments to create many UserVotes.
     * @example
     * // Create many UserVotes
     * const userVote = await prisma.userVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVoteCreateManyArgs>(args?: SelectSubset<T, UserVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserVote.
     * @param {UserVoteDeleteArgs} args - Arguments to delete one UserVote.
     * @example
     * // Delete one UserVote
     * const UserVote = await prisma.userVote.delete({
     *   where: {
     *     // ... filter to delete one UserVote
     *   }
     * })
     * 
     */
    delete<T extends UserVoteDeleteArgs>(args: SelectSubset<T, UserVoteDeleteArgs<ExtArgs>>): Prisma__UserVoteClient<$Result.GetResult<Prisma.$UserVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserVote.
     * @param {UserVoteUpdateArgs} args - Arguments to update one UserVote.
     * @example
     * // Update one UserVote
     * const userVote = await prisma.userVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVoteUpdateArgs>(args: SelectSubset<T, UserVoteUpdateArgs<ExtArgs>>): Prisma__UserVoteClient<$Result.GetResult<Prisma.$UserVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserVotes.
     * @param {UserVoteDeleteManyArgs} args - Arguments to filter UserVotes to delete.
     * @example
     * // Delete a few UserVotes
     * const { count } = await prisma.userVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVoteDeleteManyArgs>(args?: SelectSubset<T, UserVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVotes
     * const userVote = await prisma.userVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVoteUpdateManyArgs>(args: SelectSubset<T, UserVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserVote.
     * @param {UserVoteUpsertArgs} args - Arguments to update or create a UserVote.
     * @example
     * // Update or create a UserVote
     * const userVote = await prisma.userVote.upsert({
     *   create: {
     *     // ... data to create a UserVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVote we want to update
     *   }
     * })
     */
    upsert<T extends UserVoteUpsertArgs>(args: SelectSubset<T, UserVoteUpsertArgs<ExtArgs>>): Prisma__UserVoteClient<$Result.GetResult<Prisma.$UserVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoteCountArgs} args - Arguments to filter UserVotes to count.
     * @example
     * // Count the number of UserVotes
     * const count = await prisma.userVote.count({
     *   where: {
     *     // ... the filter for the UserVotes we want to count
     *   }
     * })
    **/
    count<T extends UserVoteCountArgs>(
      args?: Subset<T, UserVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserVoteAggregateArgs>(args: Subset<T, UserVoteAggregateArgs>): Prisma.PrismaPromise<GetUserVoteAggregateType<T>>

    /**
     * Group by UserVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVoteGroupByArgs['orderBy'] }
        : { orderBy?: UserVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVote model
   */
  readonly fields: UserVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserVote model
   */
  interface UserVoteFieldRefs {
    readonly id: FieldRef<"UserVote", 'String'>
    readonly ipHash: FieldRef<"UserVote", 'String'>
    readonly voteType: FieldRef<"UserVote", 'VoteType'>
    readonly createdAt: FieldRef<"UserVote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVote findUnique
   */
  export type UserVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVote
     */
    select?: UserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVote
     */
    omit?: UserVoteOmit<ExtArgs> | null
    /**
     * Filter, which UserVote to fetch.
     */
    where: UserVoteWhereUniqueInput
  }

  /**
   * UserVote findUniqueOrThrow
   */
  export type UserVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVote
     */
    select?: UserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVote
     */
    omit?: UserVoteOmit<ExtArgs> | null
    /**
     * Filter, which UserVote to fetch.
     */
    where: UserVoteWhereUniqueInput
  }

  /**
   * UserVote findFirst
   */
  export type UserVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVote
     */
    select?: UserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVote
     */
    omit?: UserVoteOmit<ExtArgs> | null
    /**
     * Filter, which UserVote to fetch.
     */
    where?: UserVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVotes to fetch.
     */
    orderBy?: UserVoteOrderByWithRelationInput | UserVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVotes.
     */
    cursor?: UserVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVotes.
     */
    distinct?: UserVoteScalarFieldEnum | UserVoteScalarFieldEnum[]
  }

  /**
   * UserVote findFirstOrThrow
   */
  export type UserVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVote
     */
    select?: UserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVote
     */
    omit?: UserVoteOmit<ExtArgs> | null
    /**
     * Filter, which UserVote to fetch.
     */
    where?: UserVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVotes to fetch.
     */
    orderBy?: UserVoteOrderByWithRelationInput | UserVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVotes.
     */
    cursor?: UserVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVotes.
     */
    distinct?: UserVoteScalarFieldEnum | UserVoteScalarFieldEnum[]
  }

  /**
   * UserVote findMany
   */
  export type UserVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVote
     */
    select?: UserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVote
     */
    omit?: UserVoteOmit<ExtArgs> | null
    /**
     * Filter, which UserVotes to fetch.
     */
    where?: UserVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVotes to fetch.
     */
    orderBy?: UserVoteOrderByWithRelationInput | UserVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVotes.
     */
    cursor?: UserVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVotes.
     */
    skip?: number
    distinct?: UserVoteScalarFieldEnum | UserVoteScalarFieldEnum[]
  }

  /**
   * UserVote create
   */
  export type UserVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVote
     */
    select?: UserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVote
     */
    omit?: UserVoteOmit<ExtArgs> | null
    /**
     * The data needed to create a UserVote.
     */
    data: XOR<UserVoteCreateInput, UserVoteUncheckedCreateInput>
  }

  /**
   * UserVote createMany
   */
  export type UserVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVotes.
     */
    data: UserVoteCreateManyInput | UserVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVote update
   */
  export type UserVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVote
     */
    select?: UserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVote
     */
    omit?: UserVoteOmit<ExtArgs> | null
    /**
     * The data needed to update a UserVote.
     */
    data: XOR<UserVoteUpdateInput, UserVoteUncheckedUpdateInput>
    /**
     * Choose, which UserVote to update.
     */
    where: UserVoteWhereUniqueInput
  }

  /**
   * UserVote updateMany
   */
  export type UserVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVotes.
     */
    data: XOR<UserVoteUpdateManyMutationInput, UserVoteUncheckedUpdateManyInput>
    /**
     * Filter which UserVotes to update
     */
    where?: UserVoteWhereInput
    /**
     * Limit how many UserVotes to update.
     */
    limit?: number
  }

  /**
   * UserVote upsert
   */
  export type UserVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVote
     */
    select?: UserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVote
     */
    omit?: UserVoteOmit<ExtArgs> | null
    /**
     * The filter to search for the UserVote to update in case it exists.
     */
    where: UserVoteWhereUniqueInput
    /**
     * In case the UserVote found by the `where` argument doesn't exist, create a new UserVote with this data.
     */
    create: XOR<UserVoteCreateInput, UserVoteUncheckedCreateInput>
    /**
     * In case the UserVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVoteUpdateInput, UserVoteUncheckedUpdateInput>
  }

  /**
   * UserVote delete
   */
  export type UserVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVote
     */
    select?: UserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVote
     */
    omit?: UserVoteOmit<ExtArgs> | null
    /**
     * Filter which UserVote to delete.
     */
    where: UserVoteWhereUniqueInput
  }

  /**
   * UserVote deleteMany
   */
  export type UserVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVotes to delete
     */
    where?: UserVoteWhereInput
    /**
     * Limit how many UserVotes to delete.
     */
    limit?: number
  }

  /**
   * UserVote without action
   */
  export type UserVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVote
     */
    select?: UserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVote
     */
    omit?: UserVoteOmit<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    message: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chatMessage"]>



  export type ChatMessageSelectScalar = {
    id?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "createdAt", ExtArgs["result"]["chatMessage"]>

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
  }


  /**
   * Model AudioStat
   */

  export type AggregateAudioStat = {
    _count: AudioStatCountAggregateOutputType | null
    _avg: AudioStatAvgAggregateOutputType | null
    _sum: AudioStatSumAggregateOutputType | null
    _min: AudioStatMinAggregateOutputType | null
    _max: AudioStatMaxAggregateOutputType | null
  }

  export type AudioStatAvgAggregateOutputType = {
    id: number | null
    playCount: number | null
  }

  export type AudioStatSumAggregateOutputType = {
    id: number | null
    playCount: number | null
  }

  export type AudioStatMinAggregateOutputType = {
    id: number | null
    playCount: number | null
  }

  export type AudioStatMaxAggregateOutputType = {
    id: number | null
    playCount: number | null
  }

  export type AudioStatCountAggregateOutputType = {
    id: number
    playCount: number
    _all: number
  }


  export type AudioStatAvgAggregateInputType = {
    id?: true
    playCount?: true
  }

  export type AudioStatSumAggregateInputType = {
    id?: true
    playCount?: true
  }

  export type AudioStatMinAggregateInputType = {
    id?: true
    playCount?: true
  }

  export type AudioStatMaxAggregateInputType = {
    id?: true
    playCount?: true
  }

  export type AudioStatCountAggregateInputType = {
    id?: true
    playCount?: true
    _all?: true
  }

  export type AudioStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioStat to aggregate.
     */
    where?: AudioStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioStats to fetch.
     */
    orderBy?: AudioStatOrderByWithRelationInput | AudioStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioStats
    **/
    _count?: true | AudioStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudioStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudioStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioStatMaxAggregateInputType
  }

  export type GetAudioStatAggregateType<T extends AudioStatAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioStat[P]>
      : GetScalarType<T[P], AggregateAudioStat[P]>
  }




  export type AudioStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioStatWhereInput
    orderBy?: AudioStatOrderByWithAggregationInput | AudioStatOrderByWithAggregationInput[]
    by: AudioStatScalarFieldEnum[] | AudioStatScalarFieldEnum
    having?: AudioStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioStatCountAggregateInputType | true
    _avg?: AudioStatAvgAggregateInputType
    _sum?: AudioStatSumAggregateInputType
    _min?: AudioStatMinAggregateInputType
    _max?: AudioStatMaxAggregateInputType
  }

  export type AudioStatGroupByOutputType = {
    id: number
    playCount: number
    _count: AudioStatCountAggregateOutputType | null
    _avg: AudioStatAvgAggregateOutputType | null
    _sum: AudioStatSumAggregateOutputType | null
    _min: AudioStatMinAggregateOutputType | null
    _max: AudioStatMaxAggregateOutputType | null
  }

  type GetAudioStatGroupByPayload<T extends AudioStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioStatGroupByOutputType[P]>
            : GetScalarType<T[P], AudioStatGroupByOutputType[P]>
        }
      >
    >


  export type AudioStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playCount?: boolean
  }, ExtArgs["result"]["audioStat"]>



  export type AudioStatSelectScalar = {
    id?: boolean
    playCount?: boolean
  }

  export type AudioStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playCount", ExtArgs["result"]["audioStat"]>

  export type $AudioStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioStat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playCount: number
    }, ExtArgs["result"]["audioStat"]>
    composites: {}
  }

  type AudioStatGetPayload<S extends boolean | null | undefined | AudioStatDefaultArgs> = $Result.GetResult<Prisma.$AudioStatPayload, S>

  type AudioStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioStatCountAggregateInputType | true
    }

  export interface AudioStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioStat'], meta: { name: 'AudioStat' } }
    /**
     * Find zero or one AudioStat that matches the filter.
     * @param {AudioStatFindUniqueArgs} args - Arguments to find a AudioStat
     * @example
     * // Get one AudioStat
     * const audioStat = await prisma.audioStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioStatFindUniqueArgs>(args: SelectSubset<T, AudioStatFindUniqueArgs<ExtArgs>>): Prisma__AudioStatClient<$Result.GetResult<Prisma.$AudioStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudioStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioStatFindUniqueOrThrowArgs} args - Arguments to find a AudioStat
     * @example
     * // Get one AudioStat
     * const audioStat = await prisma.audioStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioStatFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioStatClient<$Result.GetResult<Prisma.$AudioStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioStatFindFirstArgs} args - Arguments to find a AudioStat
     * @example
     * // Get one AudioStat
     * const audioStat = await prisma.audioStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioStatFindFirstArgs>(args?: SelectSubset<T, AudioStatFindFirstArgs<ExtArgs>>): Prisma__AudioStatClient<$Result.GetResult<Prisma.$AudioStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioStatFindFirstOrThrowArgs} args - Arguments to find a AudioStat
     * @example
     * // Get one AudioStat
     * const audioStat = await prisma.audioStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioStatFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioStatClient<$Result.GetResult<Prisma.$AudioStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioStats
     * const audioStats = await prisma.audioStat.findMany()
     * 
     * // Get first 10 AudioStats
     * const audioStats = await prisma.audioStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioStatWithIdOnly = await prisma.audioStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioStatFindManyArgs>(args?: SelectSubset<T, AudioStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudioStat.
     * @param {AudioStatCreateArgs} args - Arguments to create a AudioStat.
     * @example
     * // Create one AudioStat
     * const AudioStat = await prisma.audioStat.create({
     *   data: {
     *     // ... data to create a AudioStat
     *   }
     * })
     * 
     */
    create<T extends AudioStatCreateArgs>(args: SelectSubset<T, AudioStatCreateArgs<ExtArgs>>): Prisma__AudioStatClient<$Result.GetResult<Prisma.$AudioStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudioStats.
     * @param {AudioStatCreateManyArgs} args - Arguments to create many AudioStats.
     * @example
     * // Create many AudioStats
     * const audioStat = await prisma.audioStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioStatCreateManyArgs>(args?: SelectSubset<T, AudioStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AudioStat.
     * @param {AudioStatDeleteArgs} args - Arguments to delete one AudioStat.
     * @example
     * // Delete one AudioStat
     * const AudioStat = await prisma.audioStat.delete({
     *   where: {
     *     // ... filter to delete one AudioStat
     *   }
     * })
     * 
     */
    delete<T extends AudioStatDeleteArgs>(args: SelectSubset<T, AudioStatDeleteArgs<ExtArgs>>): Prisma__AudioStatClient<$Result.GetResult<Prisma.$AudioStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudioStat.
     * @param {AudioStatUpdateArgs} args - Arguments to update one AudioStat.
     * @example
     * // Update one AudioStat
     * const audioStat = await prisma.audioStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioStatUpdateArgs>(args: SelectSubset<T, AudioStatUpdateArgs<ExtArgs>>): Prisma__AudioStatClient<$Result.GetResult<Prisma.$AudioStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudioStats.
     * @param {AudioStatDeleteManyArgs} args - Arguments to filter AudioStats to delete.
     * @example
     * // Delete a few AudioStats
     * const { count } = await prisma.audioStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioStatDeleteManyArgs>(args?: SelectSubset<T, AudioStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioStats
     * const audioStat = await prisma.audioStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioStatUpdateManyArgs>(args: SelectSubset<T, AudioStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AudioStat.
     * @param {AudioStatUpsertArgs} args - Arguments to update or create a AudioStat.
     * @example
     * // Update or create a AudioStat
     * const audioStat = await prisma.audioStat.upsert({
     *   create: {
     *     // ... data to create a AudioStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioStat we want to update
     *   }
     * })
     */
    upsert<T extends AudioStatUpsertArgs>(args: SelectSubset<T, AudioStatUpsertArgs<ExtArgs>>): Prisma__AudioStatClient<$Result.GetResult<Prisma.$AudioStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AudioStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioStatCountArgs} args - Arguments to filter AudioStats to count.
     * @example
     * // Count the number of AudioStats
     * const count = await prisma.audioStat.count({
     *   where: {
     *     // ... the filter for the AudioStats we want to count
     *   }
     * })
    **/
    count<T extends AudioStatCountArgs>(
      args?: Subset<T, AudioStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AudioStatAggregateArgs>(args: Subset<T, AudioStatAggregateArgs>): Prisma.PrismaPromise<GetAudioStatAggregateType<T>>

    /**
     * Group by AudioStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AudioStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioStatGroupByArgs['orderBy'] }
        : { orderBy?: AudioStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AudioStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioStat model
   */
  readonly fields: AudioStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AudioStat model
   */
  interface AudioStatFieldRefs {
    readonly id: FieldRef<"AudioStat", 'Int'>
    readonly playCount: FieldRef<"AudioStat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AudioStat findUnique
   */
  export type AudioStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioStat
     */
    select?: AudioStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioStat
     */
    omit?: AudioStatOmit<ExtArgs> | null
    /**
     * Filter, which AudioStat to fetch.
     */
    where: AudioStatWhereUniqueInput
  }

  /**
   * AudioStat findUniqueOrThrow
   */
  export type AudioStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioStat
     */
    select?: AudioStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioStat
     */
    omit?: AudioStatOmit<ExtArgs> | null
    /**
     * Filter, which AudioStat to fetch.
     */
    where: AudioStatWhereUniqueInput
  }

  /**
   * AudioStat findFirst
   */
  export type AudioStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioStat
     */
    select?: AudioStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioStat
     */
    omit?: AudioStatOmit<ExtArgs> | null
    /**
     * Filter, which AudioStat to fetch.
     */
    where?: AudioStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioStats to fetch.
     */
    orderBy?: AudioStatOrderByWithRelationInput | AudioStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioStats.
     */
    cursor?: AudioStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioStats.
     */
    distinct?: AudioStatScalarFieldEnum | AudioStatScalarFieldEnum[]
  }

  /**
   * AudioStat findFirstOrThrow
   */
  export type AudioStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioStat
     */
    select?: AudioStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioStat
     */
    omit?: AudioStatOmit<ExtArgs> | null
    /**
     * Filter, which AudioStat to fetch.
     */
    where?: AudioStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioStats to fetch.
     */
    orderBy?: AudioStatOrderByWithRelationInput | AudioStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioStats.
     */
    cursor?: AudioStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioStats.
     */
    distinct?: AudioStatScalarFieldEnum | AudioStatScalarFieldEnum[]
  }

  /**
   * AudioStat findMany
   */
  export type AudioStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioStat
     */
    select?: AudioStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioStat
     */
    omit?: AudioStatOmit<ExtArgs> | null
    /**
     * Filter, which AudioStats to fetch.
     */
    where?: AudioStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioStats to fetch.
     */
    orderBy?: AudioStatOrderByWithRelationInput | AudioStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioStats.
     */
    cursor?: AudioStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioStats.
     */
    skip?: number
    distinct?: AudioStatScalarFieldEnum | AudioStatScalarFieldEnum[]
  }

  /**
   * AudioStat create
   */
  export type AudioStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioStat
     */
    select?: AudioStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioStat
     */
    omit?: AudioStatOmit<ExtArgs> | null
    /**
     * The data needed to create a AudioStat.
     */
    data?: XOR<AudioStatCreateInput, AudioStatUncheckedCreateInput>
  }

  /**
   * AudioStat createMany
   */
  export type AudioStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioStats.
     */
    data: AudioStatCreateManyInput | AudioStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudioStat update
   */
  export type AudioStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioStat
     */
    select?: AudioStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioStat
     */
    omit?: AudioStatOmit<ExtArgs> | null
    /**
     * The data needed to update a AudioStat.
     */
    data: XOR<AudioStatUpdateInput, AudioStatUncheckedUpdateInput>
    /**
     * Choose, which AudioStat to update.
     */
    where: AudioStatWhereUniqueInput
  }

  /**
   * AudioStat updateMany
   */
  export type AudioStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioStats.
     */
    data: XOR<AudioStatUpdateManyMutationInput, AudioStatUncheckedUpdateManyInput>
    /**
     * Filter which AudioStats to update
     */
    where?: AudioStatWhereInput
    /**
     * Limit how many AudioStats to update.
     */
    limit?: number
  }

  /**
   * AudioStat upsert
   */
  export type AudioStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioStat
     */
    select?: AudioStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioStat
     */
    omit?: AudioStatOmit<ExtArgs> | null
    /**
     * The filter to search for the AudioStat to update in case it exists.
     */
    where: AudioStatWhereUniqueInput
    /**
     * In case the AudioStat found by the `where` argument doesn't exist, create a new AudioStat with this data.
     */
    create: XOR<AudioStatCreateInput, AudioStatUncheckedCreateInput>
    /**
     * In case the AudioStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioStatUpdateInput, AudioStatUncheckedUpdateInput>
  }

  /**
   * AudioStat delete
   */
  export type AudioStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioStat
     */
    select?: AudioStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioStat
     */
    omit?: AudioStatOmit<ExtArgs> | null
    /**
     * Filter which AudioStat to delete.
     */
    where: AudioStatWhereUniqueInput
  }

  /**
   * AudioStat deleteMany
   */
  export type AudioStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioStats to delete
     */
    where?: AudioStatWhereInput
    /**
     * Limit how many AudioStats to delete.
     */
    limit?: number
  }

  /**
   * AudioStat without action
   */
  export type AudioStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioStat
     */
    select?: AudioStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioStat
     */
    omit?: AudioStatOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserVoteScalarFieldEnum: {
    id: 'id',
    ipHash: 'ipHash',
    voteType: 'voteType',
    createdAt: 'createdAt'
  };

  export type UserVoteScalarFieldEnum = (typeof UserVoteScalarFieldEnum)[keyof typeof UserVoteScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const AudioStatScalarFieldEnum: {
    id: 'id',
    playCount: 'playCount'
  };

  export type AudioStatScalarFieldEnum = (typeof AudioStatScalarFieldEnum)[keyof typeof AudioStatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserVoteOrderByRelevanceFieldEnum: {
    id: 'id',
    ipHash: 'ipHash'
  };

  export type UserVoteOrderByRelevanceFieldEnum = (typeof UserVoteOrderByRelevanceFieldEnum)[keyof typeof UserVoteOrderByRelevanceFieldEnum]


  export const ChatMessageOrderByRelevanceFieldEnum: {
    id: 'id',
    message: 'message'
  };

  export type ChatMessageOrderByRelevanceFieldEnum = (typeof ChatMessageOrderByRelevanceFieldEnum)[keyof typeof ChatMessageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'VoteType'
   */
  export type EnumVoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoteType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserVoteWhereInput = {
    AND?: UserVoteWhereInput | UserVoteWhereInput[]
    OR?: UserVoteWhereInput[]
    NOT?: UserVoteWhereInput | UserVoteWhereInput[]
    id?: StringFilter<"UserVote"> | string
    ipHash?: StringFilter<"UserVote"> | string
    voteType?: EnumVoteTypeFilter<"UserVote"> | $Enums.VoteType
    createdAt?: DateTimeFilter<"UserVote"> | Date | string
  }

  export type UserVoteOrderByWithRelationInput = {
    id?: SortOrder
    ipHash?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
    _relevance?: UserVoteOrderByRelevanceInput
  }

  export type UserVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ipHash?: string
    AND?: UserVoteWhereInput | UserVoteWhereInput[]
    OR?: UserVoteWhereInput[]
    NOT?: UserVoteWhereInput | UserVoteWhereInput[]
    voteType?: EnumVoteTypeFilter<"UserVote"> | $Enums.VoteType
    createdAt?: DateTimeFilter<"UserVote"> | Date | string
  }, "id" | "ipHash">

  export type UserVoteOrderByWithAggregationInput = {
    id?: SortOrder
    ipHash?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
    _count?: UserVoteCountOrderByAggregateInput
    _max?: UserVoteMaxOrderByAggregateInput
    _min?: UserVoteMinOrderByAggregateInput
  }

  export type UserVoteScalarWhereWithAggregatesInput = {
    AND?: UserVoteScalarWhereWithAggregatesInput | UserVoteScalarWhereWithAggregatesInput[]
    OR?: UserVoteScalarWhereWithAggregatesInput[]
    NOT?: UserVoteScalarWhereWithAggregatesInput | UserVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserVote"> | string
    ipHash?: StringWithAggregatesFilter<"UserVote"> | string
    voteType?: EnumVoteTypeWithAggregatesFilter<"UserVote"> | $Enums.VoteType
    createdAt?: DateTimeWithAggregatesFilter<"UserVote"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _relevance?: ChatMessageOrderByRelevanceInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type AudioStatWhereInput = {
    AND?: AudioStatWhereInput | AudioStatWhereInput[]
    OR?: AudioStatWhereInput[]
    NOT?: AudioStatWhereInput | AudioStatWhereInput[]
    id?: IntFilter<"AudioStat"> | number
    playCount?: IntFilter<"AudioStat"> | number
  }

  export type AudioStatOrderByWithRelationInput = {
    id?: SortOrder
    playCount?: SortOrder
  }

  export type AudioStatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AudioStatWhereInput | AudioStatWhereInput[]
    OR?: AudioStatWhereInput[]
    NOT?: AudioStatWhereInput | AudioStatWhereInput[]
    playCount?: IntFilter<"AudioStat"> | number
  }, "id">

  export type AudioStatOrderByWithAggregationInput = {
    id?: SortOrder
    playCount?: SortOrder
    _count?: AudioStatCountOrderByAggregateInput
    _avg?: AudioStatAvgOrderByAggregateInput
    _max?: AudioStatMaxOrderByAggregateInput
    _min?: AudioStatMinOrderByAggregateInput
    _sum?: AudioStatSumOrderByAggregateInput
  }

  export type AudioStatScalarWhereWithAggregatesInput = {
    AND?: AudioStatScalarWhereWithAggregatesInput | AudioStatScalarWhereWithAggregatesInput[]
    OR?: AudioStatScalarWhereWithAggregatesInput[]
    NOT?: AudioStatScalarWhereWithAggregatesInput | AudioStatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AudioStat"> | number
    playCount?: IntWithAggregatesFilter<"AudioStat"> | number
  }

  export type UserVoteCreateInput = {
    id?: string
    ipHash: string
    voteType: $Enums.VoteType
    createdAt?: Date | string
  }

  export type UserVoteUncheckedCreateInput = {
    id?: string
    ipHash: string
    voteType: $Enums.VoteType
    createdAt?: Date | string
  }

  export type UserVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    voteType?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    voteType?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoteCreateManyInput = {
    id?: string
    ipHash: string
    voteType: $Enums.VoteType
    createdAt?: Date | string
  }

  export type UserVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    voteType?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    voteType?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioStatCreateInput = {
    id?: number
    playCount?: number
  }

  export type AudioStatUncheckedCreateInput = {
    id?: number
    playCount?: number
  }

  export type AudioStatUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playCount?: IntFieldUpdateOperationsInput | number
  }

  export type AudioStatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playCount?: IntFieldUpdateOperationsInput | number
  }

  export type AudioStatCreateManyInput = {
    id?: number
    playCount?: number
  }

  export type AudioStatUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    playCount?: IntFieldUpdateOperationsInput | number
  }

  export type AudioStatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playCount?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumVoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[]
    notIn?: $Enums.VoteType[]
    not?: NestedEnumVoteTypeFilter<$PrismaModel> | $Enums.VoteType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserVoteOrderByRelevanceInput = {
    fields: UserVoteOrderByRelevanceFieldEnum | UserVoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserVoteCountOrderByAggregateInput = {
    id?: SortOrder
    ipHash?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    ipHash?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVoteMinOrderByAggregateInput = {
    id?: SortOrder
    ipHash?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumVoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[]
    notIn?: $Enums.VoteType[]
    not?: NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel> | $Enums.VoteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoteTypeFilter<$PrismaModel>
    _max?: NestedEnumVoteTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChatMessageOrderByRelevanceInput = {
    fields: ChatMessageOrderByRelevanceFieldEnum | ChatMessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AudioStatCountOrderByAggregateInput = {
    id?: SortOrder
    playCount?: SortOrder
  }

  export type AudioStatAvgOrderByAggregateInput = {
    id?: SortOrder
    playCount?: SortOrder
  }

  export type AudioStatMaxOrderByAggregateInput = {
    id?: SortOrder
    playCount?: SortOrder
  }

  export type AudioStatMinOrderByAggregateInput = {
    id?: SortOrder
    playCount?: SortOrder
  }

  export type AudioStatSumOrderByAggregateInput = {
    id?: SortOrder
    playCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumVoteTypeFieldUpdateOperationsInput = {
    set?: $Enums.VoteType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumVoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[]
    notIn?: $Enums.VoteType[]
    not?: NestedEnumVoteTypeFilter<$PrismaModel> | $Enums.VoteType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[]
    notIn?: $Enums.VoteType[]
    not?: NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel> | $Enums.VoteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoteTypeFilter<$PrismaModel>
    _max?: NestedEnumVoteTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}