const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	category: 'utility',
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('hello2')
		.setDescription('retorna uma frase de boas vindas! usado para testar repostas deferidas'),
	async execute(interaction) {
		await interaction.deferReply(); //você pode usar ephemeral: true dentro do derferreply para que apenas o usuario que usou o comando consiga ver a resposta.
        await wait(4_000);
        await interaction.editReply('olá! Como vai você?');
	},
};