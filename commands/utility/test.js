const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Apored'),
	async execute(interaction) {
		await interaction.reply('Teknitkator STINKT!!!');
	},
};
