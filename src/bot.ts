import { config as configDotenv } from "dotenv";
import { Telegraf } from "telegraf";
import { getRandomQuote } from "./lib/quotes";
import moment from "moment";

configDotenv();
const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.start((ctx) => ctx.reply("Welcome to my bot, sweetie. (Alaen)"));

// commands
bot.command(["quote", "Quote"], async (ctx) => {
  const { data } = await getRandomQuote();

  ctx.reply(`"${data[0].quoteText}" - ${data[0].quoteAuthor}`);
});

bot.command("whoami", (ctx) => {
  ctx.reply(`You are ${ctx.message.from.username}`);
});

bot.command("date", (ctx) => {
  const now = moment(new Date()).format("LL");

  ctx.reply(`Today is ${now}.`);
});

bot.command("hour", (ctx) => {
  const now = new Date();

  ctx.reply(`It's ${now.getHours()}:${now.getMinutes()}`);
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

// text hears
bot.hears(["guapo", "Guapo"], (ctx) => {
  ctx.reply("Sé que soy guapo. Porque me creo alguien guapo.");
});

bot.launch();
