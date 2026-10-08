<!-- p.15 -->
# 5.1 Serviço de Autorização de NFC-e

Conforme citado anteriormente, o Emitente do EPEC deve obter a Autorização de Uso para a NFC-e correspondente ao EPEC autorizado.

Como os dados do EPEC são obtidos a partir da NFC-e que não conseguiu ser transmitida por problemas técnicos, quando for transmitida, esta NFC-e deverá possuir:

- mesma Chave de Acesso do EPEC autorizado;
- mesma IE do Emitente;
- mesma Data de Emissão;
- mesmos dados do destinatário (se houver);
- mesmos dados de valor total e valor do ICMS.

O serviço de autorização de uso da NFC-e deverá validar estas informações. Portanto, deverão ser alteradas as regras de validação da NFC-e, conforme segue:

| Regra de Validação | Erro |
|---|---|
| \*\*\* Acesso ao BD NFC-e (Chave: Modelo, CNPJ Emitente, Série e Número da NFC-e)<br>- NFC-e já cadastrada com diferença na Chave de Acesso (Regra de Validação já existente) | 539 - Rejeição: Duplicidade de NFC-e com diferença na Chave de Acesso [...] |
| - Se existe EPEC<br>- Verificar divergência dos dados do EPEC e da NFC-e (\*1) | 467 - Rejeição: Dados da NFC-e divergentes do EPEC |
| - Se não existe NFC-e para a mesma Chave de Acesso e Tipo Emissão = 4 – EPEC (\*2):<br>- Se não existe EPEC | 468 - Rejeição: NFC-e com Tipo Emissão = 4, sem EPEC correspondente |

(\*1) Conferir divergência: IE do Emitente, Data de Emissão, dados do destinatário (CPF ou outro, se houver), dados de valor (Valor Total e ICMS).  
(\*2) Esta validação somente poderá começar a ser a partir do momento da implantação da EPEC.

Caso a NFC-e com tipo de emissão 4 (EPEC) seja autorizada ou denegada, deverá ser assinalado o EPEC como conciliado, conforme o item de "Controle de EPEC Pendente de Conciliação" tratado anteriormente.
