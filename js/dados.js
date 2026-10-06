/*
 * Papo Jovem! — camada de dados da versão estática.
 * Substitui o MySQL: os dados iniciais ficam aqui e tudo o que a área
 * administrativa (ou um visitante) altera é salvo no localStorage deste navegador.
 */
(function () {
	var PREFIXO = 'papojovem:';

	var SEMENTE = {
		noticias: [
			{
				id: 1,
				titulo: 'Saúde sexual e reprodutiva: o que você precisa saber',
				imagem: '06ab9e8d1da15a1d9d77cad24c34fff6..jpg',
				data: '2018-06-10',
				link: 'https://www.gov.br/saude',
				noticia: 'A saúde sexual e reprodutiva é um estado de completo bem-estar físico, mental e social. Envolve a capacidade de ter uma vida sexual satisfatória e segura, a capacidade de reproduzir e a liberdade de decidir se, quando e com que frequência fazê-lo.',
				visualizacoes: 142
			},
			{
				id: 2,
				titulo: 'DST/AIDS: prevenção e tratamento para adolescentes',
				imagem: '199a95b2818eeb568aa483adbba0b439..jpg',
				data: '2018-05-22',
				link: 'https://www.gov.br/aids',
				noticia: 'As doenças sexualmente transmissíveis (DST) são infecções transmitidas principalmente por contato sexual. O uso correto e consistente do preservativo é a forma mais eficaz de prevenção. Conheça os tipos, sintomas e formas de tratamento.',
				visualizacoes: 87
			},
			{
				id: 3,
				titulo: 'Adolescência: mudanças corporais e emocionais na puberdade',
				imagem: '24b51db1c047ccc8696e60a972c79f07..jpg',
				data: '2018-04-15',
				link: 'https://www.unicef.org/brazil',
				noticia: 'A adolescência é um período de grandes transformações físicas, psicológicas e sociais. Entender essas mudanças é fundamental para uma vida saudável. Saiba mais sobre puberdade, identidade e relacionamentos.',
				visualizacoes: 210
			},
			{
				id: 4,
				titulo: 'Como conversar com seus pais sobre sexualidade',
				imagem: '2b66eb51df614f444bdcdc276482e42f..jpg',
				data: '2018-04-03',
				link: 'https://www.unicef.org/brazil',
				noticia: 'Falar sobre sexualidade com a família pode parecer difícil, mas o diálogo aberto ajuda a tomar decisões mais seguras. Escolha um momento tranquilo, seja honesto sobre as suas dúvidas e lembre-se de que pais e responsáveis também já passaram pela adolescência.',
				visualizacoes: 1
			},
			{
				id: 5,
				titulo: 'Métodos contraceptivos: conheça as opções disponíveis no SUS',
				imagem: '325adf70e33892020597ba8c64ac9ffd..jpg',
				data: '2018-03-28',
				link: 'https://www.gov.br/saude',
				noticia: 'O SUS oferece gratuitamente diversos métodos contraceptivos, como preservativo masculino e feminino, pílula, injetável, DIU e contracepção de emergência. Procure a Unidade Básica de Saúde mais próxima para receber orientação de um profissional.',
				visualizacoes: 0
			}
		],
		videos: [
			{ id: 1, titulo: 'Prevenção às DST/AIDS — Ministério da Saúde', link: 'https://www.youtube.com/watch?v=exemplo1', data: '2018-06-05' },
			{ id: 2, titulo: 'Sexualidade na adolescência — Canal Saúde', link: 'https://www.youtube.com/watch?v=exemplo2', data: '2018-05-18' },
			{ id: 3, titulo: 'Uso correto do preservativo — UNAIDS Brasil', link: 'https://www.youtube.com/watch?v=exemplo3', data: '2018-04-30' }
		],
		videoaulas: [
			{ id: 1, titulo: 'Aula: O que são DSTs e como se prevenir', link: 'https://www.youtube.com/watch?v=aula1', data: '2018-07-10' },
			{ id: 2, titulo: 'Aula: Puberdade e desenvolvimento humano', link: 'https://www.youtube.com/watch?v=aula2', data: '2018-06-25' }
		],
		artigos: [
			{ id: 1, titulo: 'Guia de Prevenção às DST — Ministério da Saúde', arquivo: '1a1dd1271bf57b34545bcfcfe646e2cd.pdf' },
			{ id: 2, titulo: 'Saúde Sexual na Adolescência', arquivo: '5a0192bac833b50abda56f078976be89.pdf' },
			{ id: 3, titulo: 'HIV/AIDS: Prevenção e Tratamento', arquivo: '874ad3c853cc83b468549ff230522cf6.pdf' },
			{ id: 4, titulo: 'Educação Sexual nas Escolas', arquivo: 'f60cf579939a9d4f9f6933481d692248.pdf' }
		],
		perguntas: [
			{ id: 1, perg: 'Qual a diferença entre HIV e AIDS?', resp: 'HIV é o vírus que causa a AIDS. Uma pessoa pode ter HIV sem ter AIDS. A AIDS é o estágio avançado da infecção pelo HIV, quando o sistema imunológico está muito comprometido.' },
			{ id: 2, perg: 'O preservativo protege contra todas as DSTs?', resp: 'O preservativo é muito eficaz na prevenção da maioria das DSTs e do HIV quando usado corretamente. Porém, algumas infecções como o HPV e o Herpes podem ser transmitidas por contato pele a pele em áreas não cobertas.' },
			{ id: 3, perg: 'Com que idade posso começar a vida sexual?', resp: 'Não existe uma idade "certa" universal. O importante é que seja uma decisão madura, consciente e consentida. Recomendamos sempre conversar com um profissional de saúde e garantir o uso de métodos contraceptivos e de proteção.' },
			{ id: 4, perg: 'É possível engravidar na primeira relação?', resp: '' }
		],
		enquetes: [
			{
				id: 1,
				pergunta: 'Você já recebeu orientações sobre saúde sexual na escola?',
				categoria: 'Escola',
				a: 'Sim, com frequência', b: 'Raramente', c: 'Nunca recebi', d: 'Recebi fora da escola',
				votosA: 45, votosB: 30, votosC: 15, votosD: 10
			},
			{
				id: 2,
				pergunta: 'Você se sente confortável para tirar dúvidas sobre sexualidade com um profissional de saúde?',
				categoria: 'Saúde',
				a: 'Sim', b: 'Não', c: '', d: '',
				votosA: 63, votosB: 37, votosC: 0, votosD: 0
			}
		]
	};

	function copia(valor) {
		return JSON.parse(JSON.stringify(valor));
	}

	function ler(colecao) {
		try {
			var salvo = localStorage.getItem(PREFIXO + colecao);
			if (salvo) return JSON.parse(salvo);
		} catch (e) { /* localStorage indisponível: usa os dados iniciais */ }
		return copia(SEMENTE[colecao]);
	}

	function salvar(colecao, lista) {
		try {
			localStorage.setItem(PREFIXO + colecao, JSON.stringify(lista));
			return true;
		} catch (e) {
			alert('Não foi possível salvar. O armazenamento do navegador está cheio ou bloqueado (tente uma imagem ou arquivo menor).');
			return false;
		}
	}

	function buscar(colecao, id) {
		id = Number(id);
		return ler(colecao).filter(function (item) { return item.id === id; })[0] || null;
	}

	function inserir(colecao, item) {
		var lista = ler(colecao);
		item.id = lista.reduce(function (maior, i) { return Math.max(maior, i.id); }, 0) + 1;
		lista.push(item);
		return salvar(colecao, lista) ? item : null;
	}

	function atualizar(colecao, id, campos) {
		id = Number(id);
		var lista = ler(colecao);
		lista.forEach(function (item) {
			if (item.id === id) Object.keys(campos).forEach(function (k) { item[k] = campos[k]; });
		});
		return salvar(colecao, lista);
	}

	function excluir(colecao, id) {
		id = Number(id);
		return salvar(colecao, ler(colecao).filter(function (item) { return item.id !== id; }));
	}

	function restaurar() {
		Object.keys(SEMENTE).forEach(function (colecao) {
			try { localStorage.removeItem(PREFIXO + colecao); } catch (e) { /* nada a limpar */ }
		});
	}

	/* ---------- utilitários de exibição ---------- */

	function esc(texto) {
		return String(texto == null ? '' : texto)
			.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
	}

	function paragrafos(texto) {
		return esc(texto).replace(/\n/g, '<br>');
	}

	// '2018-06-10' -> '10/06/2018'
	function dataBR(iso) {
		return String(iso || '').split('-').reverse().join('/');
	}

	function hoje() {
		var d = new Date();
		return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
	}

	function param(nome) {
		return new URLSearchParams(location.search).get(nome);
	}

	function porDataDesc(a, b) {
		return (b.data || '').localeCompare(a.data || '') || b.id - a.id;
	}

	// Imagens enviadas pelo admin ficam salvas como data URL; as originais, na pasta do projeto.
	function urlImagem(nome, raiz) {
		return /^data:/.test(nome) ? nome : raiz + 'imagens_de_noticias/' + nome;
	}

	function urlArquivo(nome, raiz) {
		return /^data:/.test(nome) ? nome : raiz + 'artigos/' + nome;
	}

	function linkArquivo(artigo, raiz) {
		var nome = artigo.nomeArquivo || artigo.arquivo;
		// Navegadores bloqueiam abrir data: URL em nova aba, então arquivos enviados viram download.
		var alvo = /^data:/.test(artigo.arquivo) ? ' download="' + esc(nome) + '"' : ' target="_blank"';
		return '<a href="' + esc(urlArquivo(artigo.arquivo, raiz)) + '"' + alvo + '>' + esc(nome) + '</a>';
	}

	// Aceita URL do YouTube, código <iframe> (como era cadastrado no PHP) ou qualquer outro link.
	function video(link) {
		link = String(link || '').trim();
		var src = (link.match(/<iframe[^>]*\ssrc=["']([^"']+)["']/i) || [])[1];
		if (!src) {
			var yt = link.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})(?![\w-])/);
			if (yt) src = 'https://www.youtube.com/embed/' + yt[1];
		}
		if (src && /^https:\/\//.test(src)) {
			return '<iframe width="520" height="300" src="' + esc(src) + '" frameborder="0" allowfullscreen></iframe>';
		}
		return '<a href="' + esc(link) + '" target="_blank">' + esc(link) + '</a>';
	}

	// Lê uma imagem enviada e reduz para no máximo 800px de largura, para caber no localStorage.
	function lerImagem(arquivo) {
		return new Promise(function (resolve, reject) {
			var leitor = new FileReader();
			leitor.onerror = reject;
			leitor.onload = function () {
				var img = new Image();
				img.onerror = reject;
				img.onload = function () {
					var escala = Math.min(1, 800 / img.width);
					var canvas = document.createElement('canvas');
					canvas.width = Math.round(img.width * escala);
					canvas.height = Math.round(img.height * escala);
					canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
					resolve(canvas.toDataURL('image/jpeg', 0.8));
				};
				img.src = leitor.result;
			};
			leitor.readAsDataURL(arquivo);
		});
	}

	function lerArquivo(arquivo) {
		return new Promise(function (resolve, reject) {
			var leitor = new FileReader();
			leitor.onerror = reject;
			leitor.onload = function () { resolve(leitor.result); };
			leitor.readAsDataURL(arquivo);
		});
	}

	window.PJ = {
		ler: ler, salvar: salvar, buscar: buscar, inserir: inserir, atualizar: atualizar,
		excluir: excluir, restaurar: restaurar,
		esc: esc, paragrafos: paragrafos, dataBR: dataBR, hoje: hoje, param: param, porDataDesc: porDataDesc,
		urlImagem: urlImagem, linkArquivo: linkArquivo, video: video,
		lerImagem: lerImagem, lerArquivo: lerArquivo
	};
})();
