import * as card from "./src/cards.js";
import * as input  from "./src/input.js";

import * as media  from "./src/media.js";
import * as table  from "./src/table.js";
import * as record  from "./src/record.js";
import * as menu from './src/menu.js'
import * as value from './src/value.js'
import * as kanban from './src/kanban.js'

export const blocks = {
  ...card,
  ...input,
  ...media,
  ...record,
  ...table,
  ...menu,
  ...value,
  ...kanban
};
