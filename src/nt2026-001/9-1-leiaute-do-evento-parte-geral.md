<!-- p.15 -->
# 9.1. Leiaute do Evento - Parte Geral

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **envEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| P02 | versao | A | P01 | N | 1-1 | 2v2 | Versão do leiaute |
| P03 | idLote | E | P01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento. Número sequencial único para identificação do Lote, de uso exclusivo do autor do evento. O Web Service não faz qualquer uso deste identificador. |
| **P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| P05 | versao | A | P04 | N | 1-1 | 2v2 | Versão do leiaute do evento |
| **P06** | **infEvento** | **G** | **P04** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| P07 | Id | ID | P06 | C | 1-1 | 54 | Identificador da TAG a ser assinada, formado por “ID” + tpEvento + Chave da NF-e + nSeqEvento |
| P08 | cOrgao | E | P06 | N | 1-1 | 2 | Código do órgão de recepção do Evento, conforme Tabela do IBGE ou: 91=Ambiente Nacional<br>Informar o código da UF para este evento. |
| P09 | tpAmb | E | P06 | N | 1-1 | 1 | Identificação do Ambiente: 1-Produção; 2-Homologação; |
| P10 | CNPJ | CE | P06 | N | 1-1 | 14 | CNPJ do autor do evento |
| P11 | CPF | CE | P06 | N | 1-1 | 11 | CPF do autor do evento |
| P12 | chNFe | E | P06 | N | 1-1 | 44 | Chave de Acesso da NF-e à qual o evento será vinculado |
| P13 | dhEvento | E | P06 | D | 1-1 | - | Data e hora do evento no formato AAAA-MM-DD-Thh:mm:ssTZD (UTC – Universal Coordinated Time) |
| P14 | tpEvento | E | P06 | N | 1-1 | 6 | Código do evento (de acordo com tabelas do item 3.1) |
| P15 | nSeqEvento | E | P06 | N | 1-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento. Informar o valor “1” para este evento. |
| P16 | verEvento | E | P06 | N | 1-1 | 2v2 | Versão do grupo de detalhe do evento. |
| | | | | | | | **\*\*\* Detalhe do Evento (varia conforme o Evento)** |
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | | **Detalhes do evento. Inserir neste local o XML específico do tipo de evento (ex: Cancelamento, Carta Correção, Registro de Passagem), Manifestação do Destinatário, ...** |
| ... | ... | ... | ... | ... | ... | ... | ... |
| | | | | | | | **\*\*\* Grupo de Informações do PAA** |
| **P80** | **infPAA** | **G** | **P06** | | **0-1** | | **Uso exclusivo para Evento gerado por Provedor de Assinatura e Autorização - PAA conforme legislação vigente.** |
| P81 | CNPJPAA | E | P80 | C | 1-1 | 14 | CNPJ do Provedor de Assinatura e Autorização |
| **P82** | **PAASignature** | **G** | **P80** | | **1-1** | | **Estrutura simplificada do padrão XMLDSig para a PAA.<br>Assinatura RSA do Emitente para DF-e gerados por PAA.** |
| P83 | SignatureValue | E | P82 | C | 1-1 | | Gerar o hash do valor do atributo Id com algoritmo SHA1 e assinar com a chave privada RSA, gerando um valor no formato base64 |
| **P84** | **RSAKeyValue** | **G** | **P82** | | **1-1** | | **Chave Pública no padrão XML RSA Key** |
| P85 | Modulus | E | P84 | C | 1-1 | | |
| P86 | Exponent | E | P84 | C | 1-1 | | Informar “AQAB” |
| **P91** | **Signature** | **G** | **P04** | **xml** | **1-1** | | **Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento** |
