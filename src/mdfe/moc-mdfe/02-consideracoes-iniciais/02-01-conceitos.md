# 2.1 Conceitos

## 2.1.1 MDFe (modelo 58)

Manifesto Eletrônico de Documentos Fiscais (MDFe) é o documento emitido e armazenado eletronicamente, de existência apenas digital, para vincular os documentos fiscais utilizados na operação e/ou prestação, à unidade de carga utilizada no transporte, cuja validade jurídica é garantida pela assinatura digital do emitente e autorização de uso pela administração tributária da unidade federada do contribuinte.

O MDFe deverá ser emitido por empresas prestadoras de serviço de transporte para prestações com conhecimento de transporte ou pelas demais empresas nas operações, cujo transporte seja realizado em veículos próprios, arrendados, ou mediante contratação de transportador autônomo de cargas.

A finalidade do MDFe é agilizar o registro em lote de documentos fiscais em trânsito e identificar a unidade de carga utilizada e demais características do transporte.

Autorização de uso do MDFe implicará em registro posterior dos eventos, nos documentos fiscais eletrônicos nele relacionados.

<!-- p.8 -->

## 2.1.2 DAMDFE

O DAMDFE (Documento Auxiliar do Manifesto Eletrônico de Documentos Fiscais) é um documento auxiliar impresso em papel e sua especificação/modelos de leiaute encontram-se disponíveis no documento Anexo II: Manual de Orientações do Contribuinte – DAMDFE.

## 2.1.3 Chave de Acesso do MDFe

A Chave de Acesso do MDFe é composta pelos seguintes campos que se encontram dispersos no leiaute do MDFe (vide Anexo I):

| Código da UF do Emitente | AAMM da emissão | CNPJ/CPF do Emitente | Modelo (mod) | Série (serie) | Número do MDFe | Forma de emissão | Código Numérico | DV |
|---|---|---|---|---|---|---|---|---|
| 02 | 04 | 14 | 02 | 03 | 09 | 01 | 08 | 01 |

Quantidade de caracteres: 02, 04, 14, 02, 03, 09, 01, 08, 01.

- cUF – Código da UF do emitente do Documento Fiscal
- AAMM – Ano e Mês de emissão do MDFe
- CNPJ/CPF – CNPJ ou CPF do emitente
- mod – Modelo do Documento Fiscal
- serie – Série do Documento Fiscal
- nMDFe – Número do Documento Fiscal
- tpEmis – forma de emissão do MDFe
- cMDFe – Código Numérico que compõe a Chave de Acesso
- cDV – Dígito Verificador da Chave de Acesso

O Dígito Verificador (DV) irá garantir a integridade da chave de acesso, protegendo-a principalmente contra digitações erradas.

## 2.1.4 Chave Natural do MDFe

A Chave Natural do MDFe é composta pelos campos de UF, CNPJ/CPF do Emitente, Série e Número do MDFe, além do modelo do documento fiscal eletrônico e sua forma de emissão. O Sistema de Autorização de Uso do Ambiente Nacional Autorizador das SEFAZ valida a existência de um MDFe previamente autorizado e rejeita novos pedidos de autorização para MDFe com duplicidade da Chave Natural.

<!-- p.9 -->

## 2.1.5 Emitentes do MDFe

O emitente do MDFe pode ser uma empresa transportadora de cargas emitente de Conhecimento de Transportes com CNPJ e inscrição estadual, pode ser um Transportador Autônomo de Cargas com registro na ANTT (usuário da Nota Fiscal Fácil – NFF) ou um emitente de NFe, na hipótese de transporte de carga própria, podendo este ser uma pessoa jurídica ou pessoa física com inscrição estadual.

No caso do Emitente Pessoa Jurídica:

- O CNPJ deverá constar na Chave de Acesso, precedido por zeros, completando 14 posições quando necessário;
- Série em faixa distinta da reservada à pessoa física;
- O MDFe deverá ser assinado com o Certificado Digital do Emitente que contenha o CNPJ.

No caso do Emitente Pessoa Física:

