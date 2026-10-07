# 4.1 Etapa 01

As regras de validação a seguir já foram implantadas conforme definido na versão 1.10 desta NT.

## I. Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I03-10 | 55/65 | Se informado GTIN (tag: cEAN) <> “SEM GTIN” ou Nulo):<br>– cEAN com dígito de controle inválido<br><br>**Observação:** Cálculo do dígito verificador em [www.gs1.org/check-digit-calculator](http://www.gs1.org/check-digit-calculator). | Obrig. | 611 | Rej. | Rejeição: GTIN (cEAN) inválido [nItem:999] |
| I03-20 | 55/65 | Se informado GTIN (tag: cEAN) <> “SEM GTIN” ou Nulo):<br>- Prefixo GS1 inválido, conforme tabela de prefixos publicada no Portal da NF-e<br><br>**Observação:** Validação efetuada conforme prefixos e orientações constantes na “Tabela Prefixo GS1” publicada no Portal Nacional da NF-e. | Obrig. | 882 | Rej. | Rejeição: GTIN (cEAN) com prefixo inválido [nItem:999] |
| I12-10 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) <> “SEM GTIN” ou Nulo):<br>– cEANTrib com dígito de controle inválido<br><br>**Observação:** Cálculo do dígito verificador em [www.gs1.org/check-digit-calculator](http://www.gs1.org/check-digit-calculator). | Obrig. | 612 | Rej. | Rejeição: GTIN da unidade tributável (cEANTrib) inválido [nItem:999] |
| <!-- p.11 -->I12-20 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) <> “SEM GTIN” ou Nulo):<br>- Prefixo GS1 inválido, conforme tabela de prefixos publicada no Portal da NF-e<br><br>**Observação:** Validação efetuada conforme prefixos e orientações constantes na “Tabela Prefixo GS1” publicada no Portal Nacional da NF-e. | Obrig. | 884 | Rej. | Rejeição: GTIN da unidade tributável (cEANTrib) com prefixo inválido [nItem:999] |
| I12-30 | 55/65 | Informado GTIN específico (cEAN<>“SEM GTIN” ou Nulo) e informado GTIN da unidade tributável igual a "SEM GTIN" ou Nulo (cEANTrib=“SEM GTIN” ou Nulo) | Obrig. | 885 | Rej. | Rejeição: GTIN informado, mas não informado o GTIN da unidade tributável [nItem:999] |
| I12-40 | 55/65 | Informado GTIN da unidade tributável específico (cEANTrib<>“SEM GTIN” ou Nulo) e informado GTIN igual a "SEM GTIN" ou Nulo (cEAN=“SEM GTIN” ou Nulo) | Obrig. | 886 | Rej. | Rejeição: GTIN da unidade tributável informado, mas não informado o GTIN [nItem:999] |
