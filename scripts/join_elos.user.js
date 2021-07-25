// ==UserScript==
// @name     Entrar Elos
// @namespace    https://github.com/pantheonlbs/
// @version      2.0
// @description  Entrar no Elos
// @author       pantheonlbs
// @match        https://*.elos.vc/rooms/*
// @grant        none
// ==/UserScript==
(function() {
	const nome = 'NOME'
	const sobrenome = 'SOBRENOME'
	
	// executar no contexto da página
	addJS_Node(null, null, function() {
		window.addEventListener("message", (event) => {
			console.log(event)
			try {
				const url_params = new URLSearchParams(event.data)
				document.querySelector('#first_name').value = url_params.get('fname')
				document.querySelector('#last_name').value = url_params.get('lname')
				document.querySelector('input[value="Join"]').click()
			} catch (e) {}
		}, false)
	})

	setTimeout(() => {
		try {
			const url_params = new URLSearchParams(location.search)
			document.querySelector('#first_name').value = url_params.get('fname') || nome
			document.querySelector('#last_name').value = url_params.get('lname') || sobrenome
			document.querySelector('input[value="Join"]').click()
		} catch (e) {}

		setTimeout(() => {
			location.reload(true)
		}, 15 * 1000)
	}, 3000)


	function addJS_Node(text, s_URL, funcToRun, runOnLoad) {
		var D = document;
		var scriptNode = D.createElement('script');
		if (runOnLoad) {
			scriptNode.addEventListener("load", runOnLoad, false);
		}
		scriptNode.type = "text/javascript";
		if (text) scriptNode.textContent = text;
		if (s_URL) scriptNode.src = s_URL;
		if (funcToRun) scriptNode.textContent = '(' + funcToRun.toString() + ')()';

		var targ = D.getElementsByTagName('head')[0] || D.body || D.documentElement;
		targ.appendChild(scriptNode);
	}
})()
