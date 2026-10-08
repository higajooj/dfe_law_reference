<!-- p.14 -->
# 4.3 Alteração em Regras de Validação – RV (Anexo II do MOC)

Nesta NT, são melhor documentadas algumas regras de validação já existentes e alteradas regras de validação considerando que o Emitente da NF-e pode ser um CPF. Seguem as alterações em regras de validação:

## A. Dados da Nota Fiscal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| A03-10 | 55/65 | Chave de Acesso do campo Id difere da concatenação dos campos correspondentes.<br>Observação: No caso da Nota Fiscal Avulsa da Série 890-899, considerar o CNPJ da SEFAZ para a UF correspondente. Nos demais casos, considerar o CNPJ/CPF do emitente. | Obrig. | 502 | Rej. | Rejeição: Erro na Chave de Acesso - Campo Id não corresponde à concatenação dos campos correspondentes |

## B. Identificação da Nota Fiscal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| B25-50 | 55 | Se NF-e complementar (tag:finNFe=2):<br>– CNPJ/CPF emitente da NF Referenciada difere do CNPJ/CPF emitente desta NF-e (NF-e, NFC-e, NF modelo 1) | Obrig. | 269 | Rej. | Rejeição: CNPJ/CPF Emitente da NF Complementar difere do CNPJ/CPF da NF Referenciada |
| B26-10 | 55/65 | Se Processo de Emissão pelo Contribuinte (procEmi<>1 e 2):<br>– Série da NF-e difere da faixa de 0-889 ou 920-969 | Obrig. | 244 | Rej. | Rejeição: Processo de Emissão pelo Contribuinte incompatível com a Série da NF |
| B26-20 | 55/65 | Se Processo de Emissão pelo Fisco (procEmi=1 ou 2):<br>- Série difere da faixa 890-919 | Obrig. | 451 | Rej. | Rejeição: Processo de Emissão pelo Fisco incompatível com a Série da NF |
| B26-30 | 55/65 | Se Processo de Emissão pelo Fisco (procEmi=1 ou 2):<br>- Tipo de Emissão difere de Emissão Normal ou Emissão na SVC (tpEmis<>1, 6 e 7) | Obrig. | 370 | Rej. | Rejeição: Processo de emissão pelo Fisco com Tipo de Emissão inválido |
| B26-40 | 55/65 | Se Processo de Emissão pelo Fisco (procEmi=1 ou 2):<br>- Certificado de Transmissão sem o CNPJ da SEFAZ para a UF | Obrig. | 571 | Rej. | Rejeição: Processo de emissão pelo Fisco com Certificado de Transmissão incompatível |

## BA. Documento Fiscal Referenciado

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| BA02-30 | 55 | - Chave de Acesso referenciada com CNPJ/CPF inválido:<br>- Série = [0-909] e CNPJ zerado ou dígito inválido, ou<br>- Série = [910-969] e CPF zerado ou dígito inválido | Facult. | 552 | Rej. | Rejeição: Chave de Acesso referenciada com CNPJ/CPF inválido [nOcor:nnn] |

