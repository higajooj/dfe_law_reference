<!-- p.44 -->
# 7.7. Validação da área de Dados

**a) Validação de forma da área de dados**

Regras de validação idênticas aos demais Web Services, podendo gerar os erros:

- 516: "Rejeição: Falha Schema XML, inexiste a tag raiz esperada para a mensagem"
- 517: "Rejeição: Falha Schema XML, inexiste atributo versão na tag raiz da mensagem"
- 545: "Rejeição: Falha no schema XML – versão informada na versaoDados do SOAP Header diverge da versão da mensagem”
- 215: "Rejeição: Falha Schema XML"
- 587: "Rejeição: Usar somente o namespace padrão da NF-e"
- 588: "Rejeição: Não é permitida a presença de caracteres de edição no início/fim da mensagem ou entre as tags da mensagem"
- 404: "Rejeição: Uso de prefixo de namespace não permitido"
- 402: "Rejeição: XML da área de dados com codificação diferente de UTF-8"

**b) Extração dos eventos do lote e validação do Schema XML do evento**

Regras de validação idênticas aos demais Eventos, podendo gerar os erros:

- 491: "Rejeição: O tpEvento informado invalido"
- 492: “Rejeição: O verEvento informado invalido”
- 493: “Rejeição: Evento não atende o Schema XML específico”

**c) Validação do Certificado Digital de Assinatura**

Regras de validação idênticas aos demais Web Services, podendo gerar os erros:

- 290: "Rejeição: Certificado Assinatura inválido"
- 291: “Rejeição: Certificado Assinatura Data Validade”
- 292: “Rejeição: Certificado Assinatura sem CNPJ”
- 293: “Rejeição: Certificado Assinatura - erro Cadeia de Certificação”
- 296: “Rejeição: Certificado Assinatura erro no acesso a LCR”
- 294: “Rejeição: Certificado Assinatura revogado”
- 295: “Rejeição: Certificado Assinatura difere ICP-Brasil”

**d) Validação da Assinatura Digital**

Regras de validação idênticas aos demais Web Services, podendo gerar os erros:

- 298: “Rejeição: Assinatura difere do padrão do Sistema”
- 297: “Rejeição: Assinatura difere do calculado”
- 213: “Rejeição: Assinatura difere do padrão do Sistema”

**e) Validação das regras de negócio do evento Cancelamento de Pedido de Prorrogação**

**Validação do Registro de Eventos – Regras de Negócios – parte Geral**

| # | Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| P09 | Tipo do ambiente difere do ambiente do Web Service (*1) | Obrig. | 252 | Rej. |
| P08 | Código do órgão de recepção do Evento da UF diverge da UF Autorizadora (*1) | Obrig. | 250 | Rej. |
| P10 | CNPJ do autor inválido (zeros, nulo oiu DV inválido) (*1) | Obrig. | 489 | Rej. |
| P11 | Validação da Chave de Acesso: - Dígito verificador inválido (*1) | Obrig. | 236 | Rej. |
| P11 | Chave de Acesso inválida (Código UF inválido) (*1) | Obrig. | 614 | Rej. |
| P11 | Chave de Acesso inválida (Ano < 06 ou Ano maior que Ano corrente) (*1) | Obrig. | 615 | Rej. |
| P11 | Chave de Acesso inválida (Mês = 0 ou Mês > 12) (*1) | Obrig. | 616 | Rej. |
| P10/P11 | Chave de Acesso inválida (CNPJ zerado ou dígito inválido) (*1) | Obrig. | 617 | Rej. |
| P11 | Chave de Acesso inválida (modelo diferente de 55) (*1) | Obrig. | 618 | Rej. |
| P11 | Chave de Acesso inválida (número NF = 0) (*1) | Obrig. | 619 | Rej. |
| P11 | UF da Chave de Acesso diverge da UF Autorizadora (*1) | Obrig. | 249 | Rej. |
| P07/P14 | Validar se atributo Id corresponde à concatenação dos campos evento (“ID” + tpEvento + chNFe + nSeqEvento) (*1) | Obrig. | 572 | Rej. |
| P10/P11 | Acesso BD NFE (Chave: CNPJ Emitente, Modelo, Série e Nro): - Chave Acesso inexistente para o tpEvento que exige a existência da NF-e (*1). Obs.: Caso exista uma NF-e no banco de dados com Chave de Acesso divergente, opcionalmente, deve-se concatenar a Chave de Acesso existente na descrição do erro, caso o CNPJ do Autor do evento seja o mesmo CNPJ da Chave de Acesso. (*1) | Obrig. | 494 | Rej. |
| P11/P14 | Acesso BD de Eventos: - Verificar duplicidade do evento (tpEvento + chNFe + nSeqEvento) (*1) | Obrig. | 573 | Rej. |
| P10/P11 | Se evento do emissor verificar se CNPJ do Autor diferente do CNPJ da Chave de Acesso da NF-e (*1) | Obrig. | 574 | Rej. |
| P12 | Data do evento não pode ser menor que a data de autorização para o evento de Candelamento de Pedido de Prorrogação | Obrig. | 641 | Rej. |
| P11 | Verificar se a NF-e está autorizada (não pode estar cancelada nem denegada) | Obrig. | 580 | Rej. |
| P12 | Data do evento não pode ser menor que a data de emissão da NF-e, se existir | Obrig. | 577 | Rej. |
| P12 | Data do evento não pode ser maior que a data de processamento (aceitar uma tolerância de até 5 minutos) | Obrig. | 578 | Rej. |
| P12 | Data do evento não pode ser menor que a data de autorização para NF-e não emitida em contingência se a NF-e existir | Obrig. | 579 | Rej. |
| P19 | Verificar se o Pedido de Prorrogação (P19 - idPedidoCancelado) é válido | Obrig. | 640 | Rej. |
| P13/P19 | Verificar se o tpEvento (P13) do Cancelamento corresponde ao tpEvento (P13) do Pedido de Prorrogação a ser cancelado. | Obrig. | 636 | Rej. |
| P13/P14 | Verificar o sequencial do evento (P14 - nSeqEvento) é um valor válido (último + 1) conforme tipo de evento (P13/P14) | Obrig. | 594 | Rej. |
| P19/P20 | Verificar se o protocolo do evento a ser cancelado corresponde ao nProt (P20) | Obrig. | 222 | Rej. |
| P10 | Acesso Cadastro Contribuinte: - Verificar Emitente não autorizado a emitir NF-e | Obrig. | 203 | Rej. |
| P10 | Verificar Situação Fiscal irregular do Emitente | Obrig. | 240 | Rej. |

Nota: (*1) Validações genéricas do Registro de Evento.
