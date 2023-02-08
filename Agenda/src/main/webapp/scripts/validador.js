/**
 * Validacao de formulario
 * @author Willis Marques
 */

function validar() {
	let nome = frmContato.nome.value
	let telefone = frmContato.telefone.value

	if (nome === "") {
		alert('Preencha o campo Nome do Contato')
		frmContato.nome.focus()
		return false
	} else if (telefone === "") {
		alert('Preencha o campo Telefone')
		frmContato.telefone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}