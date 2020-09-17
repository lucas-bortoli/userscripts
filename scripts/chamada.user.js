// ==UserScript==
// @name         Chamada
// @namespace    https://github.com/pantheonlbs/
// @version      1.1
// @description  Responder chamada
// @author       pantheonlbs
// @match        https://*/html5client/*
// @grant        none
// ==/UserScript==

(function() {
  	function createCheckbox() {
    	let checkbox = document.createElement('input')
      checkbox.setAttribute('type', 'checkbox')
      checkbox.id = '__script_on'
      checkbox.style = 'position: fixed;top: 50%;right: 2em;z-index: 999;'
      checkbox.title = '[script] Auto-chamada ligada?'
      document.body.appendChild(checkbox)
      return checkbox
    }

    function popup(titulo, texto) {
        let html = `
            <div id="__popup" style="z-index: 999; display: block; position: float">
                <h2 style="margin-top: 0">${titulo}</h2>
                <p>${texto}</p>
                <button onclick="document.querySelector('#__wrapper').remove()">Fechar popup</button>
            </div>`

       let wrapper = document.createElement('div')

       wrapper.id = '__wrapper'
       wrapper.style = `display:flex;position:fixed;z-index:999;top:50%;left:50%;transform:translate(-50%,-50%);width:300px;border:1px solid gray;padding:2em;background:white;`
       wrapper.innerHTML = html
       document.body.appendChild(wrapper)
    }
  
    let TURMA = 'A'
		let checkbox_on = createCheckbox()

		let i = setInterval(_ => {
				let botao = document.querySelector(`button[aria-label="${TURMA}"]`)

				if (botao && checkbox_on.checked) {
						let horario = new Date().toLocaleTimeString()

						botao.click()
						popup('Chamada', `Respondi a chamada!<br>Horário: <b>${horario}</b>`)
				}
		}, 2 * 1000)
})()
