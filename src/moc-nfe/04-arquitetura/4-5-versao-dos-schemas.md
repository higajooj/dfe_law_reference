<!-- p.66 -->
# 4.5. Versão dos Schemas

## 4.5.1. Controle de Versão

O controle de versão de cada um dos schemas válidos para o Sistema Nota Fiscal Eletrônica compreende uma definição nacional sobre:

- qual a versão vigente (versão mais atualizada);
- quais são as versões anteriores ainda suportadas por todas as SEFAZ.

Este controle de versões permite a adaptação dos sistemas de informática das empresas participantes do Sistema em diferentes datas; desta forma, algumas empresas poderão estar com uma versão de leiaute mais atualizada, enquanto outras empresas poderão ainda estar operando com mensagens em um leiaute anterior.

Não existem mudanças frequentes de leiaute de mensagens e as empresas dispõem de um prazo razoável para implementar as mudanças necessárias, conforme acordo operacional estabelecido. Mensagens recebidas com uma versão de leiaute não suportada serão rejeitadas com uma mensagem de erro específica na versão do leiaute de resposta mais antiga em uso.

## 4.5.2. Liberação das Versões dos Schemas para o Sistema da NF Eletrônica

Os schemas válidos para o Sistema da Nota Fiscal Eletrônica são disponibilizados no Portal Nacional da NF-e (www.nfe.fazenda.gov.br), após terem sido liberados pela Coordenação Técnica do Sistema.

A cada nova liberação é disponibilizado um arquivo compactado contendo o conjunto de schemas a serem utilizados pelas empresas para a geração dos arquivos XML.

Este arquivo é denominado “Pacote de Liberação”, e numerado sequencialmente. Os pacotes de liberação são identificados pelas letras “PL”, seguida do número do pacote.

Exemplo: O pacote PL_001.zip é o “Pacote de Liberação” nº 1 de schemas da Nota Fiscal Eletrônica.

Os schemas válidos estão contidos no pacote de liberação e são identificados pelo seu nome, seguido da versão do respectivo schema.
Assim, para o schema de “Envio de Lotes de Nota Fiscal Eletrônica”, corresponderá um arquivo com a extensão .XSD, que terá o nome de “*enviNFe_v9.99.xsd*”, onde v9.99, corresponde a versão do respectivo schema.

<!-- p.67 -->
Para identificar quais os schemas que sofreram alteração em um determinado pacote liberado, deve-se comparar o número da versão do schema deste pacote com o do pacote anterior, conforme exemplificado na Tabela 4-10.

**Tabela 4-10 – Exemplo de Identificação de Schema Alterado em um Pacote de Liberação**

| PACOTE | PL_001.ZIP | PL_002.ZIP |
|---|---|---|
| DATA LIBERAÇÃO | 01/04/2006 | 01/06/2006 |
| SCHEMAS | enviNFe_v1.00.xsd | enviNFe_v1.30.xsd |
| | inutNFe_v1.00.xsd | inutNFe_v1.00.xsd |
| | cancNFe_v1.00.xsd | cancNFe_v1.00.xsd |
| | tiposBasico_v1.00.xsd | tiposBasico_v1.01.xsd |

Para as atualizações de versões que decorrem de correção de regra de validação, modificação da obrigatoriedade de campo, etc., que não modificam a estrutura do Schema através da inclusão ou exclusão de campos, serão liberados novos pacotes de liberação sem a atualização do número do pacote.

Nestas situações os pacotes mais recentes serão identificados com o acréscimo de letras minúscula do alfabeto, como por exemplo: PL_002a.ZIP, indicando que se trata da primeira versão corrigida do PL_002.ZIP.

## 4.5.3. *Schemas* e Seus Pacotes de Liberação

A Tabela 4-11 lista os *Web Services* do Sistema NF-e, juntamente com seus métodos e respectivas funções.

**Tabela 4-11 – Relação de Web Services do Sistema NF-e**