- O CPF deverá constar na Chave de Acesso, precedido por zeros, completando 14 posições;
- Será reservada uma faixa do campo Série do MDFe (920-969), como forma de identificação da Emitente pessoa física (CPF) com inscrição estadual para emissores de carga própria;
- Tipo de emissão igual a 3 sem reserva de séria para autônomos optantes pelo regime especial da Nota Fiscal Fácil;
- O MDFe deverá ser assinado com o Certificado Digital do Emitente contendo seu CPF; ou pelo Certificado da SEFAZ Virtual RS, na hipótese de transportador autônomo usuário da Nota Fiscal Fácil.

## 2.1.6 Série reservada

O MDFe de carga própria, emitido por pessoa física com inscrição deverá ser autorizado utilizando uma faixa especial de série reservada para esta finalidade entre 920 e 969. Desta forma, as regras de validação considerarão emissão por CPF quando na chave de acesso for identificada utilização destas séries.

<!-- p.10 -->

## 2.1.7 Regime Especial da Nota Fiscal Fácil (NFF)

O objetivo do Regime Especial Nota Fiscal Fácil (NFF) é tornar o processo de emissão de documentos fiscais eletrônicos, de vendas de mercadorias e prestação de serviços de transportes, mais simples para os contribuintes, deixando a complexidade trazida pela legislação fiscal sob a responsabilidade de um sistema centralizado, disponível no Portal Nacional da NFF, que a partir de sua "inteligência fiscal" possibilita uma emissão fácil e completamente intuitiva do documento.

Para atingir este ambicioso objetivo, as Secretarias de Fazenda dos Estados estão disponibilizando um aplicativo de geração da solicitação de emissão de documentos fiscais, denominado Aplicativo Emissor de Documentos Fiscais Eletrônicos (App NFF), cuja principal funcionalidade é coletar as informações necessárias e suficientes para esta finalidade.

Uma das premissas do projeto NFF é a não rejeição de documentos fiscais originadas no aplicativo emissor, como a geração do XML do MDFe será em ambiente controlado e ainda, transmitida e assinada pelo certificado digital da SEFAZ Virtual RS, existem garantias suficientes para os controles da emissão do MDFe e sua respectiva autorização.

A chave de acesso de um MDFe gerado pelo aplicativo emissor NFF possui as seguintes características:

- cUF – Código da UF do carregamento do DF-e
- AAMM – Ano e Mês de emissão do MDFe
- CPF – CPF do Transportador Autônomo de Cargas preenchido com zeros a esquerda.
- mod – Modelo do Documento Fiscal (58)
- serie – Série do Documento Fiscal
- nMDF – Número do Documento Fiscal
  - Gerado e controlado por dispositivo emissor:
    - 1 dígito para identificar o Nro. do dispositivo
    - 2 dígitos para identificar o ano
    - 2 dígitos do mês da emissão
    - 2 dígitos do dia da emissão
    - 5 dígitos sequenciais para o número com reinício diário por dispositivo
- tpEmis – forma de emissão do DF-e
  - 3 – Emissão pelo regime especial da NFF
- cCT – Código Numérico que compõe a Chave de Acesso
  - Randômico de 8 dígitos
- cDV – Dígito Verificador da Chave de Acesso

<!-- p.11 -->

## 2.1.8 Encerramento do MDFe

Entende-se como encerramento do MDFe o ato de informar ao fisco, através de Web Service de registro de eventos o fim de sua vigência, que poderá ocorrer pelo término do trajeto acobertado ou pela alteração das informações do MDFe através da emissão de um novo.

O emitente deverá encerrar o MDFe no final do percurso. Enquanto houver MDFe pendente de encerramento, regras de validação poderão impedir a emissão de novos MDFe.

Se no decorrer do transporte houver qualquer alteração nas informações do MDFe (veículos, carga, documentação etc.), este deverá ser encerrado e ser emitido um novo MDFe com a nova configuração.

## 2.1.9 MDFe com carregamento posterior

É permitida a emissão do MDFe quando, por ocasião do início da viagem, o emitente do MDFe de carga própria não tiver acesso aos documentos fiscais transportados e tratar-se de operação interna na UF.

Nesses casos, o emitente poderá optar pela modalidade de emissão do MDFe com indicação de tag específica do XML, intitulado indicador de carregamento posterior. Uma vez identificada essa modalidade de emissão, a inclusão de documentos fiscais será permitida em momento posterior à emissão do MDFe, por meio do evento de inclusão de documento fiscal que deverá ser autorizado.

Assim, os documentos passarão a compor a carga à medida em que ocorrerem os carregamentos no percurso da viagem.

