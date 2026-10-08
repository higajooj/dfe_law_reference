<!-- p.124 -->
# 6. Distribuição dos Documentos com Autorização pela SEFAZ

Conforme previsto na cláusula décima do Ajuste SINIEF 07/05, de 30 de setembro de 2005, o emitente e o destinatário deverão manter em arquivo digital as Notas Fiscais eletrônicas pelo prazo estabelecido na legislação tributária para a guarda dos documentos fiscais, devendo ser apresentadas à administração tributária, quando solicitado.

O emissor da Nota Fiscal Eletrônica deve enviar o arquivo digital da NF-e para o destinatário, seja de forma eletrônica ou por qualquer outro meio que possibilite o destinatário ter acesso ao arquivo digital.

O DANFE é um Documento Auxiliar da Nota Fiscal Eletrônica e, ainda que hábil para acompanhar o trânsito de mercadorias, não substitui o arquivo da Nota Fiscal.

Os destinatários que não sejam credenciados para operar com a NF-e poderão escriturar a NF-e com base nas informações contidas no DANFE, que neste caso deverá ser mantido pelo prazo decadencial para apresentação à Administração Tributária quando solicitado.

## 6.1. Processo de Distribuição

A modalidade tecnológica de intercâmbio do documento eletrônico entre o emissor e receptor deve ser acordada entre ambos, respeitando o sigilo fiscal e o padrão de conteúdo de dados definido neste item. As formas mais comuns de troca de informações entre as empresas no comércio eletrônico (B2B) são:

- troca de mensagens em sistema específico, baseado em WEB ou rede privativa;
- troca de arquivos via EDI (Intercambio Eletrônico de Dados), baseado em WEB ou rede privada, ou outros protocolos de troca de arquivos rastreáveis;
- troca de mensagens via e-mail;
- disponibilização de informações em portais, com acesso sob demanda e autenticação de acesso.

## 6.2. Distribuição de Documentos Autorizados e Informações de B2B

No próximo item, é definida a forma de compartilhamentos dos documentos autorizados pela SEFAZ (NF-e, Cancelamento e Evento).

É possível também a distribuição de informações unicamente em um padrão B2B mais amplo, incluindo informações relacionadas com a logística de entrega, transporte e armazenamento das mercadorias que estão sendo transitadas entre os diferentes entes. Na adoção deste modelo mais amplo, é aconselhável evitar a definição de padrões específicos de determinada empresa, tentando adotar padrões setoriais, nacionais ou internacionais, que atendam um maior número de empresas emitentes ou destinatárias de NF-e, diminuindo o custo de customizações específicas.

De uma forma geral, esta estrutura de dados que engloba as informações dos documentos autorizados e as informações de logística da circulação de mercadorias entre as empresas, obedece a um padrão, conforme exemplo apresentado na Tabela 6-1

**Tabela 6-1 – Exemplo de Estrutura de Dados Sobre Logística de Circulação de Mercadorias**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **VR01** | **nfeProcB2B** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| **VR02** | **nfeProc** | **G** | **VR01** | **xml** | **1-1** | **-** | **Estrutura de dados da distribuição** |
| **VR03** | **NFe** | **G** | **VR02** | **xml** | **1-1** | **-** | |
| VR04 | (dados) | - | - | - | - | - | Dados da NFe, inclusive com os dados da assinatura |
| **VR05** | **protNfe** | **G** | **VR02** | **xml** | **1-1** | **-** | **Protocolo de autorização ou denegação de uso do NF-e, conforme descrito no item 5.2.2.** |
| VR06 | (dados) | - | - | - | - | - | |
| **VR07** | **NFeB2B** | **G** | **VR01** | **xml** | **0-1** | **-** | |
| VR08 | xIntegrador | A | VR07 | C | 1-1 | 2-15 | Identificador da organização, empresa ou entidade mantenedora do padrão de interface B2B.Exemplo: “ANFAVEA”, “GS1”, (...), “XYZ”. |
| VR09 | xSetor | A | VR07 | C | 1-1 | 2-15 | Identificador do setor ou área a que se refere o padrão B2B, mantido pelo Integrador.Exemplo:-xIntegrador=”XYZ”, xSetor=”Geral”;-xIntegrador=”XYZ”, xSetor=”Veículo”;-xIntegrador=”XYZ”, xSetor=”Medicamento” |
| VR10 | Versão | A | VR07 | C | 1-1 | 4-5 | Versão do leiaute desta área/setor de padronização B2B. Exemplo: “1.00”. |
| VR11 | (dados) | - | VR07 | - | - | - | |

<!-- p.125 -->
## 6.3. Leiaute da Distribuição: NF-e

Deverá ser disponibilizado para o destinatário o mesmo conteúdo da NF-e enviada para a SEFAZ, complementada com a informação da Autorização de Uso.

**Schema XML: procNFe_v3.10.xsd**

**Tabela 6-2 – Leiaute de Distribuição da NF-e (proc)**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **XR01** | **nfeProc** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| XR02 | versao | A | XR01 | N | 1-1 | 1-2v2 | |
| **XR03** | **NFe** | **G** | **XR01** | **-** | **1-1** | **-** | |
| XR04 | (dados) | - | - | - | - | - | Dados da NF-e, inclusive com os dados da assinatura |
| **XR05** | **protNfe** | **G** | **XR01** | **-** | **1-1** | **-** | **Protocolo de autorização ou denegação de uso do NF-e, conforme descrito no item 5.2.2.** |
| XR06 | (dados) | - | - | - | - | - | |

No caso de troca de arquivo entre as empresas, é sugerida a adoção do nome do arquivo como segue:

&lt;999...999&gt;-procNFe.xml

Onde:

- &lt;999...999&gt;: corresponde a Chave de Acesso da NF-e;
- “-procNFe”: identifica o processamento do documento autorizado.