| Serviço | Função | Web Service |
|---|---|---|
| Autorização de Lote de NF-e | Recepção de mensagens de lote de NF-e | NFeAutorizacao |
| Consulta Recibo do Lote | Retorno do resultado do processamento do lote de NF-e | NFeRetAutorizacao |
| Inutilização de numeração NF-e | Solicitações de inutilização de numeração | NFeInutilizacao |
| Consulta Protocolo da NF-e | Solicitações de consulta da situação atual da NF-e | NFeConsultaProtocolo |
| Consulta Status de Serviço da NF-e | Consulta do status do serviço prestado pelo Portal da Secretaria de Fazenda Estadual | NFeStatusServico |
| Consulta Cadastro | Consulta cadastro de contribuintes do ICMS da unidade federada | NfeConsultaCadastro |
| Distribuição aos interessados | Distribuição de informações resumidas e documentos fiscais eletrônicos de interesse de um ator. (NT 2014.002) | NFeDistribuicaoDFe |
| Registro de Evento | Recepção de mensagem de Evento da NF-e | NFeRecepcaoEvento |

A Tabela 4-12 apresenta os *schemas* XML utilizados nos serviços listados na Tabela 4-11, suas versões e a seção ou item do capítulo 5 que detalha o *Web Service*.

**Tabela 4-12 – Schemas e Pacotes de Liberação**

| WS | S | Schema | PL | vers | Observação |
|---|---|---|---|---|---|
| NFeAutorizacao | 5.1 | enviNFe | A | 4.00 | Mensagem de envio de lote de NF-e |
| | | retEnviNFe | A | 4.00 | Mensagem de retorno do envio de lote de NF-e |
| NFeRetAutorizacao | 5.2 | consReciNFe | A | 4.00 | Mensagem de consulta processamento do lote de NF-e transmitida |
| | | retConsReciNFe | A | 4.00 | Mensagem de retorno da consulta de processamento do lote de NF-e |
| NFeInutilizacao | 5.3 | inutNFe | A | 4.00 | Mensagem de solicitação de inutilização de numeração de NF-e |
| | | retInutNFe | A | 4.00 | Mensagem de retorno da solicitação de inutilização de numeração de NF-e |
| NFeConsultaProtocolo | 5.4 | consSitNFe | A | 4.00 | Mensagem de consulta da situação atual da NF-e |
| | | retConsSitNFe | A | 4.00 | Mensagem de retorno da consulta da situação atual da NF-e |
| NFeStatusServico | 5.5 | consStatServ | A | 4.00 | Mensagem da consulta do status do serviço de autorização de NF-e |
| | | retConsStatServ | A | 4.00 | Mensagem de retorno da consulta do status do serviço de autorização de NF-e |
| NfeConsultaCadastro | 5.6 | consCad | B | 2.00 | Mensagem de consulta ao cadastro de contribuintes do ICMS |
| | | retConsCad | B | 2.00 | Mensagem de retorno da consulta ao cadastro de contribuintes do ICMS |
| NfeDistribuicaoDFe | 5.7 | distDFeInt | C | 1.01 | Mensagem de pedido de distribuição de DF-e de interesse do ator |
| | | retDistDFeInt | C | 1.01 | Estrutura XML com os documentos de interesse do ator |
| | Erro! Fonte de referência não encontrada. | resNFe | C | 1.01 | Estrutura XML com o conjunto de informações resumidas da NF-e |
| | | resEvento | C | 1.01 | Estrutura XML com o conjunto de informações resumidas de um evento de NF-e |
| NFeRecepcaoEvento | 5.8.6 | procEventoNFe | D | 1.00 | Estrutura XML para disponibilização de evento pelo emissor para o destinatário |
| | 5.9 | envEventoCancNFe | E | 1.00 | Mensagem de solicitação de registro de evento de cancelamento |
| | | retEnvEventoCancNFe | E | 1.00 | Mensagem de retorno da solicitação de registro de evento de cancelamento |
| | 5.10 | envEventoCancSubst | F | | Mensagem de solicitação de registro de evento de cancelamento por substituição |
| | | retEventoCancSubst | F | | Mensagem de retorno da solicitação de registro de evento de cancelamento por substituição |
| | 5.11 | envCCe | G | 1.00 | Mensagem de solicitação de registro de evento de carta de correção |
| | | retEnvCCe | G | 1.00 | Mensagem de retorno da solicitação de registro de evento de carta de correção |
| | 5.12 | envConfRecebto | H | 1.00 | Mensagem de solicitação de registro de evento de manifestação do destinatário |
| | | retEnvConfRecebto | H | 1.00 | Mensagem de retorno da solicitação de registro de evento de evento de manifestação do destinatário |
| | 5.13 | envEPEC | I | 1.00 | Mensagem de solicitação de registro de evento prévio de emissão em contingência |
| | | retEnvEPEC | I | 1.00 | Mensagem de retorno da solicitação de registro de evento prévio de emissão em contingência |
| | Erro! Fonte de referência não encontrada. | envRemIndus | J | 1.00 | Mensagem de solicitação de registro de evento de pedido relacionado com a prorrogação do prazo de retorno de produtos de uma NF-e de remessa para industrialização por encomenda com suspensão do ICMS |
| | | retEnvRemIndus | J | 1.00 | Mensagem de retorno da solicitação de registro de evento relacionado com a pedido de prorrogação do prazo de retorno de produtos de uma NF-e de remessa para industrialização por encomenda com suspensão do ICMS |

