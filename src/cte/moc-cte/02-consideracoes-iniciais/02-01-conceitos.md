# 2.1. Conceitos

## 2.1.1 CTe (modelo 57) e CTe Outros Serviços (Modelo 67)

O Conhecimento de Transporte Eletrônico (CTe) é um documento de existência exclusivamente digital, emitido e armazenado eletronicamente com o intuito de documentar prestações de serviço de transporte, com validade jurídica garantida pela assinatura digital do emitente e pela Autorização de Uso fornecida pela administração tributária do domicílio do contribuinte.

O Conhecimento de Transporte Eletrônico (Modelo 57) é um documento fiscal eletrônico, instituído pelo AJUSTE SINIEF 09/07 (25/10/2007), que poderá ser utilizado para substituir um dos seguintes documentos fiscais:

<!-- p.08 -->

- Conhecimento de Transporte Rodoviário de Cargas, modelo 8;
- Conhecimento de Transporte Aquaviário de Cargas, modelo 9;
- Conhecimento Aéreo, modelo 10;
- Conhecimento de Transporte Ferroviário de Cargas, modelo 11;
- Nota Fiscal de Serviço de Transporte Ferroviário de Cargas, modelo 27;
- Nota Fiscal de Serviço de Transporte, modelo 7, quando utilizada em transporte de cargas.

O Conhecimento de Transporte Eletrônico também poderá ser utilizado como documento fiscal eletrônico no transporte dutoviário e nos transportes Multimodais.

O Conhecimento de Transporte para outros serviços (modelo 67), substitui a Nota Fiscal de Serviço de Transporte modelo 7 no que se refere aos serviços que não envolvem o transporte de cargas, a saber:

- Transporte de Pessoas;
- Transporte de Valores;
- Excesso de Bagagem.

## 2.1.2 GTVe (modelo 64)

A Guia de Transporte de Valores Eletrônica (GTVe) é um documento de existência exclusivamente digital, emitido e armazenado eletronicamente com o intuito de documentar prestações de serviço de transporte de valores, cuja validade jurídica é garantida pela assinatura digital do emitente e pela autorização de uso fornecida pela administração tributária do domicílio do contribuinte.

A GTVe (modelo 64) substitui a Guia de Transporte de Valores e o Extrato de Faturamento das empresas prestadoras de serviço de transporte de valores.

## 2.1.3 DACTE

O DACTE (Documento Auxiliar do Conhecimento de Transporte Eletrônico) é um documento auxiliar impresso em papel e sua especificação/modelos de leiaute encontram-se disponíveis no documento Anexo II: Manual de Orientações do Contribuinte – DACTE.

## 2.1.4 Chave de Acesso do CTe

A Chave de Acesso do CTe é composta pelos seguintes campos que se encontram dispersos no leiaute do CTe (vide Anexo I):

<!-- p.09 -->

| | Código da UF | AAMM da emissão | CNPJ do Emitente | Modelo (mod) | Série (serie) | Número do CTe | Forma de emissão do CTe | Código Numérico | DV |
|---|---|---|---|---|---|---|---|---|---|
| **Quantidade de caracteres** | 02 | 04 | 14 | 02 | 03 | 09 | 01 | 08 | 01 |

- cUF - Código da UF do emitente do Documento Fiscal
- **AAMM** - Ano e Mês de emissão do CTe
- **CNPJ**- CNPJ do emitente
- **mod** - Modelo do Documento Fiscal
- **serie** - Série do Documento Fiscal
- **nCT** - Número do Documento Fiscal
- **tpEmis** - forma de emissão do CTe
- cCT - Código Numérico que compõe a Chave de Acesso
- cDV - Dígito Verificador da Chave de Acesso

O Dígito Verificador (DV) irá garantir a integridade da chave de acesso, protegendo-a principalmente contra digitações erradas.

## 2.1.5 Chave Natural do CTe

A Chave Natural do CTe é composta pelos campos de UF, CNPJ/CPF do Emitente, Série e Número do CTe, além do modelo do documento fiscal eletrônico e sua forma de emissão. O Sistema de Autorização de Uso das SEFAZ valida a existência de um CTe previamente autorizado e rejeita novos pedidos de autorização para CTe com duplicidade da Chave Natural.

## 2.1.6 Regime Especial da Nota Fiscal Fácil (NFF)

O objetivo do Regime Especial Nota Fiscal Fácil (NFF) é tornar o processo de emissão de documentos fiscais eletrônicos, de vendas de mercadorias e prestação de serviços de transportes, mais simples para os contribuintes, deixando a complexidade trazida pela legislação fiscal sob a responsabilidade de um sistema centralizado, disponível no Portal Nacional da NFF, que a partir de sua “inteligência fiscal” possibilita uma emissão fácil e completamente intuitiva do documento.

Para atingir este ambicioso objetivo, as Secretarias de Fazenda dos Estados estão disponibilizando um aplicativo de geração da solicitação de emissão de documentos fiscais, denominado Aplicativo Emissor de Documentos Fiscais Eletrônicos (App NFF), cuja principal funcionalidade é coletar as informações necessárias e suficientes para esta finalidade.

<!-- p.10 -->

Uma das premissas do projeto NFF é a não rejeição de documentos fiscais originadas no aplicativo emissor, como a geração do XML do CTe será em ambiente controlado e ainda, transmitida e assinada pelo certificado digital da SEFAZ Virtual RS, existem garantias suficientes para os controles da emissão do CTe e sua respectiva autorização.

