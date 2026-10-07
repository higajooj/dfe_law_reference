# 4.6 Regras de validação excluídas

## I. Produtos e Serviços (Excluída na versão 1.30)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~I12-50~~ | ~~55/65~~ | ~~Informado GTIN da unidade tributável como um agrupamento de produtos homogêneos (GTIN-14, tag: cEANTrib>09999999999999 e <> “SEM GTIN” ou Nulo):<br>**Exceção:** a RV não se aplica em operações com exterior (idDest=3)<br><br>**Nota:** No GTIN-14 o primeiro dígito identifica um<!-- p.15 --> agrupamento homogêneo de diversas unidades do mesmo produto. O GTIN da unidade tributável deve corresponder ao GTIN da menor unidade, ou seja, a menor apresentação comercializada no varejo, não podendo ser um GTIN-14.~~ | ~~Obrig.~~ | ~~887~~ | ~~Rej.~~ | ~~Rejeição: Informado GTIN de agrupamento de produtos homogêneos (GTIN-14) no GTIN da unidade tributável [nItem:999]~~ |

> **Revogado/Descontinuado:** RV I12-50 riscada no original; a própria seção registra que a regra foi excluída na versão 1.30.

## Banco de Dados: Cadastro SEFAZ (Excluídas na versão 1.20)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~7I03-20~~ | ~~55/65~~ | ~~Se informado NCM de cigarro (NCM=24022000) e CNAE do emitente for de fabricação de produtos de fumo (CNAE iniciada em 121 ou 122)<br>- Não informado GTIN (cEAN=Nulo). ou informado GTIN igual a “SEM GTIN” (cEAN=”SEM GTIN”).<br><br>**Observação 1:** Regra de validação se aplica por grupo de CNAE conforme vigência definida no ANEXO I.01;<br>**Observação 2:** Para produtos que não possuem GTIN, utilizar a informação de "SEM GTIN"~~ | ~~Obrig.~~ | ~~889~~ | ~~Rej.~~ | ~~Rejeição: Obrigatória a informação do GTIN para o produto [nItem:999]~~ |
| ~~7I03-30~~ | ~~55/65~~ | ~~Se informado grupo de medicamentos (tag: med, id: K01) e CNAE do emitente for de fabricação de produtos farmoquímicos e farmacêuticos (CNAE iniciada em 211 e 212)<br>- Não informado GTIN (cEAN=Nulo).<br><br>**Observação 1:** Regra de validação se aplica por grupo de CNAE conforme vigência definida no ANEXO I.01.<br>**Observação 2:** Para produtos que não possuem GTIN, utilizar a informação de "SEM GTIN"~~ | ~~Obrig.~~ | ~~889~~ | ~~Rej.~~ | ~~Rejeição: Obrigatória a informação do GTIN para o produto [nItem:999]~~ |

> **Revogado/Descontinuado:** RVs 7I03-20 e 7I03-30 riscadas no original; a própria seção registra que foram excluídas na versão 1.20.
