# 2.2 Uso de Variáveis no SOAP Header (item 3.4 do MOC)

No modelo atual de comunicação com as empresas, está previsto o uso de variáveis no SOAP Header, conforme segue:

```xml
<soap12:Header>
  <nfeCabecMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeRecepcao">
    <versaoDados>string</versaoDados>
    <cUF>string</cUF>
  </nfeCabecMsg>
</soap12:Header>
```

A criação das variáveis de “Código da UF” e “Versão dos Dados” no SOAP Header (ou “Área de Cabeçalho”) foi uma decisão inicial do Projeto NF-e, quando ainda não se tinha muitas informações sobre a capacidade de processamentos dos Web Services pelas SEFAZ. Na época, esta decisão foi tomada para conseguir rejeitar previamente as mensagens enviadas para um ambiente de autorização diferente do previsto, sem precisar “abrir” os dados da mensagem.

As variáveis do SOAP Header (“cabeçalho”) constam também na mensagem enviado pela Empresa e observado que, a cada troca de versão do leiaute XML, este controle tem atrapalhado, já que as empresas montam corretamente a mensagem, mas algumas vezes esquecem-se de alterar os dados do cabeçalho.

Nesta nova versão do leiaute, será eliminado o uso de variáveis no SOAP Header (eliminada a “Área de Cabeçalho”) na requisição enviada para todos os Web Services previstos no Sistema NFE.

Portanto, serão eliminadas também as regras de validação relacionadas com o controle da chamada ao Web Service, que usam estas variáveis do SOAP Header. Por exemplo:

### 4.1.7 Validação das informações de controle da chamada ao Web Service

| # | Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| C01 | Elemento nfeCabecMsg inexistente no SOAP Header | Facult. | 242 | Rej. |
| C02 | Campo cUF inexistente no elemento nfeCabecMsg do SOAP Header | Obrig. | 409 | Rej. |
| C03 | Verifica se a UF informada no campo cUF é atendida pelo Web Service | Obrig. | 410 | Rej. |
| C04 | Campo versaoDados inexistente no elemento nfeCabecMsg do SOAP Header | Obrig. | 411 | Rej. |

<!-- p.16 -->
| # | Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| C04a | Envio de Lote de NF-e na versão 3.xx para o WS “nfeRecepcao”: “Rejeição: Mensagem de Lote versão 3.xx. Enviar para o Web Service nfeAutorizacao” | Obrig. | 700 | Rej. |
| C05 | Versão dos Dados informada é superior à versão vigente | Facult. | 238 | Rej. |
| C06 | Envio de Lote de NF-e na versão 2.xx para o WS “nfeAutorizacao”: “Rejeição: Cabeçalho - Versão do arquivo XML não suportada” | Obrig. | 239 | Rej. |

A informação da versão do leiaute do lote e a UF de origem do emissor das NF-e constam no elemento nfeCabecMsg do SOAP Header (para maiores detalhes vide item 3.4.1).

A aplicação deverá validar os campos cUF e versaoDados, rejeitando o lote recebido em caso de informações inexistentes ou inválidas.

O campo versaoDados contém a versão do Schema XML da mensagem contida na área de dados que deve ser utilizado pelo Servidor de Processamento da NF-e na validação do Schema XML do lote. Cabe ressaltar que um lote deve conter somente NF-e da mesma versão.

Os itens no MOC 6.0, relativos a estas validações, que serão eliminados:

- 4.1.7 Validação das informações de controle da chamada ao Web Service (NfeAutorizacao);
- 4.2.6 Validação das informações de controle da chamada ao Web Service (NfeRetAutorizacao);
- 4.3.6 Validação das informações de controle da chamada ao Web Service (NfeRecepcaoEvento - Cancelamento);
- 4.4.6 Validação das informações de controle da chamada ao Web Service (NfeInutilizacao);
- 4.5.6 Validação das informações de controle da chamada ao Web Service (NfeConsulta);
- 4.6.6 Validação das informações de controle da chamada ao Web Service (CadConsultaCadastro);
- 4.7.6 Validação das informações de controle da chamada ao Web Service (NfeStatusServico);
- 4.8.6 Validação das informações de controle da chamada ao Web Service (RecepcaoEvento – Carta de Correção);
- 4.9.6 Validação das informações de controle da chamada ao Web Service (RecepcaoEvento – Manifestação do Destinatário);
- 4.10.7 Validação das informações de controle da chamada ao Web Service (RecepcaoEvento - EPEC);

Nota: Os webservices abaixo foram desativados, conforme definido na NT2014.002, v1.02b:

- 4.11.6 Validação das informações de controle da chamada ao Web Service (NfeConsultaDest);
- 4.12.6 Validação das informações de controle da chamada ao Web Service (NfeDownloadNF);
