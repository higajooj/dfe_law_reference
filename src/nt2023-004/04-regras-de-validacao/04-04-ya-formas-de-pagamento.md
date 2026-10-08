<!-- p.14 -->
# 4.4. YA. Formas de Pagamento

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| YA03a-10 | 55/65 | Se informada a Data de Pagamento (tag:dPag, id:YA03a)<br>- Data de Pagamento posterior a data de recebimento do XLM | Obrig | 657 | Rej. | Rejeição: Data de Pagamento inválida [nOcor:999] |
| YA03c-10 | 55/65 | Se informado CNPJPag (campo: YA03c)<br>- CNPJ com zeros ou dígito inválido | Obrig. | 961 | Rej. | Rejeição: CNPJ transacional do pagamento inválido [nOcor:999] |
| YA04-10 | 65 | Se informado o grupo de pagamentos (tag:pag):<br>- Se o Pagamento for por cartão (tag:tPag=03, 04) ou PIX (tpag=17), deve ser informado o grupo de cartões (tag:card)<br>**Observação**: Implementação por padrão, opcional a critério da UF.<br>**Exceção**: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. | Facult. | 391 | Rej. | Rejeição: Não informados os dados do cartão de crédito / débito nas Formas de Pagamento da Nota Fiscal [nOcor:999] |
| YA04-20 | 55/65 | Se Meio de Pagamento (tag: tPag) diferente de 03, 04, 10, 11, 12, 13, 15, 17 e 18:<br>- Não pode preencher o grupo de cartões (tag: card) | Obrig. | 963 | Rej. | Rejeição: Tipo de pagamento não aceita o grupo de cartões ou boletos. [nOcor:999] |
| YA07a | 55/65 | Se informado CNPJReceb (campo: YA07a)<br>- CNPJ com zeros ou dígito inválido | Obrig. | 796 | Rej. | Rejeição: CNPJ recebedor do pagamento inválido [nOcor:999] |
