var args = arguments[0] || {};

var items = [
	{
		"horario_label": { text: "08:00 - 09:00. Looby"},
		"title_label": { text: "Registro. Se realiza el registro de los asistentes al evento, ...."},
		"template": "horario_only"		
	},
	
	{
		"horario_label": { text: "09:00 - 10:00. Sala 1"},
		"title_label": { text: "Buffet. Se ofrece un buffet para los invitado, ...."},
		"template": "horario_only"		
	},
	
	{
		"horario_label": { text: "10:00 - 12:00. Sala1"},
		"title_label": { text: "Inauguración. Se lleva a cabo la inauguración del evento, ...."},
		"template": "horario_only"		
	},
	
	{
		"horario_label": { text: "12:00 - 14:00. Sala de Conferencias"},
		"title_label": { text: "Conferencia. Se pone en marcha la conferencia sobre Gobierno Abierto, ...."},
		"template": "horario_only"		
	}
];
$.dynamicListView.sections[0].setItems(items, {animated: "false"});