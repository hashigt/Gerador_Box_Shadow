class geradorBoxShadow {

    constructor( /* Argumentos recebidos de cada instancia */
        horinzontal,
        horinzontalRef,
        vertical,
        verticalRef,
        blur,
        blurRef,
        spread,
        spreadRef,
        color,
        colorRef,
        opacity,
        opacityRef,
        inset,
        visualizacaoCaixa,
        regra,
        webkitRegra,
        mozRegra
    ) 
    {
        this.horinzontal = horinzontal   /* Escolhe o que vai fazer com cada */
        this.horinzontalRef = horinzontalRef
        this.vertical = vertical
        this.verticalRef = verticalRef
        this.blur = blur
        this.blurRef = blurRef
        this.spread = spread
        this.spreadRef = spreadRef
        this.color = color
        this.colorRef = colorRef
        this.opacity = opacity
        this.opacityRef = opacityRef
        this.inset = inset
        this.insetRef = inset.checked
        this.visualizacaoCaixa = visualizacaoCaixa
        this.regra = regra
        this.webkitRegra = webkitRegra
        this.mozRegra = mozRegra
    }

    inicializar() {
        this.horinzontalRef.value = this.horinzontal.value;
        this.verticalRef.value = this.vertical.value;
        this.spreadRef.value = this.spread.value;
        this.blurRef.value = this.blur.value;
        this.colorRef.value = this.color.value;
        this.opacityRef.value = this.opacity.value;

        this.aplicarRegra();
        this.showRegra();
    }

    aplicarRegra() {
        const rgbValue = this.hexParaRgb(this.colorRef.value);

        const sombraRegra = `${this.insetRef ? "inset" : ""} ${this.horinzontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px  rgba(${rgbValue}, ${this.opacityRef.value})`;

        this.visualizacaoCaixa.style.boxShadow = sombraRegra;
        this.currentRegra = sombraRegra;
    }

    showRegra() {
        this.regra.innerText = this.currentRegra;
        this.webkitRegra.innerText = this.currentRegra;
        this.mozRegra.innerText = this.currentRegra;
    }

    atualizarValor(type, value) {
      switch(type) {
        case "horizontal":
            this.horinzontalRef.value = value;
            break
        case "vertical":
            this.verticalRef.value = value;
            break
        case "blur":
            this.blurRef.value = value;
            break
        case "spread":
            this.spreadRef.value = value;
            break
        case "color":
            this.colorRef.value = value;
            break
        case "opacity":
            this.opacityRef.value = value;
            break
        case "inset":
            this.insetRef = value;
            break
      }

      this.aplicarRegra();
      this.showRegra();
    }

    hexParaRgb(hex) {
      return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${
        ("0x" + hex[5] + hex[6]) | 0
      }`;
    }
}

// Selção de elementos
const horinzontal = document.querySelector("#horizontal");
const horinzontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

const color = document.querySelector("#color");
const colorRef = document.querySelector("#color-value");

const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacity-value");

const inset = document.querySelector("#inset");

const visualizacaoCaixa = document.querySelector("#caixa");

const regra = document.querySelector("#regra span");
const webkitRegra = document.querySelector("#webkit-regra span");
const mozRegra = document.querySelector("#moz-regra span");

const boxShadow = new geradorBoxShadow(
    horinzontal,
    horinzontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    color,
    colorRef,
    opacity,
    opacityRef,
    inset,
    visualizacaoCaixa,
    regra,
    webkitRegra,
    mozRegra
);

console.log(boxShadow)

boxShadow.inicializar();

// Eventos
horizontal.addEventListener("input", (e) => {
    const value = e.target.value

    boxShadow.atualizarValor("horizontal",value)
})

vertical.addEventListener("input", (e) => {
    const value = e.target.value

    boxShadow.atualizarValor("vertical",value)
})

spread.addEventListener("input", (e) => {
    const value = e.target.value

    boxShadow.atualizarValor("spread",value)
})

blur.addEventListener("input", (e) => {
    const value = e.target.value

    boxShadow.atualizarValor("blur",value)
})

color.addEventListener("input", (e) => {
    const value = e.target.value

    boxShadow.atualizarValor("color",value)
})

opacity.addEventListener("input", (e) => {
    const value = e.target.value

    boxShadow.atualizarValor("opacity",value)
})

inset.addEventListener("input", (e) => {
    const value = e.target.checked

    boxShadow.atualizarValor("inset",value)
})

// Copiar regra
const areaRegras = document.querySelector("#area-regras")
const copyInstrucoes = document.querySelector("#copy-instrucoes")

areaRegras.addEventListener("click", () => {
    const regras = areaRegras.innerText.replace(/^\s*\n/gm, "");

    navigator.clipboard.writeText(regras).then(() => {
        copyInstrucoes.innerText = "Regra copiada com sucesso!"

        setTimeout(() => {
            copyInstrucoes.innerText = "Clique no quadro acima para copiar as regras"
        }, 1000);
    })
})