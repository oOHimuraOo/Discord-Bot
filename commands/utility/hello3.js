const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('hello3')
		.setDescription('retorna uma frase de boas vindas! usado para mandar mensagens seguidas.'),
	async execute(interaction) {
		await interaction.reply('olá!');
        await interaction.followUp('Como vai você?'); // ou await interaction.followUp({ content: 'Pong again!', ephemeral: true });
	},
};