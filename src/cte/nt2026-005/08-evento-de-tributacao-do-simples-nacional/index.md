<!-- p.10 -->

# 8 Evento de Tributação do Simples Nacional

O evento “Tributação do Simples Nacional” (tpEvent = 412140) será gerado **automaticamente** pela Administração Tributária, com base nos DFe recebidos e emitidos por contribuintes enquadrados no Simples Nacional ou por contribuintes do Regime Normal que estejam com a opção pelo Simples Nacional pendente. O CGIBS e a RFB usarão os mesmos algoritmos para cálculo dos tributos e verificação de conformidade, tendo como referência inicial as regras implementadas na calculadora de tributos.

**Função**: Evento gerado pela administração tributária contendo informações relativas à tributação do Simples Nacional para fins de análise da conformidade da composição da receita bruta, dos valores dos tributos informados e da eventual necessidade de constituição de crédito tributário.

**Autor do Evento**: Administração Tributária

**Código do Tipo de Evento: 412140**

**Schema XML: evTributacaoSN_v9.99.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **#** | **evTribSN** | **Raiz** | **detEvento** | **G** | **1-1** | | **Schema XML de validação do evento de Tributação do SN 412140** |
| 1 | descEvento | E | evTribSN | E | 1-1 | 30 | Descrição do Evento - “Tributação do Simples Nacional” |
| 2 | nProt | E | evTribSN | E | 1-1 | 15 | Número do protocolo de autorização do DFe |
| **3** | **gTribItemSN** | **G** | **evTribSN** | | **1-990** | | **Detalhamento dos tributos.**<br><br>**Observação**: Para CTe e CTeOS será gerado apenas um item<br><br>Para CTe Simplificado a mesma qtd de viagens declaradas com tributação. |
| 4 | nItem | A | gTribItemSN | N | 1-1 | 1-3 | Número do item (1-990) |
| 5 | vRBSNitem | E | gTribItemSN | N | 1-1 | 13v2 | Valor da receita bruta do Simples Nacional atribuída ao item<br>Se item tributável, RBSNitem = vTPrest |
| 6 | tpRBSN | E | gTribItemSN | N | 1-1 | 1 | Tipo de Receita Bruta do Simples Nacional referente ao cClassTrib do item<br>0 - Não é receita bruta<br>1 - Receita bruta - interna<br>2 - Receita bruta - interna sem cálculo de IBS e CBS<br>3 - Receita bruta – exportação direta<br>4 - Receita bruta - exportação indireta<br>5 - Receita bruta - mercado interno e exportação<br>9 - Fornecimento incompatível com SN |
| 7 | pIBSSN | E | gTribItemSN | N | 0-1 | 3v2-4 | Alíquota aplicável de cálculo do IBS referente ao item |
| 8 | vIBSSN | E | gTribItemSN | N | 0-1 | 13v2 | Valor do IBS devido pelo Simples Nacional. |
| 9 | pCBSSN | E | gTribItemSN | N | 0-1 | 3v2-4 | Alíquota aplicável de cálculo da CBS referente ao item |
| 10 | vCBSSN | E | gTribItemSN | N | 0-1 | 13v2 | <!-- p.11 -->Valor da CBS devida pelo Simples Nacional. |
| 11 | vIBSPendSusp | E | gTribItemSN | N | 0-1 | 13v2 | Valor do IBS pendente ou suspenso referente ao item |
| 12 | vCBSPendSusp | E | gTribItemSN | N | 0-1 | 13v2 | Valor da CBS pendente ou suspenso referente ao item. |
| **13** | **gTotalSN** | **G** | **evTribSN** | **-** | **1-1** | | **Totais do CTe** |
| 14 | vRBSNtot | E | gTotalSN | N | 1-1 | 13v2 | Valor total da receita bruta do Simples Nacional, correspondente ao somatório dos valores atribuídos aos itens do DFe |
| 15 | vIBSSNtot | E | gTotalSN | N | 0-1 | 13v2 | Valor total do IBS devido pelo Simples Nacional apurado no documento |
| 16 | vIBSSNtotPendSusp | E | gTotalSN | N | 0-1 | 13v2 | Valor total do IBS devido pelo Simples Nacional cuja apropriação encontra-se pendente ou com exigibilidade suspensa |
| 17 | vCBSSNtot | E | gTotalSN | N | 0-1 | 13v2 | Valor total da CBS devida pelo Simples Nacional apurada no documento |
| 18 | vCBSSNtotPendSusp | E | gTotalSN | N | 0-1 | 13v2 | Valor total da CBS devida pelo Simples Nacional |
