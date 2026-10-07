<!-- p.10 -->
# 4.3. YA. Informações de Pagamento

<!-- p.11 -->
| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~YA02-50~~ | ~~55/65~~ | ~~Informado meio de pagamento tPag= 99 “Outros”<br>**Observação 1:** Regra válida a partir de 01/02/2021 para homologação e 01/09/2021 para produção<br>**Observação 2:** Regra de validação não se aplica para Nota Fiscal eletrônica Avulsa emitida por Produtor Primário~~ | ~~Obrig.~~ | ~~436~~ | ~~Rej.~~ | ~~Rejeição: Informado 99-Outros como meio de pagamento~~ |
| YA02-60 | 55/65 | Verificar se o código do meio de pagamento (tag: tPag) existe na Tabela de códigos dos meios de pagamentos publicada no Portal Nacional da Nota Fiscal Eletrônica<br>**Observação 1:** Regra válida a partir de 03/05/2021 para homologação e 01/09/2021 para produção | Obrig. | 436 | Rej. | Rejeição: Código do meio de pagamento inexistente. |
| YA02a-10 | 55/65 | Quando o código do meio de pagamento (tag: tPag) for preenchido com o código 99-outros, obrigatório o preenchimento da descrição do meio de pagamento (tag: xPag) | Obrig. | 441 | Rej. | Rejeição: Descrição do pagamento obrigatória para meio de pagamento 99-outros |
| YA02a-20 | 55/65 | Quando o código do meio de pagamento for diferente 99-outros (tag: tPag<>99), proibido o preenchimento da descrição do meio de pagamento (tag: xPag) | Obrig | 442 | XXX | Rejeição: Descrição do pagamento não permitida. |
| YA05-20 | 55/65 | Se informado o CNPJ da instituição de pagamento<br>• Verificar CNPJ com zeros, nulo ou DV inválido | Obrig. | 437 | Rej. | Rejeição: CNPJ da instituição de pagamento inválido |
| YA06-10 | 55/65 | Verificar se o Código da bandeira de cartão de crédito e/ou débito (campo: tBand) existe na tabela de códigos das operadoras de cartão de crédito e/ou débito publicada no Portal Nacional da Nota Fiscal Eletrônica<br>**Observação 1:** Regra válida a partir de 03/05/2021 para homologação e 01/09/2021 para produção | Obrig. | 443 | Rej. | Rejeição: Código da bandeira de cartão de crédito e/ou débito inexistente. |

> **Revogado/Descontinuado:** a regra YA02-50 está riscada em toda a linha no original.
