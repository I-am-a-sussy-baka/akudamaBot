const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('umfrage')
		.setDescription('Startet eine Umfrage')
		.addStringOption(option =>
			option
				.setName('title')
				.setDescription('Setze einen Titel fest')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('beschreibung') // description
				.setDescription('Setze eine Beschreibung fest')),
				

	async execute(interaction) {
		const title = interaction.options.getString('title');
		const description = interaction.options.getString('beschreibung') ?? '⠀';

		const exampleEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(title)
			.setAuthor({ name: 'Akudama.cc', iconURL: 'https://i.imgur.com/BOWynyW.png', url: 'https://github.com/I-am-a-sussy-baka/akudamaBot' })
			.setDescription(description)
			.setThumbnail('https://i.imgur.com/BOWynyW.png')
			.setTimestamp()
			.setFooter({ text: 'https://github.com/I-am-a-sussy-baka/akudamaBot', iconURL: 'https://i.imgur.com/BOWynyW.png' });

		const message = await interaction.reply({ embeds: [exampleEmbed], fetchReply: true });
		message.react('✅');
		message.react('❌');
	},
};
