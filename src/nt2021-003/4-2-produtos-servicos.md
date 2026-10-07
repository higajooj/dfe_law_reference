<!-- p.11 -->
# 4.2. I. Produtos e Serviços

Embora as regras de validação que obrigam a informação dos campos cEAN e cEANTrib (I03-30, I12-60) fizessem inicialmente parte da etapa inicial implantada na versão 1.10 da NT 2017.001, foram posteriormente desativadas devido a problemas operacionais. Estas regras voltarão a ser ativadas na Etapa 1 do plano de implantação. As demais regras foram ativadas na etapa inicial.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I03-10 | 55/65 | Se informado GTIN (tag: cEAN) <> “SEM GTIN” ou Nulo):<br>- cEAN com dígito de controle inválido<br><br>**Observação**: Cálculo do dígito verificador em www.gs1.org/check-digit-calculator. (NT 2017.001) | Obrig. | 611 | Rej. | Rejeição: GTIN (cEAN) inválido [nItem:999] |
| I03-20 | 55/65 | Se informado GTIN (tag: cEAN) <> “SEM GTIN” ou Nulo):<br>- Prefixo GS1 inválido, conforme tabela de prefixos publicada no Portal da NF-e<br><br>**Observação**: Validação efetuada conforme prefixos e orientações constantes na “Tabela Prefixo GS1” publicada no Portal Nacional da NF-e. (NT 2017.001) | Obrig. | 882 | Rej. | Rejeição: GTIN (cEAN) com prefixo inválido [nItem:999] |
| I03-30 | 55/65 | GTIN (tag: cEAN) em branco, campo sem informação.<br><br>**Observação** 1: Para produtos que não possuem GTIN, utilizar a informação de "SEM GTIN" ~~(NT 2017.001)~~ (NT 2021.003, Etapa 1) | Obrig. | 883 | Rej. | Rejeição: GTIN (cEAN) sem informação [nItem: 999] |
| I12-10 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) <> “SEM GTIN” ou Nulo):<br>- cEANTrib com dígito de controle inválido<br><br>**Observação**: Cálculo do dígito verificador em www.gs1.org/check-digit-calculator (NT 2017.001) | Obrig. | 612 | Rej. | Rejeição: GTIN da unidade tributável (cEANTrib) inválido [nItem:999] |
| I12-20 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) <> “SEM GTIN” ou Nulo):<br>- Prefixo GS1 inválido, conforme tabela de prefixos publicada no Portal da NF-e<br><br>**Observação**: Validação efetuada conforme prefixos e orientações constantes na “Tabela Prefixo GS1” publicada no Portal Nacional da NF-e. (NT 2017.001) | Obrig. | 884 | Rej. | Rejeição: GTIN da unidade tributável (cEANTrib) com prefixo inválido [nItem:999] |
| I12-30 | 55/65 | Informado GTIN específico (cEAN<>“SEM GTIN” ou Nulo) e informado GTIN da unidade tributável igual a "SEM GTIN" ou Nulo (cEANTrib=“SEM GTIN” ou Nulo) (NT 2017.001) | Obrig. | 885 | Rej. | Rejeição: GTIN informado, mas não informado o GTIN da unidade tributável [nItem:999] |
| I12-40 | 55/65 | Informado GTIN da unidade tributável específico (cEANTrib<>“SEM GTIN” ou Nulo) e informado GTIN igual a "SEM GTIN" ou Nulo (cEAN=“SEM GTIN” ou Nulo) (NT 2017.001) | Obrig. | 886 | Rej. | Rejeição: GTIN da unidade tributável informado, mas não informado o GTIN [nItem:999] |
| I12-60 | 55/65 | GTIN da unidade tributável (tag: cEANTrib) em branco, campo sem informação.<br><br>**Observação:** Para produtos que não possuem GTIN da unidade tributável, utilizar a informação de "SEM GTIN". ~~(NT 2017.001)~~ (NT 2021.003, Etapa 1) | Obrig. | 888 | Rej. | Rejeição: GTIN da unidade tributável (cEANTrib) sem informação [nItem:999] |

> **Revogado/Descontinuado:** trecho “(NT 2017.001)” riscado no original nas observações das regras I03-30 e I12-60.
