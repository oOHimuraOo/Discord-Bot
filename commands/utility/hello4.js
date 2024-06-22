const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	category: 'utility',
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('hello4')
		.setDescription('retorna uma frase de boas vindas! envia a mensagem e depois de 6 segundos ele apaga ela.'),
	async execute(interaction) {
		await interaction.reply('Olá! como vai você?');
        await wait(6_000);
        await interaction.deleteReply();
	},
};