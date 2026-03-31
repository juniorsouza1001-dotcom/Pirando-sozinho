// Selecionar elementos
const modal = document.getElementById("modalContacto")
const btnNav = document.querySelector(".btn-nav") // Botão do Menu
const btnCards = document.querySelectorAll(".btn-card") // Botões dos Planos
const closeBtn = document.querySelector(".close-btn")

// Função para abrir o modal
const openModal = (e) => {
  e.preventDefault()
  modal.style.display = "block"
}

// Abrir ao clicar no "Contactar" do menu
btnNav.addEventListener("click", openModal)

// Abrir ao clicar nos botões dos pacotes
btnCards.forEach((btn) => {
  btn.addEventListener("click", openModal)
})

// Fechar ao clicar no X
closeBtn.onclick = () => {
  modal.style.display = "none"
}

// Fechar se clicar fora da caixa
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}
JavaScript
const checkoutBtns = document.querySelectorAll(".whatsapp-checkout")

checkoutBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // 1. Ir buscar os dados do card
    const plano = this.getAttribute("data-plan")
    const precoUnitario = this.getAttribute("data-price")

    // 2. Ir buscar a quantidade do input que está no mesmo card
    const qty = this.parentElement.querySelector(".item-qty").value

    // 3. Calcular o total
    const total = precoUnitario * qty

    // 4. Configurar o teu número (Substitui pelo teu!)
    const meuNumero = "351930624532"

    // 5. Criar a mensagem personalizada
    const mensagem =
      `Olá! Vi o teu site e quero encomendar o seguinte:%0A%0A` +
      `*Plano:* ${plano}%0A` +
      `*Quantidade:* ${qty} vídeo(s)%0A` +
      `*Total Estimado:* €${total}%0A%0A` +
      `Podemos combinar os detalhes do envio do material?`

    // 6. Abrir o WhatsApp
    const url = `https://wa.me/${meuNumero}?text=${mensagem}`
    window.open(url, "_blank")
  })
})