## 2.1.10 Provedor de Assinatura e Autorização

O contribuinte emitente de Documento Fiscal Eletrônico, pessoa física ou Microempreendedor Individual - MEI, poderá utilizar os serviços de um Provedor de Assinatura e Autorização de Documentos Fiscais Eletrônicos - PAA, com a finalidade de realizar comunicações com os sistemas de autorização de uso de documentos fiscais eletrônicos providos pelas administrações tributárias, em nome do contribuinte.

O ambiente de autorização das Administrações Tributárias através do Portal Nacional dos Documentos Fiscais Eletrônicos irá permitir a vinculação entre contribuintes que se enquadrarem nesse perfil (devidamente identificados na plataforma gov.br do governo federal) com Provedores de Assinatura e Autorização previamente homologados pela Coordenação do ENCAT.

<!-- p.12 -->

O contribuinte deverá utilizar ferramenta de emissão de documento fiscal fornecida pelo PAA, preferencialmente na internet e com identificação do usuário.

O PAA receberá o pedido de emissão no formato que seu software estiver construído e providenciará a geração do XML do documento fiscal eletrônico identificado com o preenchimento do grupo infPAA assinando o atributo Id do DFe com a chave criptográfica no padrão RSA fornecida pela administração tributária, além da assinatura digital do DFe com certificado ICP-Brasil do PAA.

O PAA deverá transmitir o XML do DFe para o ambiente de autorização onde será submetido a todas as regras de validação estabelecidas no MOC. O documento poderá ser autorizado ou rejeitado, devendo o PAA guardar o protocolo de autorização e atuar nos casos em que houver rejeição.

### 2.1.10.1 Assinatura RSA e Geração do DFe pelo PAA

A empresa usuária do serviço de Provedor de Assinatura e Autorização deverá solicitar o vínculo a um Provedor homologado no portal da SEFAZ Virtual RS, o resultado dessa solicitação entregará um par de chaves RSA (chave pública e chave privada) para o emitente.

Com a chave privada, a aplicação do PAA deverá assinar o conteúdo do atributo Id do MDFe / Evento (convertido para array de bytes) com padrão de assinatura assimétrica RSA SHA1 originando um SignatureValue no formato base64.

A chave pública deverá ser informada no grupo RSAKeyValue no padrão XML Signature para chaves RSA.

Passos a executar:

1. Solicitar o vínculo com o Provedor de Assinatura e Autorização no portal DFe da SVRS com CPF do responsável pelo MEI autenticado na plataforma gov.br
2. Obter no portal o par de chaves RSA (chave privada e chave pública)
3. No software do PAA: utilizar a chave privada para assinar o conteúdo da tag Id do DFe (RSA SHA1 base64)
4. Informar a chave pública no padrão XML Signature no grupo RSAKeyValue
5. O PAA deverá assinar o DFe com certificado X509 padrão ICP-Brasil
6. PAA deverá transmitir o DFe para o serviço de autorização da SVRS

A qualquer tempo o Emitente poderá solicitar o término do vínculo e utilização do PAA acessando o portal da SVRS. A administração tributária e o PAA também poderão comandar o encerramento do vínculo.

### 2.1.10.2 Estrutura das informações do PAA no XML do DFe

<!-- p.13 -->

| Tag | Pai | Descrição | Ele | Tipo | Ocorr. | Tam. | Observação |
|---|---|---|---|---|---|---|---|
| **infPAA** | infMDFe | **Grupo de Informação do Provedor de Assinatura e Autorização** | G | | 0-1 | | |
| CNPJPAA | infPAA | CNPJ do Provedor de Assinatura e Autorização | E | C | 1-1 | 14 | |
| **PAASignature** | infPAA | **Assinatura RSA do Emitente para DFe gerados por PAA** | G | | 1-1 | | |
| SignatureValue | PAASignature | Assinatura digital padrão RSA | E | B64 | 1-1 | | Converter o atributo Id do DFe para array de bytes e assinar com a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64. |
| **RSAKeyValue** | PAASignature | **Chave Pública no padrão XML RSA** | G | | 1-1 | | |
| Key | RSAKeyValue | | | | | | |
| Modulus | RSAKeyValue | | E | B64 | 1-1 | | |
| Exponent | RSAKeyValue | | E | B64 | 1-1 | | |
