<!-- p.19 -->
# 4.7 5A. Banco de Dados: Local de Retirada

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 5AF15-10 | 55 | Se informada IE do Local de Retirada:<br>-Acessar Cadastro de Contribuinte da UF (Chave: UF Retirada , IE Retirada)<br>(*5)<br>-IE do local de retirada não cadastrada | Obrig. | 942 | Rej. | Rejeição: IE do local de retirada não cadastrada |
| 5AF15-20 | 55 | Se informado CNPJ do local de retirada e IE do local de retirada não vinculada ao CNPJ (tratar Regime Especial de IE Única) | Obrig. | 943 | Rej. | Rejeição: IE do local de retirada não vinculada ao CNPJ |
| 5AF15-30 | 55 | Se informado CPF do local de retirada e IE do local de retirada não vinculada ao CPF | Obrig. | 944 | Rej. | Rejeição: IE do local de retirada não vinculada ao CPF |

(*5) Validação possível na operação interestadual, ou no ambiente da SEFAZ Virtual, utilizando o CCC-Cadastro Centralizado de Contribuintes.
