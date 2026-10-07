<!-- p.15 -->
# 4. Tabela de códigos de erros e descrições de mensagens de erros

| Código | Resultado do processamento da solicitação |
|---:|---|
| 108 | Serviço Paralisado Momentaneamente (curto prazo) |
| 109 | Serviço Paralisado sem Previsão |
| 137 | Nenhum documento localizado |
| 138 | Documento localizado |

| Código | Motivos de não atendimento da solicitação |
|---:|---|
| 214 | Rejeição: Tamanho da mensagem excedeu o limite estabelecido |
| 215 | Rejeição: Falha no schema XML |
| 217 | Rejeição: NF-e inexistente para a chave de acesso informada |
| 236 | Rejeição: Chave de Acesso com dígito verificador inválido |

<!-- p.16 -->
| 238 | Rejeição: Cabeçalho - Versão do arquivo XML superior a Versão vigente |
| 239 | Rejeição: Cabeçalho - Versão do arquivo XML não suportada |
| 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| 280 | Rejeição: Certificado Transmissor inválido |
| 281 | Rejeição: Certificado Transmissor Data Validade |
| 283 | Rejeição: Certificado Transmissor - erro Cadeia de Certificação |
| 284 | Rejeição: Certificado Transmissor revogado |
| 285 | Rejeição: Certificado Transmissor difere ICP-Brasil |
| 286 | Rejeição: Certificado Transmissor erro no acesso a LCR |
| 402 | Rejeição: XML da área de dados com codificação diferente de UTF-8 |
| 404 | Rejeição: Uso de prefixo de namespace não permitido |
| 472 | Rejeição: CPF consultado difere do CPF do Certificado Digital |
| 473 | Rejeição: Certificado Transmissor sem CNPJ ou CPF |
| 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| 589 | Rejeição: Número do NSU informado superior ao maior NSU do Ambiente Nacional |
| 593 | Rejeição: CNPJ-Base consultado difere do CNPJ-Base do Certificado Digital |
| 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| 615 | Rejeição: Chave de Acesso inválida (Ano menor que 06 ou Ano maior que Ano |
| 616 | Rejeição: Chave de Acesso inválida (Mês menor que 1 ou Mês maior que 12) |
| 617 | Rejeição: Chave de Acesso inválida (CNPJ zerado ou dígito inválido) |
| 618 | Rejeição: Chave de Acesso inválida (modelo diferente de 55) |
| 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| 632 | Rejeição: Solicitação fora de prazo, a NF-e não está mais disponível para download |
| 640 | Rejeição: CNPJ/CPF do interessado não possui permissão para consultar esta NF-e |
| 641 | Rejeição: NF-e indisponível para o emitente |
| 653 | Rejeição: NF-e Cancelada, arquivo indisponível para download |
| 654 | Rejeição: NF-e Denegada, arquivo indisponível para download |
| 656 | Rejeição: Consumo Indevido |
| 999 | Rejeição: Erro não catalogado |

**Obs.:** Recomendado a não utilização de caracteres especiais ou acentuação nos textos das mensagens de erro.
