const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Sendet ein "Pong!" zurück'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
