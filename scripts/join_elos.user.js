// ==UserScript==
// @name     Entrar Elos
// @namespace    https://github.com/pantheonlbs/
// @version      1.1
// @description  Entrar no Elos
// @author       pantheonlbs
// @match        https://*.elos.vc/rooms/*
// @grant        none
// ==/UserScript==

(function() {
	try {
		document.querySelector('#first_name').value = 'primeiro nome'
		document.querySelector('#last_name').value = 'segundo nome'
		document.querySelector('input[value="Join"]').click()
	} catch (e) {}

	setTimeout(() => {
		history.back()
	}, 30 * 1000)
})()
