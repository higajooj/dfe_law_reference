<!-- p.16 -->

# 4.7 Fluxo para homologação – Consultar Alíquota Efetiva do Trecho

```mermaid
flowchart TD
    I(["Início"]) --> A["Consultar alíquota efetiva do trecho"]
    A --> B["Enviar consulta"]
    B --> C{"Alíquota encontrada?"}
    C -- "Sim" --> D["Resultado da consulta"]
    D --> E(["Fim"])
    C -- "Não" --> F["Não encontrada"]
    F --> E
```

*Para efetuar a consulta é necessário existir o cadastro do contrato / trecho para o CNPJ utilizado no perfil.*

*Informar contrato, trecho de concessão e data de referência (data em que está vigente).*
