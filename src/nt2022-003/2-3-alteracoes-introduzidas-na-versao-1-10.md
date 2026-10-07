<!-- p.6 -->
# 2.3. Alterações introduzidas na versão 1.10

## 2.3.1. Criação das Regras de Validação BA02-60 e BA02a-110

Estas regras visam garantir que quando houver uma Chave referenciada (tag: refNFe) ou uma Chave Referenciada com código numérico zerado (tag: refNFeSig), o tipo de emissão da chave referenciada seja válido.

## 2.3.2. Criação das Regras de Validação BA02-70 e BA02-80

Estas regras visam evitar que sejam referenciados documentos eletrônicos diferentes do modelo 55 em devoluções internas de mercadoria e também em devoluções envolvendo consumidor final. Regras com implementação futura.

## 2.3.3. Criação da Regra de Validação BA02a-74

Esta regra visa garantir que, quando houver uma Chave Referenciada com código numérico zerado (tag: refNFeSig), o código numérico seja efetivamente zerado.

## 2.3.4. Alteração da documentação da Regra BA02a-90

A coluna de modelo desta regra havia sido deixada em branco equivocadamente, alterada para constar sua aplicabilidade somente para o modelo 55.

## 2.3.5. Criação da Regra de Validação BA02a-120

Esta regra visa evitar que seja utilizado o campo de Nota Referenciada com código numérico zerado (tag: refNFeSig) em UF que não permite tal referência.

## 2.3.6. Exclusão da Regra I08-186

Esta regra foi removida pois a UF que assim desejar pode bloquear Cupom Fiscal referenciado através da ativação da Regra BA20-30 (NT 2019.001). Como a Regra I08-196 sequer chegou a ser implementada, o código de Rejeição inicialmente alocado a ela foi reaproveitado nesta mesma NT. <!-- REVISAR p.6: o texto cita "I08-196", provavelmente deveria ser "I08-186" (regra excluída) -->

## 2.3.7. Alteração da descrição da Regra de Validação N17c-30

Alterada a descrição da RV N17c-30 para que fique claro que ela somente se aplica, neste momento, para o Ceará. O Estado do Ceará realiza o controle do FCP de forma diferente das demais UF, o que acarreta na necessidade de implementação desta regra.
