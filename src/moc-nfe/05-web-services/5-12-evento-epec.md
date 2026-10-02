<!-- p.114 -->
# 5.12. Web Service – NFeRecepcaoEvento – EPEC

**Função:** permite à empresa solicitar o registro do "**Evento Prévio de Emissão em Contingência**" anterior à emissão do documento em si com um leiaute mínimo de informações. A seção **3.2.3** apresenta uma visão geral desse evento.

**Autor do Evento:** O autor do evento é o emissor da NF-e. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do Emissor da NF-e.

**Código do Tipo de Evento: 110140**

## 5.12.1. Leiaute Mensagem de Entrada

**Entrada:** Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do *Web Service* de Registro de Eventos especificada na seção **5.8**.

**Schema XML: envEPEC_v1.00.xsd**

**Tabela 5-43 – Leiaute Mensagem de Entrada do Web Service NFeRecepcaoEvento – EPEC**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Informar o mesmo valor da tag *verEvento* (P16). |
| P19 | descEvento | E | P17 | C | 1-1 | 5-60 | “EPEC” |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão do Autor do Evento.<br>Nota: Informar o código da UF do Emitente para este evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar "1=Empresa Emitente" para este evento.<br>Nota: 1=Empresa Emitente; 2=Empresa Destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos. |
| P22 | verAplic | E | P17 | C | 1-1 | 1-20 | Versão do aplicativo do Autor do Evento. |
| P23 | dhEmi | E | P17 | D | 1-1 | | Data e hora no formato UTC (Universal Coordinated Time): "AAAA-MM-DDThh:mm:ssTZD". |
| P24 | tpNF | E | P17 | N | 1-1 | 1 | 0=Entrada; 1=Saída; |
| P25 | IE | E | P17 | N | 1-1 | 2-14 | IE do Emitente |
| **P26** | **dest** | **G** | **P17** | | **1-1** | | |
| P27 | UF | E | P26 | C | 1-1 | 2 | Sigla da UF do destinatário.<br>Informar “EX” no caso de operação com o exterior. |
| P28 | CNPJ | CE | P26 | N | 1-1 | 14 | Informar o CPF ou o CNPJ do destinatário, preenchendo os zeros não significativos. No caso de operação com exterior, ou para comprador estrangeiro, informar a tag “idEstrangeiro”, com o número do passaporte, ou outro documento legal (campo aceita valor Nulo no caso de operação com exterior). |
| P29 | CPF | CE | P26 | N | 1-1 | 11 | Informar o CPF ou o CNPJ do destinatário, preenchendo os zeros não significativos. No caso de operação com exterior, ou para comprador estrangeiro, informar a tag “idEstrangeiro”, com o número do passaporte, ou outro documento legal (campo aceita valor Nulo no caso de operação com exterior). |
| P30 | idEstrangeiro | CE | P26 | C | 1-1 | 0,<br>5-20 | Informar o CPF ou o CNPJ do destinatário, preenchendo os zeros não significativos. No caso de operação com exterior, ou para comprador estrangeiro, informar a tag “idEstrangeiro”, com o número do passaporte, ou outro documento legal (campo aceita valor Nulo no caso de operação com exterior). |
| P31 | IE | E | P26 | N | 0-1 | 2-14 | Informar a IE do destinatário somente quando o contribuinte destinatário possuir uma inscrição estadual. Omitir a tag no caso de destinatário “ISENTO”, ou destinatário não possuir IE. |
| P32 | vNF | E | P17 | N | 1-1 | 13v2 | Valor total da NF-e |
| P33 | vICMS | E | P17 | N | 1-1 | 13v2 | Valor total do ICMS |
| P34 | vST | E | P17 | N | 1-1 | 13v2 | Valor total do ICMS de Substituição Tributária |
| P91 | Signature | G | P04 | XML | 1-1 | | Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento |

<!-- p.114: no original, a descrição de P28, P29 e P30 é uma única célula mesclada; repetida aqui em cada linha -->

<!-- p.115 -->
## 5.12.2. Leiaute Mensagem de Retorno

**Retorno**: Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do *Web Service* de Registro de Eventos – Parte Geral, especificado no item **5.8.2**.

**Descrição do resultado do processamento do evento (xEvento):** EPEC autorizado

**Schema XML: retEnvEPEC_v1.00**