A chave de acesso de um CTe gerado pelo aplicativo emissor NFF possui as seguintes características:

- **cUF** - Código da UF do carregamento do DF-e
- **AAMM** - Ano e Mês de emissão do CTe
- **CPF**- CPF do emitente TAC preenchido com zeros a esquerda.
- **mod** - Modelo do Documento Fiscal (57)
- serie - Série do Documento Fiscal
  - **Gerado e controlado por dispositivo**
    - **1 dígito para identificar o Nro. Do dispositivo**
    - **2 dígitos para identificar o ano**
- nCT - Número do Documento Fiscal
  - **Gerado e controlado sequencialmente por dispositivo:**
    - **2 dígitos do mês da emissão**
    - **2 dígitos do dia da emissão**
    - **5 dígitos sequenciais para o número com reinício diário por dispositivo**
- tpEmis - forma de emissão do DF-e
  - **3 – Emissão pelo regime especial da NFF**
- cCT - Código Numérico que compõe a Chave de Acesso
  - **Randômico de 8 dígitos**
- cDV - Dígito Verificador da Chave de Acesso

## 2.1.7 Provedor de Assinatura e Autorização

O contribuinte emitente de Documento Fiscal Eletrônico, pessoa física ou Microempreendedor Individual - MEI, poderá utilizar os serviços de um Provedor de Assinatura e Autorização de Documentos Fiscais Eletrônicos - PAA, com a finalidade de realizar comunicações com os sistemas de autorização de uso de documentos fiscais eletrônicos providos pelas administrações tributárias, em nome do contribuinte.

O ambiente de autorização das Administrações Tributárias através do Portal Nacional dos Documentos Fiscais Eletrônicos irá permitir a vinculação entre contribuintes que se enquadrarem <!-- p.11 --> nesse perfil (devidamente identificados na plataforma gov.br do governo federal) com Provedores de Assinatura e Autorização previamente homologados pela Coordenação do ENCAT.

O contribuinte deverá utilizar ferramenta de emissão de documento fiscal fornecida pelo PAA, preferencialmente na internet e com identificação do usuário.

O PAA receberá o pedido de emissão no formato que seu software estiver construído e providenciará a geração do XML do documento fiscal eletrônico identificado com o preenchimento do grupo infPAA assinando o atributo Id do DFe com a chave criptográfica no padrão RSA fornecida pela administração tributária, além da assinatura digital do DFe com certificado ICP-Brasil do PAA.

O PAA deverá transmitir o XML do DFe para o ambiente de autorização onde será submetido a todas as regras de validação estabelecidas no MOC. O documento poderá ser autorizado ou rejeitado, devendo o PAA guardar o protocolo de autorização e atuar nos casos em que houver rejeição.

### 2.1.7.1 Assinatura RSA e Geração do DFe pelo PAA

A empresa usuária do serviço de Provedor de Assinatura e Autorização deverá solicitar o vínculo a um Provedor homologado no portal da SEFAZ Virtual RS, o resultado dessa solicitação entregará um par de chaves RSA (chave pública e chave privada) para o emitente.

Com a chave privada, a aplicação do PAA deverá assinar o conteúdo do atributo Id do CTe / Evento (convertido para array de bytes) com padrão de assinatura assimétrica RSA SHA1 originando um SignatureValue no formato base64.

A chave pública deverá ser informada no grupo RSAKeyValue no padrão XML Signature para chaves RSA.

Passos a executar:

1. Solicitar o vínculo com o Provedor de Assinatura e Autorização no portal DFe da SVRS com CPF do responsável pelo MEI autenticado na plataforma gov.br
2. Obter no portal o par de chaves RSA (chave privada e chave pública)
3. No software do PAA: utilizar a chave privada para assinar o conteúdo da tag Id do DFe (RSA SHA1 base64)
4. Informar a chave pública no padrão XML Signature no grupo RSAKeyValue
5. O PAA deverá assinar o DFe com certificado X509 padrão ICP-Brasil
6. PAA deverá transmitir o DFe para o serviço de autorização da SVRS

<!-- p.12 -->

A qualquer tempo o Emitente poderá solicitar o término do vínculo e utilização do PAA acessando o portal da SVRS. A administração tributária e o PAA também poderão comandar o encerramento do vínculo.

### 2.1.7.2 Estrutura das informações do PAA no XML do DFe

| Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **infPAA** | **G** | **infMDFe** | | **0 - 1** | | **Grupo de Informação do Provedor de Assinatura e Autorização** |
| CNPJPAA | E | infPAA | C | 1 - 1 | 14 | CNPJ do Provedor de Assinatura e Autorização |
| **PAASignature** | **G** | **infPAA** | | **1 - 1** | | **Assinatura RSA do Emitente para DFe gerados por PAA** |
| SignatureValue | E | PAASignature | B64 | 1 - 1 | | Assinatura digital padrão RSA. Converter o atributo Id do DFe para array de bytes e assinar com a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64. |
| **RSAKeyValue** | **G** | **PAASignature** | | **1 - 1** | | **Chave Pública no padrão XML RSA Key** |
| Modulus | E | RSAKeyValue | B64 | 1 - 1 | | |
| Exponent | E | RSAKeyValue | B64 | 1 - 1 | | |
