import dotenv from "dotenv";
dotenv.config();
import {
  GatewayIntentBits,
  Client,
  ButtonBuilder,
  ButtonStyle,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
});

client.login(process.env.DISCORD_TOKEN);

const btn = new ButtonBuilder()
  .setCustomId("hiMom")
  .setLabel("say Hi to my Mom?")
  .setStyle(ButtonStyle.Primary);

client.on("messageCreate", async (message) => {
  console.log(message);
  if (!message?.author.bot) {
    message.author.send({
      content: "Push my btns!",
      componets: [btn],
    });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.customId === "hiMom") {
    await interaction.reply("Mom says hi back!");
  }
});