No caso de evento registrado com sucesso, serão retornados campos opcionais listados na Tabela 5-44, seguindo a mensagem geral de retorno descrita na  
Schema XML: retEnvEvento_v1.00.xsd  
Tabela 5-33.

**Tabela 5-44 – Leiaute Mensagem de Retorno do Web Service NFeRecepcaoEvento – EPEC**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| R22 | cOrgaoAutor | E | HR11 | N | 0-1 | 2 | Idem a mensagem de entrada. |
| R32 | chNFePend | E | R11 | N | 0-50 | 44 | Relação de Chaves de EPEC pendentes de conciliação, existentes no AN. |

A relação de Chaves de Acesso pendentes de conciliação (tag:chNFePend) será disponibilizada sempre que o ambiente de autorização do EPEC estiver bloqueado para o CNPJ do emitente (Rejeição “142-Ambiente de Contingência EPEC bloqueado para o Emitente”.

## 5.12.3. Regras de Validação

Serão aplicadas as regras de validação gerais apresentadas no item **5.8.4** e as regras de negócio específicas que podem ser vistas na Tabela 5-45.

**Tabela 5-45 – Regras de Validação Específicas do Evento Prévio de Emissão em Contingência**

<!-- p.116 --><!-- p.117 -->

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| P11-20 | Se informado CPF do Autor do evento:<br>Evento não disponível para Autor pessoa física (CPF) | Obrig. | 408 | Rej. | Rejeição: Evento não disponível para Autor pessoa física |
| P11-21 | Se informado CPF do autor do evento, evento = EPEC e série difere da faixa [920-969] (NT 2014.001 v1.20) | Obrig. | 495 | Rej. | Rejeição: CPF do emitente com série incompatível |
| P12-32 | Validação da Chave de Acesso:<br>Série difere da faixa [0-889] [920-969] (NT 2018.001) (NT 2014.001 v1.20) | Obrig. | 266 | Rej. | Rejeição: Série utilizada não permitida no *Web Service* |
| P12-50 | Tipo de Emissão difere de “4” (posição 35 da Chave de Acesso) | Obrig. | 484 | Rej. | Rejeição: Chave de Acesso com tipo de emissão diferente de 4 (posição 35 da Chave de Acesso) |
| P15-10 | Verificar se sequencial do evento (nSeqEvento) difere de 1 | Obrig. | 594 | Rej. | Rejeição: O número de sequência do evento informado é maior que o permitido |
| P20-10 | Verificar se o órgão do Autor (cOrgaoAutor) difere da UF da Chave de Acesso (Evento do Emitente) | Obrig. | 455 | Rej. | Rejeição: Órgão Autor do evento diferente da UF da Chave de Acesso |
| P21-10 | Verificar se Tipo do Autor difere de "1=Empresa Emitente" | Obrig. | 466 | Rej. | Rejeição: Evento com Tipo de Autor incompatível |
| P23-10 | Data de Emissão posterior a data de recebimento | Obrig. | 212 | Rej. | Rejeição: Data de emissão NF-e posterior a data de recebimento |
| P23-20 | Data de Emissão ocorrida há mais de 1 dia | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |
| P23-30 | Data de Emissão maior do que a data do evento (dhEvento) | Obrig. | 577 | Rej. | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| P23-40 | Ano-Mês da Data de Emissão (dhEmi) diverge do Ano-Mês da Chave de Acesso | Obrig. | 659 | Rej. | Rejeição: Ano-Mês da Data de Emissão diverge do Ano_Mês da Chave de Acesso |
| P25-10 | Validação da IE do Emitente:<br>IE Emitente com zeros ou nulo | Obrig. | 229 | Rej. | Rejeição: IE do emitente não informada |
| P25-20 | IE inválida para a UF: erro no tamanho, composição ou dígito verificador (*2) | Obrig. | 209 | Rej. | Rejeição: IE do emitente inválida |
| P28-10 | Se informado CNPJ do destinatário:<br>CNPJ com zeros ou dígito de controle inválido | Obrig. | 208 | Rej. | Rejeição: CNPJ do destinatário inválido |
| P29-10 | Se informado CPF do destinatário:<br>CPF com zeros, 111..., 222..., ..., 999..., ou dígito de controle inválido | Obrig. | 237 | Rej. | Rejeição: CPF do destinatário inválido |
| P30-10 | Se não informada a tag idEstrangeiro para Operação com Exterior (UF Destinatário = “EX”). | Obrig. | 720 | Rej. | Rejeição: Na operação com Exterior deve ser informada tag idEstrangeiro |
| P30-20 | Se informada tag idEstrangeiro:<br>Não informar tag idEstrangeiro para Operação Interestadual (UF Destinatário difere de “EX” e difere da UF do Emitente): | Obrig. | 721 | Rej. | Rejeição: Operação interestadual deve informar CNPJ ou CPF |
| P31-10 | Se informada IE do Destinatário:<br>Não informar a tag IE do Destinatário na operação com exterior (UF Destinatário = “EX”) | Obrig. | 792 | Rej. | Rejeição: Informada a IE do destinatário para operação com destinatário no Exterior |
| P31-20 | IE com zeros ou nulo | Obrig. | 210 | Rej. | Rejeição: IE do destinatário inválida |
| P31-30 | IE inválida para a UF: erro no tamanho, composição ou dígito verificador (*2) | Obrig. | 210 | Rej. | Rejeição: IE do destinatário inválida |
| P32-10 | Valor da NF-e superior ao valor limite estabelecido (*3) | Obrig. | 628 | Rej. | Rejeição: Total da NF superior ao valor limite estabelecido pela SEFAZ [Limite] |
| P33-10 | Valor do ICMS superior ao valor limite (*3) | Obrig. | 417 | Rej. | Rejeição: Total do ICMS superior ao valor limite estabelecido |
| P34-10 | Valor do ICMS-ST superior ao valor limite (*3) | Obrig. | 418 | Rej. | Rejeição: Total do ICMS ST superior ao valor limite estabelecido |
| | **\*\*\* Banco de Dados: Emitente / ~~CNE~~ CCC** | | | | |
| 1P25-10 | Acessar Cadastro Centralizado de Contribuintes (CCC, Chave: UF, CNPJ/CPF, IE) ou Cadastro de Emitentes (CNE, Chave: UF, IE) no caso da UF não estiver atualizando o CCC:<br>• - IE emitente não cadastrada (NT 2014.001 v1.20) | Obrig. | 230 | Rej. | Rejeição: IE do emitente não cadastrada |
| 1P25-20 | IE Emitente não vinculada ao CNPJ ou CPF (CPF incluído pela (NT 2018.001 v1.10) | Obrig. | 231 | Rej. | Rejeição: IE do emitente não vinculada ao CNPJ ou CPF |
| 1P25-30 | Emitente não habilitado para emissão de NF-e | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão de NF-e |
| | **\*\*\* Banco de Dados: Emitente / Controle Ambiente EPEC** | | | | |
| 2P10-10 | Acessar BD Ambiente de Contingência EPEC (Chave: UF, CNPJ ou CPF Emitente):<br>Verificar se Ambiente EPEC está bloqueado para o Emitente (*4) | Obrig. | 142 | Rej. | Rejeição: Ambiente de Contingência EPEC bloqueado para o Emitente |
| | **\*\*\* Banco de Dados: Numeração da NF-e** | | | | |
| 3P12-10 | Acesso ao BD de Eventos (Chave: tpEvento=110140, Modelo=55, UF, CNPJ ou CPF Emitente, Série, Número da NF-e)<br>Verificar se já existe EPEC para a numeração da NF-e | Obrig. | 485 | Rej. | Rejeição: Duplicidade de numeração do EPEC (Modelo, CNPJ ou CPF, Série e Número) |
| 4P12-10 | Acesso ao BD NFE (Chave: Modelo=55, UF Emitente, CNPJ ou CPF Emitente, Série e Número da NF-e):<br>NF-e já existente para o número do EPEC informado | Obrig. | 661 | Rej. | Rejeição: NF-e já existente para o número do EPEC informado |
| 5P12.10 | Acesso ao BD de Inutilização (Chave: Modelo=55, UF Emitente, CNPJ ou CPF Emitente, Série e Número):<br>Numeração do EPEC está inutilizada na Base de Dados da SEFAZ | Obrig. | 662 | Rej. | Rejeição: Numeração do EPEC está inutilizada na Base de Dados da SEFAZ |
| | **\*\*\* Banco de Dados: Destinatário** | | | | |
| 6P31-10 | Se informada IE do Destinatário:<br>Acessar Cadastro de Contribuinte da UF (Chave: UF Dest, IE Dest.) (*5)<br>IE destinatário não cadastrada, ou situação da IE igual a exclusão lógica no CCC (CCC.cSitIE=9-Exclusão lógica) (*7) (NT 2019.001 v1.00) | Obrig. | 233 | Rej. | Rejeição: IE do destinatário não cadastrada |
| 6P31-20 | Se informado CNPJ do destinatário e IE destinatário não vinculada ao CNPJ (tratar Regime Especial de IE Única) (NT 2019.001 v1.00) | Obrig. | 234 | Rej. | Rejeição: IE do destinatário não vinculada ao CNPJ |
| 6P31-30 | Se informado CPF do destinatário e IE destinatário não vinculada ao CPF (*7) (NT 2019.001 v1.00) | Obrig. | 624 | Rej. | Rejeição: IE Destinatário não vinculada ao CPF |
| 6P31-40 | Destinatário em situação irregular perante o Fisco, vedada operação na UF (CCC.cSitCNPJ=3-Vedado) (NT 2019.001 v1.00) | Obrig. | 302 | Rej. | Uso Denegado: Irregularidade fiscal do destinatário |
| 6P31-43 | Destinatário bloqueado na UF (CCC.cSitCNPJ=2-Bloqueado) (NT 2019.001 v1.00) | Obrig. | 305 | Rej. | Rejeição: Destinatário bloqueado na UF |
| 6P31-46 | IE do Destinatário não está ativa na UF (CCC.cSitIE=0-Não habilitado) (*7) (NT 2019.001 v1.00) | Obrig. | 306 | Rej. | Rejeição: IE do destinatário não está ativa na UF |
| 6P31-50 | Se IE Destinatário não informada e informado CNPJ do destinatário:<br>Acessar Cadastro Contribuinte da UF (Chave: UF-Dest, CNPJ-Dest) (*6)<br>Destinatário possui IE ativa na UF (CCC.cSitIE=1-Habilitado) e CCC.IndIEDestOpc = 0 – Obrig.atório (NT 2019.001 v1.00) | Obrig. | 232 | Rej. | Rejeição: IE do destinatário não informada |
| 6P31-60 | Destinatário com CNPJ vedado na UF (CCC.cSitCNPJ=3-Vedado) (NT 2019.001 v1.00) | Obrig. | 303 | Den. | Uso Denegado: Destinatário não habilitado a operar na UF |
| 6P31-63 | Destinatário bloqueado na UF (CCC.cSitCNPJ=2-Bloqueado) (NT 2019.001 v1.00) | Obrig. | 305 | Rej. | Rejeição: Destinatário bloqueado na UF |

> **Revogado/Descontinuado:** na linha de grupo “Banco de Dados: Emitente / CNE CCC”, o termo “CNE” está riscado no original.

Notas:

- (*2) O tamanho da IE deve ser normalizado na aplicação do AN, desprezando os zeros não significativos, antes da verificação do dígito de controle;
- (*3) Valor parametrizável, definido inicialmente em R$ 500 milhões, para evitar erros de preenchimento do campo;
- (*4) No caso do ambiente de contingência EPEC bloqueado para o emitente, serão retornadas as Chaves de Acesso de até 50 EPEC pendentes de conciliação (tag:chNFePend);
- (*5) Validação possível na operação interestadual, ou no ambiente da SEFAZ Virtual, utilizando o CCC-Cadastro Centralizado de Contribuintes. (NT 2019.001 v1.00)  
  Nota: A validação do destinatário do EPEC não gera denegação, mas simplesmente uma rejeição.
- (*6) Validação possível na operação interestadual, ou no ambiente da SEFAZ Virtual, utilizando o CCC. Pesquisar todas as IE vinculadas com o CNPJ informado. (NT 2019.001 v1.00)
- (*7) Algumas UF ainda não cadastraram no CCC os Contribuintes Pessoa Física (IE e CPF). Portanto, o Ambiente de Contingência EPEC que utiliza o CCC para validar o destinatário somente poderá efetuar as validações assinaladas se o Contribuinte (IE e CPF) e xistir no CCC. (NT 2019.001 v1.00)

## 5.12.4. Final do Processamento do Lote

O resultado do processamento do lote está especificado na seção *Web Service* de Registro de Eventos – Parte Geral, item **5.8.5**.

No caso do evento de EPEC, não existe a possibilidade do retorno "135 – Evento registrado e vinculado a NF-e" porque este evento somente é autorizado se não existir uma NF-e para a mesma Nota Fiscal (mesma UF, CNPJ emitente, Série e Número).
