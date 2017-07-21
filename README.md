![cabecalho memed desafio](https://user-images.githubusercontent.com/2197005/28128758-3b0a0626-6707-11e7-9583-dac319c8b45b.png)

# Desafio do Autocomplete

## Problema:

A forma como um médico interage com a tecnologia ao escrever uma prescrição é um dos pontos mais importantes para a Memed. Por dia, um médico realiza em média 40 prescrições, e ter uma ferramenta de prescrição com ótima interface, usabilidade e conteúdo resulta em melhor qualidade de trabalho e mais atenção para o paciente.

Uma das formas da Memed auxiliar ferramentas de parceiros no momento da prescrição é extendendo a usabilidade de campos de texto, os quais muitas vezes são utilizados por prontuários web.

Extender a usabilidade de um campo de texto significa:
- Ajudar o médico a encontrar medicamentos no momento da prescrição
- Possibilitar a inserção de textos pré-definidos
- Compreender o contexto e reagir a gatilhos de uso

## Solução:

Criar uma página com um campos de texto (textarea), e quando o usuário digitar algo, posicionar um autocomplete logo abaixo do cursor (caret), sugerindo medicamentos. Quando um medicamento for clicado, inserir no campo de texto o nome e fabricante do medicamento.

## Proposta:

A solução pode ser feita com ou sem frameworks front-end.

Fique a vontade para usar algum framework CSS (ex: Bootstrap, Material, Semantic UI).

Para enviar seu código, faça um fork deste repositório e nos avise quando concluir o desafio (:white_check_mark: as mensagens dos seus commits também serão analisadas). 

Lembre-se de alterar o README.md com as instruções para rodar o projeto.

Não é necessário realizar uma busca verdadeira, será avaliada a interface e usabilidade. Abaixo, segue uma lista de medicamentos para serem mostrados no autocomplete, independente do que for escrito pelo usuário:

```javascript
[
	{
		fabricante: 'Roche',
		nome: 'Roacutan 20mg, Cápsula (30un)',
		precoMax: 22.10,
		precoMin: 20.99,
		principioAtivo: 'Isotretinoína 20mg',
		titularidade: 'Referência'
	},
	{
		fabricante: 'Sundown Vitaminas',
		nome: 'Vitamina C, comprimido (100un)',
		precoMax: 45.15,
		precoMin: 31.99,
		principioAtivo: 'Ácido Ascórbico',
		titularidade: 'Referência'
	},
	{
		fabricante: 'Sundown Vitaminas',
		nome: 'Vitamina C, comprimido (180un)',
		precoMax: 10.00,
		precoMin: 10.00,
		principioAtivo: 'Ácido Ascórbico',
		titularidade: 'Genérico'
	},
	{
		fabricante: 'EMS Sigma Pharma',
		nome: 'Itraspor 100mg, Cápsula (15un)',
		precoMax: 209.00,
		precoMin: 100.00,
		principioAtivo: 'Itraconazol 100mg',
		titularidade: 'Genérico'
	},
	{
		fabricante: 'EMS Sigma Pharma',
		nome: 'Itraspor 100mg, Cápsula (28un)',
		precoMax: 15.00,
		precoMin: 9.99,
		principioAtivo: 'Itraconazol 100mg',
		titularidade: 'Referência'
	},
	{
		fabricante: 'Abbott',
		nome: 'Cloridrato de sibutramina 15mg, Cápsula (30un)',
		precoMax: 40.00,
		precoMin: 40.00,
		principioAtivo: 'Cloridrato de sibutramina 15mg',
		titularidade: 'Genérico'
	},
	{
		fabricante: 'Abbott',
		nome: 'Cloridrato de sibutramina 15mg, Cápsula (100un)',
		precoMax: 200.00,
		precoMin: 100.00,
		principioAtivo: 'Cloridrato de sibutramina 15mg',
		titularidade: 'Referência'
	}
]
```

Para o visual do autocomplete, você deve seguir a imagem abaixo. A fonte utilizada é a [Open Sans](https://fonts.google.com/specimen/Open+Sans).

![layout](https://user-images.githubusercontent.com/2197005/28479617-94429342-6e33-11e7-9707-00f99a5fb8f8.png)

## Etapas:

1 - O usuário deverá visualizar o autocomplete assim que começar a digitar no campo de texto:

![buscando](https://user-images.githubusercontent.com/2197005/28478284-2cda9b96-6e2e-11e7-8ac6-2e9095835227.gif)

2 - Ao clicar em um medicamento, deverá ser adicionado ao campo de texto o nome e o fabricante:

![clicando](https://user-images.githubusercontent.com/2197005/28478285-2de69f08-6e2e-11e7-93be-9d72a2a7b011.gif)

3 - O autocomplete deverá seguir o cursor (apenas verticalmente):

![trocando-de-linha](https://user-images.githubusercontent.com/2197005/28478286-2f36f88a-6e2e-11e7-8303-1619644f5e1f.gif)

Boa sorte _and let’s code_!

:m: Equipe Memed
