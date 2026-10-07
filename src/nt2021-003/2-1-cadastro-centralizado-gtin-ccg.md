<!-- p.6 -->
# 2.1. Cadastro Centralizado de GTIN – CCG

O GTIN, sigla de *Global Trade Item Number*, é um identificador para itens comerciais. Os GTIN, anteriormente chamados de códigos EAN, são atribuídos para qualquer produto que possa ser precificado, pedido ou faturado em algum ponto de uma cadeia de suprimentos, sendo de grande aplicação na automação comercial da venda a consumidor final.

O GTIN é utilizado para recuperar informação pré-definida e abrange desde as matérias primas até produtos acabados. Os GTIN podem ter o tamanho de 8, 12, 13 ou 14 dígitos e podem ser construídos utilizando qualquer uma destas quatro estruturas de numeração.

O Cadastro Centralizado de GTIN (CCG) é um banco de dados contendo um conjunto reduzido de informações dos produtos que possuem o código de barras GTIN, e funciona de forma integrada com o Cadastro Nacional de Produtos da GS1 (CNP), que é a instituição responsável pela administração, outorga de licenças e gerenciamento do padrão de identificação de produtos GTIN.

As NF-e e NFC-e que acobertarem produtos que possuam GTIN terão as informações correspondentes a este código validadas junto ao CCG, em conformidade com o cronograma previsto na presente Nota Técnica.

As informações do CNP que são transmitidas para o CCG são:

1. GTIN
2. Marca
3. Tipo GTIN (8, 12, 13 ou 14 posições)
4. Descrição do Produto
5. Identificação do Dono da Marca (CNPJ ou CPF)
6. Dados da classificação do produto (Segmento, Família, Classe e Subclasse/Bloco)
7. NCM
8. CEST (quando existir)
9. Peso Bruto e Peso Líquido
10. Unidade de Medida de Peso Bruto e Peso Líquido
11. URL da imagem do produto

Caso o GTIN cadastrado seja de um agrupamento de produtos as seguintes informações adicionais são compartilhadas com o CCG:

12. GTIN de nível inferior, também denominado GTIN contido ou Item comercial contido
13. Quantidade de Itens Contidos deste GTIN dentro do agrupamento

O GTIN de nível superior poderá ser um GTIN 14 ou um GTIN 13.
