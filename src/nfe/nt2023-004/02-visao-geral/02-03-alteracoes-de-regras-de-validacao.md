<!-- p.5 -->
# 2.3. Alterações de Regras de Validação

## 2.3.1. Inclusão das regras YA04-20, YA09-20 e YA10-10

Inclusão da regra de validação YA04-20 para somente permitir o grupo de cartões ou boletos para os meios de pagamento corretos.

Inclusão da regra de validação YA09-20, que limita o valor do troco.

Inclusão da regra de validação YA10-10 para verificar o correto preenchimento do CNPJ beneficiário do pagamento.

## 2.3.2. Desabilitação das regras X03-10 e X03-20

Desabilita as regras X03-10 e X03-20.

## 2.3.3. Alteração da regra de validação

A regra da W16-10 é alterada para substituir a Exceção 3 pela Exceção 4, em que não há rejeição quado o campo “indDeduzDeson” não for preenchido ou preenchido com a indicação de “Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e”. Cria Exceção para não aplicar a regra 1C17-34 quando emissão de NFA-e.
