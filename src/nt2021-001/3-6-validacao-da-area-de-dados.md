<!-- p.7 -->

# 3.6 Validação da área de Dados

**a) Validação de forma da área de dados**

Regras de validação idênticas aos demais Web Services, podendo gerar os erros:

- 516: “Rejeição: Falha Schema XML, inexiste a tag raiz esperada para a mensagem”
- 517: “Rejeição: Falha Schema XML, inexiste atributo versão na tag raiz da mensagem”
- 215: “Rejeição: Falha Schema XML”
- 587: “Rejeição: Usar somente o namespace padrão da NF-e”
- 588: “Rejeição: Não é permitida a presença de caracteres de edição no início/fim da mensagem ou entre as tags da mensagem”
- 404: “Rejeição: Uso de prefixo de namespace não permitido”
- 402: “Rejeição: XML da área de dados com codificação diferente de UTF-8”

**b) Extração dos eventos do lote e validação do Schema XML do evento**

Regras de validação idênticas aos demais Eventos, podendo gerar os erros:

- 491: “Rejeição: O tpEvento informado invalido”
- 492: “Rejeição: O verEvento informado invalido”
- 493: “Rejeição: Evento não atende o Schema XML específico”

**c) Validação do Certificado Digital de Assinatura**

Regras de validação idênticas aos demais Web Services, podendo gerar os erros:

<!-- p.8 -->

- 290: “Rejeição: Certificado Assinatura inválido”
- 291: “Rejeição: Certificado Assinatura Data Validade”
- 292: “Rejeição: Certificado Assinatura sem CNPJ/CPF”
- 293: “Rejeição: Certificado Assinatura – erro Cadeia de Certificação”
- 296: “Rejeição: Certificado Assinatura erro no acesso a LCR”
- 294: “Rejeição: Certificado Assinatura revogado”
- 295: “Rejeição: Certificado Assinatura difere ICP-Brasil”

**d) Validação da Assinatura Digital**

Regras de validação idênticas aos demais Web Services, podendo gerar os erros:

- 298: “Rejeição: Assinatura difere do padrão do Sistema”
- 297: “Rejeição: Assinatura difere do calculado”
- 213: “Rejeição: CNPJ-Base do Autor difere do CNPJ-Base do Certificado Digital”
- 227: “Rejeição: ”CPF do Autor difere do CPF do Certificado Digital”
