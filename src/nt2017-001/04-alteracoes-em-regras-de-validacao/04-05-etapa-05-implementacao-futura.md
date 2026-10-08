# 4.5 Etapa 05 – Implementação futura

As regras de validação a seguir verificam a existência do código GTIN no Cadastro Centralizado de GTIN (CCG). Elas serão implantadas por grupo de CNAE e NCM em cronograma a ser divulgado em versão futura desta NT.

## Banco de Dados: Cadastro Centralizado de GTIN (CCG)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 9I03-20 | 55/65 | Se informado GTIN (tag: cEAN) com prefixo do Brasil (iniciado em 789 ou 790) e NCM informada na NF-e diferente da cadastrada no CCG | Obrig | 891 | Rej. | Rejeição: GTIN incompatível com a NCM [nItem:999; NCM esperada: 99999999] |
| 9I03-30 | 55/65 | Se informado o GTIN (tag: cEAN) com prefixo do Brasil (iniciado em 789 ou 790) e CEST informado na NF-e diferente do cadastrado no CCG | Obrig. | 892 | Rej. | Rejeição: GTIN incompatível com CEST [nItem:999; CEST esperado: 9999999] |
| 9I03-40 | 55/65 | Se informado GTIN-14 (tag: cEAN>09999999999999) com prefixo do Brasil (iniciado em 789 ou 790) e informado GTIN da unidade tributável (tag: cEANTrib) diferente do GTIN Contido cadastrado no CCG<br><br><!-- p.14 -->**Exceção:** a RV não se aplica em operações com exterior (idDest=3)<br><br>**Nota**: o GTIN pode possuir GTIN de nível inferior (GTIN Contido), agrupando diversas unidades do mesmo produto. O GTIN da unidade tributável deve corresponder àquele da menor unidade comercializável identificada por código GTIN, ou seja, deve corresponder ao GTIN do menor nível inferior (GTIN Contido). | Obrig. | 893 | Rej. | Rejeição: GTIN da unidade tributável diverge do GTIN Contido cadastrado no CCG [nItem:999; GTIN Contido esperado: 99999999999999] |
| 9I12-20 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) com prefixo do Brasil (iniciado em 789 ou 790) e NCM informada na NF-e diferente da cadastrada no CCG | Obrig | 895 | Rej. | Rejeição: GTIN da unidade tributável incompatível com a NCM [nItem:999; NCM esperada: 99999999] |
| 9I12-30 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) com prefixo do Brasil (iniciado em 789 ou 790) e CEST informado na NF-e diferente do cadastrado no CCG | Obrig. | 896 | Rej. | Rejeição: GTIN da unidade tributável incompatível com CEST [nItem:999; CEST esperado: 9999999] |