<!-- REVISAR p.68: as células da coluna S "Erro! Fonte de referência não encontrada." (linhas resNFe/resEvento e envRemIndus/retEnvRemIndus) são erros de referência cruzada do Word presentes no original; mantidas literalmente. A tabela começa na p.67 (até consStatServ) e continua na p.68 (a partir de retConsStatServ). Células das colunas WS e S são mescladas verticalmente no original; aqui aparecem apenas na primeira linha do grupo. -->
<!-- p.68 -->
WS .....Nome do *Web Service*  
S ........Seção ou item do capítulo 5 que detalha o *Web Service*  
PL.......Linha da Tabela 4-13 que contém mais informações sobre o respectivo pacote de liberação  
vers....versão do último *schema* publicado

A Tabela 4-13 apresenta informações sobre a publicação dos pacotes de liberação (PL) citados na Tabela 4-12 e na Tabela 4-14.

**Tabela 4-13 – Pacotes de Liberação Referenciados na Tabela 4-12 e na Tabela 4-14**

| PL | Nome do Pacote | Publicado Por | At | Hom | Prod |
|---|---|---|---|---|---|
| A | PL_009_V4_00_NT_2019_001_v1.20a | NT 2019.001 | 20/08/2019 | 26/08/2019 | 02/09/2019 |
| B | PL_ConsCad_v2.00 | NT 2020.002 | 30/05/2014 | 15/07/2014 | 01/08/2014 |
| C | PL_nfeDistDFe_102 | NT 2014.002 | 25/10/2016 | 05/12/2016 | 09/01/2017 |
| D | Evento_Generico_PL_v1.01 | NT 2014.004 | 05/08/2014 | 15/07/2014 | 01/08/2014 |
| E | Evento_Canc_PL_v1.01 | NT 2018.004 | 21/12/2018 | 25/02/2019 | 29/04/2019 |
| F | Evento_CancSubst_v1.01 | NT 2018.004 | 21/12/2018 | 25/02/2019 | 29/04/2019 |
| G | Evento_CCe_PL_v1.01 | NT 2014.004 | 30/05/2014 | 15/07/2014 | 01/08/2014 |
| H | Evento_ManifestaDest_PL_v1.01 | NT 2014.004 | 30/05/2014 | 15/07/2014 | 01/08/2014 |
| I | Evento_EPEC_PL_v1.01 | NT 2014.004 | 30/05/2014 | 15/07/2014 | 01/08/2014 |
| J | Evento_Prorrog_Indust_1.0 | NT 2015.001 | 20/03/2015 | 26/10/2015 | 30/11/2015 |

