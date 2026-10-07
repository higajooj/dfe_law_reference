<!-- p.19 -->
# 4.8 5B. Banco de Dados: Local de Entrega

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 5BG15-10 | 55 | Se informada IE do local de entrega:<br>-Acessar Cadastro de Contribuinte da UF (Chave: UF Entrega , IE Entrega) (*5)<br>-IE do local de entrega não cadastrada | Obrig. | 945 | Rej. | Rejeição: IE do local de entrega não cadastrada |
| 5BG15-20 | 55 | Se informado CNPJ do local de entrega e IE do local de entrega não vinculada ao CNPJ (tratar Regime Especial de IE Única) | Obrig. | 947 | Rej. | Rejeição: IE do local de entrega não vinculada ao CNPJ |
| 5BG15-30 | 55 | Se informado CPF do local de entrega e IE do local de entrega não vinculada ao CPF | Obrig. | 948 | Rej. | Rejeição: IE do local de entrega não vinculada ao CPF |

(*5) Validação possível na operação interestadual, ou no ambiente da SEFAZ Virtual, utilizando o CCC-Cadastro Centralizado de Contribuintes.
