const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	category: 'utility',
	cooldown: 30,
	data: new SlashCommandBuilder()
		.setName('nome')
		.setDescription('Implementa um novo apelido ao usuario')
        .addStringOption(option =>
			option.setName('nome')
				.setDescription('O nome desejado')
				.setRequired(true))
        .addUserOption(option => 
            option.setName('usuario')
                .setDescription('O usuario que você deseja mudar o nome')
                .setRequired(true)
        ),
	async execute(interaction) {
		const inputNome = interaction.options.getString('nome', true).toLowerCase();
        const inputUser = interaction.options.getUser('usuario', true);

		await interaction.reply(`o nome digitado foi: ${inputNome}`);
        await interaction.followUp(`o usuario selecionado foi: ${inputUser}`);
        await wait(2_000);

        const guild = interaction.guild;
        const member = await guild.members.fetch(inputUser.id);

        try {
            await member.setNickname(inputNome);
            await interaction.followUp(`O apelido de ${inputUser.tag} foi modificado para ${inputNome}`)
        } catch (error) {
            console.error(error);
            await interaction.followUp('Houve um erro ao tentar modificar o apelido do usuário.');
        }
	},
};