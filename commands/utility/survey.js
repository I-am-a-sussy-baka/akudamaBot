// at the top of your file
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');


// inside a command, event listener, etc.

module.exports = {
	data: new SlashCommandBuilder()
		.setName('umfrage')
		.setDescription('Startet eine Umfrage')
		.addStringOption(option =>
			option
				.setName('title')
				.setDescription('Setze einen Titel fest')
				.setRequired(true)),
				

	async execute(interaction) {
		const title = interaction.options.getString('title')
		
		const exampleEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle("Umfrage")
			.setAuthor({ name: 'Akudama.cc', iconURL: 'https://i.imgur.com/BOWynyW.png', url: 'https://github.com/I-am-a-sussy-baka/akudamaBot' })
			.setDescription('Bitte nimm an der Umfrage teil, indem du mit dem entsprechenden emoji reagierst')
			.setThumbnail('https://i.imgur.com/BOWynyW.png')
			.addFields(
				{ name: title, value: 'Optionale Beschreibung' },
			)
			.setTimestamp()
			.setFooter({ text: 'https://github.com/I-am-a-sussy-baka/akudamaBot', iconURL: 'https://i.imgur.com/BOWynyW.png' });

		const message = await interaction.reply({ embeds: [exampleEmbed], fetchReply: true });
		message.react('✅');
		message.react('❌');
	},
};
