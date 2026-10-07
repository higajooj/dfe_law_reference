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

# 5. Exemplos de requisições XML ao Web Service

**Exemplo 1: uso da tag “distNSU” em ambiente de homologação**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <soap:Body>
    <nfeDistDFeInteresse xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe">
      <nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe">
        <distDFeInt xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.01">
          <tpAmb>2</tpAmb>
          <cUFAutor>29</cUFAutor>
          <CNPJ>99999999999999</CNPJ>
          <distNSU>
            <ultNSU>000000000000001</ultNSU>
          </distNSU>
        </distDFeInt>
      </nfeDadosMsg>
    </nfeDistDFeInteresse>
  </soap:Body>
</soap:Envelope>
```

**Exemplo 2: uso da tag “consNSU” em ambiente de produção**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <soap:Body>
    <nfeDistDFeInteresse xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe">
      <nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe">
        <distDFeInt xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.01">
          <tpAmb>1</tpAmb>
          <cUFAutor>29</cUFAutor>
          <CNPJ>99999999999999</CNPJ>
          <consNSU>
            <NSU>000000000000001</ultNSU>
          </consNSU>
        </distDFeInt>
      </nfeDadosMsg>
    </nfeDistDFeInteresse>
  </soap:Body>
</soap:Envelope>
```

**Exemplo 3: uso da tag “consChNFe” em ambiente de produção**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <soap:Body>
    <nfeDistDFeInteresse xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe">
      <nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe">
        <distDFeInt xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.01">
          <tpAmb>1</tpAmb>
          <cUFAutor>29</cUFAutor>
          <CNPJ>99999999999999</CNPJ>
          <consChNFe>
            <chNFe>35220499999999999999550010020000001240556603</ultNSU>
          </consChNFe>
        </distDFeInt>
      </nfeDadosMsg>
    </nfeDistDFeInteresse>
  </soap:Body>
</soap:Envelope>
```

<!-- REVISAR p.16–17: nos Exemplos 2 e 3, os elementos `<NSU>` e `<chNFe>` aparecem fechados no original como `</ultNSU>`; preservado conforme impresso. -->

<!-- p.17 -->
# 6. Exemplos de retornos do Web Service

**Exemplo 1:** Neste caso, a consulta com a tag “distNSU” não teve sucesso, pois o Web Service retornou um dos códigos de erro possíveis (cStat=589) em ambiente de homologação.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <nfeDistDFeInteresseResponse xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe">
      <nfeDistDFeInteresseResult>
        <retDistDFeInt xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.01">
          <tpAmb>2</tpAmb>
          <verAplic>1.4.0</verAplic>
          <cStat>589</cStat>
          <xMotivo>Rejeicao: Numero do NSU informado superior ao maior NSU da base de dados do Ambiente Nacional</xMotivo>
          <dhResp>2022-04-04T11:54:49-03:00</dhResp>
          <ultNSU>000000000000000</ultNSU>
          <maxNSU>000000000000000</maxNSU>
        </retDistDFeInt>
      </nfeDistDFeInteresseResult>
    </nfeDistDFeInteresseResponse>
  </soap:Body>
</soap:Envelope>
```

<!-- p.18 -->
**Exemplo 2:** Neste caso, a consulta com a tag “distNSU” teve sucesso, mas não havia documentos a serem disponibilizados (cStat=137) em ambiente de homologação.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <nfeDistDFeInteresseResponse xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe">
      <nfeDistDFeInteresseResult>
        <retDistDFeInt xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.01">
          <tpAmb>2</tpAmb>
          <verAplic>1.4.0</verAplic>
          <cStat>137</cStat>
          <xMotivo>Nenhum documento localizado</xMotivo>
          <dhResp>2022-04-04T11:54:49-03:00</dhResp>
          <ultNSU>000000000000000</ultNSU>
          <maxNSU>000000000000000</maxNSU>
        </retDistDFeInt>
      </nfeDistDFeInteresseResult>
    </nfeDistDFeInteresseResponse>
  </soap:Body>
</soap:Envelope>
```

**Exemplo 3:** Neste caso, a consulta com a tag “distNSU” teve sucesso e retornou documento disponível (cStat=138) em ambiente de produção.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <nfeDistDFeInteresseResponse xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe">
      <nfeDistDFeInteresseResult>
        <retDistDFeInt xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.01">
          <tpAmb>1</tpAmb>
          <verAplic>1.4.0</verAplic>
          <cStat>138</cStat>
          <xMotivo>Documento(s) localizado(s)</xMotivo>
          <dhResp>2022-04-04T11:54:49-03:00</dhResp>
          <ultNSU>0000000000000200</ultNSU>
          <maxNSU>000000000000200</maxNSU>
          <loteDistDFInt>
            <docZip NSU="000000000000200" schema="resNFe_v1.00.xsd">H4sIAAAAAAAEAIVS22qDQBD9FfFdd9Z7ZLKQphosqQ3mQuibMZto8RJcifn8rjG9PZUdZg7DOWeGYbHlIg65cqvKWvg3cZyqedddfEL6vtd7U2/aMzEAKNm/LtdZzqtU/SYX/5O1ohZdWmdcVa68FWkzVakO8PD4o780bZeWp0JkaakX9Uk/tKQ+cZVhlssVmUkNoPLZnjcAGKBtDwVMzzIodak3AIO6HpJRg/N49cL+apDcm3iLm4qz99lKWSSzMJrPlEAJnqPNWyJRlATLCMnIwShgUkqpNLEAHBOJ7OAxD6qCGWCARkEDZwPg30MDU2YkIwG7SxwyiuRe8SqTN3H1iXQZMB6L8y4t2W73sXdtJ+6TUDhGveaLbc9DsXyyt1NpNZLkzIRnh675PZZOfMP2LfNn7IOD9aptOkaHy5meDS44FnWRjG3M1kU3HEmu9gWRjP+BfQI6BY33GAIAAA==</docZip>
          </loteDistDFInt>
        </retDistDFeInt>
      </nfeDistDFeInteresseResult>
    </nfeDistDFeInteresseResponse>
  </soap:Body>
</soap:Envelope>
```
