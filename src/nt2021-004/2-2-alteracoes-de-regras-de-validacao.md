<!-- p.7 -->
# 2.2. Alterações de Regras de Validação

## 2.2.1. Criação da Regra de Validação K01-10

Regra de validação para obrigar o preenchimento do grupo de medicamento (campo: med) quando o código NCM do produto for de medicamento (NCMs que começam com 3001, 3002, 3003, 3004, 3005 e 3006).

## 2.2.2. Criação das Regras de Validação J19-10, J20-10 e J20-20

Regras de validação para verificar se o Tipo e Espécie do Veículo (campos tpVeic e espVeic) existem e são compatíveis entre si conforme Tabela de Tipo e Espécie de Veículo publicada no Portal Nacional da NF-e. Foi detectado que o preenchimento destes campos, que já existem há um bom tempo, não atende a tabela específica citada, e por isso torna-se necessária a validação.

## 2.2.3. Criação da Regra de Validação U06-10

Regra de Validação para verificar o correto preenchimento do campo Item da Lista de Serviços (campo: cListServ). Esse campo tinha seu preenchimento verificado pelo schema e passará a ser validado através de tabela a ser publicada no Portal Nacional da NF-e.

## 2.2.4. Criação da Regra de Validação X03-30

Regra de Validação para proibir o preenchimento do grupo de transporte (campo: transporta) quando foi informado na Modalidade do Frete que não houve transporte (campo: modFrete = 9).

## 2.2.5. Criação das Regras de Validação X04-30, X04-40 e X04-50 e X04-60

Regras de Validação para verificar o correto preenchimento do transportador (campo: transporta) no caso de Transporte Próprio por conta do Remetente (campo: modFrete = 3 ).

<!-- p.8 -->
## 2.2.6. Criação das Regras de Validação X04-70, X04-80, X04-90 e X04-100

Regras de Validação para verificar o correto preenchimento do transportador (campo: transporta) no caso de Transporte Próprio por conta do Destinatário (campo: modFrete = 4).

## 2.2.7. Criação da Regra de Validação Z13-10

Regra para verificar o preenchimento correto do Tipo do Ato Concessório (campo: tpAto), no caso de Termo de Acordo ou Regime Especial validando o preenchimento de acordo com a Tabela de Padrões de Regime Especial de cada UF publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da NF-e (www.nfe.fazenda.gov.br).

## 2.2.8. Alteração da Regra de Validação 3BA02-10

Cria uma condição para que a exceção da regra não seja aplicada caso a NF-e referenciada tenha o Ano-Mês de emissão inferior a 1 mês da data da emissão da NF-e que a referência.

## 2.2.9. Criação das Regras de Validação 5AF15-10, 5AF15-20, 5AF15-30, 5BF15-10, 5BF15-20, 5BF15-30

Regras para verificar o correto preenchimento dos dados do Local de Entrega e do Local de Retirada, conforme CCC (Cadastro Centralizado de Contribuintes). Como esses grupos impactam na distribuição da NF-e, a informação precisa estar correta e de acordo com o cadastro de contribuintes de cada UF.
