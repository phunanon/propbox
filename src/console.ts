import { Context } from "./types";

export const execute = (ctx: Context, code: string) => {
  alert(eval(code));
};
