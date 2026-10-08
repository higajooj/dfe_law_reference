<!-- p.10 -->
# 4. Web Service – NFeRecepcaoEvento – Parte Geral

Método: nfeRecepcaoEvento

## 1.1. Leiaute Mensagem de Entrada (Parte Geral)

O Web Service de Registro de Evento possui uma interface genérica, complementada por uma área específica para cada tipo de evento. Segue abaixo o leiaute da parte geral da mensagem de entrada para os eventos.

Schema XML: envEvento_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **envEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| **P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| **P06** | **infEvento** | **G** | **P04** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| P10 | CNPJ | CE | P06 | C | 1-1 | 14 | CNPJ do autor do evento |
| P12 | chNFe | E | P06 | C | 1-1 | 44 | Chave de Acesso da NF-e à qual o evento será vinculado |

## 1.2. Leiaute Mensagem de Retorno (Parte Geral)

Schema XML: retEnvEvento_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **R01** | **retEnvEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da mensagem de retorno** |
| **R09** | **retEvento** | **G** | **R01** | **-** | **0-20** | **-** | **Grupo do resultado do processamento do Evento** |
| **R11** | **infEvento** | **G** | **R09** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| R18 | chNFe | E | R11 | C | 0-1 | 44 | Idem a mensagem de entrada |
| R23 | CNPJDest | CE | R11 | C | 0-1 | 14 | Informar o CNPJ do destinatário da NF-e.<br>Específico para evento 110111 – Cancelamento |
| R27 | chNFePend | E | R11 | C | 0-50 | 44 | Relação de Chaves de Acesso de EPEC pendentes de conciliação, existentes no AN.<br>Específico para evento: 110140 – EPEC<br>Obs: Esta tag não é preenchida no evento de manifestação |