<!-- p.15 -->
## C. Identificação do Emitente

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| C02-10 | 55/65 | Se informado CNPJ do emitente:<br>– CNPJ com zeros, nulo ou DV inválido | Obrig. | 207 | Rej. | Rejeição: CNPJ do emitente inválido |
| C02-20 | 55/65 | Se informado CNPJ do emitente:<br>– CNPJ Base do Emitente difere do CNPJ Base da primeira NF-e do Lote recebido | Facult. | 560 | Rej. | Rejeição: CNPJ Base/CPF do emitente difere do CNPJ Base/CPF da primeira NF-e do lote recebido |
| C02-30 | 55/65 | Se informado CNPJ do Emitente:<br>- Série difere da faixa para emitente CNPJ: faixa 000-909 | Obrig. | 503 | Rej. | Rejeição: CNPJ do emitente com Série incompatível |
| C02a-04 | 65 | Se informado CPF do emitente:<br>– Se NFC-e (modelo 65) | Obrig. | 337 | Rej. | Rejeição: NFC-e para emitente pessoa física |
| C02a-08 | 55 | Se informado CPF do emitente:<br>– Se NF-e (modelo 55)<br>**Observação**: Regra de validação opcional a critério da UF. | Obrig. | 652 | Rej. | Rejeição: NF-e para emitente pessoa física |
| C02a-10 | 55 | Se informado CPF do Emitente:<br>– Série difere da faixa para emitente CPF: 890-899 e 910-969 | Obrig. | 495 | Rej. | Rejeição: CPF do Emitente com Série incompatível |
| C02a-14 | 55 | Se informado CPF do Emitente:<br>– Série difere da faixa para emitente CPF: 890-899 e 910-919<br>**Observação**: Regra de validação opcional a critério da UF. Permite a emissão de NF-e por pessoa física, somente no serviço de Nota Fiscal Avulsa no site da UF. | Obrig. | 407 | Rej. | Rejeição: CPF do Emitente somente no serviço de Nota Fiscal Avulsa no site do Fisco |
| C02a-20 | 55 | Se informado CPF do emitente:<br>– CPF com zeros, nulo, 111..., 222..., ..., ou DV inválido (NT 2012/003) | Obrig. | 401 | Rej. | Rejeição: CPF do emitente inválido |
| C02a-30 | 55 | Se informado CPF do emitente:<br>– CPF do Emitente difere do CPF da primeira NF-e do Lote recebido | Facult. | 560 | Rej. | Rejeição: CNPJ Base/CPF do emitente difere do CNPJ Base/CPF da primeira NF-e do lote recebido |
| C17-20 | 55/65 | Se IE diferente de “ISENTO”, validar a Inscrição Estadual:<br>- IE Emitente inválida para a UF: erro no tamanho, na composição da IE, ou no dígito verificador (\*2) | Obrig. | 209 | Rej. | Rejeição: IE do emitente inválida |
| C17-30 | 55/65 | Se IE informada com “ISENTO”:<br>- Se modelo = 65 ou Série difere da faixa 890-919 | Obrig. | 554 | Rej. | Rejeição: IE do Emitente informada como ISENTO indevidamente |

<!-- p.16 -->
## 1. Banco de Dados: Emitente

Eliminada Regra de Validação abaixo.

**[Descontinuado]**

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~1C17-50~~ | ~~55~~ | ~~Se IE do Emitente = "ISENTO" (unicamente para Nota Fiscal Avulsa):~~<br>~~– Se não for NF-e Avulsa~~ | ~~Obrig.~~ | ~~230~~ | ~~Rej.~~ | ~~Rejeição: IE do emitente não cadastrada~~ |

> **Revogado/Descontinuado:** RV 1C17-50 riscada na fonte; a própria página declara que a regra foi eliminada.

## 2.Banco de Dados: NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 2B08-10 | 55/65 | Modelo 55: Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número):<br>– NF-e já cadastrada, com diferença na Chave de Acesso (Código Numérico ou outras posições da Chave de Acesso). (NT 2011/004)<br>Modelo 65: Acesso BD NFE (Chave: Modelo, UF, CNPJ Emitente, Série, Número, Tipo de Emissão):<br>– NF-e já cadastrada, com diferença na Chave de Acesso (Código Numérico ou outras posições da Chave de Acesso). | Facult. | 539 | Rej. | Rejeição: Duplicidade de NF-e com diferença na Chave de Acesso [chNFe:99999999999999999999999999999999999999999999][nRec:999999999999999]<br>Observação: Na resposta assíncrona, concatenar na mensagem de erro o Número do Recibo do Lote (opcional). |
| 2B08-20 | 55/65 | Modelo 55: Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número):<br>– NF-e já cadastrada e não Cancelada/Denegada<br>Modelo 65: Acesso BD NFE (Chave: Modelo, UF, CNPJ Emitente, Série, Número, Tipo de Emissão):<br>– NF-e já cadastrada e não Cancelada/Denegada<br><br>Observação 1: Na resposta assíncrona, a SEFAZ pode devolver o nREC – Número do Recibo do Lote caso tenha condições.<br><br>Observação 2: A critério da UF, no caso do DigestValue ser igual a NF-e autorizada, poderá retornar o protocolo de Autorização. (NT 2018.005) | Obrig. | 204 | Rej. | Rejeição: Duplicidade de NF-e [nRec:999999999999999]<br>Observação: Na resposta assíncrona, concatenar na mensagem de erro o Número do Recibo do Lote (opcional). |
| <!-- p.17 -->2B08-30 | 55/65 | Modelo 55: Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número):<br>– NF-e já cadastrada e está Cancelada<br>Modelo 65: Acesso BD NFE (Chave: Modelo, UF, CNPJ Emitente, Série, Número, Tipo de Emissão):<br>– NF-e já cadastrada e está Cancelada. | Obrig. | 218 | Rej. | Rejeição: NF-e já está cancelada na base de dados da SEFAZ [nRec:999999999999999]<br>Observação: Na resposta assíncrona, concatenar na mensagem de erro o Número do Recibo do Lote (opcional). |
| 2B08-40 | 55/65 | Modelo 55: Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número):<br>– NF-e já cadastrada e está Denegada<br>Modelo 65: Acesso BD NFE (Chave: Modelo, UF, CNPJ Emitente, Série, Número, Tipo de Emissão):<br>– NF-e já cadastrada e está Denegada | Obrig. | 205 | Rej. | Rejeição: NF-e está denegada na base de dados da SEFAZ [nRec:999999999999999]<br>Observação: Na resposta assíncrona, concatenar na mensagem de erro o Número do Recibo do Lote (opcional). |
| 2B08-50 | 55/65 | Modelo 55: Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número):<br>- NF-e com mesmo número e série já transmitida e aguardando processamento (NT 2011/004)<br>Modelo 65: Acesso BD NFE (Chave: Modelo, UF, CNPJ Emitente, Série, Número, Tipo de Emissão):<br>– NF-e com mesmo número e série já transmitida e aguardando processamento (NT 2011/004)<br>Observação: Verificação necessária para algumas UF. | Facult. | 635 | Rej. | Rejeição: NF-e com mesmo número e série já transmitida e aguardando processamento |

