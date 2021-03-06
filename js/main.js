// Milestone 1
// 	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// 	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// 	Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// 	Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// 	Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// 	Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// 	ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// 	Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// 	Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 


const app = new Vue({
	el:'#app',
	data: {
		contacts: [
			{
				name: 'Michele',
				avatar: '_1',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						message: 'Hai portato a spasso il cane?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						message: 'Ricordati di stendere i panni',
						status: 'sent'
					},
					{
						date: '10/01/2020 16:15:22',
						message: 'Tutto fatto!',
						status: 'received'
					}
				],	
			},
			{
				name: 'Fabio',
				avatar: '_2',
				visible: true,
				messages: [
					{
						date: '20/03/2020 16:30:00',
						message: 'Ciao come stai?',
						status: 'sent'
					},
					{
						date: '20/03/2020 16:30:55',
						message: 'Bene grazie! Stasera ci vediamo?',
						status: 'received'
					},
					{
						date: '20/03/2020 16:35:00',
						message: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'sent'
					}
				],
			},
			{
				name: 'Samuele',
				avatar: '_3',
				visible: true,
				messages: [
					{
						date: '28/03/2020 10:10:40',
						message: 'La Marianna va in campagna',
						status: 'received'
					},
					{
						date: '28/03/2020 10:20:10',
						message: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
					},
					{
						date: '28/03/2020 16:15:22',
						message: 'Ah scusa!',
						status: 'received'
					}
				],
			},
			{
				name: 'Alessandro B.',
				avatar: '_4',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						message: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent'
					},
					{
					date: '10/01/2020 15:50:00',
					message: 'Si, ma preferirei andare al cinema',
					status: 'received'
					}
				],
			},
			{
				name: 'Alessandro L.',
				avatar: '_5',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						message: 'Ricordati di chiamare la nonna',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						message: 'Va bene, stasera la sento',
						status: 'received'
					}
				],
			},
			{
				name: 'Claudia',
				avatar: '_6',
				visible: true,
				messages: [
					{
							date: '10/01/2020 15:30:55',
							message: 'Ciao Claudia, hai novità?',
							status: 'sent'
					},
					{
							date: '10/01/2020 15:50:00',
							message: 'Non ancora',
							status: 'received'
					},
					{
							date: '10/01/2020 15:51:00',
							message: 'Nessuna nuova, buona nuova',
							status: 'sent'
					}
				],
			},
			{
				name: 'Federico',
				avatar: '_7',
				visible: true,
				messages: [
					{
							date: '10/01/2020 15:30:55',
							message: 'Fai gli auguri a Martina che è il suo compleanno!',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Grazie per avermelo ricordato, le scrivo subito!',
							status: 'received'
						}
				],
			},
			{
				name: 'Silvia',
				avatar: '_8',
				visible: true,
				messages: [
					{
							date: '10/01/2020 10:30:55',
							message: 'Ciao, come stai?',
							status: 'received'
					},
					{
							date: '10/01/2020 10:45:00',
							message: 'Alla grande! Qui in Svizzera si sta da dio.. tu piuttosto?',
							status: 'sent'
					},
					{
							date: '10/01/2020 11:51:00',
							message: 'Non mi posso lamentare!',
							status: 'received'
					}
				],
			},
			{
				name: 'Valeria',
				avatar: '_9',
				visible: true,
				messages: [
					{
							date: '10/01/2020 18:30:55',
							message: 'Hola Chica! Norcineria stasera?',
							status: 'received'
					},
					{
							date: '10/01/2020 18:50:00',
							message: 'Yess! per le 22:30 ok?',
							status: 'sent'
					},
					{
							date: '10/01/2020 18:51:00',
							message: 'OK!!',
							status: 'received'
					}
				],
			},
			{
				name: 'Roberta',
				avatar: '_10',
				visible: true,
				messages: [
					{
							date: '10/01/2020 15:30:55',
							message: 'Quando ci facciamo un viaggio?',
							status: 'received'
					},
					{
							date: '10/01/2020 15:50:00',
							message: 'Il prima possibile..',
							status: 'sent'
					},
					{
							date: '10/01/2020 15:51:00',
							message: 'Ci conto!',
							status: 'received'
					}
				],
			}
		],
		currentIndex: 0,
		searchContact:'',
		searchMessage:'',
		newMessage:'',
		isClicked: false,
		isSent: false
	},
	methods: {
		updateContact(index){
			this.currentIndex = index;
		},
		isActive(index){
			if (index == this.currentIndex ) return true
		},
		sendNewMessage(contacts,string, index){
			let messagesArray = contacts[index].messages;
			const newMsg = {
				date: dayjs().format('DD/MM/YYYY hh:mm:s'),
				message: string,
				status: 'sent'
			};
			if ( string.trim() !== '') {
				isSent = true;
				messagesArray.push(newMsg);
				const answer = {
					date: dayjs().format('DD/MM/YYYY hh:mm:s'),
					message: 'Ok',
					status: 'received'
				};
				setTimeout(function(){
					messagesArray.push(answer);
				}, 1000);
				this.newMessage = '';
				
			}
		},
		// function that checks and return true if a string matches with a contact name
		isNameValid(element, string){
			if (string == '' || element.name.toLowerCase().includes(string) || element.name.toUpperCase().includes(string) ) return true 
		},
		// function that checks and return true if a string matches with a contact message text
		isMessageValid(element, string){
			if (string == '' || element.message.toLowerCase().includes(string) || element.message.toUpperCase().includes(string) ) return true 
		},
		// function that toggles display-none of dropdowns (as brother of event target)
		openDropdown(event){
			event.target.parentNode.lastChild.classList.toggle('d-none');
		},
		// function that adds display-none of dropdowns (as event target)
		closeDropdown(event){
			event.target.classList.add('d-none');
		},
		// function that deletes a message (as a parent element)
		deleteMessage(event){
			event.target.parentNode.parentElement.classList.add('d-none');
		},
		// function that toggles isClicked value and returns true, if it's true
		checkClick(){
			this.isClicked = !this.isClicked;
			if (this.isClicked) return true;
		}
	}
});