<!-- p.69 -->
At ........Última Atualização  
Hom ....Data de entrada em ambiente de homologação  
Prod ....Data de entrada em ambiente de produção

A Tabela 4-14 apresenta outros *schemas* XML que fazem parte dos pacotes de liberação referidos na Tabela 4-13, e que são utilizados pelos demais *schemas*, ou que são utilizados para montar pacotes de compartilhamentos de informação.

**Tabela 4-14 – Outros Schemas**

| PL | Schema | vers | Observação |
|---|---|---|---|
| **A** | **nfe** | **4.00** | **Schema base da NF-e** |
| A | leiauteConsSitNFe | 4.00 | Tipos básicos da consulta de situação da NF-e |
| A | leiauteConsStatServ | 4.00 | Tipos básicos da consulta de *status* de serviço |
| A | leiauteInutNFe | 4.00 | Tipos básicos da inutilização de numeração |
| A | leiauteNFe | 4.00 | Tipos básicos da NF-e |
| A | procInutNFe | 4.00 | Leiaute de compartilhamento de pedido de inutilização de numeração de NF-e |
| A | procNFe | 4.00 | Leiaute de compartilhamento da NF-e |
| A | tiposBasico | 4.00 | Tipos de dados utilizados no leiaute da NF-e |
| A | xmldsig-core-schema | 1.01 | Definições de assinatura digital para NF-e |
| **B** | **leiauteConsultaCadastro** | **2.00** | **Leiaute da consulta cadastro** |
| B | tiposBasico | 1.03 | Tipos de dados utilizados na consulta cadastro |
| **C** | **tiposDistDFe** | **1.01** | **Tipos de dados utilizados no Pedido de Distribuição de DF-e** |
| C | xmldsig-core-schema | 1.01 | Definições de assinatura digital para Pedido de Distribuição de DF-e |
| **D** | **leiauteEvento** | **1.00** | **Tipos básicos de evento genérico** |
| D | tiposBasico | 1.03 | Tipos de dados utilizados no leiaute de evento genérico |
| D | xmldsig-core-schema | 1.01 | Definições de assinatura digital para evento genérico |
| **E** | **e110111** | **1.00** | **Evento Cancelamento** |
| E | EventoCanc | 1.00 | Validação do evento Cancelamento |
| E | leiauteEventoCanc | 1.00 | Tipos básicos do evento Cancelamento |
| E | procEventoCanc | 1.00 | Leiaute para validação do proc Cancelamento |
| E | tiposBasico | 1.03 | Tipos de dados utilizados no leiaute do evento Cancelamento |
| E | xmldsig-core-schema | 1.01 | Definições de assinatura digital para registro do evento Cancelamento |
| **F** | **e110112** | **1.00** | **Evento Cancelamento por Substituição** |
| F | eventoCancSubst | 1.00 | Tipos básicos do evento Cancelamento por Substituição |
| F | leiauteEventoCancSubst | 1.00 | Leiaute chamado pelo *schema eventoCancSubst* |
| F | procEventoCancSubst | 1.00 | Leiaute para validação do proc Cancelamento por Substituição |
| F | tiposBasico | 1.03 | Tipos de dados utilizados no leiaute do evento Cancelamento por Substituição |
| F | xmldsig-core-schema | 1.01 | Definições de assinatura digital para registro do evento Cancelamento por Substituição |
| **G** | **CCe** | **1.00** | **Schema base da Carta de Correção** |
| G | e110110 | 1.00 | Evento Carta de Correção |
| G | leiauteCCe | 1.00 | Tipos básicos do evento Carta de Correção |
| G | procCCeNFe | 1.00 | Leiaute de compartilhamento do evento Carta de Correção |
| G | tiposBasico | 1.03 | Tipos de dados utilizados no leiaute do evento Carta de Correção |
| G | xmldsig-core-schema | 1.01 | Definições de assinatura digital para registro do evento Carta de Correção |
| **H** | **confRecebto** | **1.00** | **Schema base da Manifestação do Destinatário** |
| H | e210200 | 1.00 | Evento Confirmação de Operação pelo Destinatário |
| H | e210210 | 1.00 | Evento Ciência da Operação pelo Destinatário (ou Ciência da Emissão) |
| H | e210220 | 1.00 | Evento Desconhecimento da Operação pelo Destinatário |
| H | e210240 | 1.00 | Evento Operação não Realizada |
| H | leiauteConfRecebto | 1.00 | Tipos básicos dos eventos de Manifestação do Destinatário |
| H | procConfRecebtoNFe | 1.00 | Leiaute de compartilhamento dos eventos de Manifestação do Destinatário |
| H | tiposBasico | 1.03 | Tipos de dados utilizados no leiaute dos eventos de Manifestação do Destinatário |
| H | xmldsig-core-schema | 1.01 | Definições de assinatura digital para registro dos eventos de Manifestação do Destinatário |
| **I** | **EPEC** | **1.00** | **Schema base do Evento Prévio de Emissão em Contingência** |
| I | e110140 | 1.00 | Evento Prévio de Emissão em Contingência |
| I | leiauteEPEC | 1.00 | Tipos básicos do Evento Prévio de Emissão em Contingência |
| I | procEPEC | 1.00 | Leiaute de compartilhamento do Evento Prévio de Emissão em Contingência |
| I | tiposBasico | 1.03 | Tipos de dados utilizados no leiaute do Evento Prévio de Emissão em Contingência |
| I | xmldsig-core-schema | 1.01 | Definições de assinatura digital para registro do Evento Prévio de Emissão em Contingência |
| **J** | **eventoRemIndus** | | **Schema base dos eventos relacionados com Pedido de Prorrogação da suspensão de ICMS em operações para industrialização por encomenda em outra UF** |
| J | e111500 | 1.00 | Pedido de Prorrogação 1º prazo |
| J | e111501 | 1.00 | Pedido de Prorrogação 2º prazo |
| J | e111502 | 1.00 | Cancelamento de Pedido de Prorrogação 1º prazo |
| J | e111503 | 1.00 | Cancelamento de Pedido de Prorrogação 2º prazo |
| J | e411500 | 1.00 | Evento Fisco Resposta ao Pedido de Prorrogação 1º prazo |
| J | e411501 | 1.00 | Evento Fisco Resposta ao Pedido de Prorrogação 2º prazo |
| J | e411502 | 1.00 | Evento Fisco Resposta ao Cancelamento de Prorrogação 1º prazo |
| J | e411503 | 1.00 | Evento Fisco Resposta ao Cancelamento de Prorrogação 2º prazo |
| J | leiauteRemIndus | 1.00 | Tipos básicos dos eventos relacionados com Pedido de Prorrogação |
| J | procRemIndus | 1.00 | Leiaute de compartilhamento dos eventos relacionados com Pedido de Prorrogação |
| J | tiposBasico | 1.03 | Tipos de dados utilizados no leiaute dos eventos relacionados com Pedido de Prorrogação |
| J | xmldsig-core-schema | 1.01 | Definições de assinatura digital para registro dos eventos relacionados com Pedido de Prorrogação |

<!-- p.70 -->
WS .....Nome do Web Service  
PL.......Linha da Tabela 4-13 que contém mais informações sobre o respectivo pacote de liberação  
vers....versão do último *schema* publicado

Notas técnicas futuras que contiverem alterações de *schemas* também conterão as alterações correspondentes nas tabelas presentes neste item deste manual.
