const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	category: 'utility',
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('retorna uma frase de boas vindas! usado para testar edição de respostas.'),
	async execute(interaction) {
		await interaction.reply('olá!');
        await wait(2_000);
        await interaction.editReply('Como vai você?');
	},
};