## 2A.Banco de Dados: Evento EPEC

As Regras de Validação abaixo constam na NT 2014.001 e devem ser incluídas no MOC, com as alterações assinaladas.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 2AB08-10 | 55/65 | Acesso ao BD Evento EPEC (Chave: Modelo, UF, CNPJ Emitente, Série, Nro):<br>- Se existe EPEC:<br>&nbsp;&nbsp;- Se Tipo Emissão da NF-e <> 4 | Obrig | 692 | Rej | Rejeição: Existe EPEC registrado para esta Série e Número [Chave EPEC: xxxxxxxxxxx] |
| 2AB08-20 | 55/65 | - Chave de Acesso da NF-e diverge da Chave de Acesso do EPEC | Obrig | 691 | Rej | Rejeição: Chave de Acesso da NF-e diverge da Chave de Acesso do EPEC [Chave EPEC: xxxxxxxxx] |
| <!-- p.18 -->2AB08-30 | 55/65 | - Verificar divergência entre os dados da NF-e e os dados do EPEC<br>Observação 1: Conferir campos: IE Emitente, Data Emissão, Tipo Nota Fiscal (entrada / saída), UF destinatário, identificação destinatário (CNPJ/CPF/idEstrangeiro), IE Destinatário, dados de valor (Total, ICMS e ICMS-ST).<br>Observação 2: Concatenar na mensagem de erro o nome da tag com conteúdo divergente no EPEC (opcional). | Obrig | 467 | Rej | Rejeição: Dados da NF-e divergentes do EPEC [tag:xxxx] |
| 2AB08-40 | 55/65 | - Se não existe EPEC:<br>&nbsp;&nbsp;- Se Tipo Emissão da NF-e=4-EPEC e Data de Emissão NF-e > Data da desativação do DPEC (>= 01/04/2015) | Obrig | 468 | Rej | Rejeição: NF-e com Tipo Emissão = 4, sem EPEC correspondente |

## 3.Banco de Dados: Inutilização

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 3B08-100 | 55/65 | Acesso BD de Inutilização (Chave: Modelo, UF, CNPJ/CPF, Série, Número):<br>– Numeração da NF-e está inutilizada (NT 2011/004) | Obrig. | 206 | Rej. | Rejeição: NF-e já está inutilizada na Base de Dados da SEFAZ |

## 5.Banco de Dados: Destinatário

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 5E17-50 | 55 | Se informado CNPJ do Destinatário e indicador de IE Destinatário = "ISENTO" ou não informada (tag:indIEDest=2 ou 9):<br>– Destinatário possui IE ativa na UF | Facult. | 232 | Rej. | Rejeição: IE do destinatário não informada |
