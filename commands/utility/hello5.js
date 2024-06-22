const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	category: 'utility',
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('hello5')
		.setDescription('retorna uma frase de boas vindas! captura info relacionada a mensagem e manda pro console.'),
	async execute(interaction) {
		await interaction.reply('Olá! como vai você?');
        await wait(6_000);
        const message = await interaction.fetchReply();
        console.log(message);
	},
};