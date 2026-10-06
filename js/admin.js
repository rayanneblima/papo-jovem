/*
 * Papo Jovem! — utilitários da área administrativa estática.
 * Cada formulário que antes postava para um .php agora salva via PJ (js/dados.js).
 */
(function ($) {
	// Roda depois da validação do js/main.js: se ela barrou o envio, não salva nada.
	PJ.aoEnviar = function (seletor, salvar) {
		$(seletor).on('submit', function (e) {
			if (e.isDefaultPrevented()) return;
			e.preventDefault();
			var botao = $(this).find('button[type=submit]').prop('disabled', true);
			Promise.resolve()
				.then(function () { return salvar(new FormData(e.target)); })
				.catch(function () { alert('Ocorreu um erro ao salvar! Tente novamente.'); })
				.then(function () { botao.prop('disabled', false); });
		});
	};

	// Liga os ícones de excluir (data-excluir="colecao:id") e redesenha a lista depois.
	PJ.ligarExcluir = function (container, redesenhar) {
		$(container).on('click', '[data-excluir]', function (e) {
			e.preventDefault();
			var partes = $(this).attr('data-excluir').split(':');
			if (!confirm('Deseja excluir este registro?')) return;
			PJ.excluir(partes[0], partes[1]);
			redesenhar();
		});
	};

	PJ.icones = function (editar, excluir) {
		return '<center>' +
			(editar ? '<a href="' + editar + '"><img width="40px" height="40px" src="../images/edit.png" alt="Editar"></a>' : '') +
			'<a href="#" data-excluir="' + excluir + '"><img width="40px" height="40px" src="../images/x.png" alt="Excluir"></a>' +
			'</center>';
	};
})(jQuery);
