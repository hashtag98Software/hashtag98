/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery HomeData($locale: String) {\n\t\thomeCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tseo {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\tvideoDesktop {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tvideoMobile {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\trooms {\n\t\t\t\t\tbutton\n\t\t\t\t\troomsCollection {\n\t\t\t\t\t\titems {\n\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\tmainDescription\n\t\t\t\t\t\t\tslug\n\t\t\t\t\t\t\timagesCollection(limit: 1) {\n\t\t\t\t\t\t\t\titems {\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tspacesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tsys {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttitleTop\n\t\t\t\t\t\ttitleBottom\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tlink\n\t\t\t\t\t\timage {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\texperiences1Collection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\texperiences2Collection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\texperiences3Collection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.HomeDataDocument,
    "\n\tquery ContactData($locale: String) {\n\t\tcontactCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tseo {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n": types.ContactDataDocument,
    "\n\tquery LegalData($id: String!, $locale: String) {\n\t\tlegalPage(id: $id, locale: $locale) {\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t}\n\t\t\ttitle\n\t\t\tcontent {\n\t\t\t\tjson\n\t\t\t}\n\t\t}\n\t}\n": types.LegalDataDocument,
    "\n\tquery RestaurantData($locale: String) {\n\t\trestaurantCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tlogo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tseo {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\tmessage\n\t\t\t\tsubMessage\n\t\t\t\tvideo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\timageDesktop {\n\t\t\t\t\ttitle\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\timageMobile {\n\t\t\t\t\ttitle\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tbutton1Text\n\t\t\t\tbutton2Text\n\t\t\t\timagesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\turl\n\t\t\t\t\t\twidth\n\t\t\t\t\t\theight\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ttext1\n\t\t\t\ttext2\n\t\t\t}\n\t\t}\n\t}\n": types.RestaurantDataDocument,
    "\n\tquery RooftopData($locale: String) {\n\t\trooftopCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tvideo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tlogoHero {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tlogoBlack {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tbuttonText\n\t\t\t\timagesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tinstagramUsername\n\t\t\t\tinstagramUrl\n\t\t\t\tfacebookUsername\n\t\t\t\tfacebookUrl\n\t\t\t}\n\t\t}\n\t}\n": types.RooftopDataDocument,
    "\n\tquery RoomsSlugs {\n\t\troomCollection {\n\t\t\titems {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n": types.RoomsSlugsDocument,
    "\n\tquery RoomData($slug: String!, $locale: String) {\n\t\troomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n\t\t\titems {\n\t\t\t\ttype\n\t\t\t\tmainDescription\n\t\t\t\tvideo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tdescription\n\t\t\t\tm2\n\t\t\t\tattributes\n\t\t\t\timagesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\turl\n\t\t\t\t\t\twidth\n\t\t\t\t\t\theight\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\trelatedCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\ttype\n\t\t\t\t\t\tslug\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.RoomDataDocument,
    "\n\tquery RoomsData($locale: String) {\n\t\troomsCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tbutton\n\t\t\t\troomsCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\ttype\n\t\t\t\t\t\tmainDescription\n\t\t\t\t\t\tslug\n\t\t\t\t\t\timagesCollection(limit: 1) {\n\t\t\t\t\t\t\titems {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.RoomsDataDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery HomeData($locale: String) {\n\t\thomeCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tseo {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\tvideoDesktop {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tvideoMobile {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\trooms {\n\t\t\t\t\tbutton\n\t\t\t\t\troomsCollection {\n\t\t\t\t\t\titems {\n\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\tmainDescription\n\t\t\t\t\t\t\tslug\n\t\t\t\t\t\t\timagesCollection(limit: 1) {\n\t\t\t\t\t\t\t\titems {\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tspacesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tsys {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttitleTop\n\t\t\t\t\t\ttitleBottom\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tlink\n\t\t\t\t\t\timage {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\texperiences1Collection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\texperiences2Collection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\texperiences3Collection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery HomeData($locale: String) {\n\t\thomeCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tseo {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\tvideoDesktop {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tvideoMobile {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\trooms {\n\t\t\t\t\tbutton\n\t\t\t\t\troomsCollection {\n\t\t\t\t\t\titems {\n\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\tmainDescription\n\t\t\t\t\t\t\tslug\n\t\t\t\t\t\t\timagesCollection(limit: 1) {\n\t\t\t\t\t\t\t\titems {\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tspacesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tsys {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttitleTop\n\t\t\t\t\t\ttitleBottom\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tlink\n\t\t\t\t\t\timage {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\texperiences1Collection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\texperiences2Collection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\texperiences3Collection {\n\t\t\t\t\titems {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery ContactData($locale: String) {\n\t\tcontactCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tseo {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery ContactData($locale: String) {\n\t\tcontactCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tseo {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery LegalData($id: String!, $locale: String) {\n\t\tlegalPage(id: $id, locale: $locale) {\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t}\n\t\t\ttitle\n\t\t\tcontent {\n\t\t\t\tjson\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery LegalData($id: String!, $locale: String) {\n\t\tlegalPage(id: $id, locale: $locale) {\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t}\n\t\t\ttitle\n\t\t\tcontent {\n\t\t\t\tjson\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery RestaurantData($locale: String) {\n\t\trestaurantCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tlogo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tseo {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\tmessage\n\t\t\t\tsubMessage\n\t\t\t\tvideo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\timageDesktop {\n\t\t\t\t\ttitle\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\timageMobile {\n\t\t\t\t\ttitle\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tbutton1Text\n\t\t\t\tbutton2Text\n\t\t\t\timagesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\turl\n\t\t\t\t\t\twidth\n\t\t\t\t\t\theight\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ttext1\n\t\t\t\ttext2\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery RestaurantData($locale: String) {\n\t\trestaurantCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tlogo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tseo {\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\tmessage\n\t\t\t\tsubMessage\n\t\t\t\tvideo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\timageDesktop {\n\t\t\t\t\ttitle\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\timageMobile {\n\t\t\t\t\ttitle\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tbutton1Text\n\t\t\t\tbutton2Text\n\t\t\t\timagesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\turl\n\t\t\t\t\t\twidth\n\t\t\t\t\t\theight\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ttext1\n\t\t\t\ttext2\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery RooftopData($locale: String) {\n\t\trooftopCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tvideo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tlogoHero {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tlogoBlack {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tbuttonText\n\t\t\t\timagesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tinstagramUsername\n\t\t\t\tinstagramUrl\n\t\t\t\tfacebookUsername\n\t\t\t\tfacebookUrl\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery RooftopData($locale: String) {\n\t\trooftopCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tvideo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tlogoHero {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tlogoBlack {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tbuttonText\n\t\t\t\timagesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tinstagramUsername\n\t\t\t\tinstagramUrl\n\t\t\t\tfacebookUsername\n\t\t\t\tfacebookUrl\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery RoomsSlugs {\n\t\troomCollection {\n\t\t\titems {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery RoomsSlugs {\n\t\troomCollection {\n\t\t\titems {\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery RoomData($slug: String!, $locale: String) {\n\t\troomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n\t\t\titems {\n\t\t\t\ttype\n\t\t\t\tmainDescription\n\t\t\t\tvideo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tdescription\n\t\t\t\tm2\n\t\t\t\tattributes\n\t\t\t\timagesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\turl\n\t\t\t\t\t\twidth\n\t\t\t\t\t\theight\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\trelatedCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\ttype\n\t\t\t\t\t\tslug\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery RoomData($slug: String!, $locale: String) {\n\t\troomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n\t\t\titems {\n\t\t\t\ttype\n\t\t\t\tmainDescription\n\t\t\t\tvideo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tdescription\n\t\t\t\tm2\n\t\t\t\tattributes\n\t\t\t\timagesCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\turl\n\t\t\t\t\t\twidth\n\t\t\t\t\t\theight\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\trelatedCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\ttype\n\t\t\t\t\t\tslug\n\t\t\t\t\t\tvideo {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery RoomsData($locale: String) {\n\t\troomsCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tbutton\n\t\t\t\troomsCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\ttype\n\t\t\t\t\t\tmainDescription\n\t\t\t\t\t\tslug\n\t\t\t\t\t\timagesCollection(limit: 1) {\n\t\t\t\t\t\t\titems {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery RoomsData($locale: String) {\n\t\troomsCollection(limit: 1, locale: $locale) {\n\t\t\titems {\n\t\t\t\tbutton\n\t\t\t\troomsCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\ttype\n\t\t\t\t\t\tmainDescription\n\t\t\t\t\t\tslug\n\t\t\t\t\t\timagesCollection(limit: 1) {\n\t\t\t\t\t\t\titems {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;