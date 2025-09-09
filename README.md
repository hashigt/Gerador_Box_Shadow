# 🎨 Gerador de Box Shadow CSS

Um gerador de `box-shadow` simples e interativo, construído com Vanilla JavaScript (ES6+ Classes), HTML5 e CSS3. Esta ferramenta permite que desenvolvedores e designers configurem visualmente sombras complexas, obtenham uma pré-visualização instantânea e copiem o código CSS gerado.

---

## ✨ Funcionalidades

Este projeto permite a configuração completa da propriedade `box-shadow` através de uma interface intuitiva:

* **Controles Deslizantes (Sliders):** Ajuste fácil para:
    * Deslocamento Horizontal
    * Deslocamento Vertical
    * Intensidade do Borrão (Blur)
    * Intensidade do Espalhamento (Spread)
    * Opacidade (convertendo HEX para RGBA)
* **Seletor de Cores:** Escolha qualquer cor para a sua sombra.
* **Sombra Interna (Inset):** Um único checkbox para alternar entre sombra externa (padrão) e interna.
* **Visualização em Tempo Real:** Veja o efeito aplicado instantaneamente na caixa de preview.
* **Geração de Código:** O código CSS correspondente é gerado automaticamente, incluindo prefixos de navegador (`-webkit-` e `-moz-`) para maior compatibilidade.
* **Copiar para o Clipboard:** Clique na área de código gerado para copiar instantaneamente todas as regras CSS para sua área de transferência.
* **Responsivo:** A interface se adapta a telas menores.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído sem frameworks, utilizando apenas as tecnologias web fundamentais:

* **HTML5:** Estrutura semântica para os controles e áreas de visualização.
* **CSS3:** Estilização completa, incluindo Flexbox para layout e personalização dos inputs `range` (sliders).
* **JavaScript (ES6+):**
    * **Classes (OOP):** O núcleo da lógica é encapsulado na classe `geradorBoxShadow` para melhor organização e manutenção.
    * **Manipulação do DOM:** Utilizado para ler os valores dos inputs e aplicar os estilos dinamicamente.
    * **Event Listeners:** Captura todas as mudanças nos controles em tempo real.
    * **API Clipboard (navigator.clipboard):** Usada para a funcionalidade de "copiar com um clique".

---

## 🚀 Como Usar

Não é necessária nenhuma instalação ou build. Basta clonar o repositório e abrir o arquivo principal no seu navegador.

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    ```
2.  Navegue até a pasta do projeto e abra o arquivo `index.html` em qualquer navegador web moderno.

3.  Use os controles para criar a sombra desejada.

4.  Clique na caixa cinza onde o código é exibido para copiá-lo.

5.  Cole o CSS no seu projeto! 🎉
