import { config as configDotenv } from "dotenv";
import { Telegraf } from "telegraf";
import moment from "moment";

import { getRandomQuote } from "./lib/quotes";

configDotenv();
const bot = new Telegraf(process.env.BOT_TOKEN as string);
const GROUP_ID = -415211869;

bot.start((ctx) => ctx.reply("Welcome to my bot, sweetie. (Alaen)"));

// commands
bot.command(["quote", "Quote"], async (ctx) => {
  const { data } = await getRandomQuote();

  ctx.reply(`"${data[0].quoteText}" - ${data[0].quoteAuthor}`);
});

bot.command("whoami", (ctx) => {
  ctx.reply(`You are ${ctx.message.from.username}, imbecil.`);
});

bot.command("date", (ctx) => {
  const now = moment(new Date()).format("LL");

  ctx.reply(`Today is ${now}.`);
});

bot.command("hour", (ctx) => {
  const now = moment(new Date()).format("LT");

  ctx.reply(`It's ${now}`);
});

bot.command("creator", (ctx) => {
  const info = {
    name: "Alan",
    website: "https://stylessh.vercel.app",
  };

  ctx.reply(
    `I was created by ${info.name} (Software Dev), you can check out his projects at his website: ${info.website}. He's very handsome, btw.`
  );
});

bot.launch();
