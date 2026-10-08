# 3.8 Validação das informações de controle da chamada ao Web Service

**Validações de controle da chamada ao Web Service**

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **C01** | Elemento mdfeCabecMsg inexistente no SOAP Header | Obrig. | 242 | Rej. |
| **C02** | Campo cUF inexistente no elemento mdfeCabecMsg do SOAP Header | Obrig. | 409 | Rej. |
| **C03** | Verificar se a UF informada no campo cUF é válida | Obrig. | 410 | Rej. |
| **C04** | Campo versaoDados inexistente no elemento mdfeCabecMsg do SOAP Header | Obrig. | 411 | Rej. |
| **C05** | Versão dos Dados não suportada | Obrig. | 239 | Rej. |

***Este grupo de validações deverá ser descontinuado em futura versão do MDF-e***

<!-- p.18 -->

A informação da versão do leiaute do lote e a UF de origem são informados no elemento `mdfeCabecMsg` do SOAP Header.

A aplicação deverá validar a UF solicitante (`cUF`) e versão da mensagem (`versaoDados`), rejeitando a solicitação recebida em caso de informações inexistentes ou inválidas.
