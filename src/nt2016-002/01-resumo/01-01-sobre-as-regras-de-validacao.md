# 1.1 Sobre as Regras de Validação

O processo de validação dos dados fica a cargo da SEFAZ Autorizadora, não trazendo, em princípio, grande impacto para as empresas. No entanto, estas validações também têm o objetivo de orientar as empresas de como devem informar os dados no documento e, neste sentido, podem acarretar, eventualmente, em algumas mudanças em suas aplicações.

A própria alteração do leiaute já acarretará, por si só, a necessidade de inclusão e/ou mudança em regras de validação. Além disso, foram definidas algumas novas validações, destacando-se as que seguem:

- Validação (B25b-40) para obrigar o preenchimento dos campos refNFe (id:BA02) ou refNF (id:BA03) quando informado operação presencial fora do estabelecimento, indPres=5, (id: B25b).
- Validação (BA03-10) se informado em duplicidade Nota Fiscal modelo 2 (id:BA03) informada no Grupo de Documentos referenciados (id:BA01).
- Definição da unidade de medida que deve ser utilizada na informação do produto GLP (I13-20).
- Validação (K01-20) para obrigar o preenchimento do Grupo Rastreabilidade de Produto quando preenchido o Grupo Medicamentos.
- Validação (I84-10) da informação da data de validade do produto em relação à data de fabricação.
- Validação (LA03c-10 / LA03c-20) das informações relativas à percentual de mistura de GLP e obrigar o preenchimento do Grupo Repasse do ICMS ST para alguns códigos ANP (LA02-20).
- Validação do percentual informado para o FCP (N17b-10/ N23b-10/ N27b-10).
- Validação do somatório dos campos FCP (W04b-10), FCP-ST (W06a-10), IPI devolvido (W12a-10), quando informados nos itens.
- Inclusão do valor total do IPI devolvido, quando ocorrer, e do valor do Fundo de Combate à Pobreza ST no valor total da NFe, (W16-10).
- Validação (X02-20) para vedar o preenchimento de campos relativos a veículo e reboque quando for operação interestadual. Podendo, a critério de cada UF, a validação ser aplicada as operações internas.
- Alteração da Validação (YA01-20) do preenchimento do Grupo “Informações de Pagamento” para NFC-e e NF-e, a critério de cada UF.
- Validação para não permitir o Grupo Informações de Pagamento nas Notas de Ajuste e Devolução (YA01-30).
- Validação para não permitir informar Duplicata Mercantil como Forma de Pagamento na NFC-e (YA02-10).
<!-- p.11 -->
- Validação para obrigar o preenchimento do Grupo Duplicata quando informado Duplicata Mercantil como Forma de Pagamento (YA02-20) e para não permitir o preenchimento deste Grupo quando informado Forma de Pagamento em Dinheiro ou Cheque (YA02-30).
- Validação (YA03-10/ YA03-20) do somatório dos pagamentos informados.
- Validação (YA09-10) para obrigar informação do campo valor do troco (tag:vTroco) quando valor do somatório dos pagamentos for maior que o valor da nota.
